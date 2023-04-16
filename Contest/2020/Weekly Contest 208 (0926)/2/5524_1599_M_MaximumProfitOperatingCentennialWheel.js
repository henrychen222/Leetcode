/**
 * 9.26 evening
 * https://leetcode.com/contest/weekly-contest-208/problems/maximum-profit-of-operating-a-centennial-wheel/
 */

// Accepted
const minOperationsMaxProfit = (customers, boardingCost, runningCost) => {
    let rotate = 0;
    let wait = 0;
    let board = 0;
    let record = [];
    let n = customers.length;
    // for (let i = 0; i <= 15; i++) {
    while (true) {
        if (rotate > n && record.length == 0) return -1;
        let l = record[record.length - 1];
        let sl = record[record.length - 2];
        if (l <= sl) break;
        rotate++;
        if (customers.length != 0) {
            wait += customers[0];
            customers.shift();
        }
        if (wait > 4) {
            board += 4;
            wait -= 4;
        } else {
            let tmp = wait;
            wait-= tmp;
            board += tmp;
        }
        let profit = board * boardingCost - rotate * runningCost;
        // console.log(wait, board, rotate, profit);
        if(profit > 0) record.push(profit);
    }
    // console.log(record);
    return rotate - 1;
};

const main = () => {
    let customers = [8, 3], boardingCost = 5, runningCost = 6;
    let customers2 = [10, 9, 6], boardingCost2 = 6, runningCost2 = 4;
    let customers3 = [3, 4, 0, 5, 1], boardingCost3 = 1, runningCost3 = 92;
    let customers4 = [10, 10, 6, 4, 7], boardingCost4 = 3, runningCost4 = 8;
    console.log(minOperationsMaxProfit(customers, boardingCost, runningCost));
    console.log(minOperationsMaxProfit(customers2, boardingCost2, runningCost2));
    console.log(minOperationsMaxProfit(customers3, boardingCost3, runningCost3));
    console.log(minOperationsMaxProfit(customers4, boardingCost4, runningCost4));
};

main()