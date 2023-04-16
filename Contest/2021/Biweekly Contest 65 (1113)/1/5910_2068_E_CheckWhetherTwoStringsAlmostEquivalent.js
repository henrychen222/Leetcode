/**
 * 10/13/12 morning
 * https://leetcode.com/contest/biweekly-contest-65/problems/check-whether-two-strings-are-almost-equivalent/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };

// Accepted
const checkAlmostEquivalent = (s1, s2) => {
    let m1 = counter(s1), m2 = counter(s2);
    for (const [x, occ] of m1) {
        let occ2 = m2.get(x) || 0;
        if (Math.abs(occ - occ2) > 3) {
            return 0;
        }
    }
    for (const [x, occ2] of m2) {
        let occ = m1.get(x) || 0;
        if (Math.abs(occ - occ2) > 3) {
            return 0;
        }
    }
    return 1;
};
