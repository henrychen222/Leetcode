/**
 * 7.21 evening  01/31/21 morning fix
 * https://leetcode.com/problems/multiply-strings/
 */

// Accepted --- 128ms 22.41%
const multiply = (num1, num2) => {
    return BigInt(num1) * BigInt(num2) + '';
};

const main = () => {
    let num1 = "2",
        num2 = "3";
    let num1_2 = "123",
        num2_2 = "456";
    let num1_debug1 = "123456789",
        num2_debug2 = "987654321";
    console.log(multiply(num1, num2));
    console.log(multiply(num1_2, num2_2));
    console.log(multiply(num1_debug1, num2_debug2)); // "121932631112635269"
};

main()


// need to fix
// const multiply = (num1, num2) => {
//     return Number(num1) * Number(num2) + '';
// };