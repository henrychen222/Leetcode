/**
 * 01/09/22 afternoon  01/13/22 evening
 * 
 * reference: 
 * https://leetcode.com/problems/sliding-window-maximum/solutions/305890/python-avl-tree-o-n-k-logk/
 * https://favtutor.com/blogs/avl-tree-python
 * 
 * 01/15/22 night
 * https://www.quora.com/How-can-one-find-kth-ranked-element-in-a-balanced-binary-search-tree-which-has-duplicate-elements-in-sub-linear-time
 * https://www.geeksforgeeks.org/count-greater-nodes-in-avl-tree/
 */


/*
Hints:
AVL Tree is TreeMap, allow insert duplicates, each value occurence are saved in node.cnt

alternative 
(1) MultiSet/SplayTree
(2) TreeSet with Pairs comparator (x, i) make all element different
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
        this.tot++;
    }
    insertUtil(node, item) {
        if (node == null) { // find place to insert
            this.nodeCount++;
            return new AVLNode(item);
        } else if (this.cmp(item, node) < 0) {
            node.left = this.insertUtil(node.left, item);
        } else if (this.cmp(item, node) > 0) {
            node.right = this.insertUtil(node.right, item);
        } else {
            node.cnt++;
            return node;
        }
        this.update(node);
        return this.rebalanceAfterInsert(node, item);
    }
    remove(item) {
        let node = this.find(item);
        if (node == null) return false;
        this.root = this.removeUtil(this.root, item);
        this.tot--;
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
            if (node.cnt > 1) {
                node.cnt--;
                return node;
            } else {
                this.nodeCount--;
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
    findKthMap(k) {
        let res = this.findKthNodeMap(k);
        return res == null ? null : res.val;
    }
    findKthNodeMap(k) {
        return this.total() < k ? null : this.KthUtil(this.root, k);
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
        let d = this.show(), res = new Map();
        for (const x of d) res.set(x, this.count(x))
        return res;
    }
}

const pr = console.log;

/*
      5
     / \
    2   6
   / \   \
  -1  3   7
 /
-2
*/
const main = () => {
    // test scenario 1: unique value  AVL tree = treeset
    // let Atree = new AVLTree();
    // let A = [3, 2, -1, 6, 5, 7, -2];
    // for (const x of A) Atree.insert(x);
    // A.sort((x, y) => x - y);
    // pr(A, A.length, Atree.size()); // 7 7
    // pr("findKth", Atree.findKth(1), Atree.findKth(2), Atree.findKth(3), Atree.findKth(4), Atree.findKth(5)) // -2 -1 2 3 5
    // pr("RankOf", Atree.rankOf(3), Atree.rankOf(4), Atree.rankOf(5), Atree.rankOf(6)) // 3 4 4 5
    // pr(Atree.first(), Atree.last()) // -2 7
    // pr(Atree.higher(-2), Atree.higher(-1), Atree.higher(6), Atree.higher(7)); // -1 2 7 null
    // pr(Atree.lower(-2), Atree.lower(-1), Atree.lower(6), Atree.lower(7)); // null -2 5 6
    // pr(Atree.count(-2), Atree.count(7)) // 1 1
    // Atree.remove(-2);
    // pr(Atree.size()); // 6
    // Atree.remove(7);
    // pr(Atree.higher(6)); // null
    // pr(Atree.lower(-1)); // null
    // pr(Atree.size()) // 5
    // pr(Atree.first(), Atree.last()) // -1 6

    // test scenario 2: has duplicates  AVL tree = treemap
    let B = [3, 2, -1, 6, 5, 7, 7, -2, -2, -2];
    let Btree = new AVLTree();
    for (const x of B) Btree.insert(x);
    B.sort((x, y) => x - y);
    pr("B", B);
    pr(Btree.show(), Btree.showAll(), Btree.size(), Btree.total()); // 7 10
    pr(Btree.count(100), Btree.count(3), Btree.count(7), Btree.count(-2)) // 0 1 2 3
    pr(Btree.higher(-2), Btree.higher(-1), Btree.higher(6), Btree.higher(7)); // -1 2 7 null
    Btree.remove(-2);
    pr(Btree.show(), Btree.showAll(), Btree.size(), Btree.total()); // 7 9
    Btree.remove(7);
    pr(Btree.show(), Btree.showAll(), Btree.size(), Btree.total()) // 7 8
    pr(Btree.higher(6)); // 7
    pr(Btree.lower(-1)); // -2
    pr(Btree.first(), Btree.last()) // -2 7
    pr(Btree.count(100), Btree.count(3), Btree.count(7), Btree.count(-2)) // 0 1 1 2
    Btree.remove(-2);
    Btree.remove(-2);
    pr(Btree.show(), Btree.showAll(), Btree.size(), Btree.total()) // 6 6
    pr(Btree.first(), Btree.last()) // -1 7
    pr(Btree.count(100), Btree.count(3), Btree.count(7), Btree.count(-2)) // 0 1 1 0
};

const test = () => {
    let ts = new TreeSet();
    ts.add(2);
    pr(ts.size);
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

// test()