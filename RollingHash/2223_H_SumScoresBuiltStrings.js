/*
 * 09/22/22 morning
 * https://leetcode.com/problems/sum-of-scores-of-built-strings/
 */

const pr = console.log;

const sumScores = (s) => {
    let z = z_function(s), res = 0;
    // pr(z);
    for (const x of z) res += x;
    return res + s.length;
};

// Accepted --- 191ms 100%
// reference: https://cp-algorithms.com/string/z-function.html#efficient-algorithm-to-compute-the-z-function
const z_function = (s) => {
    let n = s.length, l = 0, r = 0, z = Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        if (i <= r) z[i] = Math.min(r - i + 1, z[i - l]);
        while (i + z[i] < n && s[z[i]] == s[i + z[i]]) z[i]++;
        if (i + z[i] - 1 > r) {
            l = i;
            r = i + z[i] - 1;
        }
    }
    return z;
};

// Accepted --- 121ms 100%
// reference: https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/
// https://leetcode.com/contest/biweekly-contest-75/ranking cuiaoxiang
const z_function2 = (s) => {
    let n = s.length, l = 0, r = 0, z = Array(n).fill(0);
    for (let i = 1; i < n; ++i) {
        if (i > r) {
            l = r = i;
            while (r < n && s[r - l] == s[r]) r++;
            z[i] = r - l;
            r--;
        } else {
            let k = i - l;
            if (z[k] < r - i + 1) {
                z[i] = z[k];
            } else {
                l = i;
                while (r < n && s[r - l] == s[r]) r++;
                z[i] = r - l;
                r--;
            }
        }
    }
    return z;
};

const main = () => {
    let s = "babab";
    let s2 = "azbazbzaz";
    pr(sumScores(s))
    pr(sumScores(s2))
};

main()