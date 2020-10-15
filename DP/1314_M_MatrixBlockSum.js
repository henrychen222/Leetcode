/**
 * 10.14 afternoon
 * https://leetcode.com/problems/matrix-block-sum/
 */

// Accepted --- 1016ms 5.36%
const matrixBlockSum = (mat, K) => {
    let m = mat.length;
    let n = mat[0].length;
    let res = initialize2DArrayNew(m, n);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let r = i - K; r <= i + K; r++) {
                for (let c = j - K; c <= j + K; c++) {
                    if (r >= 0 && r < m && c >= 0 && c < n) {
                        res[i][j] += mat[r][c];
                    }
                }
            }
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
    let mat = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],
        K = 1;
    let mat2 = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],
        K2 = 2;
    console.log(matrixBlockSum(mat, K));
    console.log(matrixBlockSum(mat2, K2));
};

main()