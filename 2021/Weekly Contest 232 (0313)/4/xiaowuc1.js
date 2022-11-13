// 05/03/21 evening
function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) {
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = lo + hi >> 1;
            x < a[mid] ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) {
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = lo + hi >> 1;
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

function TreeSet(elements) {
    let ts = [];
    let se = new Set();
    let bisect = new Bisect();
    if (elements) addAll(elements);
    return { add, floor, ceiling, lower, remove, contains, size, clear, toArray };
    function addAll(elements) {
        for (const e of elements) {
            if (se.has(e)) continue;
            add(e);
            se.add(e);
        }
    }
    function add(e) {
        if (!se.has(e)) {
            bisect.insort_right(ts, e);
            se.add(e);
        }
    }
    function ceiling(e) {
        let idx = bisect.bisect_right(ts, e);
        if (ts[idx - 1] == e) return e;
        return ts[bisect.bisect_right(ts, e)];
    }
    function floor(e) {
        let idx = bisect.bisect_left(ts, e);
        if (ts[idx] == e) {
            return e;
        } else {
            return ts[bisect.bisect_left(ts, e) - 1];
        }
    }
    function lower(e) {
        let idx = bisect.bisect_left(ts, e);
        if (ts[idx] < e) {
            return ts[idx];
        } else {
            return ts[bisect.bisect_left(ts, e) - 1];
        }
    }
    function remove(e) {
        let res = new Set(ts);
        res.delete(e);
        ts = [...res];
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
    }
    function toArray() {
        return ts;
    }
}

const pr = console.log;

// Accepted --- 1612ms 11.59%
const maximumScore = (a, k) => {
    let n = a.length;
    let m = a.map((x, i) => [x, i]);
    // pr(m);
    m.sort((x, y) => x[0] - y[0]);
    let res = 0;
    let ts = new TreeSet([-1, n]);
    for (const d of m) {
        let r = ts.ceiling(d[1]);
        let l = ts.lower(r);
        if (k >= r || k <= l) continue;
        res = Math.max(res, (r - l - 1) * (d[0]));
        ts.add(d[1]);
    }
    return res;
};

const main = () => {
    let nums = [1, 4, 3, 7, 4, 5], k = 3;
    let nums2 = [5, 5, 4, 5, 4, 1, 1, 1], k2 = 0;
    let nums_debug1 = [6569, 9667, 3148, 7698, 1622, 2194, 793, 9041, 1670, 1872], k_debug1 = 5;
    pr(maximumScore(nums, k)); // 15
    pr(maximumScore(nums2, k2)); // 20
    pr(maximumScore(nums_debug1, k_debug1)); // 9732
};

main()