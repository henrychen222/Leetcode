/**
 * 04/03//22 night
 * https://leetcode.com/problems/sequentially-ordinal-rank-tracker/discuss/1623314/Javascript-AVL-tree
 * https://leetcode.com/problems/closest-room/solutions/1190160/javascript-avl-treeset-self-balancing-bst-solution/
 * 
 * https://www.geeksforgeeks.org/avl-tree-set-1-insertion/
 * https://www.geeksforgeeks.org/avl-tree-set-2-deletion/
 */

class Node {
    constructor(val, left = null, right = null, parent = null, bf = 0, height = 0) {
        this.val = val
        this.left = left, this.right = right, this.parent = parent
        this.bf = bf, this.height = height
        this.SubTreeNodes = 1
    }
}
class AVL {
    constructor() {
        this.nodeCount = 0
        this.root = null
        this.node = class {
            constructor(val, left = null, right = null, parent = null, bf = 0, height = 0) {
                this.val = val
                this.left = left, this.right = right, this.parent = parent
                this.bf = bf, this.height = height
                this.SubTreeNodes = 1
            }
        }
    }
    nodify(val) {
        return new this.node(val)
        // return new Node(val);
    }
    comparator = (node1, node2) => {
        if (node1.val[1] === node2.val[1]) {
            return node2.val[0] > node1.val[0] ? -1 : 1;
        }
        return Number(node2.val[1]) - Number(node1.val[1])
    }
    insert(node) {
        if (node === null) return false
        node = this.nodify(node)
        if (!this.contains(this.root, node)) {
            this.root = this.ins(this.root, node)
            this.nodeCount++
            return true
        }
        return false
    }
    remove(node) {
        if (node === null) return false
        node = this.nodify(node)
        if (this.contains(this.root, node)) {
            this.root = this.rem(this.root, node)
            this.nodeCount--
            return true
        }
        return false;
    }
    update(node) {
        let leftHeight = node.left !== null ? node.left.height : -1
        let rightHeight = node.right !== null ? node.right.height : -1
        node.height = Math.max(leftHeight, rightHeight) + 1
        node.bf = rightHeight - leftHeight
        node.SubTreeNodes = 1 + (node.left === null ? 0 : node.left.SubTreeNodes) + (node.right === null ? 0 : node.right.SubTreeNodes)
    }
    rebalance(node) {
        if (node.bf == -2) {
            return node.left.bf <= 0 ? this.LL(node) : this.LR(node)
        } else if (node.bf == 2) {
            return node.right.bf >= 0 ? this.RR(node) : this.RL(node);
        }
        return node
    }
    LL(node) {
        return this.rotateRight(node);
    }
    RR(node) {
        return this.rotateLeft(node);
    }
    LR(node) {
        node.left = this.rotateLeft(node.left)
        return this.rotateRight(node);
    }
    RL(node) {
        node.right = this.rotateRight(node.right)
        return this.rotateLeft(node);
    }
    rotateLeft(node) {
        let newParent = node.right
        node.right = newParent.left
        newParent.left = node
        this.update(node)
        this.update(newParent)
        return newParent
    }
    rotateRight(node) {
        let newParent = node.left
        node.left = newParent.right
        newParent.right = node
        this.update(node)
        this.update(newParent)
        return newParent
    }
    has(node) {
        node = this.nodify(node)
        return this.contains(this.root, node)
    }
    traversalASC() {
        let result = []
        let dfs = (node) => {
            if (!node) return
            dfs(node.left)
            result.push(node)
            dfs(node.right)
        }
        dfs(this.root)
        return result
    }
    findNextSmaller(node) {
        node = this.nodify(node)
        let cur = this.root,
            result = null
        while (cur !== null) {
            if (this.comparator(cur, node) < 0) {
                result = cur, cur = cur.right
            } else {
                cur = cur.left
            }
        }
        return result === null ? false : result;
    }
    findNextBigger(node) {
        node = this.nodify(node)
        let cur = this.root,
            result = null
        while (cur !== null) {
            if (this.comparator(cur, node) <= 0) {
                cur = cur.right
            } else {
                result = cur;
                cur = cur.left;
            }
        }
        return result === null ? false : result;
    }
    findKthNode(k) {
        return this.nodeCount < k ? null : this.findKth(this.root, k);
    }
    findKth(node, k) {
        let leftCount = node.left ? node.left.SubTreeNodes : 0
        if (leftCount + 1 === k) return node.val
        if (leftCount + 1 < k) return this.findKth(node.right, k - leftCount - 1)
        return this.findKth(node.left, k)
    }
    findMin(node) {
        return node.left ? this.findMin(node.left) : node;
    }
    findMax(node) {
        return node.right ? this.findMax(node.right) : node;
    }
    min() {
        return this.findMin(this.root).val
    }
    max() {
        return this.findMax(this.root).val
    }
    contains(node, val) {
        if (node === null) return false
        let compare = this.comparator(node, val)
        if (compare < 0) return this.contains(node.right, val)
        if (compare > 0) return this.contains(node.left, val)
        return true
    }
    ins(tree, value) {
        if (tree === null) return value
        // target is bigger? insert it to the left: else to the right
        if (this.comparator(tree, value) > 0) {
            tree.left = this.ins(tree.left, value)
        } else {
            tree.right = this.ins(tree.right, value)
        }
        this.update(tree)
        return this.rebalance(tree)
    }
    rem(node, elem) {
        if (node === null) return null
        let compare = this.comparator(elem, node)
        if (compare < 0) {
            node.left = this.rem(node.left, elem)
        } else if (compare > 0) {
            node.right = this.rem(node.right, elem)
        } else {
            if (node.left === null) {
                return node.right
            } else if (node.right === null) {
                return node.left
            } else {
                if (node.left.height > node.right.height) {
                    let successor = this.findMax(node.left)
                    node.val = successor.val
                    node.left = this.rem(node.left, successor)
                } else {
                    let successor = this.findMin(node.right)
                    node.val = successor.val
                    node.right = this.rem(node.right, successor)
                }
            }
        }
        this.update(node)
        return this.rebalance(node)
    }
    tree() {
        return this.root;
    }
    size() {
        return this.nodeCount;
    }
}

const printTree = (root) => { // level order bfs with null
    let q = [root],
        a = [];
    while (q.length) {
        let cur = q.shift();
        a.push(cur != null ? cur.val : null);
        if (cur != null) {
            q.push(cur.left);
            q.push(cur.right);
        }
    }
    while (a[a.length - 1] == null) a.pop();
    console.log(JSON.stringify(a));
};

const pr = console.log;

const main = () => {
    let avl = new AVL();
    let A = [2, 1, 4, 5, 9, 3, 6, 7]
    // let A = [3, 2, -1, 6, 5, 7, -2]; // unique
    for (const x of A) {
        pr(x, avl.size())
        avl.insert(x);
    }
    printTree(avl.tree());
    A.sort((x, y) => x - y);
    pr(A)
    pr(avl.min(), avl.max())
    pr(avl.findKthNode(1))
    pr(avl.findKthNode(2))
    pr(avl.findKthNode(3))
    pr(avl.findKthNode(4))
    pr(avl.findKthNode(5))
    pr(avl.findKthNode(6))

    printTree(avl.tree());

    pr(avl.findNextBigger(5).val)

    avl.remove(5);
    printTree(avl.tree());
    pr(avl.size())
};

main()