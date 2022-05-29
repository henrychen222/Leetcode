/**
 * 04/29/22 morning
 * https://leetcode.com/problems/shortest-bridge/
 */

const pr = console.log;

const ManhattanDis = (p1, p2) => Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);

// Accepted --- 491ms 13.76%
const shortestBridge = (g) => {
    let [area1, area2] = getAllAreasCoordinates(g), res = Number.MAX_SAFE_INTEGER;
    // pr(area1);
    // pr(area2);
    for (const p1 of area1) {
        for (const p2 of area2) {
            res = Math.min(res, ManhattanDis(p1, p2) - 1);
        }
    }
    return res;
};

const dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];
const getAllAreasCoordinates = (g) => {
    const allow = 1, forbid = 0, floodFillMakeConnected = 'x';
    let n = g.length, m = g[0].length, res = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == allow) {
                let q = [[i, j]], area = [];
                while (q.length) {
                    let [x, y] = q.shift();
                    for (let k = 0; k < 4; k++) {
                        let nx = x + dx[k], ny = y + dy[k];
                        if (nx < 0 || nx >= n || ny < 0 || ny >= m || g[nx][ny] == forbid || g[nx][ny] == floodFillMakeConnected) continue;
                        g[nx][ny] = floodFillMakeConnected;
                        area.push([nx, ny])
                        q.push([nx, ny]);
                    }
                }
                if (area.length == 0) area.push([i, j]);
                res.push(area);
            }
        }
    }
    return res;
};

const main = () => {
    let grid = [
        [0, 1],
        [1, 0]
    ];
    let grid2 = [
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 1]
    ];
    let grid3 = [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1]
    ];
    pr(shortestBridge(grid))
    pr(shortestBridge(grid2))
    pr(shortestBridge(grid3))
};

main()