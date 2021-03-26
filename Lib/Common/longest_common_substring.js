/**
 * 03/25/21 morning
 * example question:
 * https://codeforces.com/contest/1506/problem/C
 */

const LongestCommonSubstringLen = (A, B) => {
    let m = A.length;
    let n = B.length;
    let maxLen = 0;
    let dp = initialize2DArrayNew(m + 1, n + 1);
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (A[i - 1] == B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLen) {
                    maxLen = dp[i][j];
                }
            }
        }
    }
    return maxLen;
};

// referenen: https://www.techiedelight.com/longest-common-substring-problem/
const LongestCommonSubstring = (A, B) => { // doesn't matter which short or long
    let m = A.length;
    let n = B.length;
    let maxLen = 0;
    let endIdx = m;
    let dp = initialize2DArrayNew(m + 1, n + 1); // lCS suffix
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (A[i - 1] == B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1; // bottom-up
                if (dp[i][j] > maxLen) {
                    maxLen = dp[i][j];
                    endIdx = i;
                }
            }
        }
    }
    return A.slice(endIdx - maxLen, endIdx);
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};