/**
 * 06/04/22 evening
 * https://leetcode.com/contest/weekly-contest-296/problems/partition-array-such-that-maximum-difference-is-k/
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

function TreeSet(elements) {
    let ts = [], se = new Set(), bisect = new Bisect();
    initialize();
    return { add, floor, ceiling, lower, higher, remove, contains, size, clear, toArray };
    function initialize() {
        if (elements) {
            for (const e of elements) {
                if (!se.has(e)) {
                    bisect.insort_right(ts, e);
                    se.add(e);
                }
            }
        }
    }
    function add(e) {
        if (!se.has(e)) {
            bisect.insort_right(ts, e);
            se.add(e);
        }
    }
    function ceiling(e) { // >= lower_bound
        let idx = bisect.bisect_right(ts, e);
        let res = ts[idx - 1] == e ? e : ts[bisect.bisect_right(ts, e)];
        return res == undefined ? null : res;
    }
    function higher(e) { // > upper_bound
        let idx = bisect.bisect_right(ts, e);
        let res = ts[idx] > e ? ts[idx] : ts[bisect.bisect_right(ts, e) + 1];
        return res == undefined ? null : res;
    }
    function floor(e) { // <= 
        let idx = bisect.bisect_left(ts, e);
        let res = ts[idx] == e ? e : ts[bisect.bisect_left(ts, e) - 1];
        return res == undefined ? null : res;
    }
    function lower(e) { // <
        let idx = bisect.bisect_left(ts, e);
        let res = ts[idx] < e ? ts[idx] : ts[bisect.bisect_left(ts, e) - 1];
        return res == undefined ? null : res;
    }
    function remove(e) {
        let idx = bisect.bisect_left(ts, e);
        if (ts[idx] == e) ts.splice(idx, 1);
        se.delete(e);
    }
    function contains(e) {
        return se.has(e);
    }
    function size() {
        return ts.length;
    }
    function clear() {
        ts = [];
        se.clear();
    }
    function toArray() {
        return ts;
    }
}

// Accepted
const partitionArray = (a, k) => {
    a.sort((x, y) => x - y);
    let res = 0, pre = a[0]
    for (let i = 1; i < a.length; i++) {
        if (a[i] - pre > k) {
            res++;
            pre = a[i];
        }
    }
    return res + 1;
};


const partitionArray2 = (a, k) => {
    let n = a.length, ts = new TreeSet(a), res = 0;
    for (let i = 0; i < n; i++) {
        let l = a[i] - k, r = a[i] + k;
        let higher = ts.ceiling(l), lower = ts.floor(r);
        pr(a[i], "l", l, "higher", higher, "r", r, "lower", lower);
        if (higher != null || lower != null) {
           res++;
        }
    }
    pr(res)
    return n - res;
};

const MIN = Number.MAX_SAFE_INTEGER, MAX = Number.MIN_SAFE_INTEGER;
const partitionArray1 = (a, k) => {
    let min = MIN, max = MAX, res = 0;
    for (const x of a) {
        min = Math.min(min, x);
        max = Math.max(max, x);
        let diff = max - min;
        if (diff > k) {
            pr("x", x, "min", min, "max", max, "diff", diff)
            res++;
            min = MIN;
            max = MAX;
        }
    }
    return res;
};

const main = () => {
    let a = [3, 6, 1, 2, 5], k = 2;
    let a2 = [1, 2, 3], k2 = 1;
    let a3 = [2, 2, 4, 5], k3 = 0;
    pr(partitionArray(a, k))
    pr(partitionArray(a2, k2))
    pr(partitionArray(a3, k3))
};

main()