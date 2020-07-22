/**
 * 7.21 evening
 * https://leetcode.com/problems/multiply-strings/
 */

// need to fix
const multiply = (num1, num2) => {
    return Number(num1) * Number(num2) + '';
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