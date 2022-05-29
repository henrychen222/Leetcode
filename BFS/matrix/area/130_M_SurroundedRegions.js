/**
 * 04/19/22 afternoon
 * https://leetcode.com/problems/surrounded-regions/
 */

const pr = console.log;

const deepCopy2DArray = (g) => { let d = []; for (const a of g) d.push([...a]); return d; };

// Accepted --- 139ms 35.16%
const solve = (g) => {
    // pr(g);
    let area = getAllAreasNoBorder(deepCopy2DArray(g));
    // pr("area", area, g)
    for (const e of area) {
        for (const [i, j] of e) g[i][j] = 'X';
    }
    pr(g);
};

const dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];
const getAllAreasNoBorder = (g) => {
    const allow = 'O', forbid = 'X', floodFillMakeConnected = '*'
    let n = g.length, m = g[0].length, res = [];
    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < m - 1; j++) {
            if (g[i][j] == allow) {
                let q = [[i, j]], area = [],keep = true;
                while (q.length) {
                    let [x, y] = q.shift(), reachborder = false;
                    for (let k = 0; k < 4; k++) {
                        let nx = x + dx[k], ny = y + dy[k];
                        if (nx < 0 || nx >= n || ny < 0 || ny >= m || g[nx][ny] == forbid || g[nx][ny] == floodFillMakeConnected) continue;
                        if (nx == 0 || nx == n - 1 || ny == 0 || ny == m - 1) reachborder = true;
                        g[nx][ny] = floodFillMakeConnected;
                        area.push([nx, ny]);
                        q.push([nx, ny]);
                    }
                    if (reachborder) keep = false;
                }
                if (keep) {
                    if (area.length == 0) area.push([i, j]);
                    res.push(area);
                }
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

// Accepted --- 210ms 8.92%
const solve1 = (g) => {
    // pr(g);
    let allow = 'O', forbid = 'X', n = g.length, m = g[0].length, ds = new DJSet(n * m);
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
    let ignore = new Set();
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
                if (!ignore.has(p)) g[i][j] = forbid;
            }
        }
    }
    pr(g)
};

const main = () => {
  let board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
  let board2 = [["X"]];
  let debug1 = [["X","X","X"],["X","O","X"],["X","X","X"]]
  let debug2 = [["O","O","O"],["O","O","O"],["O","O","O"]];
  pr(solve(board))
  pr(solve(board2))
  pr(solve(debug1)) // [["X","X","X"],["X","X","X"],["X","X","X"]]
  pr(solve(debug2)) // [["X","X","X"],["X","X","X"],["X","X","X"]]
};

main()