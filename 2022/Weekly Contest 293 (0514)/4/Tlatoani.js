/**
 * 05/14/22 evening
 * https://leetcode.com/contest/weekly-contest-293/problems/count-integers-in-intervals/
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
    return { put, ceilingKey, higherKey, lowerKey, floorKey, ceilingEntry, higherEntry, lowerEntry, floorEntry, remove, contains, size, clear, show };
    function initialize() {
        if (g) {
            for (const [k, v] of g) {
                if (!m.has(k)) bisect.insort_right(ts, k);
                m.set(k, v);
            }
        }
    }
    function put(k, v) {
        if (!m.has(k)) bisect.insort_right(ts, k); // ts has no duplicates/unique key
        m.set(k, v); // update key with most recent value
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

// Accepted --- 2206ms, 1849ms (good treemap, no duplicates)
// Accepted --- 1650ms (wrong treemap, has duplicates in ts)
function CountIntervals() {
    let tm = new TreeMap(), cnt = 0;
    return { add, count }
    function add(left, right) {
        let lower = tm.floorEntry(left);
        if (lower != null && lower.value >= left) {
            let k = lower.key, v = lower.value;
            cnt -= v - k + 1;
            left = Math.min(left, k);
            right = Math.max(right, v);
            tm.remove(k);
        }
        // pr("111", tm.show(), left, right)
        while (1) {
           let higher = tm.ceilingEntry(left);
           // pr("higher", higher)
           if (higher == null || higher.key > right) break;
           let k = higher.key, v = higher.value;
           // pr("higher", higher, "right", right)
           tm.remove(k);
           cnt -= v - k + 1;
           right = Math.max(right, v);
        }
        // pr("222", tm.show(), left, right)
        cnt += right - left + 1;
        tm.put(left, right);
        // pr("333", tm.show(), left, right)
    }
    function count() {
        return cnt;
    }
}

const main = () => {
    let countIntervals = new CountIntervals();
    countIntervals.add(2, 3);
    countIntervals.add(7, 10);
    pr(countIntervals.count()); // 6
    countIntervals.add(5, 8);
    pr(countIntervals.count()); // 8

    pr("")
    let debug1 = new CountIntervals();
    pr(debug1.count());
    debug1.add(8, 43);
    debug1.add(13, 16);
    debug1.add(26, 33);
    debug1.add(28, 36);
    debug1.add(29, 37);
    pr(debug1.count());
    debug1.add(34, 46);
    debug1.add(10, 23); // 36
};

main()