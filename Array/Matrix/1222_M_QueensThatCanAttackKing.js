/**
 * 7.19 night  06/01/21 night fix
 * https://leetcode.com/problems/queens-that-can-attack-the-king/
 */

// Accepted --- 128ms 5.13%
const queensAttacktheKing = (q, k) => {
    let n = 8;
    let pos = initialize2DArrayNew(n, n);
    for (const [i, j] of q) pos[i][j] = 1;
    let [kr, kc] = [k[0], k[1]];
    let res = [];
    for (let i = kr; ~i; i--) { // first top
        if (pos[i][kc]) {
            res.push([i, kc]);
            break;
        }
    }
    for (let i = kr; i < n; i++) { // first down
        if (pos[i][kc]) {
            res.push([i, kc]);
            break;
        }
    }
    for (let j = kc; ~j; j--) { // first left
        if (pos[kr][j]) {
            res.push([kr, j]);
            break;
        }
    }
    for (let j = kc; j < n; j++) { // first right
        if (pos[kr][j]) {
            res.push([kr, j]);
            break;
        }
    }
    let [row, col] = [kr, kc];
    while (1) { // first top left
        if (row - 1 < 0 || col - 1 < 0) break;
        row--;
        col--;
        if (pos[row][col]) {
            res.push([row, col]);
            break;
        }
    }
    [row, col] = [kr, kc];
    while (1) { // first down right
        if (row + 1 >= n || col + 1 >= n) break;
        row++;
        col++;
        if (pos[row][col]) {
            res.push([row, col]);
            break;
        }
    }
    [row, col] = [kr, kc];
    while (1) { // first top right
        if (row - 1 < 0 || col + 1 >= n) break;
        row--;
        col++;
        if (pos[row][col]) {
            res.push([row, col]);
            break;
        }
    }
    [row, col] = [kr, kc];
    while (1) { // first down left
        if (row + 1 >= n || col - 1 < 0) break;
        row++;
        col--
        if (pos[row][col]) {
            res.push([row, col]);
            break;
        }
    }
    return res;
};

const initialize2DArrayNew = (n, m) => {
    let data = [];
    for (let i = 0; i < n; i++) {
        let tmp = Array(m).fill(0);
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let queens = [
            [0, 1],
            [1, 0],
            [4, 0],
            [0, 4],
            [3, 3],
            [2, 4]
        ],
        king = [0, 0];
    let queens2 = [
            [0, 0],
            [1, 1],
            [2, 2],
            [3, 4],
            [3, 5],
            [4, 4],
            [4, 5]
        ],
        king2 = [3, 3];
    let queens3 = [
            [5, 6],
            [7, 7],
            [2, 1],
            [0, 7],
            [1, 6],
            [5, 1],
            [3, 7],
            [0, 3],
            [4, 0],
            [1, 2],
            [6, 3],
            [5, 0],
            [0, 4],
            [2, 2],
            [1, 1],
            [6, 4],
            [5, 4],
            [0, 0],
            [2, 6],
            [4, 5],
            [5, 2],
            [1, 4],
            [7, 5],
            [2, 3],
            [0, 5],
            [4, 2],
            [1, 0],
            [2, 7],
            [0, 1],
            [4, 6],
            [6, 1],
            [0, 6],
            [4, 3],
            [1, 7]
        ],
        king3 = [3, 4];
    console.log(queensAttacktheKing(queens, king));
    console.log(queensAttacktheKing(queens2, king2));
    console.log(queensAttacktheKing(queens3, king3));
};

main()

/////////////////////////////////// 07/19/20 night //////////////////////////////////
// const queensAttacktheKing = (queens, king) => {
//     // let queensSortedBasedOnRow = [...queens].sort((a, b) => a[0] - b[0]);
//     // let queensSortedBasedOnCol = [...queens].sort((a, b) => a[1] - b[1]);
//     // console.log(queensSortedBasedOnRow)
//     // console.log(queensSortedBasedOnCol)

//     let res = [];
//     let leftClosest;
//     let rightClosest;
//     for (const q of queens) {
//         if (q[0] == king[0]) { // same row of king, different col
//             for (let j = king[1] - 1; j >= 0; j--) {
//                 if (queens.find(x => x[0] == king[0] && x[1] == j) != undefined) {
//                     leftClosest = j;
//                     break;
//                 }
//             }
//             for (let j = king[1]; j < 8; j++) {
//                 if (queens.find(x => x[0] == king[0] && x[1] == j) != undefined) {
//                     rightClosest = j;
//                     break;
//                 }
//             }

//         }
//     }
//     if (leftClosest != undefined) {
//         res.push([king[0], leftClosest]);
//     }
//     if (rightClosest != undefined) {
//         res.push([king[0], rightClosest]);
//     }

//     let bottomClosest;
//     let topClosest;
//     for (const q of queens) {
//         if (q[1] == king[1]) { // same col of king, different row
//             for (let i = king[0]; i < 8; i++) {
//                 if (queens.find(x => x[0] == i && x[1] == king[1]) != undefined) {
//                     bottomClosest = i;
//                     break;
//                 }
//             }
//             for (let i = king[0] - 1; i >= 0; i--) {
//                 if (queens.find(x => x[0] == i && x[1] == king[1]) != undefined) {
//                     topClosest = i;
//                     break;
//                 }
//             }
//         }
//     }

//     if (bottomClosest != undefined) {
//         res.push([bottomClosest, king[1]]);
//     }
//     if (topClosest != undefined) {
//         res.push([topClosest, king[1]]);
//     }

//     //TODO two Diagonal
//     let leftTopClosest;
//     let rightBottomClosest;
//     for (const q of queens) { // issue
//         for (let d = 1; d < 8 - Math.max(king[0], king[1]); d++) {
//             if (q.find(x => x[0] == king[0] + d && x[1] == king[1] + d) != undefined) {
//                 rightBottomClosest = [king[0] + d, king[1] + d];
//                 console.log(rightBottomClosest);
//             }

//         }
//     }
//     // res.push(rightBottomClosest[0], rightBottomClosest[1]);

//     console.log(res);
// };