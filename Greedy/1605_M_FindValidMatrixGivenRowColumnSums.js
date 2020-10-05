/**
 * 10.3 afternoon
 * https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/
 */

// reference: uwi https://leetcode.com/contest/biweekly-contest-36/ranking/1/
// Accepted --- 336ms 50.00%
const restoreMatrix = (rowSum, colSum) => {
    let m = rowSum.length;
    let n = colSum.length;
    let res = initialize2DArray(m, n);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[i][j] = Math.min(rowSum[i], colSum[j]);
            rowSum[i] -= res[i][j];
            colSum[j] -= res[i][j];
        }
        console.log(res, rowSum, colSum);
    }
    return res;
};

const initialize2DArray = (height, width) => {
    let M = [];
    for (let i = 0; i < height; i++) {
        let tmp = [];
        for (let j = 0; j < width; j++) {
            tmp.push(0);
        }
        M.push(tmp);
    }
    return M;
};

const main = () => {
    let rowSum = [3, 8],
        colSum = [4, 7];
    let rowSum2 = [5, 7, 10],
        colSum2 = [8, 6, 8];
    let rowSum3 = [14, 9],
        colSum3 = [6, 9, 8];
    let rowSum4 = [1, 0],
        colSum4 = [1];
    let rowSum5 = [0],
        colSum5 = [0];
    // console.log(restoreMatrix(rowSum, colSum));
    // console.log(restoreMatrix(rowSum2, colSum2));
    console.log(restoreMatrix(rowSum3, colSum3));
    // console.log(restoreMatrix(rowSum4, colSum4));
    // console.log(restoreMatrix(rowSum5, colSum5));
};

main()