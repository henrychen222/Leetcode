/*
 * 02/04/23 afternoon
 * https://leetcode.com/contest/biweekly-contest-97/problems/separate-the-digits-in-an-array/
 */

const pr = console.log;

// Accepted
const separateDigits = (a) => {
    let res = [];
    for (const x of a) {
        let s = x + '';
        for (const c of s) res.push(c - '0');
    }
    return res;
};

const main = () => {
    let a = [13, 25, 83, 77]
    let a2 = [7, 1, 3, 9]
    pr(separateDigits(a))
    pr(separateDigits(a2))
};

main()