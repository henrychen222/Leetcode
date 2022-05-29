// 05/28/22 night

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

// TLE 85/86
const totalSteps = (a) => {
    let res = 0, n = a.length, rem = new TreeSet(), d = new Set();
    for (let i = 0; i < n; i++) {
        rem.add(i);
        d.add(i + 1);
    }
    while (1) {
        let remove = new Set();
        for (let i of d) {
            if (a[rem.lower(i)] > a[i]) {
                remove.add(i);
            }
        }
        if (remove.size == 0) break;
        for (let i of remove) rem.remove(i);
        d = new Set();
        // pr("111", rem.toArray(), d, "remove", remove)
        for (let i of remove) d.add(rem.higher(i))
        // pr("222", rem.toArray(), d, "remove", remove)
        res++;
    }
    return res;
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