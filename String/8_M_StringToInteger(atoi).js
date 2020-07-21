/**
 * 7.20 night
 * https://leetcode.com/problems/string-to-integer-atoi/
 */

// Accepted --- 120ms 40.9MB 24.56%
const myAtoi_refine = (str) => {
    let s = str.trim();
    let res = '';
    if (s[0] == '-' && s.length > 1) {
        res += '-';
        for (let i = 1; i < s.length; i++) {
            if (!isNumber(Number(s[i])) || s[i].isEmpty()) break;
            res += s[i];
        }
    } else if (s[0] == '+' && s.length > 1) {
        for (let i = 1; i < s.length; i++) {
            if (!isNumber(Number(s[i])) || s[i].isEmpty()) break;
            res += s[i];
        }
    } else if (isNumber(Number(s[0]))) {
        for (const c of s) {
            if (!isNumber(Number(c)) || c.isEmpty()) break;
            res += c;
        }
    } else {
        return 0;
    }
    if (Number(res) > 2 ** 31 - 1) return 2 ** 31 - 1;
    if (Number(res) < -(2 ** 31)) return -(2 ** 31);
    if (!isNumber(Number(res))) return 0;
    return Number(res);
};

// Accepted --- 188ms 41.3MB 5.74%
const myAtoi = (str) => {
    let s = str.trim();
    let res = '';
    if (s[0] == '-' && s.length > 1) {
        res += '-';
        for (let i = 1; i < s.length; i++) {
            if (!isNumber(Number(s[i]))) break;
            if (s[i].isEmpty()) break;
            res += s[i];
        }
    } else if (s[0] == '+' && s.length > 1) {
        for (let i = 1; i < s.length; i++) {
            if (!isNumber(Number(s[i]))) break;
            if (s[i].isEmpty()) break;
            res += s[i];
        }
    } else if (isNumber(Number(s[0]))) {
        for (const c of s) {
            if (!isNumber(Number(c))) break;
            if (c.isEmpty()) break;
            res += c;
        }
    } else {
        return 0;
    }
    if (Number(res) > 2 ** 31 - 1) return 2 ** 31 - 1;
    if (Number(res) < -(2 ** 31)) return -(2 ** 31);
    if (!isNumber(Number(res))) return 0;
    return Number(res);
};

String.prototype.isEmpty = function () {
    return (this.length === 0 || !this.trim());
};

const isNumber = (v) => {
    return typeof v === 'number' && isFinite(v);
};

const main = () => {
    let str = "42";
    let str2 = "   -42";
    let str3 = "4193 with words";
    let str4 = "words and 987";
    let str5 = "-91283472332";
    let debug1 = "3.14159";
    let debug2 = "-";
    let debug3 = "+1";
    let debug4 = "-+1";
    let debug5 = "    -88827   5655  U";
    let debug6 = "123  456"
    console.log(myAtoi(str)); // 42
    console.log(myAtoi(str2)); // -42
    console.log(myAtoi(str3)); // 4193
    console.log(myAtoi(str4)); // 0
    console.log(myAtoi(str5)); // -2147483648
    console.log(myAtoi(debug1)); // 3
    console.log(myAtoi(debug2)); // 0
    console.log(myAtoi(debug3)); // 1
    console.log(myAtoi(debug4)); // 0
    console.log(myAtoi(debug5)); // -88827
    console.log(myAtoi(debug6)); // 123

    console.log("\n");
    console.log(myAtoi_refine(str));
    console.log(myAtoi_refine(str2));
    console.log(myAtoi_refine(str3));
    console.log(myAtoi_refine(str4));
    console.log(myAtoi_refine(str5));
    console.log(myAtoi_refine(debug1));
    console.log(myAtoi_refine(debug2));
    console.log(myAtoi_refine(debug3));
    console.log(myAtoi_refine(debug4));
    console.log(myAtoi_refine(debug5));
    console.log(myAtoi_refine(debug6));
};

main()