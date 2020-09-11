/**
 * 9.10 afternoon
 * https://leetcode.com/problems/divide-two-integers/
 */

// Accepted --- 80ms 98.37%
const divide = (dividend, divisor) => {
    if (dividend == -2147483648 && divisor == -1) return parseInt(dividend / divisor) - 1;
    return parseInt(dividend / divisor);
};

const main = () => {
    let dividend = 10,
        divisor = 3;
    let dividend2 = 7,
        divisor2 = -3;
    let dividend_debug1 = -2147483648,
        divisor_debug1 = -1;
    console.log(divide(dividend, divisor));
    console.log(divide(dividend2, divisor2));
    console.log(divide(dividend_debug1, divisor_debug1));
};

main()