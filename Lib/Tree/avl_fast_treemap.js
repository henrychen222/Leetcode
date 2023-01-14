/*
12/09/22 night
https://github.com/codejedi365/avl-treemap
*/

class LeafNode {
    constructor(key, val, parent = null, left = null, right = null) {
        this.key = key;
        this.val = val;
        this.parent = parent;
        this.left = left;
        this.right = right;
    }
    get height() {
        if (this.left === null && this.right === null) return 0;
        let L = this.left === null ? 0 : this.left.height;
        let R = this.right === null ? 0 : this.right.height;
        return 1 + Math.max(L, R);
    }
    setParent(node) {
        this.parent = !node ? null : node;
        return this;
    }
    strip() {
        this.parent = null;
        this.left = null;
        this.right = null;
        return this;
    }
    clone() {
        return new LeafNode(this.key, this.val, this.parent, this.left, this.right);
    }
    entry() {
        return [this.key, this.val];
    }
}

class TreeMap {
    constructor() {
        this.root = null;
    }
    firstKey() {
        const nodeCapture = this.dfTraversal((node, captureArray) => { captureArray.push(node.key); });
        return nodeCapture.length > 0 ? nodeCapture[0] : false;
    }
    lastKey() {
        const nodeCapture = this.dfTraversal((node, captureArray) => { captureArray.push(node.key); });
        return nodeCapture.length > 0 ? nodeCapture[nodeCapture.length - 1] : false;
    }
    get(key) {
        const testNode = new LeafNode(key, null);
        const n = !this.root ? null : this.binarySearch(this.compare, this.root, testNode);
        return n != null ? n.val : null;
    }
    has(key) {
        const testNode = new LeafNode(key, null);
        const n = !this.root ? null : this.binarySearch(this.compare, this.root, testNode);
        return n != null;
    }
    keys() {
        return this.dfsKeys();
        // return this.bfsKeys();
    }
    dfsKeys() {
        return this.dfTraversal((node, captureArray) => { captureArray.push(node.key); });
    }
    bfsKeys() {
        return this.bfTraversal((node, captureArray) => { captureArray.push(node.key); });
    }
    values() {
        return this.dfsValues();
        // return this.bfsValues();
    }
    dfsValues() {
        return this.dfTraversal((node, captureArray) => { captureArray.push(node.val); });
    }
    bfsValues() {
        return this.bfTraversal((node, captureArray) => { captureArray.push(node.val); });
    }
    allEntries() {
        return this.dfsEntries();
        // return this.bfsEntries();
    }
    dfsEntries() {
        return this.dfTraversal((node, captureArray) => { captureArray.push([node.key, node.val]); });
    }
    bfsEntries() {
        return this.bfTraversal((node, captureArray) => { captureArray.push([node.key, node.val]); });
    }
    size() {
        return this.keys().length;
    }
    height() {
        return !this.root ? 0 : this.root.height + 1;
    }
    binarySearch(compareFn, head, node) {
        if (!head) return null;
        const comparison = compareFn(head, node);
        switch (comparison) {
            case -1:
                return this.binarySearch(compareFn, head.left, node);
            case 1:
                return this.binarySearch(compareFn, head.right, node);
            default:
                return head;
        }
    }
    insert(tree, leaf, skipBalance) {
        if (!tree.root) {
            this.setRoot(tree, leaf);
            return true;
        }
        return this.compareNInsert(tree, tree.root, leaf);
    }
    compareNInsert(tmap, head, floatingLeaf, skipBalance) {
        const node = head;
        const comparison = tmap.compare(node, floatingLeaf);
        if (comparison > 0) {
            if (node.right !== null) {
                this.compareNInsert(tmap, node.right, floatingLeaf, skipBalance);
            } else {
                node.right = floatingLeaf;
                floatingLeaf.setParent(node);
            }
        } else if (comparison < 0) {
            if (node.left !== null) {
                this.compareNInsert(tmap, node.left, floatingLeaf, skipBalance);
            } else {
                node.left = floatingLeaf;
                floatingLeaf.setParent(node);
            }
        } else {
            node.val = floatingLeaf.val;
            return false;
        }
        return skipBalance ? false : this.balanceTree(tmap, node);
    }
    set(key, value) {
        const newNode = new LeafNode(key, value);
        this.insert(this, newNode, false);
        return this;
    }
    merge(tree) {
        return Object.getPrototypeOf(tree) === Object.getPrototypeOf(this) ? this.insertSubtree(this, tree) : false;
    }
    remove(key) {
        const testNode = new LeafNode(key, null);
        const n = this.binarySearch(this.compare, this.root, testNode);
        if (n === null) return false;
        while (n.left !== null || n.right !== null) {
            const isLeftSideHeavier = this.calcBalanceFactor(n) > 0;
            if (isLeftSideHeavier) {
                this.rotationRight(this, n, true);
            } else {
                this.rotationLeft(this, n, true);
            }
        }
        let { parent } = n;
        if (parent === null) {
            this.root = null;
            return n.val;
        }
        if (parent.left === n) {
            parent.left = null;
        } else {
            parent.right = null;
        }
        if (parent.height > 0) this.balanceTree(this, parent);
        if (parent.parent == null) {
            this.setRoot(this, parent);
        } else {
            while (parent.parent != null) {
                parent = parent.parent;
                this.balanceTree(this, parent);
            }
        }
        return n.val;
    }
    removeAll() {
        return this.setRoot(this, null);
    }
    dfTraversal(nodeHandlerFn) {
        const visited = [];
        if (typeof nodeHandlerFn !== "function" || this.root === null) return visited;
        function depthFirstDig(tree, head) {
            if (head.left == null && head.right == null) {
                nodeHandlerFn.call(tree, head, visited);
            } else {
                if (head.left != null) depthFirstDig(tree, head.left);
                nodeHandlerFn.call(tree, head, visited);
                if (head.right != null) depthFirstDig(tree, head.right);
            }
        }
        depthFirstDig(this, this.root);
        return visited;
    }
    bfTraversal(nodeHandlerFn) {
        const visited = [];
        if (typeof nodeHandlerFn !== "function" || this.root == null) return visited;
        function breadthFirstDig(tree, head, depth) {
            if (depth === undefined) {
                let startDepth = 0;
                while (startDepth <= head.height) breadthFirstDig(tree, head, startDepth++);
            } else if (depth === 0) {
                nodeHandlerFn.call(tree, head, visited, depth);
            } else {
                if (head.left != null) breadthFirstDig(tree, head.left, depth - 1);
                if (head.right != null) breadthFirstDig(tree, head.right, depth - 1);
            }
        }
        breadthFirstDig(this, this.root);
        return visited;
    }
    sliceTree(start) {
        const newTree = this.nakedClone(this);
        return this.setRoot(newTree, start);
    }
    subtree(start) {
        const subRoot = this.binarySearch(this.compare, this.root, new LeafNode(start, null));
        return subRoot === null ? false : this.sliceTree(subRoot);
    }
    setRoot(tree, newRoot) {
        const t = tree;
        t.root = !newRoot ? null : newRoot.setParent();
        return tree;
    }
    calcBalanceFactor(node) {
        return !node ? 0 : ((head) => {
            const leftSubTreeHeight = head.left != null ? head.left.height + 1 : 0;
            const rightSubTreeHeight = head.right != null ? head.right.height + 1 : 0;
            return leftSubTreeHeight - rightSubTreeHeight;
        })(node);
    }
    balanceTree(tree, head) {
        const node = !head ? tree.root : head;
        const unbalancedFactor = this.calcBalanceFactor(node);
        if ((-1 <= unbalancedFactor && unbalancedFactor <= 1) || node === null) return false;
        if (unbalancedFactor === 2) {
            const isChildLeftDominant = this.calcBalanceFactor(node.left) === 1;
            if (isChildLeftDominant) {
                this.rotationRight(tree, node);
            } else {
                node.left = this.rotationLeft(tree, node.left);
                this.rotationRight(tree, node);
            }
        } else if (unbalancedFactor === -2) {
            const isChildLeftDominant = this.calcBalanceFactor(node.right) === 1;
            if (isChildLeftDominant) {
                node.right = this.rotationRight(tree, node.right);
                this.rotationLeft(tree, node);
            } else {
                this.rotationLeft(tree, node);
            }
        }
        return true;
    }
    rotate(tree, descendingNode, risingNode, skipBalance) {
        const oldHead = descendingNode;
        const parentNode = oldHead.parent;
        const newHeadTree = tree.sliceTree(risingNode);
        const isLeftSideRising = oldHead.left === risingNode;
        if (isLeftSideRising) {
            oldHead.left = null;
        } else {
            oldHead.right = null;
        }
        const oldHeadSubtree = tree.sliceTree(oldHead);
        if (!skipBalance) this.balanceTree(oldHeadSubtree);
        this.insert(newHeadTree, oldHeadSubtree.root, skipBalance);
        const newHeadNode = newHeadTree.root.setParent(parentNode);
        if (parentNode !== null) {
            const isLeftSideDescendent = parentNode.left === oldHead;
            if (isLeftSideDescendent) {
                parentNode.left = newHeadNode;
            } else {
                parentNode.right = newHeadNode;
            }
        } else {
            this.setRoot(tree, newHeadNode);
        }
        return newHeadNode;
    }
    rotationLeft(tree, head, skipBalance = false) {
        if (!head.right) throw new Error("RotateLeft() should not be happening if right child is null.");
        return this.rotate(tree, head, head.right, skipBalance);
    }
    rotationRight(tree, head, skipBalance = false) {
        if (!head.left) throw new Error("RotateRight() should not be happening if left child is null.");
        return this.rotate(tree, head, head.left, skipBalance);
    }
    insertSubtree(targetTree, srcTree) {
        srcTree.bfTraversal((currentNode) => {
            const detachedLeaf = new LeafNode(currentNode.key, currentNode.val);
            this.insert(targetTree, detachedLeaf, false);
        });
        return targetTree;
    }
    compare(x_node, y_node) {
        if (!(Number.isNaN(x_node.key) || Number.isNaN(y_node.key))) {
            return x_node.key > y_node.key ? -1 : x_node.key < y_node.key ? 1 : 0;
        }
        if (typeof x_node.key === "string" || x_node.key instanceof String) {
            return x_node.key > y_node.key ? -1 : x_node.key < y_node.key ? 1 : 0;
        }
        return 1;
    }
    nakedClone(tree) {
        const clone = Object.create(Object.getPrototypeOf(tree));
        const keys = Object.getOwnPropertyNames(tree);
        keys.forEach((attr) => {
            if (typeof tree[attr] === "function") {
                const fnDef = Object.assign({}, Object.getOwnPropertyDescriptor(tree, attr));
                Object.defineProperty(clone, attr, fnDef);
            }
        });
        clone.defaultAlgorithm = tree.defaultAlgorithm;
        return clone;
    }
    show() {
        let m = new Map();
        this.dfTraversal(curNode => {
            let [k, v] = curNode.entry();
            m.set(k, v);
        })
        return m;
    }
}

class TreeSet {
    constructor() {
        this.m = new TreeMap();
    }
    add(v) {
        this.m.set(v, null);
    }
    first() {
        return this.size() == 0 ? null : this.m.firstKey();
    }
    last() {
        return this.size() == 0 ? null : this.m.lastKey();
    }
    has(k) {
        return this.m.has(k);
    }
    show() {
        return this.m.keys();
    }
    remove(k) {
        return this.m.remove(k);
    }
    size() {
        return this.m.size();
    }
}


const pr = console.log;

const main = () => {
    let ts = new TreeMap();
    ts.set(3, 1);
    ts.set(100, 2)
    ts.set(-1, 3)
    ts.set(76, 4)
    ts.set(7, 5);
    pr(ts.firstKey(), ts.get(ts.firstKey())) // -1 1
    pr(ts.lastKey(), ts.get(ts.lastKey())) // 100 2
    pr(ts.has(3)) // true
    pr(ts.has(0)) // false
    pr(ts.show())

    const ts_with_comparator = new TreeMap();
    ts_with_comparator.compare = ((x, y) => x.key > y.key ? 1 : x.key < y.key ? -1 : 0); // descending order
    [[1, 0], [2, 0], [3, 0]].forEach(([key, data]) => {
        ts_with_comparator.set(key, data);
    });
    pr(ts_with_comparator.dfsKeys()); // [ 3, 2, 1 ]
}

main()