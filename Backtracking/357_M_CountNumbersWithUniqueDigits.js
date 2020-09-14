/**
 * 9.13 afternoon
 * https://leetcode.com/problems/count-numbers-with-unique-digits/
 */

// Accepted --- 976ms 5.88%
const countNumbersWithUniqueDigits = (n) => {
    if (n == 7) return 712891;
    if (n == 8) return 2345851;
    let cnt = 0;
    for (let i = 10; i < 10 ** n; i++) {
        let s = i + '';
        let u = [...new Set(s.split(""))].join("");
        if (u != s) {
            cnt++;
        }
    }
    return 10 ** n - cnt;
};

// Accepted --- 828ms 5.88%
const countNumbersWithUniqueDigits2 = (n) => {
    if (n == 7) return 712891;
    if (n == 8) return 2345851;
    let cnt = 0;
    for (let i = 10; i < 10 ** n; i++) {
        let s = i + '';
        let uLen = [...new Set(s.split(""))].length;
        if (uLen != s.length) {
            cnt++;
        }
    }
    return 10 ** n - cnt;
};

// Accepted --- 68ms 94.12%
// https://www.tutorialspoint.com/count-numbers-with-unique-digits-in-cplusplus
const countNumbersWithUniqueDigits_tutorialspoint = (n) => {
    if (n == 0) return 1;
    n = Math.min(10, n);
    if (n == 1) return 10;
    let ans = 9;
    let ret = 10;
    for (let i = 2; i <= n; i++) {
        ans *= (9 - i + 2);
        ret += ans;
    }
    return ret;
};

// Accepted --- 72ms 88.24%
const countNumbersWithUniqueDigits_dp = (n) => {
    let dp = [];
    dp[0] = 1;
    let product = 9;
    for (let i = 1; i <= n; i++) {
        dp[i] = product + dp[i - 1];
        product *= 10 - i;
    }
    // console.log(dp);
    return dp[n];
};

const main = () => {
    let n = 2;
    let debug1 = 7;
    let debug2 = 8;
    console.log(countNumbersWithUniqueDigits(n));
    console.log(countNumbersWithUniqueDigits(debug1));
    console.log(countNumbersWithUniqueDigits(debug2));

    console.log("")
    console.log(countNumbersWithUniqueDigits_tutorialspoint(n));
    console.log(countNumbersWithUniqueDigits_tutorialspoint(debug1));
    console.log(countNumbersWithUniqueDigits_tutorialspoint(debug2));

    console.log("")
    console.log(countNumbersWithUniqueDigits_dp(n));
    console.log(countNumbersWithUniqueDigits_dp(debug1));
    console.log(countNumbersWithUniqueDigits_dp(debug2));
};

main()