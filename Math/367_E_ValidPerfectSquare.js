/**
 * 6.13 evening
 * https://leetcode.com/problems/valid-perfect-square/
 */

// Accepted --- 72ms 35.4MB 27.62%
const isPerfectSquare = (num) => {
    let max = Math.floor(Math.sqrt(num));
    for (let i = 0; i <= max; i++) {
        if (i ** 2 == num) {
            return true;
        }
    }
    return false;
};

const main = () => {
    let num = 16;
    let num2 = 14;
    console.log(isPerfectSquare(num));
    console.log(isPerfectSquare(num2));
};

main()