/**
 * 07/10/21 evening
 * https://leetcode.com/contest/weekly-contest-249/problems/unique-length-3-palindromic-subsequences/
 */

const pr = console.log;

// Accepted
const counter = (a_or_s) => { let map = new Map(); for (const i of a_or_s) map.set(i, map.get(i) + 1 || 1); return map; };
const countPalindromicSubsequence = (s) => {
    let back = counter(s);
    let front = new Map();
    // pr(front, back);
    let se = new Set();
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let mid = s[i];
        back.set(mid, (back.get(mid) || 0) - 1);
        // back.set(mid, back.get(mid) - 1 || -1);
        for (let j = 0; j < 26; j++) {
            let c = String.fromCharCode(j + 97);
            // pr(c);
            if (front.get(c) && back.get(c)) { // exist in both map, and both occ > 0
                // if (front.has(c) && front.get(c) != 0 && back.has(c) && back.get(c) != 0) {
                // pr(c, front.get(c), back.get(c), c + mid + c)
                se.add(c + mid + c);
            }
        }
        front.set(mid, (front.get(mid) || 0) - 1);
        // front.set(mid, front.get(mid) - 1 || -1);
        // pr(front, back);
    }
    // pr(se);
    return se.size;
};

const main = () => {
    let s = "aabca";
    let s2 = "adc";
    let s3 = "bbcbaba";
    pr(countPalindromicSubsequence(s))
    pr(countPalindromicSubsequence(s2))
    pr(countPalindromicSubsequence(s3));
};

main()