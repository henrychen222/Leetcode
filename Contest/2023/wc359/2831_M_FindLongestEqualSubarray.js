/*
 * 08/19/23 evening
 * https://leetcode.com/contest/weekly-contest-359/problems/find-the-longest-equal-subarray/
 */

const pr = console.log;

const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };

// Accepted
// reference: uwi
const longestEqualSubarray = (a, k) => {
    let m = counter_value_in_indexA_in(a), res = 0;
    for (const [, ia] of m) {
        let l = 0;
        for (let i = 0; i < ia.length; i++) {
            while (l < i && ia[i] - ia[l] + 1 - (i - l + 1) > k) l++;
            res = Math.max(res, i - l + 1);
        }
    }
    return res;
};

const main = () => {
    let a = [1, 3, 2, 3, 1, 3], k = 3;
    let a2 = [1, 1, 2, 2, 1, 1], k2 = 2
    pr(longestEqualSubarray(a, k))
    pr(longestEqualSubarray(a2, k2))
};

main()