/**
 * 1.9 morning
 * https://leetcode.com/contest/biweekly-contest-43/problems/calculate-money-in-leetcode-bank/
 */


const totalMoney = (n) => {
    let rest = n % 7;
    let full = Math.floor(n / 7);
    let sum = 0;
    let start = 1;
    for (let i = 1; i <= full; i++) {
        let tmp = (start + start + 6) * 7 / 2;
        sum += tmp;
        start++;
    }
    let restSum = (start + start + rest - 1) * rest / 2;
    // console.log(sum, start, restSum);
    return sum + restSum;
};

const main = () => {
    let n = 4;
    let n2 = 10;
    let n3 = 20;
    console.log(totalMoney(n));
    console.log(totalMoney(n2));
    console.log(totalMoney(n3));
};

main()