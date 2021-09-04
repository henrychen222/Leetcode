/**
 * 09/01/21 night
 * https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/
 * 
 * reference: https://leetcode.com/contest/weekly-contest-194/ranking uwi
 */

function DJSet(n) {
    // parent[i] < 0, -parent[i] is the group size which root is i. example: (i -> parent[i] -> parent[parent[i]] -> parent[parent[parent[i]]] ...)
    // parent[i] >= 0, i is not the root and parent[i] is i's parent. example: (... parent[parent[parent[i]]] -> parent[parent[i]] -> parent[i] -> i)
    let parent = Array(n).fill(-1);
    return { find, union, count, equiv, getParent }
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
    function count() { // total connected groups (value < 0)
        return parent.filter(v => v < 0).length;
    }
    function equiv(x, y) {
        return find(x) == find(y);
    }
    function getParent() {
        return parent;
    }
}

const findCriticalAndPseudoCriticalEdges = (n, edges) => {
    edges = edges.map((x, i) => [...x, i]);
    // pr(edges)
    let ds = new DJSet(n);
    edges.sort((x, y) => x[2] - y[2]);
    let cri = [], pcri = [], m = edges.length, p = 0;
    let mst = Array(m).fill(null);
    for (let i = 0; i < m;) {
        let j = i;
        while (j < m && edges[i][2] == edges[j][2]) j++;
        for (let k = i; k < j; k++) {
            if (!ds.equiv(edges[k][0], edges[k][1])) mst[p++] = edges[k];
        }
        let ids = findCycle(mst, p, n);
        // pr(ids);
        for (let k = i; k < j; k++) {
            if (!ds.equiv(edges[k][0], edges[k][1])) ids.has(edges[k][3]) ? pcri.push(edges[k][3]) : cri.push(edges[k][3]);
        }
        for (let k = i; k < j; k++) ds.union(edges[k][0], edges[k][1]);
        i = j;
    }
    return [cri, pcri];
};

const findCycle = (es, p, n) => {
    let from = Array(p).fill(0);
    let to = Array(p).fill(0);
    let ws = Array(p).fill(0);
    for (let i = 0; i < p; i++) {
        from[i] = es[i][0];
        to[i] = es[i][1];
        ws[i] = es[i][3];
    }
    let ved = Array(n).fill(false);
    let g = packWU(n, from, to, ws);
    // pr(g);
    let par = Array(n).fill(-1);
    let pw = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (!ved[i]) dfs(i, -1, g, ved, par, pw)
    }
    let res = new Set();
    for (let i = 0; i < p; i++) {
        let e = es[i];
        if (par[e[0]] == e[1] || par[e[1]] == e[0]) continue;
        let lca = LCA(e[0], e[1], par);
        // pr('lca', lca);
        if (lca != -1) {
            res.add(e[3]);
            for (let x = e[0]; x != lca; x = par[x]) res.add(pw[x]);
            for (let x = e[1]; x != lca; x = par[x]) res.add(pw[x]);
        }
    }
    return res;
};

const dfs = (cur, pre, g, ved, par, pw) => {
    ved[cur] = true;
    for (const e of g[cur]) {
        if (e[0] == pre || ved[e[0]]) continue;
        par[e[0]] = cur;
        pw[e[0]] = e[1];
        dfs(e[0], cur, g, ved, par, pw);
    }
};

const LCA = (x, y, par) => { // lowest common ancestor
    let res = new Set();
    for (z = y; z != -1; z = par[z]) res.add(z);
    for (z = x; z != -1; z = par[z]) {
        if (res.has(z)) return z;
    }
    return -1;
};

const packWU = (n, from, to, w) => {
    let g = Array(n).fill(null);
    let p = Array(n).fill(0);
    for (const f of from) p[f]++;
    for (const t of to) p[t]++;
    for (let i = 0; i < n; i++) g[i] = initialize2DArrayNew(p[i], 2);
    for (let i = 0; i < from.length; i++) {
        let fi = from[i], ti = to[i];
        --p[fi];
        g[fi][p[fi]][0] = ti;
        g[fi][p[fi]][1] = w[i];
        --p[ti];
        g[ti][p[ti]][0] = fi;
        g[ti][p[ti]][1] = w[i];
    }
    return g;
};

const initialize2DArrayNew = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(0); data.push(tmp); } return data; };

const pr = console.log;
const main = () => {
    let n = 5,
        edges = [
            [0, 1, 1],
            [1, 2, 1],
            [2, 3, 2],
            [0, 3, 2],
            [0, 4, 3],
            [3, 4, 3],
            [1, 4, 6]
        ];
    let n2 = 4,
        edges2 = [
            [0, 1, 1],
            [1, 2, 1],
            [2, 3, 1],
            [0, 3, 1]
        ];
    pr(findCriticalAndPseudoCriticalEdges(n, edges));
    pr(findCriticalAndPseudoCriticalEdges(n2, edges2));
};

main()