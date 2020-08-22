/**
 * 6.2 evening  8.21 evening complete
 * https://leetcode.com/problems/add-strings/
 */

// reference: https://leetcode.com/problems/add-strings/discuss/437715/Simple-javascript-solution
// Accepted --- 80ms 92.04%
const addStrings = (num1, num2) => {
    let res = '',
        dot = 0,
        sum;
    let i = num1.length - 1,
        j = num2.length - 1;
    while (i >= 0 || j >= 0) {
        sum = (num1[i--] | 0) + (num2[j--] | 0) + dot; // | 0 convert char to number
        res = sum % 10 + res;
        dot = sum > 9 ? 1 : 0;
    }
    return (dot ? 1 : "") + res;
};

// Accepted --- 112ms 25.62%
const addStrings_modify = (num1, num2) => {
    let res = '',
        dot = 0,
        sum;
    let i = num1.length - 1,
        j = num2.length - 1;
    while (i >= 0 || j >= 0) {
        let a = Number(num1[i--]);
        let b = Number(num2[j--]);
        // console.log(a, a == undefined || isNaN(a), b, b == undefined || isNaN(b))
        if (a == undefined || isNaN(a)) {
            a = 0;
        } else if (b == undefined || isNaN(b)) {
            b = 0;
        }
        sum = a + b + dot;
        // console.log(sum);
        res = sum % 10 + res;
        dot = sum > 9 ? 1 : 0;
    }
    return (dot ? 1 : "") + res;
};

const main = () => {
    let num1 = "0",
        num2 = "0";
    let num1_debug1 = "9333852702227987",
        num2_debug1 = "85731737104263";
    let num1_debug2 = "1";
    let num2_debug2 = "9";
    console.log(addStrings(num1, num2));
    console.log(addStrings(num1_debug1, num2_debug1)); // "9419584439332250"
    console.log(addStrings(num1_debug2, num2_debug2)); // "10"

    console.log("")
    console.log(addStrings_modify(num1, num2));
    console.log(addStrings_modify(num1_debug1, num2_debug1));
    console.log(addStrings_modify(num1_debug2, num2_debug2));

    console.log("\n -------------- |0 Test ----------------------")
    console.log("9" | 0, typeof ("9" | 0));
    console.log(undefined | 0, typeof (undefined | 0));
    console.log(NaN | 0, typeof (NaN | 0));
};

main()


// // need to fix
// const addStrings = (num1, num2) => {
//     let sum = 0;
//     if (num1.length >= num2.length) {
//         add(num1, num2, sum);
//     } else {
//         add(num2, num1, sum);
//     }
//     console.log(sum);
// };

// // don't know how to do here
// const add = (long, small, sum) => {
//     for (let i = small.length - 1; i >= 0; i--) {
//         sum += Number(small[i] + long[i + (long.length - small.length)]) * (10 ** (small.length - 1 - i));
//     }
//     for (let i = long.length - small.length; i >= 0; i--) {
//         sum += Number(long[i]) * (10 ** (i + small.length - 1));
//     }
//     return sum;
// };

// // Wrong, don't allow to do type conversion in this question
// const addStrings = (num1, num2) => {
//     let one = Number(num1);
//     let two = Number(num2);
//     return (one + two).toString();
// };