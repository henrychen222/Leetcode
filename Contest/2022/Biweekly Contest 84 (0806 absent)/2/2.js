/**
 * 08/06/22 night
 * https://leetcode.com/contest/biweekly-contest-84/problems/count-number-of-bad-pairs/
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

const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };

// Accepted  33min
// num[i] - i = num[j] - j
const countBadPairs = (a) => {
    let n = a.length, d = [], tot = n * (n - 1) / 2, bi = new Bisect(), res = 0;
    for (let i = 0; i < n; i++) d.push(a[i] - i);
    let m = counter_value_in_indexA_in(d);
    // pr(d, m);
    for (let i = 0; i < n; i++) {
        let ia = m.get(d[i]), idx = bi.bisect_right(ia, i), cnt = ia.length - idx;
        res += cnt;
        // pr(d[i], cnt)
    }
    // pr("tot", tot, 'res', res);
    return tot - res;
};


const main = () => {
    let a = [4, 1, 3, 3];
    let a2 = [1, 2, 3, 4, 5]; // tot: 4 + 3 + 2 + 1 = 10
    let debug1 = [43,69,66,40,33];
    pr(countBadPairs(a))
    pr(countBadPairs(a2))
    pr(countBadPairs(debug1)) // 10
};

main()