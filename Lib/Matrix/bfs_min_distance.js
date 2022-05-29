/**
 * 04/22/22 night
 * 
 * example problem:
 * https://leetcode-cn.com/contest/season/2022-spring/problems/PTXy4P/
 * https://atcoder.jp/contests/abc235/submissions/28570736
 * https://leetcode.com/problems/shortest-path-in-binary-matrix/
 */

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(Number.MAX_SAFE_INTEGER); d.push(t); } return d; };

const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];
const minDis = (g, startX, startY, endX, endY) => { // 点对点最小距离
    let n = g.length, m = g[0].length;
    let q = [[startX, startY]], dis = initialize2DArray(n, m);
    dis[startX][startY] = 0;
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
    return dis[endX][endY];
};


//////////////////////////// global bfs ///////////////////////