/**
 * 06/13/22 morning
 * https://leetcode.com/problems/is-graph-bipartite/
 * 
 * code from this problem:
 * https://leetcode.com/problems/possible-bipartition/
 */

// Accepted --- 82ms 68.15%
const isBipartite = (g) => {
    let n = g.length, start = 0, visit = Array(n).fill(false), q = [], color = Array(n).fill(0); // 0: no color, 1: red  -1: blue
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////

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

// Accepted --- 133ms 7.46%
const isBipartite = (g) => {
    let n = g.length, start = 0, ds = new DJSet(n);
    for (let i = start; i < n; i++) {
        if (g[i].length == 0) continue;
        let firstChild = g[i][0];
        for (const child of g[i]) {
            if (ds.equiv(i, child)) return false;
            ds.union(firstChild, child);
        }
    }
    return true;
};