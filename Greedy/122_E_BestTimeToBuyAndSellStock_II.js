/**
 * 4.27 evening
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */

/**
 * https://www.cnblogs.com/grandyang/p/4280803.html
 * Accepeted --- 60ms 35.6MB 64.70%
 */
const maxProfit_cnblogs = (prices) => {
    let profits = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        // 如果当前价格比之前价格高，则把差值加入利润中，因为我们可以昨天买入，今日卖出，若明日价更高的话，还可以今日买入，明日再抛出
        if (prices[i + 1] > prices[i]) {
            profits += prices[i + 1] - prices[i];
        }
    }
    return profits;
};

/**
 * https://www.programcreek.com/2014/02/leetcode-best-time-to-buy-and-sell-stock-ii-java/
 * Accepted --- 52ms 35.4MB 94.47%
 */
const maxProfit_programcreek = (prices) => {
    let profits = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profits += prices[i] - prices[i - 1];
        }
    }
    return profits;
};

const main = () => {
    let stock = [7, 1, 5, 3, 6, 4];
    let stock2 = [1, 2, 3, 4, 5];
    let stock3 = [7, 6, 4, 3, 1];

    console.log(maxProfit_cnblogs(stock));
    console.log(maxProfit_cnblogs(stock2));
    console.log(maxProfit_cnblogs(stock3));

    console.log("");
    console.log(maxProfit_programcreek(stock));
    console.log(maxProfit_programcreek(stock2));
    console.log(maxProfit_programcreek(stock3));
};

main()