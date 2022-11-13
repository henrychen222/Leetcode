// 10.27 afternoon  10.27 evening

// Accepted --- 288ms
const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
let h = [];
let visited = [];
let m;
let n;
const minimumEffortPath = (heights) => {
    h = heights;
    m = heights.length;
    n = heights[0].length;
    visited = initialize2DArrayNew(m, n);
    // console.log(h, m, n, visited);
    let l = 0;
    let r = 1e6;
    while (l < r) {
        let mid = (l + r) >> 1;
        for (let i = 0; i < m; i++) {
            visited[i].fill(false);
        }
        // console.log(visited);
        dfs(0, 0, heights[0][0], mid);
        if (visited[m - 1][n - 1]) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
};

const dfs = (i, j, cell, t) => {
    // console.log(i, j, src, t);
    if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || Math.abs(h[i][j] - cell) > t) return;
    visited[i][j] = true;
    for (const dir of dirs) {
        dfs(i + dir[0], j + dir[1], h[i][j], t);
    }
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(false);
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let heights = [[1, 2, 2], [3, 8, 2], [5, 3, 5]];
    let heights2 = [[1, 2, 3], [3, 8, 4], [5, 3, 5]];
    let heights3 = [[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]];
    let debug1 = [[3]];
    let debug2 = [[1, 10, 6, 7, 9, 10, 4, 9]];
    console.log(minimumEffortPath(heights)); // 2
    console.log(minimumEffortPath(heights2)); // 1
    console.log(minimumEffortPath(heights3)); // 0
    console.log(minimumEffortPath(debug1)); // 0
    console.log(minimumEffortPath(debug2)); // 9
};

main()