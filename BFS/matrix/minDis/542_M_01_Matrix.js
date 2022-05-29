/**
 * 01/22/22 evening
 * https://leetcode.com/problems/01-matrix/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(Number.MAX_SAFE_INTEGER); d.push(t); } return d; };

const dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];
let n, m;

// Accepted --- 286ms 35.10%
const updateMatrix = (g) => {
    n = g.length;
    m = g[0].length;
    let dis = initialize2DArray(n, m), q = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == 0) {
                dis[i][j] = 0;
                q.push([i, j]);
            } else {
                dis[i][j] = Number.MAX_SAFE_INTEGER;
            }
        }
    }
    bfs(g, dis, q);
    return dis;
};

const bfs = (g, dis, q) => { // reuse my code
    while (q.length) {
        let [x, y] = q.shift();
        for (let k = 0; k < 4; k++) {
            let nx = x + dx[k], ny = y + dy[k];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (dis[nx][ny] > dis[x][y] + 1) {
                dis[nx][ny] = dis[x][y] + 1;
                if (g[nx][ny] == 1) q.push([nx, ny]);
            }
        }
    }
};

////////////////////////////////////////////////////////////////////////

// TLE
const updateMatrix1 = (g) => {
    n = g.length;
    m = g[0].length;
    let res = initialize2DArray(n, m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == 0) {
                res[i][j] = 0;
            } else {
                let minDis = bfs1(g, i, j);
                // pr("minDis", minDis)
                res[i][j] = minDis;
            }
        }
    }
    return res;
};

const bfs1 = (g, i, j) => {
    let dis = initialize2DArray(n, m), min = Number.MAX_SAFE_INTEGER, q = [[i, j]];
    dis[i][j] = 0;
    // pr("start", i, j)
    while (q.length) {
        let [x, y] = q.shift();
        for (let k = 0; k < 4; k++) {
            let nx = x + dx[k], ny = y + dy[k];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (dis[nx][ny] > dis[x][y] + 1) {
                dis[nx][ny] = dis[x][y] + 1;
                if (g[nx][ny] == 1) q.push([nx, ny]);
            }
            if (g[nx][ny] == 0) {
                min = Math.min(min, dis[nx][ny]);
                return min;
            }
        }
    }
};

const main = () => {
    let mat = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ];
    let mat2 = [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1]
    ];
    pr(updateMatrix(mat))
    pr(updateMatrix(mat2))
};

main()