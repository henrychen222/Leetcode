/**
 * 6.5 night  8.14 night try to do in java  8.21 night complete
 * https://leetcode.com/problems/binary-prefix-divisible-by-5/
 */

// reference https://helloacm.com/binary-prefix-divisible-by-5-java-c-coding-exercise/
// https://www.acwing.com/solution/LeetCode/content/1292/
// Accepted --- 112ms 48.00%
const prefixesDivBy5_2 = (A) => {
    let res = [];
    let num = 0;
    for (const a of A) { // neeed to module 5 to keep the number under control
        num = ((num << 1) + a) % 5; // same  num = ((num * 2) + a) % 5
        res.push(num % 5 == 0);
    }
    return res;
};

// reference: https://www.programmersought.com/article/82381177991/
// Accepted --- 116ms 46.67%
const prefixesDivBy5 = (A) => {
    let res = [];
    let num = 0;
    for (let i = 0; i < A.length; i++) {
        num = num * 2 + A[i];
        num %= 100; // prevent num beyond the number limit
        if (num % 5 == 0) {
            res.push(true);
        } else {
            res.push(false);
        }
    }
    return res;
};

const main = () => {
    let A = [0, 1, 1];
    let A2 = [1, 1, 1];
    let A3 = [0, 1, 1, 1, 1, 1];
    let A4 = [1, 1, 1, 0, 1];
    let debug1 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1];
    console.log(prefixesDivBy5(A));
    console.log(prefixesDivBy5(A2));
    console.log(prefixesDivBy5(A3));
    console.log(prefixesDivBy5(A4));
    console.log(prefixesDivBy5(debug1));

    console.log("")
    console.log(prefixesDivBy5_2(A));
    console.log(prefixesDivBy5_2(A2));
    console.log(prefixesDivBy5_2(A3));
    console.log(prefixesDivBy5_2(A4));
    console.log(prefixesDivBy5_2(debug1));
};

main()


// // need to fix
// const prefixesDivBy5 = (A) => {
//     let allNum = [];
//     let res = [];
//     for (let i = 0; i < A.length; i++) {
//         let each = convertBinaryToDecimal(A.slice(0, i + 1).join(""));
//         allNum.push(each);
//         if (each % 5 == 0) { // still number length > 16 problem
//             res.push(true);
//         } else {
//             res.push(false);
//         }
//     }
//     console.log(allNum);
//     return res;
// };

// const convertBinaryToDecimal = (binary) => {
//     // input is string
//     return parseInt(binary, 2);
// };

// // const isDivideBy5 = (input) => {
// //     const regex = RegExp('^(0|1(10)*(0|11)(01*01|01*00(10)*(0|11))*1)*');
// //     return regex.test(input);
// // };