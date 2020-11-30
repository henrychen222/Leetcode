/**
 * 11.2 evening
 * https://leetcode.com/problems/coin-change/
 */

// Accepted --- 88ms 98.97% best
// reference: https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-322-coin-change/
let res;
const coinChange = (coins, amount) => {
    coins.sort((a, b) => b - a);
    res = Number.MAX_VALUE;
    dfs2(coins, 0, amount, 0);
    return res == Number.MAX_VALUE ? -1 : res;
};

const dfs2 = (coins, idx, amount, cnt) => {
    if (amount == 0) {
        res = Math.min(res, cnt);
        return;
    }
    if (idx == coins.length) return;
    let coin = coins[idx];
    // console.log(amount, coin, coins.length);
    for (let i = parseInt(amount / coin); i >= 0 && cnt + i < res; i--) {
        dfs2(coins, idx + 1, amount - i * coin, cnt + i);
    }
};

// Accepted --- 240ms 12.20%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/5138186.html
 * https://leetcode.com/problems/coin-change/discuss/77368/*Java*-Both-iterative-and-recursive-solutions-with-explanations
 */
let n;
const coinChange1 = (coins, amount) => {
    n = coins.length;
    let memo = new Map();
    memo.set(0, 0);
    return dfs(coins, amount, memo);
};

const dfs = (coins, rem, memo) => {
    if (rem < 0) return -1;
    if (memo.has(rem)) return memo.get(rem);
    let min = Number.MAX_VALUE;
    for (let i = 0; i < n; i++) {
        let tmp = dfs(coins, rem - coins[i], memo);
        if (tmp >= 0) {
            min = Math.min(min, tmp + 1);
        }
    }
    // console.log(rem, min, memo);
    memo.set(rem, min == Number.MAX_VALUE ? -1 : min);
    return memo.get(rem);
};

// Accepted --- 124ms 57.98%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/5138186.html#3974321
 * https://leetcode.com/problems/coin-change/discuss/77360/C%2B%2B-O(n*amount)-time-O(amount)-space-DP-solution
 */
const coinChange_DP = (coins, amount) => {
    let n = coins.length;
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < n; j++) {
            if (coins[j] <= i) {
                // coins[j]为第j个硬币, i - coins[j]为钱数i减去其中一个硬币的值. 剩余的钱数在dp数组中找到值，然后加1和当前dp数组中的值做比较，取较小的那个更新dp数组
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    // console.log(dp);
    return dp[amount] > amount ? -1 : dp[amount];
};

const main = () => {
    let coins = [1, 2, 5],
        amount = 11;
    let coins2 = [2],
        amount2 = 3;
    let coins3 = [1],
        amount3 = 0;
    let coins4 = [1],
        amount4 = 1;
    let coins5 = [1],
        amount5 = 2;
    console.log(coinChange(coins, amount));
    console.log(coinChange(coins2, amount2));
    console.log(coinChange(coins3, amount3));
    console.log(coinChange(coins4, amount4));
    console.log(coinChange(coins5, amount5));
};

main()