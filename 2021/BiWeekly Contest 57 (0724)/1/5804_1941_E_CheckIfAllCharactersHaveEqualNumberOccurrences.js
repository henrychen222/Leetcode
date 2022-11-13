/**
 * 07/24/21 morning
 * https://leetcode.com/contest/biweekly-contest-57/problems/check-if-all-characters-have-equal-number-of-occurrences/
 */

const pr = console.log;

// Accepted
const areOccurrencesEqual = (s) => {
   let m = counter(s);
   let se = new Set();
   for (const [, occ] of m) se.add(occ);
   return se.size == 1;
};

const counter = (a_or_s) => { let map = new Map(); for (const i of a_or_s) map.set(i, map.get(i) + 1 || 1); return map; };

const main = () => {
    let s = "abacbc";
    let s2 = "aaabb";
    pr(areOccurrencesEqual(s))
    pr(areOccurrencesEqual(s2))
};

main()