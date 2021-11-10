/**
 * 10/30/21 afternoon
 * https://leetcode.com/problems/plates-between-candles/
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

const cutMaxConsecutive = (a_or_s) => { let d = [], start = 0, n = a_or_s.length; for (let i = 0; i + 1 < n; i++) { if (a_or_s[i + 1] != a_or_s[i]) { d.push(a_or_s.slice(start, i + 1)); start = i + 1; } } d.push(a_or_s.slice(start)); return d; };

// Accepted --- 3672ms
const platesBetweenCandles = (ss, queries) => {
    let aa = cutMaxConsecutive(ss);
    let L = [], R = [];
    let preL = 0;
    for (const s of aa) {
        if (s[0] == '*') {
            let l = preL, r = l + s.length - 1;
            if (l - 1 >= 0 && r + 1 < ss.length) {
                L.push(l - 1);
                R.push(r + 1);
            }
        }
        preL += s.length;
    }
    // pr(aa);
    // pr("start", L);
    // pr("end", R);
    let res = [];
    let bi = new Bisect();
    for (const [curL, curR] of queries) {
        let cnt = 0;
        let li = bi.bisect_left(L, curL);
        // let ri = bi.bisect_right(R, curR);
        // pr(li, ri);
        for (let i = li; i < L.length; i++) {
            let l = L[i], r = R[i];
            let len = r - l + 1 - 2;
            if (l > curR) break;
            if (curL <= l && curR >= r) {
                // pr("add", l, r, len);
                cnt += len;
            }
        }
        res.push(cnt);
    }
    return res;
};

const pr = console.log;
const main = () => {
    let s = "**|**|***|",
        queries = [
            [2, 5],
            [5, 9]
        ];
    let s2 = "***|**|*****|**||**|*",
        queries2 = [
            [1, 17],
            [4, 5],
            [14, 17],
            [5, 11],
            [15, 16]
        ];
    pr(platesBetweenCandles(s, queries))
    pr(platesBetweenCandles(s2, queries2))
};

main()