/**
 * 02/19/22 morning
 * https://leetcode.com/contest/biweekly-contest-72/problems/find-three-consecutive-integers-that-sum-to-a-given-number/
 */

const pr = console.log;

const sumOfThree = (x) => {
    if (x % 3 != 0) return [];
    let m = x / 3;
    return [m - 1, m, m + 1];
};

const main = () => {
    let num = 33;
    let num2 = 4;
    pr(sumOfThree(num))
    pr(sumOfThree(num2))
};

main()