/* 
 * 02/18/23 evening
 * https://leetcode.com/contest/weekly-contest-333/problems/minimum-operations-to-reduce-an-integer-to-0/
 */

const pr = console.log;

const cutMaxConsecutive = (as) => { let d = [], l = 0, n = as.length; for (let i = 0; i + 1 < n; i++) { if (as[i + 1] != as[i]) { d.push(as.slice(l, i + 1)); l = i + 1; } } d.push(as.slice(l)); return d; };

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
    return { add, first, last, poll, pollLast, floor, ceiling, lower, higher, remove, has, size, clear, show };
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
    function has(e) {
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

// Accepted
// fix 02/18/22 night
const minOperations = (N) => {
    let s = N.toString(2), n = s.length, ts = new TreeSet(), cnt = 0, d = cutMaxConsecutive(s), res1 = 0;
    for (const e of d) {
        if (e[0] == '1') {
            res1 += e.length == 1 ? 1 : 2;
        }
    }
    for (let i = 0; i < n; i++) {
        if (s[i] == '1') ts.add(i);
    }
    // pr(s, ts.show());
    // for (let t = 1; t <= 10; t++) {
    while (ts.size() > 1) {
        // pr(ts.show(), "cnt", cnt);
        while (1) {
            let cur = ts.last(), pre = ts.lower(cur);
            // pr("cur", cur, "pre", pre, ts.show());
            ts.remove(cur);
            if (cur - 1 == pre) {
            } else { // 7 4 
                let last = cur - 1;
                if (last - 1 == pre) {
                    ts.add(last);
                } else {
                    cnt++; // single
                }
                break;
            }
        }
        cnt++; // merge
    }
    let res2 = cnt + ts.size();
    // pr("222", ts.show(), "cnt", cnt, "res2", res2, "res1", res1);
    return Math.min(res1, res2);
};

///////////////////////////////////////////////////////////////////////////////////
// WA
const minOperations2 = (N) => {
    let s = N.toString(2), n = s.length, a = [], cnt = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] == '1') a.push(i);
    }
    pr(s)
    for (let t = 1; t <= 10; t++) {
        // while (a.length > 1) {
        pr(a)
        let consec = 0;
        for (let i = a.length - 2; ~i; i--) {
            let diff = a[i] - a[i - 1], last = a[i] - 1;
            // pr(a[i-1], a[i], diff)
            if (diff == 1) {
                consec++;
            } else {
                if (consec > 0) {
                    a = a.slice(0, i);
                    a.push(last);
                    cnt++;
                    consec = 0;
                    break;
                }
            }
        }
    }
    pr("333", a, cnt)
    return cnt + a.length;
};

// WA
const minOperations1 = (N) => {
    let s = N.toString(2), n = s.length, d = cutMaxConsecutive(s), res1 = 0;
    for (const e of d) {
        if (e[0] == '1') {
            res1 += e.length == 1 ? 1 : 2;
        }
    }
    let ts = new TreeSet(), cnt = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] == '1') ts.add(i);
    }
    pr(s, ts.show());
    while (ts.size() > 1) {
        let max = ts.last();
        pr(ts.show(), "max", max, "cnt", cnt);
        while (ts.has(max - 1)) {
            // pr("remove", ts.show(), max);
            ts.remove(max);
            ts.remove(max - 1);
            max--;
        }
        pr("max222", max)
        if (ts.has(max-1)) {
            ts.add(max);
        }
        cnt++;
    }
    pr("222", ts.show(), "cnt", cnt, res1);
    return Math.min(cnt + 1, res1);
};

const main = () => {
    let n = 39;
    let n2 = 54;
    let n_debug1 = 38;
    let n_debug2 = 9078;
    let n_debug3 = 26;
    let n_debug4 = 1;
    let n_debug5 = 33;
    let n_debug6 = 870;
    pr(minOperations(n))
    pr(minOperations(n2))
    pr(minOperations(n_debug1)) // 3
    pr(minOperations(n_debug2)) // 5
    pr(minOperations(n_debug3)) // 3
    pr(minOperations(n_debug4)) // 1
    pr(minOperations(n_debug5)) // 2
    pr(minOperations(n_debug6)) // 5
};

main()

/*

39

38-(2^2) = 34
34-(2^1) = 32
32-(2^5) = 0
*/
