/*
 * 08/12/23 evening
 * https://leetcode.com/contest/weekly-contest-358/problems/minimum-absolute-difference-between-elements-with-constraint/
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

// 定长滑动窗口
// Accepted --- Tlatoani uwi
const minAbsoluteDifference3 = (a, x) => {
    let n = a.length, tree = new SplayTree(), res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (i - x >= 0) tree.insert(a[i - x]);
        let low = tree.floor(a[i]), high = tree.ceiling(a[i]);
        // pr(tree.show(), a[i], low, high)
        if (low != null) res = Math.min(res, a[i] - low);
        if (high != null) res = Math.min(res, high - a[i]);
    }
    return res;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////
function SegmentTreeRMINQ(n) {
    let h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(Number.MAX_SAFE_INTEGER);
    h = 2 ** h;
    return { update, minx, firstle, lastle, tree }
    function update(pos, v) {
        a[h + pos] = v;
        for (let i = parent(h + pos); i >= 1; i = parent(i)) pushup(i);
    }
    function pushup(i) {
        a[i] = Math.min(a[left(i)], a[right(i)]); // [min .... max]
    }
    function minx(l, r) { // [L, R)
        let min = Number.MAX_SAFE_INTEGER;
        if (l >= r) return min;
        l += h;
        r += h;
        for (; l < r; l = parent(l), r = parent(r)) {
            if (l & 1) min = Math.min(min, a[l++]);
            if (r & 1) min = Math.min(min, a[--r]);
        }
        return min;
    }
    function firstle(l, v) { // find closest idx >= l when a[idx] <= v
        if (l >= h) return -1;
        let cur = h + l;
        while (1) {
            if (a[cur] <= v) {
                if (cur >= h) return cur - h;
                cur = left(cur);
            } else {
                cur++;
                if ((cur & cur - 1) == 0) return -1;
                if (cur % 2 == 0) cur = parent(cur);
            }
        }
    }
    function lastle(l, v) { // find closest idx <= l when a[idx] > v
        if (l < 0) return -1;
        let cur = h + l;
        while (1) {
            if (a[cur] <= v) {
                if (cur >= h) return cur - h;
                cur = right(cur);
            } else {
                if ((cur & cur - 1) == 0) return -1;
                cur--;
                if (cur % 2 != 0) cur = parent(cur);
            }
        }
    }
    function parent(i) {
        return i >> 1;
    }
    function left(i) {
        return 2 * i;
    }
    function right(i) {
        return 2 * i + 1;
    }
    function tree() {
        return a;
    }
}

function SegmentTreeRMAXQ(n) { // range max query
    let h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(Number.MIN_SAFE_INTEGER);
    return { update, maxx, firstle, tree }
    function update(pos, v) {
        a[n + pos] = v;
        for (let i = parent(n + pos); i >= 1; i = parent(i)) pushup(i);
    }
    function pushup(i) {
        a[i] = Math.max(a[left(i)], a[right(i)]);  // [max .... min]
    }
    function maxx(l, r) { // [L, R)
        let max = Number.MIN_SAFE_INTEGER;
        if (l >= r) return max;
        l += n;
        r += n;
        for (; l < r; l = parent(l), r = parent(r)) {
            if (l & 1) max = Math.max(max, a[l++]);
            if (r & 1) max = Math.max(max, a[--r]);
        }
        return max;
    }
    function firstle(l, v) {
        if (l >= n) return -1;
        let cur = n + l;
        while (1) {
            if (a[cur] <= v) {
                if (cur >= n) return cur - n;
                cur = left(cur);
            } else {
                cur++;
                if ((cur & cur - 1) == 0) return -1;
                if (cur % 2 == 0) cur = parent(cur);
            }
        }
    }
    function parent(i) {
        return i >> 1;
    }
    function left(i) {
        return 2 * i;
    }
    function right(i) {
        return 2 * i + 1;
    }
    function tree() {
        return a;
    }
}

// Accepted
// reference: https://leetcode.cn/circle/discuss/ol6BYC/
const minAbsoluteDifference = (a, x) => {
    a = a.map((x, i) => [x, i]).sort((x, y) => x[0] - y[0] || x[1] - y[1]);
    // pr(a)
    let n = a.length, stmax = new SegmentTreeRMAXQ(n), res = Number.MAX_SAFE_INTEGER;
    for (const [v, i] of a) {
        stmax.update(i, v);
        let l = i - x, r = i + x, maxL, maxR;
        // pr(l, r)
        // query [0, l]  [r, n-1]
        if (l >= 0) maxL = stmax.maxx(0, l + 1);
        if (r < n) maxR = stmax.maxx(r, n);
        let d1 = v - maxL, d2 = v - maxR;
        // pr(maxL, maxR, " ", d1, d2);
        if (!Number.isNaN(d1)) res = Math.min(res, d1);
        if (!Number.isNaN(d2)) res = Math.min(res, d2);
    }
    return res;
};

// WA
const minAbsoluteDifference2 = (a, x) => {
    // pr(test(a, x))
    let n = a.length, stmin = new SegmentTreeRMINQ(n), stmax = new SegmentTreeRMAXQ(n), res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        stmin.update(i, a[i]);
        stmax.update(i, a[i]);
    }
    // pr(a)
    // pr(a.slice(1, 3 + 1), stmin.minx(1, 3 + 1), stmax.maxx(1, 3 + 1))
    for (let i = 0; i < n; i++) {
        let l = i - x, r = i + x, minL, maxL, minR, maxR;
        // pr(l, i, r)
        // query [0, l]  [r, n-1]
        if (l >= 0) {
            minL = stmin.minx(0, l + 1);
            maxL = stmax.maxx(0, l + 1);
        }
        if (r < n) {
            minR = stmin.minx(r, n);
            maxR = stmax.maxx(r, n);
        }
        // let d1 = Math.abs(minL - maxR), d2 = Math.abs(maxL - minR);
        let d1 = Math.abs(a[i] - minL), d2 = Math.abs(a[i] - maxL);
        let d3 = Math.abs(a[i] - minR), d4 = Math.abs(a[i] - maxR); // WRONG
        pr(a.slice(0, l + 1), a.slice(r), a[i], " diff", [minL, maxL], d1, d2, [minR, maxR], d3, d4);
        if (!Number.isNaN(d1)) res = Math.min(res, d1);
        if (!Number.isNaN(d2)) res = Math.min(res, d2);
        if (!Number.isNaN(d3)) res = Math.min(res, d3);
        if (!Number.isNaN(d4)) res = Math.min(res, d4);
    }
    return res;
};

// const minAbsoluteDifference1 = (a, x) => {
//     // pr(test(a, x))
//     a = a.map((x, i) => [x, i]).sort((x, y) => x[0] - y[0]);
//     let n = a.length, res = Number.MAX_SAFE_INTEGER;
//     pr(a)
//     for (let i = 0; i < n - 1; i++) {
//         let idiff = Math.abs(a[i + 1][1] - a[i][1]);
//         if (idiff >= x) {
//             let diff = a[i + 1][0] - a[i][0];
//             pr(i, a[i + 1], a[i], "diff", diff, "idiff", idiff)
//             res = Math.min(res, diff);
//        }
//     }
//     return res;
// };

const test = (a, x) => {
    if (x == 0) return 0;
    let n = a.length, res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (j - i >= x) res = Math.min(res, Math.abs(a[i] - a[j]));
        }
    }
    return res;
};

const main = () => {
    let a = [4, 3, 2, 4], x = 2;
    let a2 = [5, 3, 2, 10, 15], x2 = 1;
    let a3 = [1, 2, 3, 4], x3 = 3;
    let a_debug1 = [330702844, 313481959, 239224564, 609763700, 170531905], x_debug1 = 0;
    let a_debug2 = [148, 109, 45, 93], x_debug2 = 1;
    let a_debug3 = [19, 138, 41, 162, 52, 134], x_debug3 = 1;
    pr(minAbsoluteDifference(a, x))
    pr(minAbsoluteDifference(a2, x2))
    pr(minAbsoluteDifference(a3, x3))
    pr(minAbsoluteDifference(a_debug1, x_debug1)) // 0
    pr(minAbsoluteDifference(a_debug2, x_debug2)) // 16
    pr(minAbsoluteDifference(a_debug3, x_debug3)) // 4
}
main()