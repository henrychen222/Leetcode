/**
 * 6.2 evening
 * https://leetcode.com/problems/add-strings/
 */

// need to fix
const addStrings = (num1, num2) => {
    let sum = 0;
    if (num1.length >= num2.length) {
        add(num1, num2, sum);
    } else {
        add(num2, num1, sum);
    }
    console.log(sum);
};

// don't know how to do here
const add = (long, small, sum) => {
    for (let i = small.length - 1; i >= 0; i--) {
        sum += Number(small[i] + long[i + (long.length - small.length)]) * (10 ** (small.length - 1 - i));
    }
    for (let i = long.length - small.length; i >= 0; i--) {
        sum += Number(long[i]) * (10 ** (i + small.length - 1));
    }
    return sum;
};

// Wrong, don't allow to do type conversion in this question
const addStrings = (num1, num2) => {
    let one = Number(num1);
    let two = Number(num2);
    return (one + two).toString();
};

const main = () => {
    let num1 = "0",
        num2 = "0";
    let debug1 = "9333852702227987",
        debug2 = "85731737104263";
    console.log(addStrings(num1, num2));
    console.log(addStrings(debug1, debug2));
};

main()