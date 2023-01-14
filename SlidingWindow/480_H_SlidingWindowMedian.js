/*
 * 01/07/22 afternoon
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

// Accepted --- 810ms 19.18%
const medianSlidingWindow1 = (a, k) => {
    let m = new TreeMap(), res = [], n = a.length;
    for (let i = 0; i < n; i++) {
        addOneOrManyMap(m, a[i]);
        let l = i - k + 1;
        if (l >= 0) {
            // pr("cur", a.slice(l, i + 1), m.show())
            if (k & 1) {
                let v = m.findKth(Math.ceil(k / 2));
                res.push(v);
            } else {
                let L = m.findKth(k / 2), R = m.findKth(k / 2 + 1);
                // pr(L, R, k / 2, k / 2+1)
                res.push((L + R) / 2);
            }
            removeOneOrManyMap(m, a[l]);
        }
    }
    return res;
};

///////////////////////////////////////////////////////////////////////
function MultiSet(elements) {
    let a = [], m = new Map(), bi = new Bisect();
    initialize();
    return { insert, first, last, get, search, poll, pollLast, lower_bound, upper_bound, findKth, eraseByIndex, eraseOne, eraseAll, contains, size, clear, show };
    function initialize() {
        if (elements) {
            for (const x of elements) {
                bi.insort_right(a, x);
                m.set(x, m.get(x) + 1 || 1);
            }
        }
    }
    function insert(x) {
        bi.insort_right(a, x);
        m.set(x, m.get(x) + 1 || 1);
    }
    function first() {
        return a[0];
    }
    function last() {
        return a[a.length - 1];
    }
    function get(i) {
        return a[i];
    }
    function poll() {
        let res = a[0];
        a.splice(0, 1);
        removeOneOrManyMap(m, res);
        return res;
    }
    function pollLast() {
        let res = a.pop();
        removeOneOrManyMap(m, res);
        return res;
    }
    function lower_bound(x) {
        return bi.bisect_left(a, x);
    }
    function upper_bound(x) {
        return bi.bisect_right(a, x);
    }
    function findKth(k) {
        return a[k - 1];
    }
    function search(x) {
        return lower_bound(x);
    }
    function eraseByIndex(idx) {
        removeOneOrManyMap(m, a[idx]);
        a.splice(idx, 1);
    }
    function eraseOne(x) {
        let idx = lower_bound(x);
        if (a[idx] == x) a.splice(idx, 1);
        removeOneOrManyMap(m, x);
    }
    function eraseAll(x) {
        if (contains(x)) {
            let idx = search(x), occ = m.get(x);
            while (occ--) a.splice(idx, 1);
            m.delete(x);
        }
    }
    function removeOneOrManyMap(m, x, cnt = 1) {
        let occ = m.get(x);
        occ > cnt ? m.set(x, occ - cnt) : m.delete(x);
    }
    function contains(x) {
        return m.has(x);
    }
    function size() {
        return a.length;
    }
    function clear() {
        a = [];
        m.clear();
    }
    function show() {
        return a;
    }
}

// Accepted --- 136ms 90.28%    01/13/22 evening
// Accepted --- 129ms 93.6%(rewrite) 01/13/22 night
const medianSlidingWindow = (a, k) => {
    let s = new MultiSet(), res = [], n = a.length;
    for (let i = 0; i < n; i++) {
        s.insert(a[i]);
        let l = i - k + 1;
        if (l >= 0) {
            if (k & 1) {
                let v = s.findKth(Math.ceil(k / 2));
                res.push(v);
            } else {
                let L = s.findKth(k / 2), R = s.findKth(k / 2 + 1);
                res.push((L + R) / 2);
            }
            s.eraseOne(a[l]);
        }
    }
    return res;
};

const main = () => {
    let a = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;
    let a2 = [1, 2, 3, 4, 2, 3, 1, 4, 2], k2 = 3
    let a_debug1 = [2147483647, 2147483647], k_debug1 = 2
    pr(medianSlidingWindow(a, k))
    pr(medianSlidingWindow(a2, k2))
    pr(medianSlidingWindow(a_debug1, k_debug1)) // [ 2147483647 ]
};

main()