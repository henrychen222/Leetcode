/**
 * 06/12/21 evening
 * https://leetcode.com/contest/weekly-contest-245/problems/redistribute-characters-to-make-all-strings-equal/
 */

const pr = console.log;

// Accepted
const makeEqual = (w) => {
    let m = new Map();
    for (const s of w) {
        for (const c of s) {
            m.set(c, m.get(c) + 1 || 1);
        }
    }
    // pr(m)
    let n = w.length;
    for (const [, occ] of m) {
        if (occ % n != 0) return false;
    }
    return true;
};

const main = () => {
    let words = ["abc", "aabc", "bc"];
    let words2 = ["ab", "a"];
    pr(makeEqual(words))
    pr(makeEqual(words2))
};

main()