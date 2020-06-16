/**
 * 6.15 night
 * https://leetcode.com/problems/maximum-69-number/
 */

// Accepted --- 64ms 33.6MB 47.09%
const maximum69Number = (num) => {
    let max = num;
    let numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
        let each = "";
        if (numStr[i] == '6') {
            each = numStr.slice(0, i) + '9' + numStr.slice(i + 1, numStr.length);
        } else {
            each = numStr.slice(0, i) + '6' + numStr.slice(i + 1, numStr.length);
        }
        max = Math.max(max, Number(each));
    }
    return max;
};

const main = () => {
    let num = 9669;
    let num2 = 9996;
    let num3 = 9999;
    console.log(maximum69Number(num));
    console.log(maximum69Number(num2));
    console.log(maximum69Number(num3));
};

main()