/**
 * 02/26/22 evening
 * https://leetcode.com/contest/weekly-contest-282/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };

// Accepted
const minSteps = (s, t) => {
    let ms = counter(s), mt = counter(t), res = 0;
    for (const [c, occ] of ms) {
        if (mt.has(c)) {
            let tocc = mt.get(c);
            res += Math.abs(occ - tocc);
        } else {
            res += occ;
        }
    }
    for (const [c, occ] of mt) {
        if (ms.has(c)) {
            // let socc = ms.get(c);
            // res += Math.abs(occ - socc);
        } else {
            res += occ;
        }
    }
    return res;
};

const main = () => {
    let s = "leetcode", t = "coats";
    let s2 = "night", t2 = "thing";
    let s_debug1 = "cotxazilut", t_debug1 = "nahrrmcchxwrieqqdwdpneitkxgnt";
    pr(minSteps(s, t))
    pr(minSteps(s2, t2))
    pr(minSteps(s_debug1, t_debug1)) // 27
};

main()