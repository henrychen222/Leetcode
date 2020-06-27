/**
 * 6.26 night
 * https://leetcode.com/problems/excel-sheet-column-number/
 * reference: https://stackoverflow.com/questions/9905533/convert-excel-column-alphabet-e-g-aa-to-number-e-g-25
 */

// Accepted --- 92ms 36.1MB 37.89%
const titleToNumber = (s) => {
    let base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let i = 0;
    let j = s.length - 1;
    let sum = 0;
    while (i < s.length) {
        sum += (base.length ** j) * (base.indexOf(s[i]) + 1);
        i++;
        j--;
    }
    return sum;
};

// Accepted --- 76ms 37.3MB 75.70%
const titleToNumber2 = (s) => {
    return s.split('').reduce((r, a) => r * 26 + parseInt(a, 36) - 9, 0);
};

// Accepted --- 88ms 36.5MB 48.59%
const titleToNumber3 = (s) => {
    let p = 0;
    let n = 0;
    while (p < s.length) {
        n = s[p].charCodeAt() - 64 + n * 26;
        p++;
    }
    return n;
};

const main = () => {
    let s = "A";
    let s2 = "AB"; // 26 + 2
    let s3 = "ZY" // 26 * 26 + 25
    let s4 = "AAB" // 26 * 27 + 2
    console.log(titleToNumber(s));
    console.log(titleToNumber(s2));
    console.log(titleToNumber(s3));
    console.log(titleToNumber(s4));

    console.log("")
    console.log(titleToNumber2(s));
    console.log(titleToNumber2(s2));
    console.log(titleToNumber2(s3));
    console.log(titleToNumber2(s4));

    console.log("")
    console.log(titleToNumber3(s));
    console.log(titleToNumber3(s2));
    console.log(titleToNumber3(s3));
    console.log(titleToNumber3(s4));
};

main()