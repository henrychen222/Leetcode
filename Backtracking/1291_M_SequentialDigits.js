/**
 * 9.13 evening
 * https://leetcode.com/problems/sequential-digits/
 */

// Time limit
const sequentialDigits = (low, high) => {
    let res = [];
    for (let i = low; i <= high; i++) {
        if (isSequential(i)) {
            res.push(i);
        }
    }
    return res;
};

const isSequential = (n) => {
    let s = n + '';
    let len = s.length;
    for (let i = 0; i + 1 < len; i++) {
        if (Number(s[i + 1]) - Number(s[i]) != 1) {
            return false;
        }
    }
    return true;
};

const main = () => {
    let low = 100,
        high = 300;
    let low2 = 1000,
        high2 = 13000;
    let low_debug1 = 10,
        high_debug1 = 1000000000;
    console.log(sequentialDigits(low, high));
    console.log(sequentialDigits(low2, high2));
    console.log(sequentialDigits(low_debug1, high_debug1));
};

main()