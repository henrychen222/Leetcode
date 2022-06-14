/**
 * 05/17/22 noon
 * https://leetcode.com/problems/as-far-from-land-as-possible/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(Number.MAX_SAFE_INTEGER); d.push(t); } return d; };

// Accepted --- 147ms 73.62%
// Accepted --- 135ms 78.53%
const maxDistance = (g) => {
    let n = g.length, m = g[0].length, res = Number.MIN_SAFE_INTEGER, dis = minDisGlobal(g);
    // pr(dis);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            res = Math.max(res, dis[i][j]);
        }
    }
    return res == Number.MAX_SAFE_INTEGER || res == 0 ? -1 : res;
};

const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];
const minDisGlobal = (g) => {
    let nearest = 1, n = g.length, m = g[0].length, dis = initialize2DArray(n, m), q = [];
    for (let i = 0; i < n; i++) { // initialization / prepare
        for (let j = 0; j < m; j++) {
            if (g[i][j] == nearest) { // land
                dis[i][j] = 0;
                q.push([i, j]);
            } else {
                dis[i][j] = Number.MAX_SAFE_INTEGER;
            }
        }
    }
    while (q.length) {
        let [x, y] = q.shift();
        for (let k = 0; k < 4; k++) {
            let nx = x + dx[k], ny = y + dy[k];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (dis[nx][ny] > dis[x][y] + 1) {
                dis[nx][ny] = dis[x][y] + 1;
                q.push([nx, ny]);
            }
        }
    }
    return dis;
};

// Accepted --- 6507ms 6.75%
const ManhattanDis = (x1, y1, x2, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2);
const maxDistance1 = (g) => {
    let n = g.length, m = g[0].length, ones = [], res = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j]) ones.push([i, j]);
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == 0) {
                let nearestDis = nearest(i, j, ones);
                if (nearestDis != Number.MAX_SAFE_INTEGER) res = Math.max(res, nearestDis);
            }
        }
    }
    return res == Number.MIN_SAFE_INTEGER ? -1 : res;
};

const nearest = (i, j, ones) => {
    let res = Number.MAX_SAFE_INTEGER;
    for (const [x, y] of ones) {
        let dis = ManhattanDis(i, j, x, y);
        res = Math.min(res, dis);
    }
    return res;
};

const main = () => {
    let grid = [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1]
    ];
    let grid2 = [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    let debug1 = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    let debug2 = [[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]];
    pr(maxDistance(grid))
    pr(maxDistance(grid2))
    pr(maxDistance(debug1))
    pr(maxDistance(debug2))
};

main()