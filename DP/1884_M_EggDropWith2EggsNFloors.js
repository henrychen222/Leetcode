/**
 * 01/20/22 afternoon
 * https://leetcode.com/problems/super-egg-drop/
 * 
 * reference:
 * https://leetcode.com/problems/super-egg-drop/
 */

// Accepted --- 76ms 83.33%
const twoEggDrop = (n) => {
    let k = 2, dp = Array(k + 1).fill(0), res = 0;
    while (dp[k] < n) {
        for (let i = k; i > 0; i--) {
            dp[i] = dp[i] + dp[i - 1] + 1;
        }
        res++;
    }
    return res;
};