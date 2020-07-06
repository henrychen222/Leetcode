/**
 * 7.4 night
 * https://leetcode.com/problems/sort-the-matrix-diagonally/
 */


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
    //console.log(diagonalSort(mat));
    console.log(getDiagonals(mat));
};

main()