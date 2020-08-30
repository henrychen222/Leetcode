/**
 * 8.11 night  8.28 enening complete
 * https://leetcode.com/problems/toeplitz-matrix/
 */

// Accepted --- 96ms 40.70%
const isToeplitzMatrix = (matrix) => {
    let m = matrix.length;
    let n = matrix[0].length;
    let data = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            data.push({
                item: matrix[i][j],
                row: i,
                col: j
            });
        }
    }
    // console.log(data);
    for (const d of data) {
        if ((d.row == 0) || (d.col == 0 && d.row != 0)) {
            let tmp = [d.item];
            let t = 1;
            while (true) {
                if ((d.row + t) == m || (d.col + t) == n) break;
                let v = matrix[d.row + t][d.col + t]; // get diagonal
                tmp.push(v);
                t++;
            }
            // console.log(tmp);
            if ([...new Set(tmp)].length != 1) return false;
        }
    }
    return true;
};

const main = () => {
    let matrix = [
        [1, 2, 3, 4],
        [5, 1, 2, 3],
        [9, 5, 1, 2]
    ]
    let matrix2 = [
        [1, 2],
        [2, 2]
    ]
    console.log(isToeplitzMatrix(matrix));
    console.log(isToeplitzMatrix(matrix2));
};

main()


// const isToeplitzMatrix = (matrix) => {
//     let row = matrix.length;
//     let col = matrix[0].length;
//     let data = [];
//     for (let i = 1; i <= row + col - 1; i++) {
//         let start_col = max(0, i - row);
//         let cnt = minThree(i, (col - start_col), row);
//         let tmp = [];
//         for (let j = cnt - 1; j>=0; j--) {
//             let item = matrix[minTwo(row, i) - j - 1][start_col + j];
//             tmp.push(item);
//         }
//         console.log(tmp)
//         data.push(tmp);
//     }
//     console.log(data);
// };

// const diagnalTraversal = (matrix) => {
//     let row = matrix.length;
//     let col = matrix[0].length;
//     let data = [];
//     for (let i = 1; i <= row + col - 1; i++) {
//         let start_col = max(0, i - row);
//         let cnt = minThree(i, (col - start_col), row);
//         let tmp = [];
//         for (let j = cnt - 1; j>=0; j--) {
//             let item = matrix[minTwo(row, i) - j - 1][start_col + j];
//             tmp.push(item);
//         }
//         console.log(tmp)
//         data.push(tmp);
//     }
//     console.log(data);
// };

// const minTwo = (a, b) => {
//     return (a < b) ? a : b;
// };

// const minThree = (a, b, c) => {
//     return minTwo(minTwo(a, b), c);
// };

// const max = (a, b) => {
//     return (a > b) ? a : b;
// };