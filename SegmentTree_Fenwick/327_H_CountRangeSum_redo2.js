/**
 * 01/17/23 night
 * https://leetcode.com/problems/count-of-range-sum
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

function SegmentTreeRSQ(n) {
    let h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(0);
    return { update, query, rangeSum, tree }
    function update(pos, v) {
        a[n + pos] = v;
        for (let i = parent(n + pos); i >= 1; i = parent(i)) pushup(i);
    }
    function pushup(i) {
        a[i] = a[left(i)] +  a[right(i)];
    }
    function query(l, r) { // [L, R)
        let sum = 0;
        if (l >= r) return 0;
        l += n;
        r += n;
        for (; l < r; l = parent(l), r = parent(r)) {
            if (l & 1) sum += a[l++];
            if (r & 1) sum += a[--r];
        }
        return sum;
    }
    function rangeSum(l, r) {
        return query(0, r + 1) - query(0, l);
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

const preSum = (a) => { let pre = [0]; for (let i = 0; i < a.length; i++) { pre.push(pre[i] + a[i]); } return pre; };

const countRangeSum = (a, lower, upper) => {
    let n = a.length, st = new SegmentTreeRSQ(n + 3), pre = preSum(a), spre = [...pre].sort((x, y) => x - y), res = 0, bi = new Bisect(), f = Array(1e5 + 5).fill(0);
    for (const x of pre) {
        let l = bi.bisect_left(spre, x - upper), r = bi.bisect_right(spre, x - lower);
        let sumL = st.rangeSum(0, l), sumR = st.rangeSum(0, r), cnt = sumR - sumL;
        res += cnt;
        let idx = bi.bisect_left(spre, x);
        st.update(idx + 1, ++f[idx + 1]);
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