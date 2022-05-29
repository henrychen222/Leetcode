/**
 * 05/11/22 night
 * https://leetcode.com/problems/coin-change-2/
 */

const pr = console.log;

// Accepted --- 87ms 74.27%
const change = (amount, a) => {
    let n = a.length, dp = Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j - a[i] >= 0) {
                // pr(dp[j], dp[j-a[i]])
                dp[j] += dp[j - a[i]];
            }
        }
    }
    // pr(dp)
    return dp[amount];
};

const main = () => {
    let amount = 5,
        coins = [1, 2, 5];
    let amount2 = 3,
        coins2 = [2];
    let amount3 = 10,
        coins3 = [10]
    pr(change(amount, coins))
    pr(change(amount2, coins2))
    pr(change(amount3, coins3))
};

main()