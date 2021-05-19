/**
 * 05/18/21 night
 * https://leetcode.com/problems/valid-number/
 */

// Accepted --- 54.45%
const isNumber = (s) => {
    if (s == "Infinity" || s == "-Infinity" || s == "+Infinity") return false;
    let x = Number(s);
    // pr(x);
    return !Number.isNaN(x);
};

const pr = console.log;
let yes = ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"];
let no = ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"];
const main = () => {
    let s = "0";
    let s2 = "e";
    let s3 = ".";
    let s4 = ".1";
    let debug1 = "Infinity";
    let debug2 = "-8115e957";
    let debug3 = "-Infinity";
    let debug4 = "+Infinity";
    pr(isNumber(s));
    pr(isNumber(s2));
    pr(isNumber(s3));
    pr(isNumber(s4));
    pr(isNumber(debug1)); // false
    pr(isNumber(debug2)); // true
    pr(isNumber(debug3)); // false
    pr(isNumber(debug4)); // false
    pr()
    for (const e of yes) pr(isNumber(e));
    for (const e of no) pr(isNumber(e));
};

main()

pr('s' / 3);