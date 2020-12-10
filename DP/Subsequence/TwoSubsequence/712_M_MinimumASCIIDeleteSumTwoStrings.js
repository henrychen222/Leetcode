/**
 * 12.8 afternoon
 * https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/
 */

// Accepted --- 116ms 55.10%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/7752002.html
 * https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/discuss/108821/lcs-variation-solution-python-c
 * based on LCS: find the LCS first, and res is total two string ASCII sum - 2 * LCS
 */
const minimumDeleteSum = (s1, s2) => {
    let m = s1.length;
    let n = s2.length;
    let dp = initialize2DArrayNew(m + 1, n + 1);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (s1[i] == s2[j]) {
                dp[i + 1][j + 1] = dp[i][j] + s1[i].charCodeAt();
            } else {
                dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }
    return sum(s1) + sum(s2) - 2 * dp[m][n];
};

// Accepted --- 120ms 44.90%
const minimumDeleteSum_modify = (s1, s2) => {
    let m = s1.length;
    let n = s2.length;
    let dp = initialize2DArrayNew(m + 1, n + 1);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (s1[i] == s2[j]) {
                dp[i + 1][j + 1] = dp[i][j] + s1[i].charCodeAt() * 2;
            } else {
                dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }
    return sum(s1) + sum(s2) - dp[m][n];
};

const sum = (s) => {
    let res = 0;
    for (const c of s) {
        res += c.charCodeAt();
    }
    return res;
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
    let s1 = "sea",
        s2 = "eat";
    let s1_2 = "delete",
        s2_2 = "leet";
    console.log(minimumDeleteSum(s1, s2));
    console.log(minimumDeleteSum(s1_2, s2_2));
};

main()