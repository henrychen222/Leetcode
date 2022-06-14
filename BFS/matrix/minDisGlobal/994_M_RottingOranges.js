/**
 * 06/05/22 night
 * https://leetcode.com/problems/rotting-oranges/
 */

const pr = console.log;

const deepCopy2DArray = (g) => { let d = []; for (const a of g) d.push([...a]); return d; };
const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(MAX); d.push(t); } return d; };
const MAX = Number.MAX_SAFE_INTEGER;

// Accepted --- 146ms 16.15% 
const orangesRotting3 = (g) => {
    if (!hasFresh(g)) return 0;
    let pre = deepCopy2DArray(g);
    for (let t = 1; ; t++) {
        spread(g);
        if (same(pre, g)) return -1;
        // pr("t", g);
        if (!hasFresh(g)) return t;
        pre = deepCopy2DArray(g);
    }
};

const same = (pre, g) => {
    let n = g.length, m = g[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (pre[i][j] != g[i][j]) return false;
        }
    }
    return true;
};

const spread = (g) => {
    let n = g.length, m = g[0].length, rotten = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == 2) rotten.push([i, j]);
        }
    }
    for (const [i, j] of rotten) {
        if (i + 1 < n && g[i + 1][j] != 0) g[i + 1][j] = 2;
        if (i - 1 >= 0 && g[i - 1][j] != 0) g[i - 1][j] = 2;
        if (j + 1 < m && g[i][j + 1] != 0) g[i][j + 1] = 2;
        if (j - 1 >= 0 && g[i][j - 1] != 0) g[i][j - 1] = 2;
    }
};

const hasFresh = (g) => {
    let n = g.length, m = g[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == 1) {
                return true;
            }
        }
    }
    return false;
};

//////////////////////////////////////////////////////////////////////////////////
// WA
// const orangesRotting = (g) => {
//     let areas = getAllAreasCoordinates(deepCopy2DArray(g)), res = MAX;
//     pr(areas);
//     // pr("g", g)
//     for (const area of areas) {
//         let t = timeAllRotten(area, g);
//         if (t == MAX) return -1;
//         res = Math.min(res, t);
//     }
//     return res == MAX ? 0 : res;
// };

// const ManhattanDis = (x1, y1, x2, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2);
// const timeAllRotten = (area, g) => {
//     pr("area", area);
//     let maxTime = 0;
//     for (const [i, j] of area) {
//         if (g[i][j] == fresh) {
//             let closestRotten = MAX;
//             for (const [x, y] of area) {
//                 if (g[x][y] == rotten) {
//                     let d = ManhattanDis(i, j, x, y);
//                     closestRotten = Math.min(closestRotten, d);
//                 }
//             }
//             pr("closestRotten", [i, j], closestRotten)
//             maxTime = Math.max(maxTime, closestRotten);
//         }
//     }
//     pr("maxTime", maxTime);
//     return maxTime;
// };

// const dx = [1, -1, 0, 0], dy = [0, 0, 1, -1], fresh = 1, rotten = 2, forbid = 0;
// const getAllAreasCoordinates = (g) => {
//     const floodFillMakeConnected = 'x';
//     let n = g.length, m = g[0].length, res = [];
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (g[i][j] == fresh || g[i][j] == rotten) {
//                 let q = [[i, j]], area = [];
//                 while (q.length) {
//                     let [x, y] = q.shift();
//                     for (let k = 0; k < 4; k++) {
//                         let nx = x + dx[k], ny = y + dy[k];
//                         if (nx < 0 || nx >= n || ny < 0 || ny >= m || g[nx][ny] == forbid || g[nx][ny] == floodFillMakeConnected) continue;
//                         g[nx][ny] = floodFillMakeConnected;
//                         area.push([nx, ny])
//                         q.push([nx, ny]);
//                     }
//                 }
//                 if (area.length == 0) area.push([i, j]);
//                 res.push(area);
//             }
//         }
//     }
//     return res;
// };

///////////////////////////////////////////////////////////////////////////////////////
// Accepted --- 78ms 88.24%
// reference: https://leetcode.com/contest/weekly-contest-124/ranking/ uwi
const orangesRotting = (g) => {
    let n = g.length, m = g[0].length, res = 0, dis = minDisGlobal(g);
    // pr(dis)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] != 0) { // time for both rotten and fresh, get the max time
                res = Math.max(res, dis[i][j]);
            }
        }
    }
    // pr(res);
    return res == MAX ? -1 : res;
};

const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];
const minDisGlobal = (g) => {
    let n = g.length, m = g[0].length, dis = initialize2DArray(n, m), q = [];
    for (let i = 0; i < n; i++) { // initialization / prepare
        for (let j = 0; j < m; j++) {
            if (g[i][j] == 2) { // rotten
                dis[i][j] = 0;
                q.push([i, j]);
            }
        }
    }
    while (q.length) {
        let [x, y] = q.shift();
        // pr(x, y);
        for (let k = 0; k < 4; k++) {
            let nx = x + dx[k], ny = y + dy[k];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (dis[nx][ny] > dis[x][y] + 1 && g[nx][ny] == 1) { // update fresh orange
                dis[nx][ny] = dis[x][y] + 1;
                q.push([nx, ny]);
            }
        }
    }
    return dis;
};

const main = () => {
    let grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];
    let grid2 = [[2, 1, 1], [0, 1, 1], [1, 0, 1]];
    let grid3 = [[0, 2]];
    let debug1 = [[0]];
    let debug2 = [[2, 0, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 1, 0, 1, 1, 1, 1, 0, 1], [1, 0, 1, 0, 1, 0, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 0, 1, 0, 1], [1, 0, 1, 0, 1, 1, 0, 1, 0, 1], [1, 0, 1, 0, 0, 0, 0, 1, 0, 1], [1, 0, 1, 1, 1, 1, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
    let debug3 = [[1], [1], [1], [1]];
    let debug4 = [[2], [2], [1], [0], [1], [1]];
    pr(orangesRotting(grid))
    pr(orangesRotting(grid2))
    pr(orangesRotting(grid3))
    pr(orangesRotting(debug1)) // 0
    pr(orangesRotting(debug2)) // 58
    pr(orangesRotting(debug3)) // -1
    pr(orangesRotting(debug4)) // -1
};

main()

/*
   2 1 1
   0 1 1
   1 0 1
*/