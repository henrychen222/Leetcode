/**
 * 6.12 night
 * https://leetcode.com/problems/ugly-number/
 */

// need to fix
const isUgly = (num) => {
    if (num == 1) return true;
    let arr = primeFactors(num);
    console.log(arr);
    if (arr.length == 0) return false;
    for (const i of arr) {
        if (![2, 3, 5].includes(i)) {
            return false;
        }
    }
    return true;
};

function primeFactors(n) {
    let factors = [];
    let divisor = 2;
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
    console.log(isUgly(num));
    console.log(isUgly(num2));
    console.log(isUgly(num3));
    console.log(isUgly(debug1)); // false
    console.log(isUgly(debug2)); // true
    console.log(isUgly(debug3)); // true
};

main()