/**
 * 06/11/22 evening
 * https://leetcode.com/contest/weekly-contest-297/problems/calculate-amount-paid-in-taxes/
 */

const pr = console.log;

// Accepted
const calculateTax = (brackets, income) => {
    let n = brackets.length, pre, res = 0, sum = 0;
    for (const [upper, percent] of brackets) {
        let x;
        if (pre == undefined) {
            x = Math.min(upper, income);
        } else {
            x = Math.min(upper - pre, income - pre);
        }
        res += Math.max(0, x * percent / 100);
        pre = upper;
        sum += upper;
    }
    return res;
};

const main = () => {
    let brackets = [[3, 50], [7, 10], [12, 25]], income = 10;
    let brackets2 = [[1, 0], [4, 25], [5, 50]], income2 = 2;
    let brackets3 = [[2, 50]], income3 = 0;
    pr(calculateTax(brackets, income))
    pr(calculateTax(brackets2, income2))
    pr(calculateTax(brackets3, income3))
};

main()