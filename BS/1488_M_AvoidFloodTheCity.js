/**
 * 04/07/22 evening  night complete
 * https://leetcode.com/problems/avoid-flood-in-the-city/
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

function TreeSet(elements) {
    let ts = [], se = new Set(), bisect = new Bisect();
    if (elements) addAll(elements);
    return { add, floor, ceiling, lower, higher, remove, contains, size, clear, toArray };
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
    function ceiling(e) { // >=  c++ set lower_bound
        let idx = bisect.bisect_right(ts, e);
        return ts[idx - 1] == e ? e : ts[bisect.bisect_right(ts, e)];
    }
    function floor(e) { // <= 
        let idx = bisect.bisect_left(ts, e);
        return ts[idx] == e ? e : ts[bisect.bisect_left(ts, e) - 1];
    }
    function lower(e) { // <
        let idx = bisect.bisect_left(ts, e);
        return ts[idx] < e ? ts[idx] : ts[bisect.bisect_left(ts, e) - 1];
    }
    function higher(e) { // >  c++ set upper_bound
        let idx = bisect.bisect_right(ts, e);
        return ts[idx] > e ? ts[idx] : ts[bisect.bisect_right(ts, e) + 1];
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
    }
    function toArray() {
        return ts;
    }
}


// Accepted --- 1647ms 5.00% 
// Accepted --- 1295ms 15.00%
/**
 * https://leetcode.com/problems/avoid-flood-in-the-city/discuss/697701/Java-nlog(n)-find-zero-that-can-be-used-to-empty-the-fullfilled-lake
 * https://www.cnblogs.com/cnoodle/p/13176571.html
 */
const avoidFlood = (a) => {
    let n = a.length, res = Array(n).fill(-1), notRain = new TreeSet(), m = new Map();
    for (let i = 0; i < n; i++) {
        if (a[i] == 0) {
            notRain.add(i);
            res[i] = 1;
        } else {
            if (m.has(a[i])) {
                // pr("notRain", notRain.toArray(), m.get(a[i]))
                let next = notRain.ceiling(m.get(a[i]));
                // pr(i, a[i], "next", next)
                if (next == undefined) return [];
                res[next] = a[i];
                notRain.remove(next);
            }
            m.set(a[i], i);
        }
    }
    return res;
};

// WA
const avoidFlood1 = (a) => {
    let n = a.length, lake = Array(n).fill(0), res = Array(n).fill(-1), flood = false;
    for (let i = 0; i < n; i++) {
        if (a[i] == 0) {
            // pr(lake, res)
            for (let j = 0; j < n; j++) {
                if (lake[j]) {
                    lake[j] = 0;
                    res[i] = j + 1;
                    break;
                }
            }
            // pr("dry", lake, res)
        } else {
            let idx = a[i] - 1;
            if (lake[idx] == 0) {
                lake[idx] = 1;
            } else {
                flood = true;
            }
        }
    }
    // pr(lake);
    return flood ? [] : res;
};


const pr = console.log;
const main = () => {
    let rains = [1, 2, 3, 4];
    let rains2 = [1, 2, 0, 0, 2, 1];
    let rains3 = [1, 2, 0, 1, 2];
    let debug1 = [69, 0, 0, 0, 69]; // [-1,69,1,1,-1]
    let debug2 = [1,0,2,0,2,1];
    pr(avoidFlood(rains))
    pr(avoidFlood(rains2))
    pr(avoidFlood(rains3))
    pr(avoidFlood(debug1))
    pr(avoidFlood(debug2)) // [-1,1,-1,2,-1,-1]

};

main()