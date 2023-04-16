
/*
 * 01/18/23 night
 * https://leetcode.com/problems/minimize-deviation-in-array/
 */

class AVLNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.height = 1;
        this.cnt = 1;
        this.SubTreeNodes = 1;
    }
}

class AVLTree {
    constructor(comparator = null) {
        this.root = null;
        this.nodeCount = 0;
        this.tot = 0;
        this.comparator = comparator ? comparator : (x, y) => x - y;
    }
    cmp(x, y) { // compare nodes: x is inserted item
        if (x == null || y == null) return 0;
        if (this.valid(x)) x = new AVLNode(x);
        if (this.valid(y)) y = new AVLNode(y);
        if (Array.isArray(x.val) || Array.isArray(y.val)) {
            if (Array.isArray(x.val) && Array.isArray(y.val)) {
                return this.comparator(x.val, y.val);
            } else {
                return 0;
            }
        } else if (Number.isInteger(x.val) || Number.isInteger(y.val)) {
            if (Number.isInteger(x.val) && Number.isInteger(y.val)) {
                return this.comparator(x.val, y.val);
            } else {
                return 0;
            }
        } else if (this.isObject(x.val) || this.isObject(y.val)) {
            if (this.isObject(x.val) && this.isObject(y.val)) {
                return this.comparator(x.val, y.val);
            } else {
                return 0;
            }
        }
        return 0;
    }
    valid(x) {
        return Array.isArray(x) || Number.isInteger(x) || this.isObject(x);
    }
    isObject(x) {
        return typeof x === 'object' && !Array.isArray(x) && x !== null && !x.hasOwnProperty('SubTreeNodes'); // distinguish object with AVLNode object
    }
    getHeight(node) {
        return node != null ? node.height : 0;
    }
    getBalance(node) {
        return node != null ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }
    update(node) {
        let leftHeight = this.getHeight(node.left), rightHeight = this.getHeight(node.right);
        node.height = 1 + Math.max(leftHeight, rightHeight);
        node.SubTreeNodes = 1 + (node.left != null ? node.left.SubTreeNodes : 0) + (node.right != null ? node.right.SubTreeNodes : 0);
    }
    LR(z) {
        let y = z.right;
        let T2 = y.left;
        y.left = z;
        z.right = T2;
        this.update(z);
        this.update(y);
        return y;
    }
    RR(z) {
        let y = z.left;
        let T3 = y.right;
        y.right = z
        z.left = T3
        this.update(z);
        this.update(y);
        return y;
    }
    insert(item) {
        this.root = this.insertUtil(this.root, item);
    }
    insertUtil(node, item) {
        if (node == null) { // find place to insert
            this.nodeCount++;
            this.tot++;
            return new AVLNode(item);
        } else if (this.cmp(item, node) < 0) {
            node.left = this.insertUtil(node.left, item);
        } else if (this.cmp(item, node) > 0) {
            node.right = this.insertUtil(node.right, item);
        } else {
            node.cnt++;
            this.tot++;
            return node;
        }
        this.update(node);
        return this.rebalanceAfterInsert(node, item);
    }
    remove(item) {
        let node = this.find(item);
        if (node == null) return false;
        this.root = this.removeUtil(this.root, item);
        return true;
    }
    removeUtil(node, item) {
        if (node == null) {
            return node;
        } else if (this.cmp(item, node) < 0) {
            node.left = this.removeUtil(node.left, item);
        } else if (this.cmp(item, node) > 0) {
            node.right = this.removeUtil(node.right, item);
        } else { // find node
            if (node.cnt > 1) { // current node > 1, remove 1, tree size keep the same
                node.cnt--;
                this.tot--;
                return node;
            } else { // current node == 1, delete, tree size--
                this.nodeCount--;
                this.tot--;
            }
            // delete process
            if (node.left == null) {
                let tmp = node.right;
                node = null;
                return tmp;
            } else if (node.right == null) {
                let tmp = node.left;
                node = null;
                return tmp;
            }
            let tmp = this.findFirst(node.right);
            node.val = tmp.val;
            node.right = this.removeUtil(node.right, tmp.val);
        }
        if (node == null) return node;
        this.update(node);
        return this.rebalanceAfterDeletion(node, item);
    }
    rebalanceAfterInsert(node, item) {
        let bal = this.getBalance(node);
        if (bal > 1 && this.cmp(item, node.left) < 0) return this.RR(node);
        if (bal < -1 && this.cmp(item, node.right) > 0) return this.LR(node);
        if (bal > 1 && this.cmp(item, node.left) > 0) {
            node.left = this.LR(node.left);
            return this.RR(node);
        }
        if (bal < -1 && this.cmp(item, node.right) < 0) {
            node.right = this.RR(node.right);
            return this.LR(node);
        }
        return node;
    }
    rebalanceAfterDeletion(node) {
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
    find(item) {
        return this.findFirstOf(item);
    }
    findFirstOf(item) {
        let node = this.root, res = null;
        while (node != null) {
            if (this.cmp(item, node) < 0) {
                node = node.left;
            } else if (this.cmp(item, node) > 0) {
                node = node.right;
            } else {
                res = node;
                node = node.left;
            }
        }
        return res;
    }
    higher(item) {// > upper_bound
        let node = this.findSuccessorOf(item);
        return node == null ? null : (node.val);
    }
    findSuccessorOf(item) {
        let node = this.root, res = null;
        while (node != null) {
            if (this.cmp(item, node) < 0) {
                res = node;
                node = node.left;
            } else {
                node = node.right;
            }
        }
        return res;
    }
    lower(item) { // < 
        let node = this.findPrecursorOf(item);
        return node == null ? null : (node.val);
    }
    findPrecursorOf(item) {
        let node = this.root, res = null;
        while (node != null) {
            if (this.cmp(item, node) > 0) {
                res = node;
                node = node.right;
            } else {
                node = node.left;
            }
        }
        return res;
    }
    findKth(k) { // (1-indexed)  unique
        let res = this.findKthNode(k);
        return res == null ? null : res.val;
    }
    findKthNode(k) {
        return this.size() < k ? null : this.KthUtil(this.root, k);
    }
    KthUtil(node, k) {
        let leftCount = node.left ? node.left.SubTreeNodes : 0;
        if (leftCount + 1 === k) return node;
        if (leftCount + 1 < k) return this.KthUtil(node.right, k - leftCount - 1);
        return this.KthUtil(node.left, k);
    }
    rankOf(item) { // unique value treeset    total elements in tree with val < item
        let x = this.findPrecursorOf(item);
        return x == null ? 0 : this.findRankOf(x, this.root) + 1;
    }
    findRankOf(item, node) {
        let rank = 0;
        while (node != null) {
            let leftSubtreeNodes = node.left != null ? node.left.SubTreeNodes : 0;
            if (this.cmp(item, node) < 0) {
                node = node.left;
            } else if (this.cmp(item, node) > 0) {
                rank += leftSubtreeNodes + 1;
                node = node.right;
            } else {
                return rank + leftSubtreeNodes;
            }
        }
        return 0;
    }
    has(item) {
        return this.count(item) > 0;
    }
    count(item) {
        let node = this.find(item);
        return node == null ? 0 : node.cnt;
    }
    first() {
        let node = this.findFirst(this.root);
        return node == null ? null : node.val;
    }
    last() {
        let node = this.findLast(this.root);
        return node == null ? null : node.val;
    }
    poll() {
        let res = this.first();
        this.remove(res);
        return res;
    }
    pollLast() {
        let res = this.last();
        this.remove(res);
        return res;
    }
    findFirst(node) {
        return node == null || node.left == null ? node : this.findFirst(node.left);
    }
    findLast(node) {
        return node == null || node.right == null ? node : this.findLast(node.right);
    }
    size() {
        return this.nodeCount;
    }
    total() {
        return this.tot;
    }
    isEmpty() {
        return this.root == null;
    }
    show() { // inorder
        let res = [];
        const dfs = (x) => {
            if (x == null) return;
            dfs(x.left);
            res.push(x.val);
            dfs(x.right);
        };
        dfs(this.root);
        return res;
    }
    showAll() {
        let d = this.show(), res = [];
        for (const x of d) {
            for (let i = 0; i < this.count(x); i++) res.push(x);
        }
        return res;
    }
}

const pr = console.log;

// Accepted --- 1651ms 100%
// reference: https://leetcode.com/problems/minimize-deviation-in-array/solutions/955262/c-intuitions-and-flip/
/*

greedy: 
even: divide until it is odd. Never increase
odd: double to even


*/
const minimumDeviation = (a) => {
    let tree = new AVLTree((x, y) => y - x), min = Number.MAX_SAFE_INTEGER, res = Number.MAX_SAFE_INTEGER;
    for (const x of a) {
        let v = x % 2 != 0 ? x * 2 : x; // double odd numbers and put all numbers into a max heap/reversed treemap order
        tree.insert(v);
        min = Math.min(min, v);
    }
    while (tree.first() % 2 == 0) { // while treemap max is even, remove it, divide, and put back to the treemap
        let cur = tree.poll();
        // pr('cur', cur, 'min', min)
        res = Math.min(res, cur - min); // track the minimum difference between max and min
        cur >>= 1;
        min = Math.min(min, cur);
        tree.insert(cur);
    }
    // pr(res, tree.first(), min)
    return Math.min(res, tree.first() - min);
};

const main = () => {
    let a = [1, 2, 3, 4];
    let a2 = [4, 1, 5, 20, 3];
    let a3 = [2, 10, 8]
    pr(minimumDeviation(a))
    pr(minimumDeviation(a2))
    pr(minimumDeviation(a3))
};

main()