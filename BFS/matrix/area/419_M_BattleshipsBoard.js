/**
 * 07/04/22 night
 * https://leetcode.com/problems/battleships-in-a-board/
 */

// Accepted --- 107ms 26.53%
const countBattleships = (g) => {
    let areas = getAllAreasCoordinates(g), res = 0;
    for (const area of areas) {
        if (valid(area)) res++;
    }
    return res;
};

const valid = (area) => {
    let x = new Set(), y = new Set();
    for (const e of area) {
        x.add(e[0]);
        y.add(e[1]);
    }
    return x.size == 1 || y.size == 1;
};

const dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];
const getAllAreasCoordinates = (g) => {
    const allow = 'X', forbid = '.', floodFillMakeConnected = '*';
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