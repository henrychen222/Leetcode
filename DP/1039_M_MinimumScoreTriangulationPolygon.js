/**
 * 12.1 evening
 * https://leetcode.com/problems/minimum-score-triangulation-of-polygon/
 * 
 * read: 
 * https://www.geeksforgeeks.org/minimum-cost-polygon-triangulation/
 */

// Accepted --- 84ms 70%
/**
 * reference:
 * https://xingxingpark.com/Leetcode-1039-Minimum-Score-Triangulation-of-Polygon/
 * https://leetcode.com/problems/minimum-score-triangulation-of-polygon/discuss/286705/JavaC%2B%2BPython-DP
 */
const minScoreTriangulation = (A) => {
    let n = A.length;
    let dp = initialize2DArrayNew(n, n);
    for (let j = 2; j < n; j++) {
        for (let i = j - 2; ~i; i--) {
            dp[i][j] = Number.MAX_VALUE;
            for (let k = i + 1; k < j; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + A[i] * A[j] * A[k]);
            }
        }
    }
    // console.log(dp);
    return dp[0][n - 1];
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
    let A = [1, 2, 3];
    let A2 = [3, 7, 4, 5];
    let A3 = [1, 3, 1, 4, 1, 5];
    console.log(minScoreTriangulation(A));
    console.log(minScoreTriangulation(A2));
    console.log(minScoreTriangulation(A3));
};

main()