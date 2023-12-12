/*
 * 08/26/23 evening
 * https://leetcode.com/contest/weekly-contest-360/problems/minimum-operations-to-form-subsequence-with-target-sum/
 */

const pr = console.log;

class SplayNode {
    constructor(value) {
        this.parent = null;
        this.left = null;
        this.right = null;
        this.val = value;
        this.sum = value;
        this.sz = 1;
    }
    update() {
        this.sz = (this.left != null ? this.left.sz : 0) + (this.right != null ? this.right.sz : 0) + 1;
        this.sum = (this.left != null ? this.left.sum : 0) + (this.right != null ? this.right.sum : 0) + this.val;
    }
    isLeft() {
        return this.parent != null && this.parent.left == this;
    }
    isRight() {
        return this.parent != null && this.parent.right == this;
    }
    isRoot(guard = null) {
        return this.parent == guard;
    }
}

// MultiSet
class SplayTree {
    constructor() {
        this.root = null;
        this.cmp = (x, y) => x >= y ? 0 : 1;
    }
    zig(x) { // right rotation
        let y = x.parent;
        if (x.right != null) x.right.parent = y;
        y.left = x.right;
        x.right = y;
        if (y.isLeft()) {
            y.parent.left = x;
        } else if (y.isRight()) {
            y.parent.right = x;
        }
        x.parent = y.parent;
        y.parent = x;
        y.update();
        x.update();
    }
    zag(x) { // left rotation
        let y = x.parent;
        if (x.left != null) x.left.parent = y;
        y.right = x.left;
        x.left = y;
        if (y.isLeft()) {
            y.parent.left = x;
        } else if (y.isRight()) {
            y.parent.right = x;
        }
        x.parent = y.parent;
        y.parent = x;
        y.update();
        x.update();
    }
    zigzig(x) { // RR
        this.zig(x.parent);
        this.zig(x);
    }
    zigzag(x) { // RL
        this.zig(x);
        this.zag(x);
    }
    zagzag(x) { // LL
        this.zag(x.parent);
        this.zag(x);
    }
    zagzig(x) { // LR
        this.zag(x);
        this.zig(x);
    }
    splay(node, guard = null) { // splay node under guard, default splay to root
        while (!node.isRoot(guard)) {
            if (node.parent.isRoot(guard)) {
                if (node.isLeft()) {
                    this.zig(node);
                } else {
                    this.zag(node);
                }
            } else {
                if (node.parent.isLeft()) {
                    if (node.isLeft()) {
                        this.zigzig(node);
                    } else {
                        this.zagzig(node);
                    }
                } else {
                    if (node.isRight()) {
                        this.zagzag(node);
                    } else {
                        this.zigzag(node);
                    }
                }
            }
        }
        if (guard == null) this.root = node;
    }
    LastNode(x) {
        this.splay(x);
        let node = x.left;
        if (node == null) return null;
        while (node.right != null) node = node.right;
        this.splay(node);
        return node;
    }
    NextNode(x) {
        this.splay(x);
        let node = x.right;
        if (node == null) return null;
        while (node.left != null) node = node.left;
        this.splay(node);
        return node;
    }
    find(value) {
        return this.findFirstOf(value);
    }
    findFirstOf(value) {
        let node = this.root, res = null, last_visited = null;
        while (node != null) {
            last_visited = node;
            if (this.cmp(value, node.val)) {
                node = node.left;
            } else if (this.cmp(node.val, value)) {
                node = node.right;
            } else {
                res = node;
                node = node.left;
            }
        }
        if (last_visited != null) this.splay(last_visited);
        return res;
    }
    findLastOf(value) {
        let node = this.root, res = null, last_visited = null;
        while (node != null) {
            last_visited = node;
            if (this.cmp(value, node.val)) {
                node = node.left;
            } else if (this.cmp(node.val, value)) {
                node = node.right;
            } else {
                res = node;
                node = node.right;
            }
        }
        if (last_visited != null) this.splay(last_visited);
        return res;
    }
    findRankOf(node) {
        this.splay(node);
        return node.left == null ? 0 : node.left.sz;
    }
    findSuccessorOf(value) {
        let node = this.root, res = null, last_visited = null;
        while (node != null) {
            last_visited = node;
            if (this.cmp(value, node.val)) {
                res = node;
                node = node.left;
            } else {
                node = node.right;
            }
        }
        if (last_visited != null) this.splay(last_visited);
        return res;
    }
    findPrecursorOf(value) {
        let node = this.root, res = null, last_visited = null;
        while (node != null) {
            last_visited = node;
            if (this.cmp(node.val, value)) {
                res = node;
                node = node.right;
            } else {
                node = node.left;
            }
        }
        if (last_visited != null) this.splay(last_visited);
        return res;
    }
    findKthNode(rank) {
        if (rank < 0 || rank >= this.size()) return null;
        let node = this.root;
        while (node != null) {
            let leftsize = node.left == null ? 0 : node.left.sz;
            if (leftsize == rank) break;
            if (leftsize > rank) {
                node = node.left;
            } else {
                rank -= leftsize + 1;
                node = node.right;
            }
        }
        this.splay(node);
        return node;
    }
    make(value) {
        return new SplayNode(value);
    }
    removeNode(node) {
        node = null;
    }

    // -------------------------------- Public Usage --------------------------------------
    insert(value) { // allow duplicates  LST.set()
        if (this.root == null) {
            this.root = this.make(value);
            return this.root;
        }
        let node = this.root;
        while (node != null) {
            if (this.cmp(value, node.val)) {
                if (node.left == null) {
                    node.left = this.make(value);
                    node.left.parent = node;
                    node = node.left;
                    break;
                }
                node = node.left;
            } else {
                if (node.right == null) {
                    node.right = this.make(value);
                    node.right.parent = node;
                    node = node.right;
                    break;
                }
                node = node.right;
            }
        }
        this.splay(node);
        return node;
    }
    remove(value) { // remove one node, not all   LST.unset()
        let node = this.find(value);
        if (node == null) return false;
        this.splay(node);
        if (node.left == null) {
            this.root = node.right;
            if (node.right != null) node.right.parent = null;
            this.removeNode(node);
            return true;
        }
        if (node.right == null) {
            this.root = node.left;
            if (node.left != null) node.left.parent = null;
            this.removeNode(node);
            return true;
        }
        let last_node = this.LastNode(node);
        let next_node = this.NextNode(node);
        this.splay(last_node);
        this.splay(next_node, last_node);
        this.removeNode(next_node.left);
        next_node.left = null;
        next_node.update();
        last_node.update();
        return true;
    }
    has(value) { // LST.get()
        return this.count(value) > 0;
    }
    count(value) {
        let x = this.findFirstOf(value);
        if (x == null) return 0;
        let rank_x = this.findRankOf(x);
        let y = this.findLastOf(value);
        let rank_y = this.findRankOf(y);
        return rank_y - rank_x + 1;
    }
    rankOf(value) { // The number of elements strictly less than value
        let x = this.findPrecursorOf(value);
        return x == null ? 0 : this.findRankOf(x) + 1;
    }
    findKth(rank) { // (0-indexed)
        let x = this.findKthNode(rank);
        return x == null ? null : (x.val);
    }
    higher(value) { // > upper_bound()  LST.next(value)
        let node = this.findSuccessorOf(value);
        return node == null ? null : (node.val);
    }
    lower(value) { // <  LST.prev(value - 1)
        let node = this.findPrecursorOf(value);
        return node == null ? null : (node.val);
    }
    ceiling(value) { // >=
        return this.has(value) ? value : this.higher(value);
    }
    floor(value) { // <= 
        return this.has(value) ? value : this.lower(value);
    }
    first() {
        return this.findKth(0);
    }
    last() {
        return this.findKth(this.size() - 1);
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
    size() {
        return this.root == null ? 0 : this.root.sz;
    }
    isEmpty() {
        return this.root == null;
    }
    show() {
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
}

const N = 32;
const checkIthBit = (x, i) => x & (1 << i);

const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);
const removeOneOrManyMap = (m, x, cnt = 1) => { let occ = m.get(x); occ > cnt ? m.set(x, occ - cnt) : m.delete(x); };
const minOperations = (a, t) => {
    let sum = 0, smaller = 0, m = new Map(), res = 0;
    a.map(x => {
        sum += x;
        addOneOrManyMap(m, x);
    });
    if (t > sum) return -1;
    for (let i = 0; i < N; i++) {
        let v = 1 << i;
        smaller += (m.get(v) || 0) << i;
        if (checkIthBit(t, i)) {
            if (smaller >= v) {
                smaller -= v;
            } else {
                for (let j = i + 1; j < N; j++) {
                    let vj = 1 << j;
                    if (m.has(vj)) {
                        removeOneOrManyMap(m, vj);
                        smaller += vj;
                        smaller -= v;
                        res += j - i;
                        break;
                    }
                }
            }
        }
    }
    return res;
};

const minOperations2 = (a, t) => {
    let sum = 0, smaller = 0, tree = new SplayTree(), res = 0;
    a.map(x => {
        sum += x;
        tree.insert(x);
    });
    if (t > sum) return -1;
    // smaller: 记录所有更小的次幂的数的和
    for (let i = 0; i < N; i++) {
        let v = 1 << i;
        // 先加上当前次幂的数值
        smaller += tree.count(v) << i;
        if (checkIthBit(t, i)) {
            if (smaller >= v) { // 如果更小的数之和是大于当前要表示的比特位，那么不需要进行操作
                smaller -= v;
            } else { // 否则寻找最小的更大的 2 的次幂
                for (let j = i + 1; j < N; j++) {
                    let vj = 1 << j;
                    if (tree.has(vj)) {
                        tree.remove(vj);
                        smaller += vj;
                        smaller -= v;
                        res += j - i;
                        break;
                    }
                }
            }
        }
    }
    return res;
};

///////////////////////////////////////////////////////////////////
// Wrong
const minOperations1 = (a, t) => {
    let vals = new Set(powerOf2Sum(t).map(p => 1 << p).reverse()), tree = new SplayTree(), res = 0;
    a.map(x => tree.insert(x));
    pr(vals)
    for (const v of vals) {
        pr(tree.show(), "res", res)
        if (tree.has(v)) {
            // vals.delete(v);
            tree.remove(v);
        } else {
            let max = tree.last();
            if (max < v) return -1;
            let cur;
            while (!tree.has(v)) {
                cur = tree.ceiling(v);
                if (cur == 1) break;
                cur >>= 1;
                tree.insert(cur);
                tree.insert(cur);
                res++;
            }
        }
    }
    // pr(tree.show())
    return res;
};

const powerOf2Sum = (x) => {
    let v = [], res = [];
    while (x > 0) {
        v.push(x % 2);
        x >>= 1;
    }
    for (let i = 0; i < v.length; i++) {
        if (v[i] == 1) res.push(i);
    }
    return res;
};

const main = () => {
    let a = [1, 2, 8], t = 7;
    let a2 = [1, 32, 1, 2], t2 = 12;
    let a3 = [1, 32, 1], t3 = 35;
    pr(minOperations(a, t))
    pr(minOperations(a2, t2))
    pr(minOperations(a3, t3))
};


main()