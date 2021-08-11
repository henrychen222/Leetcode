/**
 * 08/10/21 night
 * https://leetcode.com/problems/flip-string-to-monotone-increasing/
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
            let mid = lo + hi >> 1;
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
            let mid = lo + hi >> 1;
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

// Accepted --- 116ms 17.65%
const minFlipsMonoIncr = (s) => {
    let n = s.length;
    let one = [];
    let bi = new Bisect();
    for (let i = 0; i < n; i++) {
        if (s[i] == '1') one.push(i);
    }
    let fi = one[0];
    let tot = one.length;
    let res = Number.MAX_SAFE_INTEGER;
    // pr(tot, one)
    for (let i = n - 1; i >= fi; i--) {
        if (s[i] == '0') continue;
        // pr()
        let rn = n - i;
        let pos = bi.bisect_left(one, i);
        // pr(i, 'pos', pos)
        let rcnt1 = tot - pos;
        let rcnt0 = rn - rcnt1;
        let ln = n - fi - rn;
        // pr('rn', rn, 'ln', ln)
        // pr('r', rcnt1, rcnt0)
        let lcnt1 = pos;
        let lcnt0 = ln - lcnt1;
        // pr('l', lcnt1, lcnt0)
        let lmin = Math.min(lcnt0, lcnt1);
        // pr(lmin, rcnt0)
        res = Math.min(res, lmin + rcnt0);
    }
    res = Math.min(res, tot);
    return res;
};

const pr = console.log;
const main = () => {
    let s = "00110";
    let s2 = "010110";
    let s3 = "00011000";
    let debug1 = "0101100011";
    pr(minFlipsMonoIncr(s))
    pr(minFlipsMonoIncr(s2))
    pr(minFlipsMonoIncr(s3))
    pr(minFlipsMonoIncr(debug1)) // 3
};

main()