/**
 * 08/06/22 evening
 * https://leetcode.com/contest/weekly-contest-305/problems/longest-ideal-subsequence/
 */

const pr = console.log;

const ord = (c) => c.charCodeAt();

// Accepted
// reference: Tlatoani kmjp
const longestIdealString = (s, k) => {
    let dp = Array(26).fill(0);
    for (const c of s) {
        let max = 0, i = ord(c) - 97;
        for (let j = 0; j < 26; j++) {
            if (Math.abs(i - j) <= k) max = Math.max(max, dp[j]);
        }
        dp[i] = max + 1;
    }
    // pr(dp)
    return Math.max(...dp);
};

const main = () => {
    let s = "acfgbd", k = 2;
    let s2 = "abcd", k2 = 3;
    pr(longestIdealString(s, k))
    pr(longestIdealString(s2, k2))
};

main()