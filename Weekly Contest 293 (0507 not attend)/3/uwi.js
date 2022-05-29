/**
 * 05/08//22 night
 * https://leetcode.com/contest/weekly-contest-292/problems/count-number-of-texts/
 */

const pr = console.log;

const mod = 1e9 + 7;
const cal = (c) => c == '7' || c == '9' ? 4 : 3

// Accepted
const countTexts = (s) => {
    let n = s.length;
    let dp = Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= cal(s[i]); j++) {
            let len = i - j + 1;
            if (len < 0 || s[i] != s[len]) break;
            dp[i + 1] += dp[i + 1 - j];
        }
        dp[i + 1] %= mod;
    }
    return dp[n];
};


const main = () => {
    let pressedKeys = "22233";
    let pressedKeys2 = "222222222222222222222222222222222222";
    pr(countTexts(pressedKeys))
    pr(countTexts(pressedKeys2))
};

main()