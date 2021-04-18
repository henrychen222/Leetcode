/**
 * 04/17/21 afternoon
 * https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/
 */

// Accepted --- 240ms 85%
// reference: https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/discuss/303750/JavaC%2B%2BPython-Find-the-Subarray-with-Target-Sum
const numSubmatrixSumTarget = (g, target) => {
    let n = g.length;
    let m = g[0].length;
    let res = 0;
    for (let i = 0; i < n; i++) { // calculate prefix sum for each row
        for (let j = 1; j < m; j++) {
            g[i][j] += g[i][j - 1];
        }
    }
    for (let i = 0; i < m; i++) { // for every possible (left column, right column) range
        for (let j = i; j < m; j++) {
            let ma = new Map();
            ma.set(0, 1);
            let cur = 0;
            for (let k = 0; k < n; k++) { // accumulate the prefix sum of submatrices by adding up the sum of values for each row
                cur += g[k][j] - (i > 0 ? g[k][i - 1] : 0);
                res += ma.get(cur - target) || 0;
                ma.set(cur, ma.get(cur) + 1 || 1);
            }
            // pr(cur, res, ma);
        }
    }
    return res;
};

const pr = console.log;
const main = () => {
    let matrix = [
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0]
        ],
        target = 0;
    let matrix2 = [
            [1, -1],
            [-1, 1]
        ],
        target2 = 0;
    let matrix3 = [
            [904]
        ],
        target3 = 0;
    pr(numSubmatrixSumTarget(matrix, target));
    pr(numSubmatrixSumTarget(matrix2, target2));
    pr(numSubmatrixSumTarget(matrix3, target3));
};

main()