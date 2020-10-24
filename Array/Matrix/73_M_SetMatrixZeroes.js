/**
 * 10.21 evening
 * https://leetcode.com/problems/set-matrix-zeroes/
 */

// Accepted --- 112ms 24.97%
const setZeroes = (matrix) => {
    let m = matrix.length;
    let n = matrix[0].length;
    let data = [];
    let ZeroData = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            data.push({
                row: i,
                col: j,
                item: matrix[i][j]
            });
            if (matrix[i][j] == 0) {
                ZeroData.push({
                    row: i,
                    col: j,
                    item: matrix[i][j]
                });
            }
        }
    }
    // console.log(data);
    // console.log(ZeroData);
    for (const zd of ZeroData) {
        for (const d of data) {
            if (d.row == zd.row || d.col == zd.col) {
                d.item = 0;
            }
        }
    }
    // console.log(data);
    for (const d of data) {
        matrix[d.row][d.col] = d.item;
    }
    console.log(matrix);
};

const main = () => {
    let matrix = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ];
    let matrix2 = [
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5]
    ]
    console.log(setZeroes(matrix));
    console.log(setZeroes(matrix2));
};

main()