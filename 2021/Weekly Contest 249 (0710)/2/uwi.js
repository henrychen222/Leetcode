/**
 * 07/10/21 evening
 * https://leetcode.com/contest/weekly-contest-249/problems/unique-length-3-palindromic-subsequences/
 */

const pr = console.log;

// Accepted --- 3264ms
const countPalindromicSubsequence = (s) => {
    let res = 0;
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {
            let len = 0;
            for (const c of s) {
                if (len == 0) {
                    if (c.charCodeAt() - 97 == i) len++; // first char
                } else if (len == 1) {
                    if (c.charCodeAt() - 97 == j) len++; // second char
                } else if (len == 2) {
                    if (c.charCodeAt() - 97 == i) len++; // third char
                }
                pr(c, len, res)
            }
            if (len == 3) res++;
        }
    }
    return res;
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