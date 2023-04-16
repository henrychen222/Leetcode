/*
 * 12/10/22 evening
 * https://leetcode.com/contest/weekly-contest-323/problems/longest-square-streak-in-an-array/
 */

const pr = console.log;

const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };
const stmkey_in = (m) => new Map([...m].sort((x, y) => x[0] - y[0]));

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

// Accepted
const longestSquareStreak = (a) => {
    a.sort((x, y) => x - y);
    let m = counter_value_in_indexA_in(a), bi = new Bisect(), res = -1;
    m = stmkey_in(m);
    // pr(m)
    for (const [x, a] of m) {
        let cur = x, d = [x], pre = a[0];
        while (1) {
            let next = cur ** 2;
            // pr("next", next);
            if (m.has(next)) {
                let b = m.get(next), idx = bi.bisect_right(b, pre);
                // pr("b", b, idx)
                if (idx == b.length) {
                    break;
                } else {
                    d.push(next);
                    pre = b[idx];
                    cur = next;
                }
            } else {
                break;
            }
        }
        // pr(x, d);
        if (d.length >= 2) res = Math.max(res, d.length);
    }
    return res;
};


// const longestSquareStreak2 = (a) => {
//     a.sort((x, y) => x - y);
//     let res = -1, cur = 1, n = a.length;
//     pr(a)
//     for (let i = 1; i < n; i++) {
//         if (a[i] == a[i - 1] * a[i-1]) {
//             cur++;
//         } else {
//             cur = 1;
//         }
//         res = Math.max(res, cur);
//     }
//     return res;
// };

const main = () => {
    let a = [4, 3, 6, 16, 8, 2];
    let a2 = [2, 3, 5, 6, 7];
    pr(longestSquareStreak(a))
    pr(longestSquareStreak(a2))
};

main()