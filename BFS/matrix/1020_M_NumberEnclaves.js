/**
 * 04/18/22 morning
 * https://leetcode.com/problems/number-of-enclaves/
 */

const pr = console.log;

const sm = (a) => a.reduce(((x, y) => x + y), 0);

// Accepted --- 141ms 39.48%
const numEnclaves1 = (g) => {
    let areas = getAllAreasNoBorder(g);
    // pr(areas);
    return sm(areas);
};

const dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];
const getAllAreasNoBorder = (g) => {
    const allow = 1, forbid = 0, floodFillMakeConnected = 'x';
    let n = g.length, m = g[0].length, res = [];
    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < m - 1; j++) {
            if (g[i][j] == allow) {
                let q = [[i, j]], area = 0, keep = true;
                while (q.length) {
                    let [x, y] = q.shift(), reachborder = false;
                    for (let k = 0; k < 4; k++) {
                        let nx = x + dx[k], ny = y + dy[k];
                        if (nx < 0 || nx >= n || ny < 0 || ny >= m || g[nx][ny] == forbid || g[nx][ny] == floodFillMakeConnected) continue;
                        if (nx == 0 || nx == n - 1 || ny == 0 || ny == m - 1) reachborder = true;
                        g[nx][ny] = floodFillMakeConnected;
                        area++;
                        q.push([nx, ny]);
                    }
                    if (reachborder) keep = false;
                }
                if (keep) res.push(area == 0 ? 1 : area);
            }
        }
    }
    return res;
};

///////////////////////////////////////////////////////////////////////////////////////////////
function DJSet(n) {
    // parent[i] < 0, -parent[i] is the group size which root is i. example: (i -> parent[i] -> parent[parent[i]] -> parent[parent[parent[i]]] ...)
    // parent[i] >= 0, i is not the root and parent[i] is i's parent. example: (... parent[parent[parent[i]]] -> parent[parent[i]] -> parent[i] -> i)
    let parent = Array(n).fill(-1);
    return { find, union, count, equiv, par }
    function find(x) {
        return parent[x] < 0 ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x != y) {
            if (parent[x] < parent[y])[x, y] = [y, x];
            parent[x] += parent[y];
            parent[y] = x;
        }
        return x == y;
    }
    function count() { // total groups
        return parent.filter(v => v < 0).length;
    }
    function equiv(x, y) { // isConnected
        return find(x) == find(y);
    }
    function par() {
        return parent;
    }
}

// Accepted --- 118ms 58.80%
const numEnclaves = (g) => {
    let allow = 1, forbid = 0, n = g.length, m = g[0].length, ds = new DJSet(n * m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == allow) {
                let cur = i * m + j;
                if (i - 1 >= 0 && g[i - 1][j] == allow) ds.union(cur, (i - 1) * m + j);
                if (j - 1 >= 0 && g[i][j - 1] == allow) ds.union(cur, i * m + j - 1);
                if (i + 1 < n && g[i + 1][j] == allow) ds.union(cur, (i + 1) * m + j);
                if (j + 1 < m && g[i][j + 1] == allow) ds.union(cur, i * m + j + 1);
            }
        }
    }
    let ignore = new Set(), res = 0;
    for (let j = 0; j < m; j++) {
        ignore.add(ds.find(0 * m + j));
        ignore.add(ds.find((n - 1) * m + j));
    }
    for (let i = 0; i < n; i++) {
        ignore.add(ds.find(i * m + 0));
        ignore.add(ds.find(i * m + m - 1));
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == allow) {
                let p = ds.find(i * m + j);
                if (!ignore.has(p)) res++; // area sum
            }
        }
    }
    return res;
};

const main = () => {
    let grid = [
        [0, 0, 0, 0],
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ];
    let grid2 = [
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0]
    ];
    let debug1 = [
        [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
        [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
        [0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 1]
    ];
    pr(numEnclaves(grid))
    pr(numEnclaves(grid2))
    pr(numEnclaves(debug1)) // 3
};

main()