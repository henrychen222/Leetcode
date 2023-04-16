/**
 * 10/13/12 morning
 * https://leetcode.com/contest/biweekly-contest-65/problems/check-whether-two-strings-are-almost-equivalent/
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
            x < a[mid] ? hi = mid : lo = mid + 1;
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

// Accepted    fuck just need 20 miutes more to debug, totally stuck in hidden case in Q2
const maximumBeauty = (a, queries) => {
    let n = a.length;
    a.sort((x, y) => x[0] - y[0]);
    let ia = a.map(x => x[0]);
    let pre = preMax(a, n);
    // pr(a);
    // pr(ia);
    // pr(pre);
    let bi = new Bisect();
    let res = [];
    for (const q of queries) {
        let idx = bi.bisect_right(ia, q);
        idx--;
        // pr("q", q, "idx", idx, "last", a[idx], a.slice(0, idx + 1))
        res.push(pre[idx] || 0);
    }
    return res;
};

const preMax = (a, n) => {
    let pre = [], max = 0;
    for (let i = 0; i < n; i++) {
        if (a[i][1] > max) max = a[i][1];
        pre.push(max);
    }
    return pre;
};

const main = () => {
    let items = [[1, 2], [3, 2], [2, 4], [5, 6], [3, 5]], queries = [1, 2, 3, 4, 5, 6];
    let items2 = [[1, 2], [1, 2], [1, 3], [1, 4]], queries2 = [1];
    let items3 = [[10, 1000]], queries3 = [5];
    pr(maximumBeauty(items, queries))
    pr(maximumBeauty(items2, queries2))
    pr(maximumBeauty(items3, queries3))
};

main()