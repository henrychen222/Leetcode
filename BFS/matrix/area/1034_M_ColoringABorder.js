/**
 * 06/05/22 night
 * https://leetcode.com/problems/coloring-a-border/
 */

const pr = console.log;

const deepCopy2DArray = (g) => { let d = []; for (const a of g) d.push([...a]); return d; };

// Accepted --- 109ms
let needColor;
const colorBorder = (g, row, col, color) => {
    needColor = g[row][col]
    let areas = getAllAreasCoordinates(deepCopy2DArray(g));
    // pr("areas", areas, "needColor", needColor)
    for (const area of areas) {
        if (connected(area, row, col)) {
            let border = Border(area, g);
            // pr("area", area, "border", border)
            for (const [x, y] of border) g[x][y] = color;
        }
    }
    return g;
};

const Border = (area, g) => {
    let n = g.length, m = g[0].length;
    let res = [];
    for (const [x, y] of area) {
        let ok = false;
        if (x == 0 || x == n - 1 || y == 0 || y == m - 1) ok = true;
        if (hasDifferentNeighbour(g, x, y)) ok = true;
        // pr(x, y, g[x][y], ok);
        if (ok) res.push([x, y])
    }
    return res;
};

const hasDifferentNeighbour = (g, x, y) => {
    let adj = neighbours(g, x, y);
    for (const color of adj) {
        if (color != needColor) return true;
    }
    return false;
};

const connected = (area, row, col) => {
    for (const [x, y] of area) {
        if (x == row && y == col) return true;
    }
    return false;
};

const neighbours = (g, x, y) => {
    let n = g.length, m = g[0].length;
    let adj = [];
    if (x + 1 < n) adj.push(g[x + 1][y]);
    if (x - 1 >= 0) adj.push(g[x - 1][y]);
    if (y + 1 < m) adj.push(g[x][y + 1]);
    if (y - 1 >= 0) adj.push(g[x][y - 1]);
    return adj;
};

const dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];
const getAllAreasCoordinates = (g) => {
    const floodFillMakeConnected = 'x';
    let n = g.length, m = g[0].length, res = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == needColor) {
                let q = [[i, j]], area = [];
                while (q.length) {
                    let [x, y] = q.shift();
                    for (let k = 0; k < 4; k++) {
                        let nx = x + dx[k], ny = y + dy[k];
                        if (nx < 0 || nx >= n || ny < 0 || ny >= m || g[nx][ny] != needColor || g[nx][ny] == floodFillMakeConnected) continue;
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
    let g = [
            [1, 1],
            [1, 2]
        ],
        row = 0,
        col = 0,
        color = 3;
    let g2 = [
            [1, 2, 2],
            [2, 3, 2]
        ],
        row2 = 0,
        col2 = 1,
        color2 = 3;
    let g3 = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ],
        row3 = 1,
        col3 = 1,
        color3 = 2;

    let g_debug1 = [[1,1,1,2,2],[2,1,2,2,2],[1,1,2,2,1]], row_debug1 = 1, col_debug1 = 0, color_debug1 = 1
    pr(colorBorder(g, row, col, color))
    pr(colorBorder(g2, row2, col2, color2))
    pr(colorBorder(g3, row3, col3, color3))
    pr(colorBorder(g_debug1, row_debug1, col_debug1, color_debug1)) // [[1,1,1,2,2],[1,1,2,2,2],[1,1,2,2,1]]
};

main()

/*

1 1 1 2 2
2 1 2 2 2
1 1 2 2 1


1 1 1 2 2
1 1 2 2 2
1 1 2 2 1

*/