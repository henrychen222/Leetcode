/**
 * 05/17/22 noon
 * https://leetcode.com/problems/shortest-path-in-binary-matrix/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(Number.MAX_SAFE_INTEGER); d.push(t); } return d; };

// Accepted --- 167ms 62.50%
const shortestPathBinaryMatrix = (g) => minDis(g);

const dx = [-1, 1, 0, 0, -1, -1, 1, 1], dy = [0, 0, -1, 1, -1, 1, -1, 1];
const minDis = (g) => {
    if (g[0][0]) return -1;
    let n = g.length, m = g[0].length;
    let q = [[0, 0]], dis = initialize2DArray(n, m);
    dis[0][0] = 1;
    while (q.length) {
        let [x, y] = q.shift();
        // pr([x, y]);
        for (let k = 0; k < 8; k++) {
            let nx = x + dx[k], ny = y + dy[k];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m || g[nx][ny]) continue;
            if (dis[nx][ny] > dis[x][y] + 1) {
                dis[nx][ny] = dis[x][y] + 1;
                q.push([nx, ny]);
            }
        }
    }
    // pr(dis)
    return dis[n - 1][m - 1] == Number.MAX_SAFE_INTEGER ? -1 : dis[n - 1][m - 1];
};

const main = () => {
    let grid = [
        [0, 1],
        [1, 0]
    ];
    let grid2 = [
        [0, 0, 0],
        [1, 1, 0],
        [1, 1, 0]
    ];
    let grid3 = [
        [1, 0, 0],
        [1, 1, 0],
        [1, 1, 0]
    ];
    pr(shortestPathBinaryMatrix(grid))
    pr(shortestPathBinaryMatrix(grid2))
    pr(shortestPathBinaryMatrix(grid3))
};

main()