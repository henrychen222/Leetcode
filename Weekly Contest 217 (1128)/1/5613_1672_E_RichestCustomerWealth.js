/**
 * 11.28 evening
 * https://leetcode.com/contest/weekly-contest-217/problems/richest-customer-wealth/
 */

// Accepted
const maximumWealth = (accounts) => {
    let res = 0;
    for (const a of accounts) {
        let sum = a.reduce((x, y) => x + y);
        res = Math.max(res, sum);
    }
    return res;
};

const main = () => {
    let accounts = [[1, 2, 3], [3, 2, 1]];
    let accounts2 = [[1, 5], [7, 3], [3, 5]];
    let accounts3 = [[2, 8, 7], [7, 1, 3], [1, 9, 5]];
    console.log(maximumWealth(accounts));
    console.log(maximumWealth(accounts2));
    console.log(maximumWealth(accounts3));
};

main()