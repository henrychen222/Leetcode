/**
 * 08/30/20 evening   07/28/21 night complete
 * https://leetcode.com/problems/decoded-string-at-index/
 */

// Accepted --- 76ms 77.78%
// reference: https://leetcode.com/contest/weekly-contest-96/ranking uwi
const decodeAtIndex = (s, k) => {
    let n = s.length;
    let dp = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        if (isLowerCaseLetter(s[i])) {
            dp[i + 1] = dp[i] + 1;
        } else {
            dp[i + 1] = dp[i] * (s[i] - '0');
        }
    }
    // pr(dp);
    k--;
    for (let i = n - 1; ~i; i--) {
        let curL = dp[i + 1];
        k %= curL;
        // pr(k, curL);
        if (k + 1 == curL && isLowerCaseLetter(s[i])) return s[i];
    }
};

// heap out of memory  33/45
const decodeAtIndex1 = (S, K) => {
    let decode = '';
    for (const c of S) {
        if (isLowerCaseLetter(c)) {
            decode += c;
        } else {
            let tmp = decode.repeat(Number(c));
            if (tmp.length > K) return tmp[K - 1];
            decode = '';
            decode = tmp;
        }
    }
    return decode[K - 1];
};

const isLowerCaseLetter = (c) => {
    return c.charCodeAt() >= 97 && c.charCodeAt() <= 122;
};

const pr = console.log;
const main = () => {
    let S = "leet2code3",
        K = 10;
    let S2 = "ha22",
        K2 = 5;
    let S3 = "a2345678999999999999999",
        K3 = 1;
    let S_debug1 = "y959q969u3hb22odq595",
        K_debug1 = 222280369;
    pr(decodeAtIndex(S, K));
    pr(decodeAtIndex(S2, K2))
    pr(decodeAtIndex(S3, K3));
    pr(decodeAtIndex(S_debug1, K_debug1));
};

main()