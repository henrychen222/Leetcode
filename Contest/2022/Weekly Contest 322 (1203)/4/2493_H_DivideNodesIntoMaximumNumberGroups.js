/*
 * 12/03/22 night
 * https://leetcode.com/contest/weekly-contest-322/problems/divide-nodes-into-the-maximum-number-of-groups/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };
const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(Number.MAX_SAFE_INTEGER); d.push(t); } return d; };

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
            if (parent[x] < parent[y]) [x, y] = [y, x];
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

const isBipartite = (g) => {
    let n = g.length, start = 1, visit = Array(n).fill(false), q = [], color = Array(n).fill(0); // 0: no color, 1: red  -1: blue
    for (let i = start; i < n; i++) {
        if (color[i] != 0) continue;
        q.push(i);
        color[i] = 1;
        if (visit[i]) continue;
        while (q.length) {
            let cur = q.shift();
            if (visit[cur]) continue;
            for (const child of g[cur]) {
                if (color[child] == color[cur]) return false;
                if (color[child]) continue;
                color[child] = -color[cur];
                q.push(child);
            }
        }
    }
    return true;
};

const magnificentSets = (n, edges) => {
    let g = initializeGraph(n + 1), ds = new DJSet(n + 1);
    packUG(g, edges);
    if (!isBipartite(g)) return -1;
    let d = initialize2DArray(n + 1, n + 1), res = Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) d[i][i] = 0;
    for (const [u, v] of edges) {
        d[u][v] = 1;
        d[v][u] = 1;
        ds.union(u, v);
    }
    wf(d);
    // pr(d);
    for (let i = 1; i <= n; i++) {
        let max = 0;
        for (let j = 1; j <= n; j++) {
            if (d[i][j] >= Number.MAX_SAFE_INTEGER) continue;
            max = Math.max(max, d[i][j]);
        }
        let par = ds.find(i);
        // pr(par, max)
        res[par] = Math.max(res[par], max + 1);
    }
    // pr(res);
    let ans = 0;
    for (let i = 1; i <= n; i++) ans += res[i];
    return ans;
};

const wf = (g) => {
    let n = g.length;
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (g[i][j] > g[i][k] + g[k][j]) {
                    g[i][j] = g[i][k] + g[k][j];
                }
            }
        }
    }
};

const main = () => {
    let n = 6, edges = [[1, 2], [1, 4], [1, 5], [2, 6], [2, 3], [4, 6]];
    let n2 = 3, edges2 = [[1, 2], [2, 3], [3, 1]]
    pr(magnificentSets(n, edges))
    pr(magnificentSets(n2, edges2))
};

main()