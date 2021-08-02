/**
 * 08/01/21 evening
 * https://leetcode.com/problems/count-number-of-special-subsequences/
 */

// Accepted --- 124ms 100%
// referenen: https://leetcode.com/contest/weekly-contest-252/ranking Tlatoani
const mod = 1e9 + 7;
const countSpecialSubsequences = (a) => {
    let dp = Array(3).fill(0);
    for (const x of a) {
        dp[x] *= 2;
        x == 0 ? dp[x]++ : dp[x] += dp[x - 1];
        dp[x] %= mod;
    }
    // pr(dp)
    return dp[2];
};

const pr = console.log;
const main = () => {
    let nums = [0, 1, 2, 2];
    let nums2 = [2, 2, 0, 0];
    let nums3 = [0, 1, 2, 0, 1, 2];
    pr(countSpecialSubsequences(nums))
    pr(countSpecialSubsequences(nums2))
    pr(countSpecialSubsequences(nums3))
};

main()