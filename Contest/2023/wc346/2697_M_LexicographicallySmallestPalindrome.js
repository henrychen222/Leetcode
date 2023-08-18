/*
 * 05/20/23 evening
 * https://leetcode.com/contest/weekly-contest-346/problems/lexicographically-smallest-palindrome/
 */

const pr = console.log;

// Accepted
const makeSmallestPalindrome = (s) => {
    let n = s.length;
    s = s.split("");
    for (let i = 0; i < n >> 1; i++) {
        if (s[i] != s[n - 1 - i]) {
            if (s[i] < s[n - 1 - i]) {
                s[n - 1 - i] = s[i];
            } else {
                s[i] = s[n - 1 - i];
            }
        }
    }
    return s.join("");
};

const main = () => {
    let s = "egcfe";
    let s2 = "abcd";
    let s3 = "seven";
    pr(makeSmallestPalindrome(s))
    pr(makeSmallestPalindrome(s2))
    pr(makeSmallestPalindrome(s3))
};

main()