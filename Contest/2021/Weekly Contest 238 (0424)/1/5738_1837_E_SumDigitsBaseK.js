/**
 * 04/24/21 evening
 * https://leetcode.com/contest/weekly-contest-238/problems/sum-of-digits-in-base-k/
 */

const pr = console.log;

// Accepted
const sumBase = (n, k) => {
    let res = n.toString(k);
    let sum = 0;
    for (const e of res) sum += Number(e);
    return sum;
};

const main = () => {
    let n = 34, k = 6;
    let n2 = 10, k2 = 10;
    pr(sumBase(n, k))
    pr(sumBase(n2, k2))
};

main()
