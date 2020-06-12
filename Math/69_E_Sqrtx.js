/**
 * 6.11 evening
 * https://leetcode.com/problems/sqrtx/
 */

// Accepted --- 88ms 36.2MB 43.99%
const mySqrt = (x) => {
    return Math.floor(Math.sqrt(x));
};

const main = () => {
    let x = 4;
    let x2 = 8;
    console.log(mySqrt(x));
    console.log(mySqrt(x2));
};

main()