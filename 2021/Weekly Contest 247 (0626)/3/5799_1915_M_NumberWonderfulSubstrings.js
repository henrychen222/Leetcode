/**
 * 06/26/21 evening
 * https://leetcode.com/contest/weekly-contest-247/problems/maximum-product-difference-between-two-pairs/
 */

const pr = console.log;

// TLE
const wonderfulSubstrings = (s) => {
    let n = s.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let flag = true;
        for (let j = i; j < n; j++) {
            if (!flag) {
                flag = true;
                break;
            }
            let sub = s.slice(i, j + 1);
            // pr(sub, ok(sub));
            if (ok(sub)) {
                flag = false;
                res++;
            }
        }
    }
    return res;
};

const counter = (a_or_s) => { let map = new Map(); for (const i of a_or_s) map.set(i, map.get(i) + 1 || 1); return map; };
const ok = (s) => {
    let m = counter(s);
    let cnt = 0;
    for (const [, occ] of m) {
        if (occ & 1) cnt++;
    }
    return cnt <= 1;
};

const main = () => {
    let word = "aba";
    let word2 = "aabb";
    let word3 = "he";
    pr(wonderfulSubstrings(word))
    pr(wonderfulSubstrings(word2))
    pr(wonderfulSubstrings(word3))
};

main()