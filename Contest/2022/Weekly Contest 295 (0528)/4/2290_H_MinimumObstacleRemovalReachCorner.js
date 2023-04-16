// 05/28/22 night

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(Number.MAX_SAFE_INTEGER); d.push(t); } return d; };

const minimumObstacles = (g) => minDis(g);

// Accepted --- 1851ms 2212ms
// reference: uwi
const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];
const minDis = (g) => {
    let n = g.length, m = g[0].length, allow = 0, forbid = 1;
    let q = [[0, 0]], dis = initialize2DArray(n, m);
    dis[0][0] = 0;
    while (q.length) {
        let [x, y] = q.shift();
        for (let k = 0; k < 4; k++) {
            let nx = x + dx[k], ny = y + dy[k];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (g[nx][ny] == forbid) {
                if (dis[nx][ny] > dis[x][y] + 1) {
                    dis[nx][ny] = dis[x][y] + 1;
                    q.push([nx, ny]);
                }
            } else {
                if (dis[nx][ny] > dis[x][y]) {
                    dis[nx][ny] = dis[x][y];
                    q.unshift([nx, ny]);
                }
            }
        }
    }
    // pr(dis)
    return dis[n - 1][m - 1];
};

const main = () => {
    let g = [[0, 1, 1], [1, 1, 0], [1, 1, 0]];
    let g2 = [[0, 1, 0, 0, 0], [0, 1, 0, 1, 0], [0, 0, 0, 1, 0]];
    pr(minimumObstacles(g))
    pr(minimumObstacles(g2))
};

main()