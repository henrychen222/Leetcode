/**
 * 8.14 night
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

// Accepted --- 256ms 37.4MB 19.14%
const maxProfit = (prices) => {
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] > prices[i]) {
                max = Math.max(max, prices[j] - prices[i]);
            }
        }
    }
    return max;
};

const main = () => {
    let prices = [7, 1, 5, 3, 6, 4];
    let prices2 = [7, 6, 4, 3, 1];
    console.log(maxProfit(prices));
    console.log(maxProfit(prices2));
};

main()