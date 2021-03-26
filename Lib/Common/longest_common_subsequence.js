/**
 * 03/25/21 afternoon
 * 
 * example question: https://leetcode.com/problems/longest-common-subsequence/
 * 
 * reference:
 * https://www.techiedelight.com/longest-common-subsequence/
 */
// use
const longestCommonSubsequence = (A, B) => {
    let m = A.length;
    let n = B.length;
    let dp = initialize2DArrayNew(m + 1, n + 1);
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (A[i - 1] == B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

// slow
let memo, A, B;
const longestCommonSubsequence = (a, b) => {
    memo = new Map();
    A = a;
    B = b;
    return dfs(A.length, B.length);
};

const dfs = (i, j) => { // i: idxA  j: idxB
    if (i == 0 || j == 0) return 0;
    let k = i + ' ' + j;
    if (memo.has(k)) return memo.get(k);
    if (A[i - 1] == B[j - 1]) {
        memo.set(k, dfs(i - 1, j - 1) + 1);
    } else {
        memo.set(k, Math.max(dfs(i, j - 1), dfs(i - 1, j)));
    }
    return memo.get(k);
};