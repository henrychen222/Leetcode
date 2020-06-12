/**
 * 6.11 night
 * https://leetcode.com/problems/perfect-number/
 */

// Accepted --- 3044ms 36.7MB 33.97%
const checkPerfectNumber = (num) => {
    if (num == 0) return false;
    let divisor = [];
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            divisor.push(i);
        }
    }
    return calculate(divisor) == num;
};

const calculate = (arr) => {
    let sum = 0;
    for (const i of arr) {
        sum += i;
    }
    return sum;
};

const main = () => {
    let num = 28;
    let debug1 = 0;
    console.log(checkPerfectNumber(num));
    console.log(checkPerfectNumber(debug1));
};

main()