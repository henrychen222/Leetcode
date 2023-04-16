/*
 * 11/26/22 evening
 * https://leetcode.com/contest/weekly-contest-321/problems/append-characters-to-string-to-make-subsequence/
 */

const pr = console.log;


// const isSubsequence = (s, t) => { let sn = s.length; let tn = t.length; let i = j = 0; while (i < sn && j < tn) { if (s[i] == t[j]) { i++; j++; } else { i++; } } return j == tn; };

// const appendCharacters1 = (s, t) => {
//     let cur = '';
//     for (const c of t) {
//         if (!isSubsequence(s, cur)) {
//             // pr(cur);
//             return t.length - cur.length + 1;
//         }
//         cur += c;
//     }
//     // return 0;
// };

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

// Accepted
const appendCharacters = (s, t) => {
    let ms = counter_value_in_indexA_in(s), mt = counter_value_in_indexA_in(t), pre = -1, bi = new Bisect();
    // pr(ms, mt);
    for (let i = 0; i < t.length; i++) {
        let a = ms.get(t[i]) || [], idx = bi.bisect_right(a, pre);
        if (idx == a.length) {
            // pr(i, t[i])
            return t.length - i;
        } else {
            pre = a[idx];
        }
    }
    return 0;
};

const main = () => {
    let s = "coaching", t = "coding";
    let s2 = "abcde", t2 = "a";
    let s3 = "z", t3 = "abcde";
    let s_debug1 = "a", t_debug1 = "z";
    pr(appendCharacters(s, t))
    pr(appendCharacters(s2, t2))
    pr(appendCharacters(s3, t3))
    pr(appendCharacters(s_debug1, t_debug1)) // 1
};

main()