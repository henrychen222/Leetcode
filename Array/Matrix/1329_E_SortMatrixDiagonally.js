/**
 * 7.4 night
 * https://leetcode.com/problems/sort-the-matrix-diagonally/
 */

const pr = console.log;

// Accepted --- 96ms 74.42%
const stin = (a) => a.sort((x, y) => x - y);
const diagonalSort = (g) => {
    let n = g.length;
    let m = g[0].length;
    // let rs = [];
    for (let j = 0; j < m; j++) { // starting point is first row
        let tmp = [];
        let rin = 0; // row increase
        while (rin < n && j + rin < m) { // read Diagonally
            tmp.push(g[rin][j + rin]);
            rin++;
        }
        stin(tmp);
        rin = 0;
        while (rin < n && j + rin < m) { // after sort, reset in grid
            g[rin][j + rin] = tmp[rin];
            rin++;
        }
        // rs.push(tmp);
    }
    // let cs = [];
    for (let i = 0; i < n; i++) { // starting point is first col
        let tmp = [];
        let cin = 0; // column increase
        while (i + cin < n && cin < m) { // read Diagonally
            tmp.push(g[i + cin][cin]);
            cin++;
        }
        stin(tmp);
        cin = 0;
        while (i + cin < n && cin < m) { // after sort, reset in grid
            g[i + cin][cin] = tmp[cin];
            cin++;
        }
        // cs.push(tmp);
    }
    return g;
};

// ---------------------- 07/24/20 night --------------------
// const diagonalSort = (mat) => {
//     let M = mat.length;
//     let N = mat[0].length;
//     for (let i = 0; i < M; i++) {
//         let sm = mat[i][i];
//         let pos = i;
//         for (let j = i + 1; j < M; j++) {
//             if (sm > mat[j][j]) {
//                 sm = mat[j][j];
//                 pos = j;
//             }
//         }
//         swap(mat, i, i, pos, pos);
//     }
//     return mat;
// };

// const swap = (mat, i, i2, pos, pos2) => {
//     let temp = mat[i][i2];
//     mat[i][i2] = mat[pos][pos2];
//     mat[pos][pos2] = temp;
// }


const main = () => {
    let mat = [
        [3, 3, 1, 1],
        [2, 2, 1, 2],
        [1, 1, 1, 2]
    ];
    console.log(diagonalSort(mat));
    console.log(getDiagonals(mat));
};

main()