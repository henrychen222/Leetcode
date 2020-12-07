/**
 * 12.3 afternoon
 * https://leetcode.com/problems/longest-palindromic-subsequence/
 */

// Accepted --- 248ms 67.82%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/6493182.html
 * https://leetcode.com/problems/longest-palindromic-subsequence/discuss/99101/straight-forward-java-dp-solution
 */
const longestPalindromeSubseq1 = (s) => {
    let n = s.length;
    let dp = initialize2DArrayNew(n, n); // dp[i][j]: the longest palindromic subsequence's length of substring(i, j)
    for (let i = n - 1; ~i; i--) { // left index
        dp[i][i] = 1;
        for (let j = i + 1; j < n; j++) { // right index
            console.log(i, j)
            if (s[i] == s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
            // console.log(dp);
        }
    }
    // console.log(dp);
    return dp[0][n - 1];
};

// reference: https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-516-longest-palindromic-subsequence/
// Accepted --- 256ms 63.86%
const longestPalindromeSubseq_huahua1_modify = (s) => {
    let n = s.length;
    let dp = initialize2DArrayNew(n, n);
    for (let l = 1; l <= n; ++l) { // l: substring s[i, j] length
        for (let i = 0; i <= n - l; ++i) { // left index
            let j = i + l - 1; // right index
            // console.log(i, j)
            if (i == j) {
                dp[i][j] = 1;
                continue;
            }
            if (s[i] == s[j]) { // if else is faster
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[0][n - 1];
};

// Accepted --- 292ms 31.19%
const longestPalindromeSubseq_huahua1 = (s) => {
    let n = s.length;
    let dp = initialize2DArrayNew(n, n);
    for (let l = 1; l <= n; ++l) {
        for (let i = 0; i <= n - l; ++i) {
            let j = i + l - 1;
            if (i == j) {
                dp[i][j] = 1;
                continue;
            }
            dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            if (s[i] == s[j]) dp[i][j] = dp[i + 1][j - 1] + 2;
        }
    }
    return dp[0][n - 1];
};

// Accepted --- 116ms 97.52%
const longestPalindromeSubseq = (s) => {
    let n = s.length;
    let dp = new Array(n).fill(0);
    let dp1 = new Array(n).fill(0);
    let dp2 = new Array(n).fill(0);
    for (let l = 1; l <= n; ++l) {
        for (let i = 0; i <= n - l; ++i) {
            let j = i + l - 1;
            if (i == j) {
                dp[i] = 1;
                continue;
            }
            if (s[i] == s[j])
                dp[i] = dp2[i + 1] + 2;
            else
                dp[i] = Math.max(dp1[i], dp1[i + 1]);
        }
        [dp, dp1] = [dp1, dp];
        [dp2, dp] = [dp, dp2];
    }
    // console.log(dp, dp1, dp2);
    return dp1[0];
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let s = "bbbab";
    let s2 = "cbbd";
    console.log(longestPalindromeSubseq(s));
    console.log(longestPalindromeSubseq(s2));
};

main()