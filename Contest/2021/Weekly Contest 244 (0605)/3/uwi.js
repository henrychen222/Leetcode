/**
 * 06/05/21 evening
 * https://leetcode.com/contest/weekly-contest-244/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/
 */

const pr = console.log;

// Accepted --- 124ms
const mi = Math.min;
const minFlips = (s) => {
    let n = s.length;
    let a = Array(n).fill(0);
    for (let i = 0; i < n; i++) a[i] = s[i] - '0' ^ (i % 2); // even index keep, odd index switch
    pr(a);
    test(a, s)
    if (n % 2 == 0) {
        let f = [0, 0];
        for (const e of a) f[e]++;
        return mi(f[0], f[1]);
    }
    let res = Number.MAX_SAFE_INTEGER;
    let dp = [0, 0];
    for (const e of a) {
        e == 1 ? dp[0]++ : dp[1]++; // '10'
        dp[1] = mi(dp[1], dp[0]);
    }
    // pr(dp);
    res = mi(res, dp[0]);
    res = mi(res, dp[1]);
    dp = [0, 0];
    for (const e of a) {
        e == 0 ? dp[0]++ : dp[1]++; // '01'
        dp[1] = mi(dp[1], dp[0]);
    }
    // pr(dp);
    res = mi(res, dp[0]);
    res = mi(res, dp[1]);
    return res;
};

const test = (cur, origin) => {
    let n = origin.length;
    let odd = even = 0;
    for (let i = 0; i < n; i++) {
       
        if (i % 2 == 0) {
            pr('even', cur[i], origin[i], cur[i] == origin[i] - '0')
            if (cur[i] != origin[i] - '0') even++;
        } else {
            pr('odd', cur[i], origin[i]);
            if (cur[i] != origin[i] - '0')odd++;
        }
    }
    pr(odd, even);
};

const main = () => {
    let s = "111000";
    let s2 = "010";
    let s3 = "1110";
    let debug1 = "01001001101";
    let debug2 = "10001100101000000";
    // pr(minFlips(s))
    // pr(minFlips(s2))
    // pr(minFlips(s3))
    // pr(minFlips(debug1)) // 2
    pr(minFlips(debug2)) // 5
};

main()

 // pr(3 + true, 3 + false);