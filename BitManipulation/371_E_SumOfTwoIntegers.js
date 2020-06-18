/**
 * 6.17 noon
 * https://leetcode.com/problems/sum-of-two-integers/
 */

// Accepted --- 64ms 32.8MB 46.79%
const getSum = (a, b) => {
    return a + b;
};

const main = (a, b) => {
    let a = 1,
        b = 2;
    let a2 = -2,
        b2 = 3;
    console.log(getSum(a, b));
    console.log(getSum(a2, b2));
};