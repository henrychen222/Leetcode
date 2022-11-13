/**
 * 10.24 evening
 * https://leetcode.com/contest/weekly-contest-212/problems/path-with-minimum-effort/
 */

let data = [];
const minimumEffortPath = (matrix) => {
    let h = matrix.length;
    if (h == 0) return;
    let w = matrix[0].length;
    let visited = [...Array(h)].map(x => Array(w).fill(0));
    // for (let i = 0; i < h; i++) {
    //     for (let j = 0; j < w; j++) {
    //         let tmp = helper(matrix, i, j, visited);
    //         console.log(tmp);
    //     }
    // }
    helper(matrix, 0, 0, visited);
    return data;
};

const helper = (matrix, row, col, visited) => {
    let h = matrix.length;
    let w = matrix[0].length;
    if (row < 0 || row >= h || col < 0 || col >= w || visited[row][col]) return;
    visited[row][col] = true;
    data.push(matrix[row][col]);
    helper(matrix, row + 1, col, visited);
    helper(matrix, row - 1, col, visited);
    helper(matrix, row, col + 1, visited);
    helper(matrix, row, col - 1, visited);
};

const main = () => {
    let heights = [[1, 2, 2], [3, 8, 2], [5, 3, 5]];
    let heights2 = [[1, 2, 3], [3, 8, 4], [5, 3, 5]];
    let heights3 = [[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]];
    console.log(minimumEffortPath(heights));
    // console.log(minimumEffortPath(heights2));
    // console.log(minimumEffortPath(heights3));
};

main()