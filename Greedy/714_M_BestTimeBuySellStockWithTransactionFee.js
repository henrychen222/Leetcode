/**
 * 5.26 night
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 */

/**
 * https://www.cnblogs.com/grandyang/p/7776979.html
 * Accepted --- 88ms 49.6MB
 */
const maxProfit_cnblog = (prices, fee) => {
    let sold = [];
    let hold = [];
    fillArr(sold, prices.length - 1);
    fillArr(hold, prices.length - 1);
    hold[0] = -prices[0];
    // console.log(sold);
    // console.log(hold);
    for (let i = 1; i < prices.length; ++i) { // DP方程式
        sold[i] = Math.max(sold[i - 1], hold[i - 1] + prices[i] - fee);
        hold[i] = Math.max(hold[i - 1], sold[i - 1] - prices[i]);
    }
    // console.log(sold);
    return sold[sold.length - 1];
};

const fillArr = (arr, n) => {
    for (let i = 0; i <= n; i++) {
        arr.push(0);
    }
};

/**
 * https://www.cnblogs.com/grandyang/p/7776979.html
 * Accepted --- 84ms 43.6MB 63.82%
 */
const maxProfit_cnblog2 = (prices, fee) => {
    let sold = 0,
        hold = -prices[0];
    for (const price of prices) {
        let t = sold;
        sold = Math.max(sold, hold + price - fee);
        hold = Math.max(hold, t - price);
    }
    return sold;
};

const main = () => {
    let prices = [1, 3, 2, 8, 4, 9],
        fee = 2;
    console.log(maxProfit_cnblog(prices, fee));
    console.log(maxProfit_cnblog2(prices, fee));
};

main()