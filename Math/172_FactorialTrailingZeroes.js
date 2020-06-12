/**
 * 6.11 night
 * https://leetcode.com/problems/factorial-trailing-zeroes/
 */

// Time limit exceed    500/502
const trailingZeroes = (n) => {
    let five = 0;
    for (let num = n; num >= 1; num--) {
        if (num % 5 == 0) {
            five++;
        }
        if (num % 25 == 0) {
            five++;
        }
        if (num % 5 ** 3 == 0) {
            five++;
        }
        if (num % 5 ** 4 == 0) {
            five++;
        }
        if (num % 5 ** 5 == 0) {
            five++;
        }
        if (num % 5 ** 6 == 0) {
            five++;
        }
        if (num % 5 ** 7 == 0) {
            five++;
        }
        if (num % 5 ** 8 == 0) {
            five++;
        }
        if (num % 5 ** 9 == 0) {
            five++;
        }
        if (num % 5 ** 10 == 0) {
            five++;
        }
        if (num % 5 ** 11 == 0) {
            five++;
        }
        if (num % 5 ** 12 == 0) {
            five++;
        }
        if (num % 5 ** 13 == 0) {
            five++;
        }
    }
    return five;
};

// wrong factorial cannot be calculate when the value is too large
const trailingZeroes1 = (n) => {
    let factorial = getFactorial(n);
    // console.log(factorial);
    let factorialStr = factorial.toString();
    // console.log(factorialStr);
    let cnt = 0;
    if (factorialStr[factorialStr.length - 1] == '0') {
        cnt = 1;
        for (let i = factorialStr.length - 2; i >= 0; i--) {
            if (factorialStr[i] != '0') break;
            cnt++;
        }
    }
    return cnt;
};

const getFactorial = (n) => {
    let product = 1;
    for (let i = n; i >= 1; i--) {
        product *= i;
    }
    return product;
};


const main = () => {
    let n = 3;
    let n2 = 5;
    let debug1 = 30;
    let debug2 = 200;
    let debug3 = 1808548329;
    console.log(trailingZeroes(n)); // 0
    console.log(trailingZeroes(n2)); // 1
    console.log(trailingZeroes(debug1)); // 7    
    console.log(trailingZeroes(debug2)) // 49
    console.log(trailingZeroes(debug3)) // 452137076
};

main()









/***************************************** Experiment *****************/
// let end = 0;
// let star = 0
// for (let i = 1; i <= n; i++) {
//     if (5 ** i > n) {
//         star = i - 1;
//         break;
//     }
//     end = 5 ** i;
// }
// console.log(end);
// console.log(star);
// let cnt = 0;
// for (let num = n; num >= 1; num--) {
//     for (let i = 2; i <= star; i++) {
//         if (num % 5 ** i == 0) {
//             cnt += i;
//         }
//     }
// }
// return five + cnt;