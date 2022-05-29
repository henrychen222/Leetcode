/**
 * 09/25/21 night 09/27/21 night complete
 * https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/
 */

const initialize3DArray = (n, m, p) => { let res = []; for (let i = 0; i < n; i++) { let data = []; for (let j = 0; j < m; j++) { let tmp = new Array(p).fill(0); data.push(tmp); } res.push(data); } return res; };

// Accepted --- 148ms 77.85% (no visit)
// Accepted --- 168ms 76.31% 
const dir = [[0, 1],[0, -1],[1, 0],[-1, 0]];
const MAX = Number.MAX_SAFE_INTEGER;
const shortestPath = (g, k) => {
    let n = g.length, m = g[0].length;
    k = Math.min(k, n + m);
    let dis = initialize3DArray(k + 1, n, m);
    let visit = initialize3DArray(k + 1, n, m);
    for (let i = 0; i <= k; i++) {
        for (let j = 0; j < n; j++) {
            dis[i][j].fill(MAX);
        }
    }
    dis[0][0][0] = 0;
    let q = [[0, 0, 0]];
    while (q.length) {
        let cur = q.shift();
        // pr(cur)
        let [obs, x, y] = cur;
        for (let K = 0; K < 4; K++) {
            let nx = x + dir[K][0], ny = y + dir[K][1];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            let nobs = g[nx][ny] + obs;
            if (nobs <= k && dis[nobs][nx][ny] > dis[obs][x][y] + 1) {
                dis[nobs][nx][ny] = dis[obs][x][y] + 1;
                if (visit[nobs][nx][ny] == 0) {
                    visit[nobs][nx][ny] = 1;
                    q.push([nobs, nx, ny]);
                }
            }
        }
    }
    // pr(dis)
    let min = MAX;
    for (let i = 0; i <= k; i++) min = Math.min(min, dis[i][n - 1][m - 1]);
    return min == MAX ? -1 : min;
};

const pr = console.log;
const main = () => {
    let grid = [
            [0, 0, 0],
            [1, 1, 0],
            [0, 0, 0],
            [0, 1, 1],
            [0, 0, 0]
        ],
        k = 1;
    let grid2 = [
            [0, 1, 1],
            [1, 1, 1],
            [1, 0, 0]
        ],
        k2 = 1;
    pr(shortestPath(grid, k))
    pr(shortestPath(grid2, k2))
};

main()


// let a = [[1, 2, 3], [1, 2, 3]];
// a[0].fill(999);
// pr(a);