/**
 * 10.11 evening
 * https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/
 * 
 * read: 
 * https://blog.csdn.net/qq_41729780/article/details/108722987
 */

// Accepted --- 92ms 76.15%
const maxProductPath2_modify = (grid) => {
    let mod = 1e9 + 7;
    let m = grid.length;
    let n = grid[0].length;
    let min = initialize2DArrayMax(m, n);
    let max = initialize2DArrayMin(m, n);
    min[0][0] = max[0][0] = grid[0][0];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0) {
                min[i][j] = Math.min(min[i][j], min[i - 1][j] * grid[i][j]);
                max[i][j] = Math.max(max[i][j], max[i - 1][j] * grid[i][j]);
                min[i][j] = Math.min(min[i][j], max[i - 1][j] * grid[i][j]);
                max[i][j] = Math.max(max[i][j], min[i - 1][j] * grid[i][j]);
            }
            if (j > 0) {
                min[i][j] = Math.min(min[i][j], min[i][j - 1] * grid[i][j]);
                max[i][j] = Math.max(max[i][j], max[i][j - 1] * grid[i][j]);
                min[i][j] = Math.min(min[i][j], max[i][j - 1] * grid[i][j]);
                max[i][j] = Math.max(max[i][j], min[i][j - 1] * grid[i][j]);
            }
        }
    }
    let res = max[m - 1][n - 1];
    return res >= 0 ? res % mod : -1;
};

// Accepted --- 92ms 76.15%
// reference: https://www.acwing.com/file_system/file/content/whole/index/content/1327502/
const maxProductPath2 = (grid) => {
    let mod = 1e9 + 7;
    let m = grid.length;
    let n = grid[0].length;
    let min = initialize2DArrayMax(m, n);
    let max = initialize2DArrayMin(m, n);
    min[0][0] = max[0][0] = grid[0][0];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0) {
                if (grid[i][j] > 0) {
                    min[i][j] = Math.min(min[i][j], min[i - 1][j] * grid[i][j]);
                    max[i][j] = Math.max(max[i][j], max[i - 1][j] * grid[i][j]);
                } else {
                    min[i][j] = Math.min(min[i][j], max[i - 1][j] * grid[i][j]);
                    max[i][j] = Math.max(max[i][j], min[i - 1][j] * grid[i][j]);
                }
            }
            if (j > 0) {
                if (grid[i][j] > 0) {
                    min[i][j] = Math.min(min[i][j], min[i][j - 1] * grid[i][j]);
                    max[i][j] = Math.max(max[i][j], max[i][j - 1] * grid[i][j]);
                } else {
                    min[i][j] = Math.min(min[i][j], max[i][j - 1] * grid[i][j]);
                    max[i][j] = Math.max(max[i][j], min[i][j - 1] * grid[i][j]);
                }
            }
        }
    }
    let res = max[m - 1][n - 1];
    return res >= 0 ? res % mod : -1;
};

// Accepted --- 84ms 90.83%
// reference: https://leetcode.com/contest/weekly-contest-207/ranking uwi
const maxProductPath1 = (grid) => {
    let mod = 1e9 + 7;
    let m = grid.length;
    let n = grid[0].length;
    let min = initialize2DArrayMax(m, n);
    let max = initialize2DArrayMin(m, n);
    min[0][0] = max[0][0] = grid[0][0];
    // console.log(min);
    // console.log(max);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i + 1 < m) {
                min[i + 1][j] = Math.min(min[i + 1][j], min[i][j] * grid[i + 1][j]);
                min[i + 1][j] = Math.min(min[i + 1][j], max[i][j] * grid[i + 1][j]);
                max[i + 1][j] = Math.max(max[i + 1][j], max[i][j] * grid[i + 1][j]);
                max[i + 1][j] = Math.max(max[i + 1][j], min[i][j] * grid[i + 1][j]);
            }
            if (j + 1 < n) {
                min[i][j + 1] = Math.min(min[i][j + 1], min[i][j] * grid[i][j + 1]);
                min[i][j + 1] = Math.min(min[i][j + 1], max[i][j] * grid[i][j + 1]);
                max[i][j + 1] = Math.max(max[i][j + 1], max[i][j] * grid[i][j + 1]);
                max[i][j + 1] = Math.max(max[i][j + 1], min[i][j] * grid[i][j + 1]);
            }
        }
        console.log(min);
        console.log(max);
    }
    let res = max[m - 1][n - 1];
    return res >= 0 ? res % mod : -1;
};

const initialize2DArrayMin = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(Number.MIN_SAFE_INTEGER);
        data.push(tmp);
    }
    return data;
};

const initialize2DArrayMax = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(Number.MAX_SAFE_INTEGER);
        data.push(tmp);
    }
    return data;
};

// don't know
// const maxProductPath = (grid) => {
//     let m = grid.length;
//     let n = grid[0].length;
//     let len = m + n - 1;
//     let res = [];
//     let row = 0;
//     let col = 0;
//     while (len > 0) {
//         res.push(grid[row][col]);
//         if (col + 1 < n && row + 1 < m) {
//             let right = grid[row][col + 1];
//             let down = grid[row + 1][col];
//             if (right > down) {
//                 res.push(right);
//                 col++;
//             } else {
//                 res.push(down);
//                 row++;
//             }
//         }
//         len--;
//     }
//     console.log(res);
// };

const main = () => {
    let grid = [
        [-1, -2, -3],
        [-2, -3, -3],
        [-3, -3, -2]
    ];
    let grid2 = [
        [1, -2, 1],
        [1, -2, 1],
        [3, -4, 1]
    ];
    let grid3 = [
        [1, 3],
        [0, -4]
    ];
    let grid4 = [
        [1, 4, 4, 0],
        [-2, 0, 0, 1],
        [1, -1, 1, 1]
    ];
    console.log(maxProductPath(grid));
    console.log(maxProductPath(grid2));
    console.log(maxProductPath(grid3));
    console.log(maxProductPath(grid4));
};

main()