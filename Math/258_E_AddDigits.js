/**
 * 6.14 night
 * https://leetcode.com/problems/add-digits/
 */

// Accepted --- 80ms 38.3MB 59.50%
const addDigits = (num) => {
    while (num.toString().length != 1) {
        let numArr = num.toString().split("");
        let sum = 0;
        for (const i of numArr) {
            sum += Number(i);
        }
        num = sum;
    }
    return num;
};

const main = () => {
    let num = 38;
    console.log(addDigits(num));
};

main()