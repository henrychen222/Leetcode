/**
 * 8.7 night
 * https://leetcode.com/problems/base-7/
 */

// Accepted --- 76ms 37MB 61.90%
const convertToBase7 = (num) => {
    return num.toString(7);
};

const main = () => {
    let num = 100;
    let num2 = -7;
    console.log(convertToBase7(num));
    console.log(convertToBase7(num2));
};

main()

