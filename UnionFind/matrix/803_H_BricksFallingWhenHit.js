/**
 * 07/13/13 afternoon + evening review
 * https://leetcode.com/problems/bricks-falling-when-hit/
 */

// Accepted --- 248ms 71.43%
// Accepted --- 240ms 71.43%
// https://leetcode.com/contest/weekly-contest-76/ranking KakaHiguain
// read: https://leetcode.com/problems/bricks-falling-when-hit/discuss/119829/Python-Solution-by-reversely-adding-hits-bricks-back
let g, n, m;
const hitBricks = (grid, hits) => {
    g = grid;
    n = g.length;
    m = g[0].length;
    let brick = [];
    for (const [x, y] of hits) { // Mark whether there is a brick at the each hit
        brick.push(g[x][y] == 1);
        g[x][y] = 0;
    }
    for (let i = 1; i < n; i++) { // Get grid after all hits
        for (let j = 0; j < m; j++) {
            if (g[i][j] == 1) g[i][j] = 2;
        }
    }
    for (let j = 0; j < m; j++) { // Get grid after all hits
        if (g[0][j] == 1) dfs(0, j);
    }
    let res = Array(hits.length).fill(0);
    for (let i = hits.length - 1; ~i; i--) { // Reversely add the block of each hits and get count of newly add bricks
        let [x, y] = hits[i];
        if (brick[i]) {
            g[x][y] = 2;
            if (!is_connected(x, y)) continue;
            res[i] = dfs(x, y) - 1;
        }
    }
    return res;
};

const is_connected = (i, j) => { // Check whether (i, j) is connected to Not Falling Bricks
    return i == 0 || have(i, j - 1) || have(i, j + 1) || have(i - 1, j) || have(i + 1, j);
};

const have = (i, j) => {
    if (i < 0 || i >= n || j < 0 || j >= m || g[i][j] != 3) return false;
    return true;
};

const dfs = (i, j) => { // Connect unconnected bricks
    // pr("i", i, "j", j, n, m)
    if (i < 0 || i >= n || j < 0 || j >= m || ((g[i][j] + 1) >> 1) != 1) return 0;
    g[i][j] = 3;
    let res = 1;
    res += dfs(i, j - 1);
    res += dfs(i, j + 1);
    res += dfs(i - 1, j);
    res += dfs(i + 1, j);
    return res;
};

//////////////////////////////////////////////////////////////////////////
const hitBricks1 = (g, hits) => {
    let n = g.length;
    let m = g[0].length;
    let res = [];
    let one = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == 1) one++;
        }
    }
    let pre;
    for (const [x, y] of hits) {
        g[x][y] = 0;
        one--;
        // pr("start", g);
        let cnt = 0;
        while (1) {
            // let change = false;
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    if (i == 0 && j == 0) continue;
                    // pr("dfs", i, j, dfs(g, i, j))
                    if (g[i][j] == 1) {
                        // if (dfs(g, i, j)) continue; // need to check if there is a path connected to (0, 0)
                        if ((i - 1 >= 0 && g[i - 1][j] == 0) || (i + 1 < n && g[i + 1][j] == 0) ||
                            (j - 1 >= 0 && g[i][j - 1] == 0 || (j + 1 < m && g[i][j + 1] == 0))) {
                            // pr(i, j)
                            // change = true;
                            cnt++;
                            g[i][j] = 0;
                            one--;
                        }
                    }
                }
            }
            // pr(g, one);
            if (one == pre) break;
            pre = one;
            // if (!change) break;
        }
        // pr("after", g);
        res.push(cnt);
    }
    return res;
};

// issue
// const dfs = (g, i, j) => {
//     if (i < 0 || j < 0 || i >= g.length || j >= g[0].length || g[i][j] == 0) return;
//     // pr("path", i, j, g[i][j]);
//     if (i == 0 && j == 0 && g[i][j] == 1) return true;
//     dfs(g, i - 1, j);
//     dfs(g, i + 1, j);
//     dfs(g, i, j - 1);
//     dfs(g, i, j + 1);
// };

const pr = console.log;
const main = () => {
    let grid = [
            [1, 0, 0, 0],
            [1, 1, 1, 0]
        ],
        hits = [
            [1, 0]
        ];
    let grid2 = [
            [1, 0, 0, 0],
            [1, 1, 0, 0]
        ],
        hits2 = [
            [1, 1],
            [1, 0]
        ];
    let grid_debug1 = [
            [1],
            [1],
            [1],
            [1],
            [1]
        ],
        hit_debug1 = [
            [3, 0],
            [4, 0],
            [1, 0],
            [2, 0],
            [0, 0]
        ];
    pr(hitBricks(grid, hits));
    pr(hitBricks(grid2, hits2));
    pr(hitBricks(grid_debug1, hit_debug1)); // [1,0,1,0,0]
};

main()


// Wrong Code https://leetcode.com/contest/weekly-contest-76/ranking x____x
// const dx = [-1, 1, 0, 0],
//     dy = [0, 0, -1, 1];
// let g, visit, n, m, seq;
// const N = 256;
// const hitBricks = (grid, hits) => {
//     n = grid.length;
//     m = grid[0].length;
//     g = grid;
//     visit = initialize2DArrayNew(n, m);
//     seq = 0;
//     let res = [];
//     for (const [x, y] of hits) {
//         if (g[x][y]) {
//             let remove = 0;
//             g[x][y] = 0;
//             for (let k = 0; k < 4; k++) {
//                 let [xx, yy] = [x + dx[k], y + dy[k]];
//                 if (!inside(xx, yy) || !g[xx][yy]) continue;
//                 // pr(seq, xx, yy, willFall(xx, yy));
//                 seq += 2;
//                 if (willFall(xx, yy)) remove += fall(xx, yy);
//                 // pr(remove);
//             }
//             res.push(remove);
//         } else {
//             res.push(0);
//         }
//     }
//     return res;
// };

// const inside = (i, j) => {
//     return i >= 0 && i < n && j >= 0 && j < m;
// };

// const willFall = (i, j) => {
//     if (i < 0) return false;
//     if (!inside(i, j)) return true;
//     if (!g[i][j]) return true;
//     if (visit[i][j] == seq) return true;
//     visit[i][j] = seq;
//     for (let k = 0; k < 4; k++) {
//         if (!willFall(i + dx[k], j + dy[k])) return false;
//     }
//     return true;
// };

// const fall = (i, j) => {
//     // pr(inside(i, j));
//     if (!inside(i, j)) return 0;
//     if (!g[i][j]) return 0;
//     let res = 1;
//     g[i][j] = 0;
//     for (let k = 0; k < 4; k++) {
//         res += fall(i + dx[k], j + dy[k]);
//         // pr(res);
//     }
//     return res;
// };

// const initialize2DArrayNew = (m, n) => {
//     let data = [];
//     for (let i = 0; i < m; i++) {
//         let tmp = Array(n).fill(0);
//         data.push(tmp);
//     }
//     return data;
// };