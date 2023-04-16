/**
 * 05/02/21 night save links, 05/03/21 did
 * https://github.com/fukatani/TreeSet/blob/master/treeset.py
 * https://github.com/python/cpython/blob/3.9/Lib/bisect.py
 * https://docs.python.org/3/library/bisect.html
 * 
 * Example Problem:
 * https://leetcode.com/problems/closest-room/
 * https://leetcode.com/problems/minimum-absolute-sum-difference/
 * https://leetcode.com/problems/maximum-score-of-a-good-subarray/
 * https://leetcode.com/problems/avoid-flood-in-the-city/
 */

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
    let ts = [], se = new Set(), bisect = new Bisect();
    initialize();
    return { add, first, last, poll, pollLast, floor, ceiling, lower, higher, remove, contains, size, clear, show };
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
    function first() {
        return ts[0];
    }
    function last() {
        return ts[ts.length - 1];
    }
    function poll() {
        let res = ts[0];
        ts.splice(0, 1);
        se.delete(res);
        return res;
    }
    function pollLast() {
        let res = ts.pop();
        se.delete(res);
        return res;
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
    function show() {
        return ts;
    }
}

const pr = console.log;
const main = () => {
    let ts = new TreeSet([3, 7, 7, 1, 3]);
    pr(ts.toArray(ts));
    pr("\nfloor")
    pr(ts.floor(0)); // null
    pr(ts.floor(2)); // 1
    pr(ts.floor(3)); // 3
    pr(ts.floor(4)); // 3
    pr(ts.floor(100)); // 7

    pr("\nlower")
    pr(ts.lower(0)); // null
    pr(ts.lower(2)); // 1
    pr(ts.lower(3)); // 1
    pr(ts.lower(4)); // 3
    pr(ts.lower(100)); // 7

    pr("\nceiling")
    pr(ts.ceiling(100)); // null
    pr(ts.ceiling(7)); // 7
    pr(ts.ceiling(4)); // 7
    pr(ts.ceiling(3)); // 3
    pr(ts.ceiling(0)); // 1

    pr("\nhigher")
    pr(ts.higher(100)); // null
    pr(ts.higher(7)); // null
    pr(ts.higher(4)); // 7
    pr(ts.higher(3)); // 7
    pr(ts.higher(0)); // 1

    pr("")
    pr(ts.toArray(ts)); // [1, 3, 7];
    ts.remove(3);
    pr(ts.toArray(ts));
    ts.add(7);
    pr(ts.toArray(ts));
};

main()