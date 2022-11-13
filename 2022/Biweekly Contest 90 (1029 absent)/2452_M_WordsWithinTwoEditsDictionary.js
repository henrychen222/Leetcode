/*
 * 10/30/22 night
 * https://leetcode.com/contest/biweekly-contest-90/problems/words-within-two-edits-of-dictionary/
 */

const pr = console.log;

// Accepted
const twoEditWords = (a, b) => {
    let res = [];
    for (const s of a) {
        let ok = false;
        for (const t of b) {
            if (can(s, t)) {
                ok = true;
                break;
            }
        }
        if (ok) res.push(s);
    }
    return res;
};

const can = (s, t) => {
    let n = s.length, diff = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] != t[i]) diff++;
    }
    return diff <= 2;
};

const main = () => {
    let a = ["word", "note", "ants", "wood"], b = ["wood", "joke", "moat"];
    let a2 = ["yes"], b2 = ["not"];
    let a_debug1 = ["tsl", "sri", "yyy", "rbc", "dda", "qus", "hyb", "ilu", "ahd"], b_debug1 = ["uyj", "bug", "dba", "xbe", "blu", "wuo", "tsf", "tga"];
    pr(twoEditWords(a, b))
    pr(twoEditWords(a2, b2))
    pr(twoEditWords(a_debug1, b_debug1)) // ["tsl","yyy","rbc","dda","qus","hyb","ilu"]
};

main()