/**
 * 03/25/21 evening
 * https://leetcode.com/problems/pacific-atlantic-water-flow/
 */

const pr = console.log;


// Accepted --- 120ms 87.27%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/5962508.html
 * https://leetcode.com/problems/pacific-atlantic-water-flow/discuss/90733/java-bfs-dfs-from-ocean
 * https://leetcode.com/problems/pacific-atlantic-water-flow/solution/
 */
let g, n, m;
const MIN = Number.MIN_SAFE_INTEGER;
const pacificAtlantic = (matrix) => {
    g = matrix;
    n = g.length;
    if (n == 0) return [];
    m = g[0].length;
    // if (m == 0) return []; // remove this line 112ms 95.51%
    let res = [];
    let pac_vis = initialize2DArrayNew(n + 1, m + 1);
    let atl_vis = initialize2DArrayNew(n + 1, m + 1);
    /**
     *  Loop through each cell adjacent to the oceans
     */
    for (let i = 0; i < n; i++) {
        dfs(pac_vis, MIN, i, 0);
        dfs(atl_vis, MIN, i, m - 1);
    }
    for (let j = 0; j < m; j++) {
        dfs(pac_vis, MIN, 0, j);
        dfs(atl_vis, MIN, n - 1, j);
    }
    // pr("pacific", pac_vis);
    // pr("atlantic", atl_vis);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (pac_vis[i][j] && atl_vis[i][j]) {
                res.push([i, j]);
            }
        }
    }
    return res;
};

const dfs = (visited, pre_height, i, j) => {
    if (i < 0 || i >= n || j < 0 || j >= m || visited[i][j] || g[i][j] < pre_height) return;
    visited[i][j] = 1;
    dfs(visited, g[i][j], i - 1, j);
    dfs(visited, g[i][j], i + 1, j);
    dfs(visited, g[i][j], i, j - 1);
    dfs(visited, g[i][j], i, j + 1);
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

// WA 0/113
// let n, m;
// const pacificAtlantic = (g) => {
//     n = g.length;
//     m = g[0].length;
//     let res = [];
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             pr([i, j], g[i][j], canFlowP(g, i, j), canFlowA(g, i, j));
//             if (canFlowP(g, i, j) && canFlowA(g, i, j)) {
//                 res.push([i, j]);
//             }
//         }
//     }
//     return res;
// };

// // 想错了, 不是只有goTop, go Down两种情况, 遇到block是可以转向的, 要用DFS, canFlowA 同理
// const canFlowP = (g, row, col) => {
//     pr("pacific", g[row][col])
//     if (row == 0 || col == 0) return 1;
//     let goTop = 1;
//     for (let i = row; i > 0; i--) {
//         if (g[i - 1][col] > g[i][col]) {
//             pr("block: ", g[i - 1][col], g[i][col]);
//             goTop = 0;
//             break;
//         }
//     }
//     if (goTop) return 1;
//     let goLeft = 1;
//     for (let j = col; j > 0; j--) {
//         if (g[row][j - 1] > g[row][j]) {
//             pr("block: ", g[row][j - 1], g[row][j]);
//             goLeft = 0;
//             break;
//         }
//     }
//     if (goLeft) return 1;
//     return 0;
// };

// const canFlowA = (g, row, col) => {
//     if (row == n - 1 || col == m - 1) return 1;
//     let goDown = 1;
//     for (let i = row; i < n - 1; i++) {
//         if (g[i + 1][col] > g[i][col]) {
//             goDown = 0;
//             break;
//         }
//     }
//     if (goDown) return 1;
//     let goRight = 1;
//     for (let j = col; j < m - 1; j++) {
//         if (g[row][j + 1] > g[row][j]) {
//             goRight = 0;
//             break;
//         }
//     }
//     if (goRight) return 1;
//     return 0;
// };

const main = () => {
    let matrix = [
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4]
    ];
    let debug1 = [];
    pr(pacificAtlantic(matrix));
    pr(pacificAtlantic(debug1));
};

main()