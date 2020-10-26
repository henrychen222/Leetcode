/**
 * 6.11 night  10.25 evening complete
 * https://leetcode.com/problems/factorial-trailing-zeroes/
 */

// Accepted --- 88ms  64.20%
const trailingZeroes3 = (n) => {
    if (n == 0) return 0;
    return Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));
};

// Accepted --- 84ms 82.22%
// https://leetcode.com/problems/factorial-trailing-zeroes/discuss/52493/Simple-C%2B%2B-solution!!!
const trailingZeroes2 = (n) => {
    let cnt = 0;
    while (n) {
        n = Math.floor(n / 5);
        cnt += n;
    }
    return cnt;
};

// Accepted --- 92ms 48.40%
// https://leetcode.com/problems/factorial-trailing-zeroes/discuss/52506/O(log_5(N))-solution-java
const trailingZeroes = (n) => {
    let cnt = 0;
    while (n > 0) {
        n = Math.floor(n / 5);
        cnt += n;
    }
    return cnt;
};


// TLE
// const trailingZeroes = (n) => {
//     let f = factorial(n, n);
//     let s = f + '';
//     let cnt = 0;
//     for (let i = s.length - 1; ~i; i--) {
//         if (s[i] != '0') break;
//         cnt++;
//     }
//     return cnt;
// };

// const factorial = (m, n) => {
//     let num = BigInt(1);
//     let cnt = 0;
//     for (let i = BigInt(m); i > 0; i--) {
//         if (cnt == n) break;
//         num = num * i;
//         cnt++;
//     }
//     return num;
// };

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



//////////////////////////////////// 6.11 night ////////////////////////////
// // Time limit exceed    500/502
// const trailingZeroes = (n) => {
//     let five = 0;
//     for (let num = n; num >= 1; num--) {
//         if (num % 5 == 0) {
//             five++;
//         }
//         if (num % 25 == 0) {
//             five++;
//         }
//         if (num % 5 ** 3 == 0) {
//             five++;
//         }
//         if (num % 5 ** 4 == 0) {
//             five++;
//         }
//         if (num % 5 ** 5 == 0) {
//             five++;
//         }
//         if (num % 5 ** 6 == 0) {
//             five++;
//         }
//         if (num % 5 ** 7 == 0) {
//             five++;
//         }
//         if (num % 5 ** 8 == 0) {
//             five++;
//         }
//         if (num % 5 ** 9 == 0) {
//             five++;
//         }
//         if (num % 5 ** 10 == 0) {
//             five++;
//         }
//         if (num % 5 ** 11 == 0) {
//             five++;
//         }
//         if (num % 5 ** 12 == 0) {
//             five++;
//         }
//         if (num % 5 ** 13 == 0) {
//             five++;
//         }
//     }
//     return five;
// };

// // wrong factorial cannot be calculate when the value is too large
// const trailingZeroes1 = (n) => {
//     let factorial = getFactorial(n);
//     // console.log(factorial);
//     let factorialStr = factorial.toString();
//     // console.log(factorialStr);
//     let cnt = 0;
//     if (factorialStr[factorialStr.length - 1] == '0') {
//         cnt = 1;
//         for (let i = factorialStr.length - 2; i >= 0; i--) {
//             if (factorialStr[i] != '0') break;
//             cnt++;
//         }
//     }
//     return cnt;
// };

// const getFactorial = (n) => {
//     let product = 1;
//     for (let i = n; i >= 1; i--) {
//         product *= i;
//     }
//     return product;
// };



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