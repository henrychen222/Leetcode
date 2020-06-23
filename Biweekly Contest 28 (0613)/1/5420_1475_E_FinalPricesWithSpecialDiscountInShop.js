/**
 * 6.13 morning
 * https://leetcode.com/contest/biweekly-contest-28/problems/final-prices-with-a-special-discount-in-a-shop/
 */

// let minArr = prices.slice(i + 1, prices.length);
// minArr.sort((a, b) => a - b);
// minus.push(minArr[0]);
const finalPrices = (prices) => {
    let res = [];
    for (let i = 0; i < prices.length; i++) {
        let min = prices[i + 1];
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                min = Math.min(min, prices[j]);
                // min = prices[j];
            } else {
                min = 0;
            }
        }
        console.log(min);  // 4 2 2 0
        if (min == prices[i + 1]) {
            res.push(prices[i]);
        } else {
            res.push(prices[i] - min);
        }
    }
    return res;
};

// Accepted --- 104ms 37.5MB 100.00%
const finalPrices_uwi = (prices) => {
    let res = [];
    for (let i = 0; i < prices.length; i++) {
        res[i] = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                res[i] = prices[i] - prices[j];
                break;
            }
        }
    }
    return res;
};

const main = () => {
    let prices = [8, 4, 6, 2, 3];
    let prices2 = [1, 2, 3, 4, 5];
    let price3 = [10, 1, 1, 6];
    // console.log(finalPrices(prices));  
    // console.log(finalPrices(prices2));
    // console.log(finalPrices(price3));

    console.log(finalPrices_uwi(prices));
    console.log(finalPrices_uwi(prices2));
    console.log(finalPrices_uwi(price3));
};

main()