/**
 * 6.17 morning
 * https://leetcode.com/problems/power-of-four/
 */

// Accepted --- 92ms 36.3MB 34.68%
const isPowerOfFour = (num) => {
    let max = Math.floor(Math.log10(num) / Math.log10(4));
    for (let i = 0; i <= max; i++) {
        if (4 ** i == num) {
            return true;
        }
    }
    return false;
};

const main = () => {
    let num = 16;
    let num2 = 5;
    console.log(isPowerOfFour(num));
    console.log(isPowerOfFour(num2));
};

main();