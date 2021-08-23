/**
 * 08/21/21 morning
 * https://leetcode.com/contest/biweekly-contest-59/problems/maximum-matrix-sum/
 */

const pr = console.log;

// const maxMatrixSum = (g) => {
//     let n = g.length, m = g[0].length;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (g[i][j] >= 0) continue;
//             let l, r, t, d;
//             if (i - 1 >= 0 && g[i-1][j] < 0) t = g[i - 1][j];
//             if (i + 1 < n) d = g[i + 1][j];
//             if (j - 1 >= 0) l = g[i][j - 1];
//             if (j + 1 < m) r = g[i][j + 1];
//             let a = [];
//         }
//     }
// };

// Accepted
const maxMatrixSum = (g) => {
    let n = g.length, m = g[0].length, sum = 0, negative = 0, min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            sum += Math.abs(g[i][j]);
            if (g[i][j] < 0) negative++;
            min = Math.min(min, Math.abs(g[i][j]));
        }
    }
    if (negative & 1) sum -= 2 * min;
    return sum;
};

const main = () => {
    let matrix = [[1, -1], [-1, 1]];
    let matrix2 = [[1, 2, 3], [-1, -2, -3], [1, 2, 3]]
    pr(maxMatrixSum(matrix))
    pr(maxMatrixSum(matrix2))
};

main()