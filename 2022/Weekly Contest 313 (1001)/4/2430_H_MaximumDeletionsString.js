/*
 * 10/01/22 evning
 * https://leetcode.com/contest/weekly-contest-313/problems/maximum-deletions-on-a-string/
 */

const pr = console.log;

// Accepted reference: uwi
const deleteString = (s) => {
    let n = s.length, dp = Array(n).fill(0);
    for (let i = n - 1; ~i; i--) {
        let suf = s.slice(i), z = z_function(suf);
        dp[i] = 1;
        for (let j = 1; j <= suf.length / 2; j++) {
            if (z[j] >= j) {
                dp[i] = Math.max(dp[i], dp[i + j] + 1);
            }
        }
    }
    return dp[0];
};

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

///////////////////////////////////////////////////////
// WA
const deleteString2 = (s) => {
    let c = 1, d = '';
    for (let i = 0; i < s.length; i++) {
        d += s[i];
        let s2 = s.substring(i + 1, i + 1 + d.length);
        if (s2 == d) {
            pr(s);
            c = 1 + deleteString(s.substring(i + 1));
            break;
        }
    }
    return c;
};

const deleteString1 = (s) => {
    let res = 0;
    // for (let i = 0; i<5;i++) {
    while (1) {
        let find = false;
        pr(s, res)
        for (let i = 1; i <= s.length / 2; i++) {
            let l = s.slice(0, i), r = s.slice(i, i + i);
            // pr(l, r);
            if (l == r) {
                s = s.slice(i);
                find = true;
                res++;
                break;
            }
        }
        if (!find) {
            res++;
            break;
        }
    }
    return res;
};

const main = () => {
    let s = "abcabcdabc";
    let s2 = "aaabaab";
    let s3 = "aaaaa";
    let s4 = "aabaab";
    let s5 = "llfllffa"
    pr(deleteString(s))
    pr(deleteString(s2))
    pr(deleteString(s3))
    pr(deleteString(s4)) // 3
    pr(deleteString(s5)) // 3
};

main()
