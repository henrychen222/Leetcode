// 05/29/22 night  finished 07/02/23 use splaytree to replace LST
// https://leetcode.com/contest/weekly-contest-295/problems/steps-to-make-array-non-decreasing/

const pr = console.log;


const numberOfLeadingZeros = (x, bit) => x < 0 ? 0 : bit - x.toString(2).length;
const numberOfTrailingZeros = (x, bit) => { let s = x.toString(2), i = s.lastIndexOf('1'); return i == -1 ? bit : s.length - i - 1; };

function FastSet(n) {
    let g, bit = 63;
    initialize();
    return { setRange, unsetRange, set, unset, get, toggle, prev, next, show }
    function initialize() {
        let d = 1;
        for (let m = n; m > 1; m >>= 6, d++);
        g = Array(d);
        for (let i = 0, m = n >> 6; i < d; i++, m >>= 6) {
            g[i] = Array(m + 1).fill(0);
            // pr("g", g);
        }
        // pr("g", g);
    }
    function setRange(r) {
        for (let i = 0; i < g.length; i++, r = r + bit >> 6) {
            for (let j = 0; j < r >> 6; j++) g[i][j] = -1;
            if (r & bit) g[i][r >> 6] |= (1 << r) - 1;
        }
    }
    function unsetRange(r) {
        if (r >= 0) {
            for (let i = 0; i < g.length; i++, r = r + bit >> 6) {
                for (let j = 0; j < r + bit >> 6; j++) g[i][j] = 0;
                if (r & bit) g[i][r >> 6] &= -(1 << r);
            }
        }
    }
    function set(pos) {
        if (pos >= 0 && pos < n) {
            for (let i = 0; i < g.length; i++, pos >>= 6) g[i][pos >> 6] |= 1 << pos;
        }
    }
    function unset(pos) {
        if (pos >= 0 && pos < n) {
            for (let i = 0; i < g.length && (i == 0 || g[i - 1][pos] == 0); i++, pos >>= 6) g[i][pos >> 6] &= ~(1 << pos);
        }
    }
    function get(pos) {
        return pos >= 0 && pos < n && g[0][pos >> 6] << ~pos < 0;
    }
    function toggle(pos) {
        return get(pos) ? unset(pos) : set(pos);
    }
    function prev(pos) {
        for (let i = 0; i < g.length && pos >= 0; i++, pos >>= 6, pos--) {
            let pre = movePrev(g[i][pos >> 6], pos & bit);
            // pr("pos", pos, "pre", pre);
            if (pre != -1) {
                pos = pos >>> 6 << 6 | pre;
                while (i > 0) pos = pos << 6 | bit - numberOfLeadingZeros(g[--i][pos], bit + 1);
                return pos;
            }
        }
        return -1;
    }
    function next(pos) {
        for (let i = 0; i < g.length && pos >> 6 < g[i].length; i++, pos >>= 6, pos++) {
            let ne = moveNext(g[i][pos >> 6], pos & bit)
            if (ne != -1) {
                pos = pos >>> 6 << 6 | ne;
                while (i > 0) pos = pos << 6 | numberOfTrailingZeros(g[--i][pos], bit + 1);
                return pos;
            }
        }
        return -1;
    }
    function movePrev(x, n) {
        let h = x << ~n; // issue
        // pr(x, n, h, numberOfLeadingZeros(h, bit + 1));
        return h == 0 ? -1 : n - numberOfLeadingZeros(h, bit + 1);
    }
    function moveNext(x, n) {
        let h = x >> n;
        return h == 0 ? -1 : numberOfTrailingZeros(h, bit + 1) + n;
    }
    function show() {
        return g;
    }
}

const totalSteps1 = (a) => {
    let n = a.length, fs = new FastSet(n), st = [];
    fs.setRange(n);
    // pr(fs.show())
    for (let i = n - 1; ~i; i--) st.push(i);
    for (let step = 0; ; step++) {
        let tmp = [];
        // pr("\nst", st);
        for (const r of st) {
            if (r < 0) continue;
            if (!fs.get(r)) continue;
            let pre = fs.prev(r - 1);
            // pr(fs.get(r), pre);
            if (pre != -1 && a[pre] > a[r]) {
                fs.unset(r);
                // pr(fs.show())
                tmp.push(fs.next(r));
            }
        }
        if (tmp.length == 0) return step;
        st = tmp;
    }
};

/////////////////////////////////////////////////////////////////////////////
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
    remove(value) { // remove one node, not all  LST.unset()
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
    higher(value) { // > upper_bound()  LST.next()
        let node = this.findSuccessorOf(value);
        return node == null ? null : (node.val);
    }
    lower(value) { // <  LST.prev()
        let node = this.findPrecursorOf(value);
        return node == null ? null : (node.val);
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

// Accepted --- 1176ms
const totalSteps = (a) => {
    let n = a.length, tree = new SplayTree(n), st = [];
    for (let i = n - 1; ~i; i--) {
        st.push(i);
        tree.insert(i);
    }
    for (let step = 0; ; step++) {
        let tmp = [];
        // pr("\nst", st);
        for (const r of st) {
            if (r < 0) continue;
            if (!tree.has(r)) continue;
            let pre = tree.lower(r);
            // pr("pre", pre);
            if (pre != null && a[pre] > a[r]) {
                tree.remove(r);
                tmp.push(tree.higher(r));
            }
        }
        if (tmp.length == 0) return step;
        st = tmp;
    }
};

const main = () => {
    let a = [5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11];
    let a2 = [4, 5, 7, 7, 13];
    let a_debug1 = [10, 1, 2, 3, 4, 5, 6, 1, 2, 3];
    pr(totalSteps(a))
    pr(totalSteps(a2))
    pr(totalSteps(a_debug1)) // 6
};

main()


// pr(numberOfLeadingZeros(210, 64));
// pr(numberOfLeadingZeros(-18014398509481984, 64))

// pr(numberOfTrailingZeros(210, 64)); // 1
// pr(numberOfTrailingZeros(0, 64)); // 64
// pr(numberOfTrailingZeros(1, 64)); // 0
// pr(numberOfTrailingZeros(-1, 64)); // 0
// pr(numberOfTrailingZeros(-100, 64)); // 2

// for (let i = 0; i >= -100; i--) {
//     pr(numberOfLeadingZeros(i, 64))
//     pr(numberOfTrailingZeros(i, 64))
// }


// let a = 2047n;
// let b = -10n;

// pr(a << b);

// pr(1245 << (-10), 1245<<54)