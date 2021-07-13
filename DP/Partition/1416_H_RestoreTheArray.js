/**
 * 07/12/21 afternoon
 * https://leetcode.com/problems/count-vowels-permutation/
 * 
 * reference:
 * https://leetcode.com/contest/biweekly-contest-24/ranking uwi
 */

// Accepted --- 136ms 87.50%
const mod = 1e9 + 7;
const numberOfArrays = (s, k) => {
    let n = s.length;
    let dp = Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < n; i++) {
        if (s[i] == '0') continue;
        let v = 0;
        for (let j = i; j < n; j++) { // loop all possible values
            v = v * 10 + (s[j] - '0'); // 1 13 131 1317 3 31 317 1 17 7
            pr(v);
            if (v >= 1 && v <= k) {
                dp[j + 1] += dp[i];
                dp[j + 1] %= mod;
            } else {
                break;
            }
        }
        // pr(dp);
    }
    return dp[n];
};

const pr = console.log;
const main = () => {
    let s = "1000",
        k = 10000;
    let s2 = "1000",
        k2 = 10;
    let s3 = "1317",
        k3 = 2000;
    let s4 = "2020",
        k4 = 30;
    let s5 = "1234567890",
        k5 = 90;
    // pr(numberOfArrays(s, k))
    // pr(numberOfArrays(s2, k2))
    pr(numberOfArrays(s3, k3))
    // pr(numberOfArrays(s4, k4))
    // pr(numberOfArrays(s5, k5))
};

main()