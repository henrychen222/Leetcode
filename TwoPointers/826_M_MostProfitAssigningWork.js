/**
 * 9.8 morning
 * https://leetcode.com/problems/most-profit-assigning-work/
 */

// Accepted --- 1356ms 13.64%
const maxProfitAssignment = (difficulty, profit, worker) => {
    let n = difficulty.length;
    let sum = 0;
    for (const w of worker) {
        let max = 0;
        for (let i = 0; i < n; i++) {
            if (difficulty[i] > w) continue;
            max = Math.max(max, profit[i]);
        }
        sum += max;
    }
    return sum;
};

const main = () => {
    let difficulty = [2, 4, 6, 8, 10],
        profit = [10, 20, 30, 40, 50],
        worker = [4, 5, 6, 7];
    console.log(maxProfitAssignment(difficulty, profit, worker));
};

main()