/**
 * 03/10/21 morning
 * https://leetcode.com/problems/integer-to-roman/
 */


const pr = console.log;

// Accepted --- 180ms 35.66%   Submit again 144ms 97.46%
const intToRoman = (n) => {
    let res = '';
    while (n) {
        if (n >= 1000) {
            let t = n / 1000 >> 0;
            n %= 1000;
            res += 'M'.repeat(t);
        } else if (n >= 500 && n < 1000) {
            let s = n + '';
            if (s[0] == '9') {
                n %= 900;
                res += 'CM';
                continue;
            }
            res += 'D';
            n -= 500;
        } else if (n >= 100 && n < 500) {
            let s = n + '';
            if (s[0] == '4') {
                n %= 400;
                res += 'CD';
                continue;
            }
            let mod = Number(s[0]) * 100;
            res += 'C'.repeat(s[0]);
            n %= mod;
        } else if (n >= 50 && n < 100) {
            let s = n + '';
            if (s[0] == '9') {
                n %= 90;
                res += 'XC';
                continue;
            }
            res += 'L';
            n -= 50;
        } else if (n >= 10 && n < 50) {
            let s = n + '';
            if (s[0] == '4') {
                n %= 40;
                res += 'XL';
                continue;
            }
            let mod = Number(s[0]) * 10;
            res += 'X'.repeat(s[0]);
            n %= mod;
        } else if (n >= 5 && n < 10) {
            if (n == 9) {
                n %= 9;
                res += 'IX';
                continue;
            }
            res += 'V';
            n -= 5;
        } else if (n >= 1 && n < 5) {
            if (n == 4) {
                n %= 4;
                res += 'IV';
                continue;
            }
            res += 'I'.repeat(n);
            n %= n;
        }
    }
    return res;
};

const main = () => {
    let num = 3;
    let num2 = 4;
    let num3 = 9;
    let num4 = 58;
    let num5 = 1994;
    let num6 = 3999;
    let debug1 = 1;
    let debug2 = 20;
    pr(intToRoman(num));
    pr(intToRoman(num2));
    pr(intToRoman(num3));
    pr(intToRoman(num4));
    pr(intToRoman(num5)); // "MCMXCIV"
    pr(intToRoman(num6)); // "MMMCMXCIX"
    pr(intToRoman(debug1));
    pr(intToRoman(debug2)); // "XX"
};

main()

// pr(3999 % 1000, 3999 / 1000 >> 0, 9 % 9)
// pr('M'.repeat('3'), 'M'.repeat(3)); // same