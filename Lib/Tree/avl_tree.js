/**
 * 01/09/22 afternoon  01/13/22 evening
 * 
 * reference: 
 * https://leetcode.com/problems/sliding-window-maximum/solutions/305890/python-avl-tree-o-n-k-logk/
 * https://favtutor.com/blogs/avl-tree-python
 * 
 * example problem:
 * https://leetcode.com/problems/sliding-window-maximum/
 * https://leetcode.com/problems/dinner-plate-stacks/
 */

class AVLNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.height = 1;
        this.cnt = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }
    getHeight(node) {
        return node != null ? node.height : 0;
    }
    getBalance(node) {
        return node != null ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }
    LR(z) {
        let y = z.right;
        let T2 = y.left;
        y.left = z;
        z.right = T2;
        z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
        return y;
    }
    RR(z) {
        let y = z.left;
        let T3 = y.right;
        y.right = z
        z.left = T3
        z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
        return y;
    }
    insert(v) {
        this.root = this.insertUtil(this.root, v);
    }
    insertUtil(node, v) {
        if (node == null) {
            return new AVLNode(v);
        } else if (v < node.val) {
            node.left = this.insertUtil(node.left, v);
        } else if (v > node.val) {
            node.right = this.insertUtil(node.right, v);
        } else {
            node.cnt++;
            return node;
        }
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        let bal = this.getBalance(node);
        if (bal > 1 && v < node.left.val) return this.RR(node);
        if (bal > 1 && v > node.left.val) {
            node.left = this.LR(node.left);
            return this.RR(node);
        }
        if (bal < -1 && v > node.right.val) return this.LR(node);
        if (bal < -1 && v < node.right.val) {
            node.right = this.RR(node.right);
            return this.LR(node);
        }
        return node;
    }
    remove(v) {
        this.root = this.removeUtil(this.root, v);
    }
    removeUtil(node, v) {
        if (node == null) {
            return node;
        } else if (v < node.val) {
            node.left = this.removeUtil(node.left, v);
        } else if (v > node.val) {
            node.right = this.removeUtil(node.right, v);
        } else {
            if (node.cnt > 1) {
                node.cnt--;
                return node;
            }
            if (node.left == null) {
                let tmp = node.right;
                node = null;
                return tmp;
            } else if (node.right == null) {
                let tmp = node.left;
                node = null;
                return tmp;
            }
            let tmp = this.findMin(node.right);
            node.val = tmp.val;
            node.right = this.removeUtil(node.right, tmp.val);
        }
        if (node == null) return node;
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        let bal = this.getBalance(node);
        if (bal > 1 && this.getBalance(node.left) >= 0) return this.RR(node);
        if (bal < -1 && this.getBalance(node.right) <= 0) return this.LR(node);
        if (bal > 1 && this.getBalance(node.left) < 0) {
            node.left = this.LR(node.left);
            return this.RR(node);
        }
        if (bal < -1 && this.getBalance(node.right) > 0) {
            node.right = this.RR(node.right);
            return this.LR(node);
        }
        return node;
    }
    maxx() {
        let node = this.findMax(this.root);
        return node == null ? null : node.val;
    }
    minx() {
        let node = this.findMin(this.root);
        return node == null ? null : node.val;
    }
    findMin(node) {
        return node == null || node.left == null ? node : this.findMin(node.left);
    }
    findMax(node) {
        return node == null || node.right == null ? node : this.findMax(node.right);
    }
}

function TreeSet() {
    let tree = new AVLTree(), se = new Set();
    return { add, first, last, rem, size, show}
    function add(v) {
        if (!se.has(v)) { // insert duplicates will cause issue
            tree.insert(v);
            se.add(v);
        }
    }
    function first() {
        return tree.minx();
    }
    function last() {
        return tree.maxx();
    }
    function rem(v) {
        tree.remove(v);
        se.delete(v);
    }
    function size() {
        return se.size;
    }
    function show() {
        return [...se].sort((x, y) => x - y);
    }
}

const pr = console.log;

const main = () => {
    let tree = new AVLTree();
    let A = [3, 2, -1, 6, 5, 7, -2]; // unique
    for (const x of A) tree.insert(x);
    A.sort((x, y) => x - y);
    pr(A)
    pr(tree.minx(), tree.maxx())
};

const test = () => {
    let ts = new TreeSet();
    ts.add(2);
    ts.add(1);
    ts.add(5);
    ts.add(1);
    ts.add(6);
    pr(ts.first(), ts.last()) // 1 6
    ts.rem(6);
    pr(ts.first(), ts.last()) // 1 5
    ts.rem(5);
    pr(ts.first(), ts.last()) // 1 2 
    ts.rem(1);
    pr(ts.first(), ts.last()) // 2 2
}

main()

pr("")

test()