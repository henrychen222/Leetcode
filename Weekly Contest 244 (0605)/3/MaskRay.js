/**
 * 06/05/21 evening
 * https://leetcode.com/contest/weekly-contest-244/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/
 */

const pr = console.log;

// Accepted --- 156ms
const mi = Math.min;
const minFlips = (s) => {
    let n = s.length;
    s += s;
    let a = Array(2 * n + 1).fill(0);
    let b = Array(2 * n + 1).fill(0);
    // pr(s);
    let ct = ct2 = 0;
    for (let i = 0; i < 2 * n; i++) {
        // if (s[i] - '0' == i % 2) pr(s[i], i);
        // if (s[i] - '0' != i % 2) pr(s[i], i);
        a[i + 1] = a[i] + (s[i] - '0' == i % 2); // '0' at even index, '1' at odd index
        b[i + 1] = b[i] + (s[i] - '0' != i % 2); // '0' at odd index , '1' at even index
    }
    // pr(a);
    // pr(b);
    let res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        res = mi(res, a[i + n] - a[i], b[i + n] - b[i]);
    }
    return res;
};

const main = () => {
    let s = "111000";
    let s2 = "010";
    let s3 = "1110";
    let debug1 = "01001001101";
    let debug2 = "10001100101000000";
    pr(minFlips(s))
    pr(minFlips(s2))
    pr(minFlips(s3))
    pr(minFlips(debug1)) // 2
    pr(minFlips(debug2)) // 5
};

main()

// pr(3 + true, 3 + false);