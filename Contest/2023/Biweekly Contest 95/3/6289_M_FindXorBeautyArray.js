/*
 * 01/07/22 morning
 * https://leetcode.com/contest/biweekly-contest-95/problems/find-xor-beauty-of-array/
 */

const pr = console.log;

// Accepted
const xorBeauty = (a) => {
    let res = 0;
    for (const x of a) res ^= x;
    return res;
};

const main = () => {
    let a = [1, 4]
    let a2 = [15, 45, 20, 2, 34, 35, 5, 44, 32, 30]
    pr(xorBeauty(a))
    pr(xorBeauty(a2))
};

main()