/**
 * 12.28 night
 * https://leetcode.com/problems/rotate-image/
 */

// Accepted --- 72ms 93.85%
const rotate = (matrix) => { // in this question m = n;
    let m = matrix.length;
    let n = matrix[0].length;
    let res = initialize2DArrayNew(m, n);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[j][n - i - 1] = matrix[i][j];
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = res[i][j];
        }
    }
    console.log(matrix);
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
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let matrix2 = [
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16]
    ];
    let matrix3 = [
        [1]
    ];
    let matrix4 = [
        [1, 2],
        [3, 4]
    ];
    console.log(rotate(matrix));
    console.log(rotate(matrix2));
    console.log(rotate(matrix3));
    console.log(rotate(matrix4));
};

main()