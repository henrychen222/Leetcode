/**
 * 05/17/22 morning
 * https://leetcode.com/problems/count-of-range-sum/
 */

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

function Fenwick(n) {
    let a = Array(n).fill(0);
    return { query, update, tree }
    function query(i) {
        let sum = 0;
        for (i++; i > 0; i = parent(i)) sum += a[i];
        return sum;
    }
    function update(i, v) {
        for (i++; i < n; i = next(i)) a[i] += v;
    }
    function parent(x) {
        return x - lowestOneBit(x);
    }
    function next(x) {
        return x + lowestOneBit(x);
    }
    function lowestOneBit(x) {
        return x & -x;
    }
    function tree() {
        return a;
    }
}

const preSum = (a) => { let pre = [0]; for (let i = 0; i < a.length; i++) { pre.push(pre[i] + a[i]); } return pre; };

// Accepted --- 978ms 55.56%
// reference: https://leetcode.com/problems/count-of-range-sum/discuss/77986/O(NlogN)-Python-solution-binary-indexed-tree-268-ms
const countRangeSum = (a, lower, upper) => {
    let n = a.length, fen = new Fenwick(n + 3), pre = preSum(a), spre = [...pre].sort((x, y) => x - y), res = 0, bi = new Bisect();
    // pr(pre, spre);
    for (const x of pre) {
        let l = bi.bisect_left(spre, x - upper), r = bi.bisect_right(spre, x - lower);
        let sumL = fen.query(l), sumR = fen.query(r), cnt = sumR - sumL;
        // pr(l, r, "sum", sumL, sumR, cnt);
        res += cnt;
        let idx = bi.bisect_left(spre, x);
        fen.update(idx + 1, 1);
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