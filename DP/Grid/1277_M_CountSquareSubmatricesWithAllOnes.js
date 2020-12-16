/**
 * 12.15 morning
 * https://leetcode.com/problems/count-square-submatrices-with-all-ones/
 * 
 * reference:
 * https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-1277-count-square-submatrices-with-all-ones/
 * https://leetcode.com/problems/count-square-submatrices-with-all-ones/discuss/441306/JavaC%2B%2BPython-DP-solution
 */

// Accepted --- 104ms 56.95%
const countSquares = (matrix) => {
    let m = matrix.length;
    let n = matrix[0].length;
    let dp = initialize2DArrayNew(m, n);
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] = matrix[i][j];
            if (i > 0 && j > 0 && dp[i][j] > 0) {
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
            }
            res += dp[i][j];
        }
    }
    // console.log(dp);
    return res;
};

// Accepted --- 104ms 56.95%
const countSquares_modify = (matrix) => {
    let m = matrix.length;
    let n = matrix[0].length;
    let dp = initialize2DArrayNew(m, n);
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] = matrix[i][j];
            if (i && j && dp[i][j]) { // difference
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
            }
            res += dp[i][j];
        }
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
    let matrix = [
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 1, 1, 1]
    ];

    let matrix2 = [
        [1, 0, 1],
        [1, 1, 0],
        [1, 1, 0]
    ]
    console.log(countSquares(matrix));
    console.log(countSquares(matrix2));
};

main()