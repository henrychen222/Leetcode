/**
 * 11.25 night
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 */

// Accepted --- 80ms 82.12%
// method 1 and 2 is the same
const maxProfit = (prices) => {
    let profit = preBuy = preSell = 0;
    let buy = Number.MIN_SAFE_INTEGER;
    for (const p of prices) {
        buy = Math.max(preBuy = buy, preSell - p);
        profit = Math.max(preSell = profit, preBuy + p);
    }
    return profit;
};

// Accepted --- 88ms 47.49%
// reference: https://www.tutorialspoint.com/best-time-to-buy-and-sell-stock-with-cooldown-in-cplusplus
const maxProfit2 = (prices) => {
    let profit = preBuy = preSell = 0;
    let buy = Number.MIN_SAFE_INTEGER;
    for (const p of prices) {
        preBuy = buy;
        buy = Math.max(buy, preSell - p);
        preSell = profit;
        profit = Math.max(profit, preBuy + p);
    }
    return profit;
};

// Accepted --- 96ms 24.58%
/**
 * reference: 
 * https://www.cnblogs.com/grandyang/p/4997417.html
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/discuss/75927/Share-my-thinking-process
 */
const maxProfit1 = (prices) => {
    let profit = preBuy = preSell = 0;
    let buy = Number.MIN_SAFE_INTEGER;
    for (const p of prices) {
        preBuy = buy;
        buy = Math.max(preSell - p, preBuy);
        preSell = profit;
        profit = Math.max(preBuy + p, preSell);
    }
    return profit;
};

const main = () => {
    let prices = [1, 2, 3, 0, 2];
    let debug = [1];
    console.log(maxProfit(prices));
    console.log(maxProfit(debug));
};

main()