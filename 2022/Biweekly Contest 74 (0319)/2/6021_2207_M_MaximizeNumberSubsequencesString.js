/**
 * 03/19/22 morning
 * https://leetcode.com/contest/biweekly-contest-74/problems/maximize-number-of-subsequences-in-a-string/
 */

const pr = console.log;

// Accepted
const maximumSubsequenceCount = (s, p) => {
    let s0 = p[0] + s, s1 = s + p[1];
    let res1 = subSelection(s0, p), res2 = subSelection(s1, p);
    // pr(s0, res1, s1, res2);
    return Math.max(res1, res2);
};

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

const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };

const subSelection = (s, p) => {
    let m = counter_value_in_indexA_in(s), a = m.get(p[0]) || [], b = m.get(p[1]) || [], bi = new Bisect(), res = 0;
    // pr(s, m, a, b)
    for (let ia of a) {
       let ib = bi.bisect_right(b, ia);
       res += b.length - ib;
    }
    return res;
};

const main = () => {
    let text = "abdcdbc", pattern = "ac";
    let text2 = "aabb", pattern2 = "ab";
    let text_debug1 = "jdxm", pattern_debug1 = "pe";
    pr(maximumSubsequenceCount(text, pattern))
    pr(maximumSubsequenceCount(text2, pattern2))
    pr(maximumSubsequenceCount(text_debug1, pattern_debug1))
};

main()