/**
 * 8.19 morning
 * https://leetcode.com/discuss/interview-question/483446/robinhood-oa-2020-traffic-map
 * 
 * reference
 * https://algorithms.tutorialhorizon.com/depth-first-search-dfs-in-2d-matrix-2d-array-iterative-solution/
 * https://algorithms.tutorialhorizon.com/depth-first-search-dfs-in-2d-matrix-2d-array-recursive-solution/
 */

const dfs = (matrix) => {
    let h = matrix.length;
    if (h == 0) return;
    let w = matrix[0].length;
    let visited = [...Array(h)].map(x => Array(w).fill(0));
    let stack = [];
    stack.push(0 + "," + 0);
    let data = [];
    while (stack.length != 0) {
        let tmp = stack.pop();
        let row = Number(tmp.split(",")[0]);
        let col = Number(tmp.split(",")[1]);
        if (row < 0 || row >= h || col < 0 || col >= w || visited[row][col]) continue;
        visited[row][col] = true;
        data.push(matrix[row][col]);
        stack.push(row + "," + (col - 1));
        stack.push(row + "," + (col + 1));
        stack.push((row - 1) + "," + col);
        stack.push((row + 1) + "," + col);
    }
    return data;
};

let data = [];
const dfs_recursive = (matrix) => {
    let h = matrix.length;
    if (h == 0) return;
    let w = matrix[0].length;
    let visited = [...Array(h)].map(x => Array(w).fill(0));
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
    let matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];
    console.log(dfs(matrix));
    console.log(dfs_recursive(matrix));
};

main()