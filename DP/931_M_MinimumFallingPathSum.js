/**
 * 10.14 evening
 * https://leetcode.com/problems/minimum-falling-path-sum/
 */

// Accepted --- 84ms 78.02%
const minFallingPathSum_rewrite2 = (A) => {
    let n = A.length;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let min = A[i - 1][j];
            if (j - 1 >= 0) {
                min = Math.min(min, A[i - 1][j - 1]);
            }
            if (j + 1 < n) {
                min = Math.min(min, A[i - 1][j + 1]);
            }
            A[i][j] += min;
        }
    }
    return Math.min.apply(Math, A[n - 1]);
};

// Accepted --- 84ms 78.02%
const minFallingPathSum_rewrite = (A) => {
    let n = A.length;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            A[i][j] += Math.min(A[i - 1][j], A[i - 1][Math.max(0, j - 1)], A[i - 1][Math.min(n - 1, j + 1)]);
        }
    }
    return Math.min.apply(Math, A[n - 1]);
};

// Accepted --- 72ms 97.80%
/**
 * dp of original array
 * reference:
 * https://leetcode.com/problems/minimum-falling-path-sum/discuss/186666/C%2B%2BJava-4-lines-DP
 * https://www.cnblogs.com/grandyang/p/12268664.html
 */
const minFallingPathSum = (A) => {
    let n = A.length;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            A[i][j] += Math.min(A[i - 1][j], Math.min(A[i - 1][Math.max(0, j - 1)], A[i - 1][Math.min(n - 1, j + 1)]));
        }
    }
    console.log(A);
    return Math.min.apply(Math, A[n - 1]);
};

// Accepted -- 92ms 50.55%
/**
 * reference: 
 * https://leetcode.com/problems/minimum-falling-path-sum/discuss/186689/Java-DP-solution-with-graph-illustrated-explanations
 * https://blog.csdn.net/fuxuemingzhu/article/details/83479398
 */
const minFallingPathSum1 = (A) => {
    let m = A.length;
    let n = A[0].length;
    let dp = initialize2DArrayNew(m, n + 2);
    for (let i = 1; i <= n; i++) {
        dp[0][i] = A[0][i - 1];
    }
    // console.log(dp);
    // console.log("");
    for (let i = 0; i < m; i++) {
        dp[i][0] = Number.MAX_VALUE;
        dp[i][n + 1] = Number.MAX_VALUE;
    }
    // console.log(dp);
    // console.log("");
    for (let i = 1; i < m; i++) {
        for (let j = 1; j <= n; j++) { // Find the minimum neighbor from previous row in DP matrix, and update dp[i][j]
            let minNeighbor = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]);
            dp[i][j] = A[i][j - 1] + minNeighbor;
        }
    }
    // console.log(dp);
    let res = Number.MAX_VALUE;
    for (let j = 1; j <= n; j++) {
        res = Math.min(res, dp[m - 1][j]);
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
    let A = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let debug1 = [
        [-80, -13, 22],
        [83, 94, -5],
        [73, -48, 61]
    ];
    console.log(minFallingPathSum(A));
    console.log(minFallingPathSum(debug1)); // -66
};

main()


// const minFallingPathSum2 = (A) => {
//     let res = [];
//     let rows = new Set();
//     for (const a of A) {
//         let n = a.length;
//         let tmp = [...a].sort((a, b) => a - b);
//         for (let i = 0; i < n; i++) {
//             let r = a.indexOf(tmp[i]);
//             if (!rows.has(r)) {
//                 res.push(tmp[i]);
//                 rows.add(r);
//                 break;
//             }
//         }
//     }
//     console.log(res);
//     return sum(res);
// };

// wrong 15/46
// const minFallingPathSum1 = (A) => {
//     let res = [];
//     for (const a of A) {
//         let n = a.length;
//         let tmp = [...a].sort((a, b) => a - b);
//         for (let i = 0; i < n; i++) {
//             if (res.indexOf(tmp[i]) == -1) {
//                 res.push(tmp[i]);
//                 break;
//             }
//         }
//     }
//     return sum(res);
// };

// const sum = (arr) => {
//     return arr.reduce((acc, cur) => acc + cur);
// };