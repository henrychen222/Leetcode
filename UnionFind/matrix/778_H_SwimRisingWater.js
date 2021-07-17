/**
 * 07/15/21 evening
 * https://leetcode.com/problems/swim-in-rising-water/
 */

const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];

// https://leetcode.com/contest/weekly-contest-70/ranking Netario36
// Accepted --- 92ms 85.45%
const swimInWater = (g) => {
    let n = g.length;
    let dis = initialize2DArrayNew(n, n); // save min dis from (0, 0) -> (i, j)
    dis[0][0] = g[0][0];
    // pr(dis);
    let q = [[0, 0]]; // only need to find a path from (0, 0) -> (n - 1, n - 1); no need find a path for each i, j, so no need two for loop
    while (q.length) {
        let cur = q.shift();
        let [x, y] = cur;
        // pr(x, y);
        for (let k = 0; k < 4; k++) {
            let xx = x + dx[k];
            let yy = y + dy[k];
            if (xx < 0 || xx >= n || yy < 0 || yy >= n) continue;
            if (Math.max(g[xx][yy], dis[x][y]) < dis[xx][yy]) { // bfs update min for each i, j
                dis[xx][yy] = Math.max(g[xx][yy], dis[x][y]);
                q.push([xx, yy]);
            }
            pr(dis)
        }
        // pr(q);
    }
    pr(dis)
    return dis[n - 1][n - 1];
};

// WA
const swimInWater1 = (g) => {
    let n = g.length;
    let dis = initialize2DArrayNew(n, n);
    let res = 0;
    let q = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let cnt = Number.MAX_SAFE_INTEGER;
            q.push([i, j]);
            // pr(q);
            while (q.length) {
                let cur = q.shift();
                let [x, y] = cur;
                for (let k = 0; k < 4; k++) {
                    let xx = x + dx[k];
                    let yy = y + dy[k];
                    if (xx < 0 || xx >= n || yy < 0 || yy >= n) continue;
                    if (g[xx][yy] <= g[x][y]) continue;
                    let t = g[xx][yy] - g[x][y];
                    dis[xx][yy] = Math.min(dis[xx][yy], t);
                    // dis[i][j] = dis[xx][yy];
                    cnt = Math.min(cnt, dis[xx][yy]);
                    q.push([xx, yy]);
                    // pr(q);
                }
            }
            // pr(cnt);
            res += (cnt == Number.MAX_SAFE_INTEGER ? 0 : cnt);
        }
    }
    return res;
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(Number.MAX_SAFE_INTEGER);
        data.push(tmp);
    }
    return data;
};

const pr = console.log;
const main = () => {
    let grid = [
        [0, 2],
        [1, 3]
    ];
    let grid2 = [
        [0, 1, 2, 3, 4],
        [24, 23, 22, 21, 5],
        [12, 13, 14, 15, 16],
        [11, 17, 18, 19, 20],
        [10, 9, 8, 7, 6]
    ];
    pr(swimInWater(grid));
    pr(swimInWater(grid2));
};

main()