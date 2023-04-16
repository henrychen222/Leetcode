/**
 * 05/07/21 night
 * https://leetcode.com/problems/count-of-range-sum/
 */

function SegmentTreeNode(tl, tr) {
    this.sum = 0;
    this.left = null;
    this.right = null;
    this.tl = tl;
    this.tr = tr;
}

const build = (a, tl, tr) => {
    if (tl > tr) return null;
    let stn = new SegmentTreeNode(a[tl], a[tr]);
    if (tl == tr) return stn;
    let mid = tl + tr >> 1;
    stn.left = build(a, tl, mid);
    stn.right = build(a, mid + 1, tr);
    return stn;
};

const update = (stn, newVal) => {
    if (stn == null) return;
    if (newVal >= stn.tl && newVal <= stn.tr) {
        stn.sum++;
        update(stn.left, newVal);
        update(stn.right, newVal);
    }
};

const sumUtil = (stn, l, r) => {
    if (stn == null) return 0;
    if (l <= stn.tl && r >= stn.tr) return stn.sum; // ??
    if (r < stn.tl || l > stn.tr) return 0;
    return sumUtil(stn.left, l, r) + sumUtil(stn.right, l, r);
};

// 05/09/21 night 
// Accepted --- 796ms 5.00%
// Accepted --- 848ms 5.00%
const countRangeSum = (a, lower, upper) => {
    let an = a.length;
    let pre = new Set();
    let sum = 0;
    for (const e of a) {
        sum += e;
        pre.add(sum);
    }
    let u = [...pre];
    let un = u.length;
    u.sort((x, y) => x - y);
    // pr(u);
    let root = build(u, 0, un - 1);
    // pr(root.cnt, root.tl, root.tr);
    let res = 0;
    // pr("begin", sum, res);
    for (let i = an - 1; ~i; i--) {
        update(root, sum);
        sum -= a[i];
        // pr(sumUtil(root, lower + sum, upper + sum));
        res += sumUtil(root, lower + sum, upper + sum);
        // pr(sum, res, root);
    }
    return res;
};

// 05/08/21 evening
// https://leetcode.com/problems/count-of-range-sum/discuss/77987/Java-SegmentTree-Solution-36ms
// don't know wrong
const countRangeSum2 = (a, lower, upper) => {
    let an = a.length;
    let pre = new Set();
    let sum = 0;
    for (const e of a) {
        sum += e;
        pre.add(sum);
    }
    let u = [...pre];
    let un = u.length;
    let st = new SegmentTreeRSQ(u);
    let res = 0;
    // pr(sum, u);
    for (let i = un - 1; ~i; i--) {
        // pr("before", st.getTree())
        st.update(u, un, i, sum);
        // pr("after", st.getTree())
        sum -= a[i];
        // pr(st.sum(un, lower, upper))
        res += st.sum(un, lower, upper);
    }
    return res;
};


function SegmentTreeRSQ(a) {
    let n = a.length;
    let h = Math.ceil(Math.log2(n));
    const MAX = 2 * 2 ** h - 1;
    let tree = Array(MAX).fill(0);
    build(a, 0, 0, n - 1);
    return {
        update,
        sum,
        getTree
    }

    function getTree() {
        return tree;
    }

    function build(a, vi, tl, tr) {
        if (tl == tr) {
            tree[vi] = a[tl];
            return a[tl];
        }
        let mid = getMid(tl, tr);
        tree[vi] = build(a, vi * 2 + 1, tl, mid) + build(a, vi * 2 + 2, mid + 1, tr);
        return tree[vi];
    }

    function update(a, n, pos, newVal) {
        if (pos < 0 || pos > n - 1) return;
        let diff = newVal - a[pos];
        a[pos] = newVal;
        updateUtil(0, 0, n - 1, pos, diff);
    }

    function updateUtil(vi, tl, tr, pos, diff) {
        if (pos < tl || pos > tr) return;
        tree[vi] = tree[vi] + diff;
        if (tl != tr) {
            let mid = getMid(tl, tr);
            updateUtil(2 * vi + 1, tl, mid, pos, diff);
            updateUtil(2 * vi + 2, mid + 1, tr, pos, diff);
        }
    }

    function sum(n, tl, tr) { // [tl, tr]: tree query range
        if (tl < 0 || tr > n - 1 || tl > tr) return -1;
        return sumUtil(0, 0, n - 1, tl, tr);
    }

    function sumUtil(vi, l, r, tl, tr) { // [tl, tr]: tree query range  [l, r]: current selected range
        if (l >= tl && r <= tr) return tree[vi]; // inside range
        if (r < tl || l > tr) return 0; // out of range
        let mid = getMid(l, r);
        return sumUtil(2 * vi + 1, l, mid, tl, tr) + sumUtil(2 * vi + 2, mid + 1, r, tl, tr);
    }

    function getMid(low, high) {
        return low + (high - low >> 1);
    }
}

// TLE
const countRangeSum1 = (a, lower, upper) => {
    let st = new SegmentTreeRSQ(a);
    let n = a.length;
    let res = 0;
    let memo = new Map();
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let ke = i + ' ' + j;
            let sum;
            if (memo.has(ke)) {
                sum = memo.get(ke);
            } else {
                sum = st.sum(n, i, j);
                memo.set(ke, sum);
            }
            if (sum >= lower && sum <= upper) res++;
        }
    }
    return res;
};

const pr = console.log;
const main = () => {
    let nums = [-2, 5, -1],
        lower = -2,
        upper = 2;
    let nums2 = [0],
        lower2 = 0,
        upper2 = 0;
    let nums_debug1 = [-1, 1],
        lower_debug1 = 0,
        upper_debug1 = 0;
    pr(countRangeSum(nums, lower, upper));
    pr(countRangeSum(nums2, lower2, upper2));
    pr(countRangeSum(nums_debug1, lower_debug1, upper_debug1)); // 1
};

main()