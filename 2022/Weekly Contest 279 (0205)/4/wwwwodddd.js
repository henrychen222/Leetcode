/**
 * 02/05/22 night
 * https://leetcode.com/contest/weekly-contest-279/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/
 */

const pr = console.log;

// Accepted --- 179ms
const minimumTime = (s) => {
    let n = s.length, minCostLM = 0, res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        // update min cost from left compared with just middle, i + 1: all use left cost, minCostLM + 2: prev left cost + current middle cost
        if (s[i] == '1') minCostLM = Math.min(i + 1, minCostLM + 2);
        let rightCost = n - i - 1;
        res = Math.min(res, minCostLM + rightCost);
    }
    return res;
};

const main = () => {
    let s = "1100101";
    let s2 = "0010";
    pr(minimumTime(s))
    pr(minimumTime(s2))
};

main()