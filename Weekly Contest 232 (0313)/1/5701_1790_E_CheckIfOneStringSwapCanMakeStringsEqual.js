/**
 * 03/13/21 evening
 * https://leetcode.com/contest/weekly-contest-232/problems/check-if-one-string-swap-can-make-strings-equal/
 */

const pr = console.log;

// Accepted
const areAlmostEqual = (s1, s2) => {
    let n = s1.length;
    let a1 = [];
    let a2 = [];
    for (let i = 0; i < n; i++) {
        if (s1[i] != s2[i]) {
            a1.push(s1[i]);
            a2.push(s2[i]);
        }
    }
    a1.sort((x, y) => x.localeCompare(y));
    a2.sort((x, y) => x.localeCompare(y));
    pr(a1, a2)
    if (a1.length > 2 || a2.length > 2) return false;
    if (a1[0] != a2[0] || a1[1] != a2[1]) return false;
    return true;
};

const main = () => {
    let s1 = "bank", s2 = "kanb";
    let s1_2 = "attack", s2_2 = "defend";
    let s1_3 = "kelb", s2_3 = "kelb";
    let s1_4 = "abcd", s2_4 = "dcba";
    pr(areAlmostEqual(s1, s2))
    pr(areAlmostEqual(s1_2, s2_2))
    pr(areAlmostEqual(s1_3, s2_3))
    pr(areAlmostEqual(s1_4, s2_4))
};

main()