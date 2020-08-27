/**
 * 6.12 night  8.25 night copy
 * https://leetcode.com/problems/ugly-number/
 */

// reference: https://leetcode.com/problems/ugly-number/discuss/810950/C%2B%2B-O(n)-0ms-beats-100-submissions
// Accepted --- 92ms 63.15%
const isUgly = (num) => {
    if (num == 0) return false;
    if (num == 1) return true;
    while (num != 1) {
        if (num % 2 == 0) {
            num /= 2;
        } else if (num % 3 == 0) {
            num /= 3;
        } else if (num % 5 == 0) {
            num /= 5;
        } else {
            return false;
        }
    }
    return true;
};

// Time Limit
const isUgly3 = (num) => {
    if (num <= 0) return false;
    if (num == 1 || num == 2) return true;
    let divisor = 2;
    while (num > 2) {
        if (num % divisor == 0) {
            if (divisor != 2 && divisor != 3 && divisor != 5) return false;
            num = num / divisor;
        } else {
            divisor++;
        }
    }
    return true;
};

// Time Limit
const isUgly2 = (num) => {
    if (num <= 0) return false;
    if (num == 1 || num == 2) return true;
    let divisor = 2;
    while (num > 2) {
        if (num % divisor == 0) {
            if (divisor != 2 && divisor != 3 && divisor != 5) return false;
            num = num / divisor;
        } else {
            divisor++;
        }
    }
    return true;
};

// Time Limit
const isUgly1 = (num) => {
    if (num <= 0) return false;
    let arr = primeFactors(num);
    // console.log(arr);
    let target = [2, 3, 5];
    for (const i of arr) {
        if (target.indexOf(i) == -1) {
            return false;
        }
    }
    return true;
};

const primeFactors = (n) => {
    let factors = [];
    let divisor = 2;
    if (n == 1) return [];
    if (n == 2) return [2];
    while (n > 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    return [...new Set(factors)];
}

const main = () => {
    let num = 6;
    let num2 = 8;
    let num3 = 14;
    let debug1 = -2147483648;
    let debug2 = 1;
    let debug3 = 2;
    let debug4 = 1369479539;
    console.log(isUgly(num)); // true
    console.log(isUgly(num2)); // true
    console.log(isUgly(num3)); // false
    console.log(isUgly(debug1)); // false
    console.log(isUgly(debug2)); // true
    console.log(isUgly(debug3)); // true
    console.log(isUgly(debug4)); // false
};

main()


// // need to fix
// const isUgly = (num) => {
//     if (num == 1) return true;
//     let arr = primeFactors(num);
//     console.log(arr);
//     if (arr.length == 0) return false;
//     for (const i of arr) {
//         if (![2, 3, 5].includes(i)) {
//             return false;
//         }
//     }
//     return true;
// };