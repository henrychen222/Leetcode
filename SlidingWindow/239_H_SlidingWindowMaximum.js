/*
 * 01/09/22 noon
 * https://leetcode.com/problems/sliding-window-maximum/
 * 
 * similar problem:
 * https://leetcode.com/problems/sliding-window-median/
 */

const pr = console.log;

function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] > x ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) { // >= lower_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

function TreeMap(g) {
    let ts = [], m = new Map(), bisect = new Bisect();
    initialize();
    return { set, get, firstKey, lastKey, keys, pollFirstEntry, pollLastEntry, ceilingKey, higherKey, lowerKey, floorKey, ceilingEntry, higherEntry, lowerEntry, floorEntry, remove, contains, size, findKth, clear, show };
    function initialize() {
        if (g) {
            for (const [k, v] of g) {
                if (!m.has(k)) bisect.insort_right(ts, k);
                m.set(k, v);
            }
        }
    }
    function set(k, v) {
        if (!m.has(k)) bisect.insort_right(ts, k); // ts has no duplicates/unique key
        m.set(k, v); // update key with most recent value
    }
    function get(k) {
        return m.get(k);
    }
    function keys() {
        return ts;
    }
    function firstKey() {
        return ts[0];
    }
    function lastKey() {
        return ts[ts.length - 1];
    }
    function pollFirstEntry() {
        let k = ts[0], v = m.get(k);
        ts.splice(0, 1);
        m.delete(k);
        return [k, v];
    }
    function pollLastEntry() {
        let k = ts.pop(), v = m.get(k);
        m.delete(k);
        return [k, v];
    }
    function ceilingKey(e) { // >= lower_bound
        let idx = bisect.bisect_right(ts, e);
        let res = ts[idx - 1] == e ? e : ts[bisect.bisect_right(ts, e)];
        return res == undefined ? null : res;
    }
    function higherKey(e) { // > upper_bound
        let idx = bisect.bisect_right(ts, e);
        let res = ts[idx] > e ? ts[idx] : ts[bisect.bisect_right(ts, e) + 1];
        return res == undefined ? null : res;
    }
    function floorKey(e) { // <= 
        let idx = bisect.bisect_left(ts, e);
        let res = ts[idx] == e ? e : ts[bisect.bisect_left(ts, e) - 1];
        return res == undefined ? null : res;
    }
    function lowerKey(e) { // <
        let idx = bisect.bisect_left(ts, e);
        let res = ts[idx] < e ? ts[idx] : ts[bisect.bisect_left(ts, e) - 1];
        return res == undefined ? null : res;
    }
    function data(k) {
        return k == null ? null : { key: k, value: m.get(k) }
    }
    function ceilingEntry(k) {
        return data(ceilingKey(k));
    }
    function higherEntry(k) {
        return data(higherKey(k));
    }
    function floorEntry(k) {
        return data(floorKey(k));
    }
    function lowerEntry(k) {
        return data(lowerKey(k));
    }
    function remove(e) {
        let idx = bisect.bisect_left(ts, e);
        if (ts[idx] == e) ts.splice(idx, 1);
        m.delete(e);
    }
    function contains(e) {
        return m.has(e);
    }
    function size() {
        return ts.length;
    }
    function findKth(k) {
        let cnt = 0;
        for (const x of ts) {
            let occ = m.get(x);
            if (cnt + occ < k) {
                cnt += occ;
            } else {
                return x;
            }
        }
    }
    function clear() {
        ts = [];
        m.clear();
    }
    function show() {
        let res = new Map();
        for (const x of ts) res.set(x, m.get(x));
        return res;
    }
}

const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);
const removeOneOrManyMap = (m, x, cnt = 1) => { let occ = m.get(x); occ > cnt ? m.set(x, occ - cnt) : m.remove(x); };

// Accepted --- 2686ms 12.4%
const maxSlidingWindow1 = (a, k) => {
    let m = new TreeMap(), res = [], n = a.length;
    for (let i = 0; i < n; i++) {
        addOneOrManyMap(m, a[i]);
        let l = i - k + 1;
        if (l >= 0) {
            res.push(m.lastKey());
            removeOneOrManyMap(m, a[l]);
        }
    }
    return res;
};

//////////////////////////////////////////////////////////////////////////////////////////////////
function Node(val) {
    this.left = null;
    this.right = null;
    this.val = val;
}
function insert(root, v) {
    if (!root) return new Node(v);
    v < root.val ? root.left = insert(root.left, v) : root.right = insert(root.right, v);
    return root;
}
function remove(root, v) {
    if (!root) return root;
    if (v < root.val) {
        root.left = remove(root.left, v);
    } else if (v > root.val) {
        root.right = remove(root.right, v);
    } else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        let minNode = searchLeft(root.right);
        root.val = minNode.val;
        root.right = remove(root.right, minNode.val);
    }
    return root;
}
function searchLeft(node) {
    while (node.left) node = node.left;
    return node;
}
function maxx(node) {
    if (node == null) return Number.MIN_SAFE_INTEGER;
    let res = node.val;
    let lres = maxx(node.left);
    let rres = maxx(node.right);
    if (lres > res) res = lres;
    if (rres > res) res = rres;
    return res;
}

// TLE
const maxSlidingWindow2 = (a, k) => {
    let root = null, res = [], n = a.length;
    for (let i = 0; i < n; i++) {
        root = insert(root, a[i]);
        // printTree(root)
        let l = i - k + 1;
        if (l >= 0) {
            res.push(maxx(root));
            root = remove(root, a[l]);
        }
    }
    return res;
};
/////////////////////////////////////////////////////////////////////////////////////////
function getHeight(node) {
    return node != null ? node.height : 0;
}
function getBalance(node) {
    return node != null ? getHeight(node.left) - getHeight(node.right) : 0;
}
function LR(z) {
    let y = z.right;
    let T2 = y.left;
    y.left = z;
    z.right = T2;
    z.height = 1 + Math.max(getHeight(z.left), getHeight(z.right));
    y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));
    return y;
}
function RR(z) {
    let y = z.left;
    let T3 = y.right;
    y.right = z
    z.left = T3
    z.height = 1 + Math.max(getHeight(z.left), getHeight(z.right));
    y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));
    return y;
}
function insert(node, v) {
    if (node == null) {
        return new AVLTreeNode(v);
    } else if (v < node.val) {
        node.left = insert(node.left, v);
    } else if (v > node.val) {
        node.right = insert(node.right, v);
    } else {
        node.cnt++;
        return node;
    }
    node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
    let bal = getBalance(node);
    if (bal > 1 && v < node.left.val) return RR(node);
    if (bal > 1 && v > node.left.val) {
        node.left = LR(node.left);
        return RR(node);
    }
    if (bal < -1 && v > node.right.val) return LR(node);
    if (bal < -1 && v < node.right.val) {
        node.right = RR(node.right);
        return LR(node);
    }
    return node;
}
function remove(node, v) {
    if (node == null) {
        return node;
    } else if (v < node.val) {
        node.left = remove(node.left, v);
    } else if (v > node.val) {
        node.right = remove(node.right, v);
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
        let tmp = minx(node.right);
        node.val = tmp.val;
        node.right = remove(node.right, tmp.val);
    }
    if (node == null) return node;
    node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
    let bal = getBalance(node);
    if (bal > 1 && getBalance(node.left) >= 0) return RR(node);
    if (bal < -1 && getBalance(node.right) <= 0) return LR(node);
    if (bal > 1 && getBalance(node.left) < 0) {
        node.left = LR(node.left);
        return RR(node);
    }
    if (bal < -1 && getBalance(node.right) > 0) {
        node.right = RR(node.right);
        return LR(node);
    }
    return node;
}
function minx(node) {
    return node == null || node.left == null ? node : minx(node.left);
}
function maxx(node) {
    return node == null || node.right == null ? node : maxx(node.right);
}

// Accepted --- 835ms 47.86%
const maxSlidingWindow3 = (a, k) => {
    let res = [], n = a.length, root = null;
    for (let i = 0; i < n; i++) {
        root = insert(root, a[i]);
        let l = i - k + 1;
        if (l >= 0) {
            res.push(maxx(root).val);
            root = remove(root, a[l]);
        }
    }
    return res;
};

///////////////////////////////////////////////////////////////////////////////////////////

function SegmentTreeRMQ(n) {
    let h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(Number.MIN_SAFE_INTEGER);
    h = 2 ** h;
    return { update, maxx, firstle, tree }
    function update(pos, v) {
        a[h + pos] = v;
        for (let i = parent(h + pos); i >= 1; i = parent(i)) pushup(i);
    }
    function pushup(i) {
        a[i] = Math.max(a[left(i)], a[right(i)]);  // [max .... min]
    }
    function maxx(l, r) {
        let max = Number.MIN_SAFE_INTEGER;
        if (l >= r) return max;
        l += h;
        r += h;
        for (; l < r; l = parent(l), r = parent(r)) {
            if (l & 1) max = Math.max(max, a[l++]);
            if (r & 1) max = Math.max(max, a[--r]);
        }
        return max;
    }
    function firstle(l, v) {
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

// Accepted   01/09/22 evening
// reference: https://leetcode.com/problems/sliding-window-maximum/solutions/366785/segment-tree-solution/
const maxSlidingWindow4 = (a, k) => {
    let n = a.length, st = new SegmentTreeRMQ(n + 1), res = [];
    for (let i = 0; i < n; i++) st.update(i, a[i]); // set value in tree
    for (let i = 0; i < n; i++) {
        let l = i - k + 1;
        if (l >= 0) {
            let max = st.maxx(l, i + 1);
            res.push(max);
        }
    }
    return res;
};
////////////////////////////// Splay Tree //////////////////////////////////////////////

class SplayNode {
    constructor(value) {
        this.parent = null;
        this.left = null;
        this.right = null;
        this.val = value;
        this.sz = 1;
    }
    Update() {
        this.sz = (this.left != null ? this.left.sz : 0) + (this.right != null ? this.right.sz : 0) + 1;
    }
    IsLeft() {
        return this.parent != null && this.parent.left == this;
    }
    IsRight() {
        return this.parent != null && this.parent.right == this;
    }
    IsRoot(guard = null) {
        return this.parent == guard;
    }
}

class SplayTree {
    constructor() {
        this.root = null;
        this.cmp = (x, y) => x >= y ? 0 : 1;
    }
    Zig(x) { // right rotation
        let y = x.parent;
        if (x.right != null) x.right.parent = y;
        y.left = x.right;
        x.right = y;
        if (y.IsLeft()) {
            y.parent.left = x;
        } else if (y.IsRight()) { // Special attention here for Link-Cut Trees.
            y.parent.right = x;
        }
        x.parent = y.parent;
        y.parent = x;
        y.Update();
        x.Update();
    }

    // Zag:
    //   y                x
    //  / \              / \
    // A   x    --.    y   C
    //    / \          / \
    //   B   C        A   B        
    Zag(x) { // left rotation
        let y = x.parent;
        if (x.left != null) x.left.parent = y;
        y.right = x.left;
        x.left = y;
        if (y.IsLeft()) {
            y.parent.left = x;
        } else if (y.IsRight()) { // Special attention here for Link-Cut Trees.
            y.parent.right = x;
        }
        x.parent = y.parent;
        y.parent = x;
        y.Update();
        x.Update();
    }
    ZigZig(x) { // RR
        this.Zig(x.parent);
        this.Zig(x);
    }
    ZigZag(x) { // RL
        this.Zig(x);
        this.Zag(x);
    }
    ZagZag(x) { // LL
        this.Zag(x.parent);
        this.Zag(x);
    }
    ZagZig(x) { // LR
        this.Zag(x);
        this.Zig(x);
    }

    // Splay a "node" just under a "guard", which is default to splay to the "root".
    Splay(node, guard = null) {
        while (!node.IsRoot(guard)) {
            if (node.parent.IsRoot(guard)) {
                if (node.IsLeft()) {
                    this.Zig(node);
                } else {
                    this.Zag(node);
                }
            } else {
                if (node.parent.IsLeft()) {
                    if (node.IsLeft()) {
                        this.ZigZig(node);
                    } else {
                        this.ZagZig(node);
                    }
                } else {
                    if (node.IsRight()) {
                        this.ZagZag(node);
                    } else {
                        this.ZigZag(node);
                    }
                }
            }
        }
        if (guard == null) this.root = node; // reset "root" to "node".
    }
    LastNode(x) {
        this.Splay(x);
        let node = x.left;
        if (node == null) return null;
        while (node.right != null) node = node.right;
        this.Splay(node);
        return node;
    }
    NextNode(x) {
        this.Splay(x);
        let node = x.right;
        if (node == null) return null;
        while (node.left != null) node = node.left;
        this.Splay(node);
        return node;
    }
    Find(value) {
        return this.FindFirstOf(value);
    }
    FindFirstOf(value) {
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
        if (last_visited != null) this.Splay(last_visited);
        return res;
    }
    FindLastOf(value) {
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
        if (last_visited != null) this.Splay(last_visited);
        return res;
    }
    FindRankOf(node) {
        this.Splay(node);
        return node.left == null ? 0 : node.left.sz;
    }
    FindSuccessorOf(value) {
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
        if (last_visited != null) this.Splay(last_visited);
        return res;
    }
    FindPrecursorOf(value) {
        let node = this.root, res = null, last_visited = null;
        while (node != null) {
            last_visited = node;
            // pr(node.val, value, "compare: ", this.cmp(node.val, value))
            if (this.cmp(node.val, value)) {
                res = node;
                node = node.right;
            } else {
                node = node.left;
            }
        }
        if (last_visited != null) this.Splay(last_visited);
        return res;
    }
    FindKth(rank) {
        if (rank < 0 || rank >= this.Size()) return null;
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
        this.Splay(node);
        return node;
    }
    NewNode(value) {
        return new SplayNode(value);
    }
    DeleteNode(node) {
        node = null;
    }

    // -------------------------------- Public Usage --------------------------------------
    Size() {
        return this.root == null ? 0 : this.root.sz;
    }
    IsEmpty() {
        return this.root == null;
    }

    // Insert an element into the container O(log(n))
    Insert(value) {
        if (this.root == null) {
            this.root = this.NewNode(value);
            return this.root;
        }
        let node = this.root;
        while (node != null) {
            if (this.cmp(value, node.val)) {
                if (node.left == null) {
                    node.left = this.NewNode(value);
                    node.left.parent = node;
                    node = node.left;
                    break;
                }
                node = node.left;
            } else {
                if (node.right == null) {
                    node.right = this.NewNode(value);
                    node.right.parent = node;
                    node = node.right;
                    break;
                }
                node = node.right;
            }
        }
        this.Splay(node);
        return node;
    }

    // Delete an element from the container if it exists O(log n)
    Delete(value) {
        let node = this.Find(value);
        if (node == null) return false;
        this.Splay(node);
        if (node.left == null) {
            this.root = node.right;
            if (node.right != null) node.right.parent = null;
            this.DeleteNode(node);
            return true;
        }
        if (node.right == null) {
            this.root = node.left;
            if (node.left != null) node.left.parent = null;
            this.DeleteNode(node);
            return true;
        }
        let last_node = this.LastNode(node);
        let next_node = this.NextNode(node);
        this.Splay(last_node);
        this.Splay(next_node, last_node);
        // After the above operations, the tree becomes:
        //      last_node
        //     /         \
        //    A       next_node
        //           /         \
        //         node         B
        // Then "next_node.left" is "node".
        this.DeleteNode(next_node.left);
        next_node.left = null;
        next_node.Update();
        last_node.Update();
        return true;
    }

    // Whether the splay tree contains value O(log n).
    Contains(value) {
        return this.CountOf(value) > 0;
    }

    // The number of ocurrences of value O(log n)
    CountOf(value) {
        let x = this.FindFirstOf(value);
        if (x == null) return 0;
        let rank_x = this.FindRankOf(x);
        let y = this.FindLastOf(value);
        let rank_y = this.FindRankOf(y);
        return rank_y - rank_x + 1;
    }

    // The number of elements strictly less than value O(log n)
    RankOf(value) {
        let x = this.FindPrecursorOf(value);
        return x == null ? 0 : this.FindRankOf(x) + 1;
    }

    // Get the k-th element (0-indexed) O(log n).
    Kth(rank) {
        let x = this.FindKth(rank);
        return x == null ? null : (x.val);
    }

    // Find the smallest element that is strictly greater than value > , if it exists O(log n).
    SuccessorOf(value) {
        let node = this.FindSuccessorOf(value);
        return node == null ? null : (node.val);
    }

    // Find the largest element that is strictly less than value < , if it exists O(log n).
    PrecursorOf(value) {
        let node = this.FindPrecursorOf(value);
        return node == null ? null : (node.val);
    }

    // Get sorted values in the splay tree O(n).
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

// Accepted --- 2012ms 12.79%
const maxSlidingWindow5 = (a, k) => {
    let res = [], n = a.length, tree = new SplayTree();
    for (let i = 0; i < n; i++) {
        tree.Insert(a[i]);
        let l = i - k + 1;
        if (l >= 0) {
            res.push(tree.Kth(tree.Size() - 1));
            tree.Delete(a[l]);
        }
    }
    return res;
};

//////////////////////////// rewrite AVL in class //////////////////////////////////////

// 01/13/22 evening
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
        return this.findMax(this.root).val;
    }
    minx() {
        return this.findMin(this.root).val;
    }
    findMin(node) {
        return node == null || node.left == null ? node : this.findMin(node.left);
    }
    findMax(node) {
        return node == null || node.right == null ? node : this.findMax(node.right);
    }
}

// Accepted --- 816ms 46.19%
const maxSlidingWindow6 = (a, k) => {
    let res = [], n = a.length, tree = new AVLTree();
    for (let i = 0; i < n; i++) {
        tree.insert(a[i]);
        let l = i - k + 1;
        if (l >= 0) {
            res.push(tree.maxx());
            tree.remove(a[l]);
        }
    }
    return res;
};


//////////////////////////// 01/15/22 afternoon /////////////////////////////
// TLE C++ Accepted
const maxSlidingWindow = (a, k) => {
    let res = [], n = a.length, s = new MultiSet();
    for (let i = 0; i < n; i++) {
        s.insert(a[i]);
        let l = i - k + 1;
        if (l >= 0) {
            res.push(s.last());
            s.eraseOne(a[l]);
        }
    }
    return res;
};

const main = () => {
    let a = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;
    let a2 = [1], k2 = 1;
    let a_debug1 = [1, -1], k_debug1 = 1;
    let a_debug2 = [-7, -8, 7, 5, 7, 1, 6, 0], k_debug2 = 4;
    pr(maxSlidingWindow(a, k))
    pr(maxSlidingWindow(a2, k2))
    pr(maxSlidingWindow(a_debug1, k_debug1)) // [1, -1]
    pr(maxSlidingWindow(a_debug2, k_debug2)) // [7,7,7,7,7]
};

main()