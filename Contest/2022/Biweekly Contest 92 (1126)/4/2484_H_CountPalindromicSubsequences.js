/*
 * 11/26/22 morning
 * https://leetcode.com/contest/biweekly-contest-92/problems/count-palindromic-subsequences/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };

// Memory out
const mod = 1e9 + 7;
const countPalindromes1 = (s) => {
    let res = 0, n = s.length, dp = initialize2DArray(n, n);
    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 2; j < n; j++) {
            dp[i][j] = dp[i][j - 1] + (dp[i + 1][j] == dp[i + 1][j - 1] ? 0 : dp[i + 1][j] - dp[i + 1][j - 1]);
            if (s[i] == s[j]) {
                dp[i][j] += j - i - 1;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = i + 4; j < n; j++) {
            if (s[i] == s[j]) {
                res += dp[i + 1][j - 1];
                res % mod;
            }
        }
    }
    return res % mod;
};

// WA
// https://stackoverflow.com/questions/73618947/number-of-palindromes-of-length-5
const ll = BigInt, MOD = ll(1e9 + 7);
const countPalindromes2 = (s) => {
    let res = 0n, n = s.length, pairs = initialize2DArray(n, 4), cnts = [0, 0]
    for (let i = 1; i < n - 2; i++) {
        if (s[i - 1] == '0') {
            if (i >= 2) {
                pairs[i - 1][0] = pairs[i - 2][0] + cnts[0]
                pairs[i - 1][1] = pairs[i - 2][1]
                pairs[i - 1][2] = pairs[i - 2][2] + cnts[1]
                pairs[i - 1][3] = pairs[i - 2][3]
            }
            cnts[0]++;
        } else {
            if (i >= 2) {
                pairs[i - 1][0] = pairs[i - 2][0]
                pairs[i - 1][1] = pairs[i - 2][1] + cnts[0]
                pairs[i - 1][2] = pairs[i - 2][2]
                pairs[i - 1][3] = pairs[i - 2][3] + cnts[1]
            }
            cnts[1]++;
        }
    }
    cnts = [0, 0];
    for (let i = n - 2; i > 1; i--) {
        if (s[i + 1] == '0') {
            if (i >= 2) {
                if (i < n - 2) {
                    pairs[i + 1][0] = pairs[i + 2][0] + cnts[0]
                    pairs[i + 1][1] = pairs[i + 2][1]
                    pairs[i + 1][2] = pairs[i + 2][2] + cnts[1]
                    pairs[i + 1][3] = pairs[i + 2][3]
                }
            }
            cnts[0]++;
        } else {
            if (i < n - 2) {
                pairs[i + 1][0] = pairs[i + 2][0]
                pairs[i + 1][1] = pairs[i + 2][1] + cnts[0]
                pairs[i + 1][2] = pairs[i + 2][2]
                pairs[i + 1][3] = pairs[i + 2][3] + cnts[1]
            }
            cnts[1]++;
        }
        res += ll(pairs[i + 1][0]) * ll(pairs[i - 1][0]);
        res %= MOD;
        res += ll(pairs[i + 1][1]) * ll(pairs[i - 1][2]);
        res %= MOD;
        res += ll(pairs[i + 1][2]) * ll(pairs[i - 1][1]);
        res %= MOD;
        res += ll(pairs[i + 1][3]) * ll(pairs[i - 1][3]);
        res %= MOD;
    }
    return res % MOD;
};

/////////////////////////////////////////////////////////

// Accepted
// refernce: winter_training  uwi
const countPalindromes = (s) => {
    let res = 0, n = s.length, cnt = Array(10).fill(0);
    for (let i = 0; i < n; i++) {
        let tot = 0;
        for (let j = n - 1; j > i; j--) {
            if (s[i] == s[j]) {
                res += tot * (j - i - 1);
                res %= mod;
            }
            tot += cnt[s[j] - '0'];
        }
        cnt[s[i] - '0']++;
    }
    return res;
};

const main = () => {
    let s = "103301";
    let s2 = "0000000"
    let s3 = "9999900000";
    let debug1 = "45427";
    pr(countPalindromes(s))
    pr(countPalindromes(s2))
    pr(countPalindromes(s3))
    pr(countPalindromes(debug1)) // 0
};

main()