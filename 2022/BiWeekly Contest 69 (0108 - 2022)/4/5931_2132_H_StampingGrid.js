/**
 * 01/08/21 morning
 * https://leetcode.com/contest/biweekly-contest-69/problems/stamping-the-grid/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };
const dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];

// WA don't know
const possibleToStamp = (g, stampHeight, stampWidth) => {
    let areas = getAllAreas(g), size = stampHeight * stampWidth;
    pr(areas); 
    for (const area of areas) {
        if (area % stampHeight || area % stampWidth) continue;
        return false;
    }
    return true;
};

const getAllAreas = (g) => {
    const allow = 0, forbid = 1, floodFillMakeConnected = 'x';
    let n = g.length, m = g[0].length, res = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == allow) {
                let q = [[i, j]], area = 0;
                while (q.length) {
                    let [x, y] = q.shift();
                    for (let k = 0; k < 4; k++) {
                        let nx = x + dx[k], ny = y + dy[k];
                        if (nx < 0 || nx >= n || ny < 0 || ny >= m || g[nx][ny] == forbid || g[nx][ny] == floodFillMakeConnected) continue;
                        g[nx][ny] = floodFillMakeConnected;
                        area++;
                        q.push([nx, ny]);
                    }
                }
                res.push(area == 0 ? 1 : area);
            }
        }
    }
    return res;
};

const main = () => {
    let grid = [[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]], stampHeight = 4, stampWidth = 3;
    let grid2 = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], stampHeight2 = 2, stampWidth2 = 2;
    pr(possibleToStamp(grid, stampHeight, stampWidth))
    pr(possibleToStamp(grid2, stampHeight2, stampWidth2))
};

main()