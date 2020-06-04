/**
 * 6.3 evening
 * https://leetcode.com/problems/count-binary-substrings/
 */

// need to fix  Time Limit exceed
const countBinarySubstrings = (s) => {
    let res = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            let sub = s.slice(i, j + 1);
            if (check(sub)) {
                res.push(sub);
            }
        }
    }
    console.log(res);
    return res.length;
};

const check = (s) => {
    let zeros = [];
    let ones = [];
    for (const i of s) {
        if (i == '0') {
            zeros.push(i);
        } else {
            ones.push(i);
        }
    }
    return zeros.length == ones.length && (isAscending(s) || isDescending(s));
};

const isAscending = (str) => {
    let arr = str.split("");
    return arr.every((x, i) => {
        return i === 0 || x >= arr[i - 1];
    });
};

const isDescending = (str) => {
    let arr = str.split("");
    return arr.every((x, i) => {
        return i === 0 || x <= arr[i - 1];
    });
};

const main = () => {
    let s = "00110011";
    let s2 = "10101";
    console.log(countBinarySubstrings(s)); // ["0011", "01", "1100", "10", "0011", "01"
    console.log(countBinarySubstrings(s2));
};

main()