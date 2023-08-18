/*
 * 04/01/23 morning
 * https://leetcode.com/contest/biweekly-contest-101/problems/shortest-cycle-in-a-graph/
 */

const pr = console.log;

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
        if (x == y) return false;
        if (parent[x] < parent[y]) [x, y] = [y, x];
        parent[x] += parent[y];
        parent[y] = x;
        return true;
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

// WA
const findShortestCycle1 = (n, edges) => {
    let ds = new DJSet(n), hasCycle = false, res = Number.MAX_SAFE_INTEGER;
    for (const [u, v] of edges) {
        if (ds.equiv(u, v)) {
            hasCycle = true;
            pr(ds.par(), ds.find(u), ds.par()[ds.find(u)])
            res = Math.min(res, -ds.par()[ds.find(u)]);
        } else {
            ds.union(u, v);
        }
    }
    // pr(ds.par(), hasCycle)
    if (!hasCycle) return -1;
    return res;
};
/////////////////////////////////////////////////////////////////////////

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };

// Accepted
/*
reference: 
https://leetcode.cn/circle/discuss/3Cqiwp/
https://www.geeksforgeeks.org/shortest-cycle-in-an-undirected-unweighted-graph/
*/
const findShortestCycle = (n, edges) => {
    let g = initializeGraph(n), res = Number.MAX_SAFE_INTEGER;
    packUG(g, edges);
    for (let i = 0; i < n; i++) res = Math.min(res, shortestCycleUG(g, i));
    return res == Number.MAX_SAFE_INTEGER ? -1 : res;
};

const shortestCycleUG = (g, start) => {
    let n = g.length, dis = Array(n).fill(Number.MAX_SAFE_INTEGER), q = [[start, -1]], res = Number.MAX_SAFE_INTEGER;
    dis[start] = 0;
    while (q.length) {
        let [cur, par] = q.shift();
        for (const child of g[cur]) {
            if (dis[child] > dis[cur] + 1) {
                dis[child] = dis[cur] + 1;
                q.push([child, cur]);
            } else if (child != par) {
                let cycle = dis[cur] + dis[child] + 1;
                res = Math.min(res, cycle); // 04/10/23 afternoon fixed
            }
        }
    }
    return res;
};

const main = () => {
    let n = 7, edges = [[0, 1], [1, 2], [2, 0], [3, 4], [4, 5], [5, 6], [6, 3]];
    let n2 = 4, edges2 = [[0, 1], [0, 2]];
    let n_debug1 = 5, edges_debug1 = [[0, 2], [2, 4], [4, 0]];
    let n_debug2 = 8, edges_debug2 = [[1, 3], [3, 5], [5, 7], [7, 1], [0, 2], [2, 4], [4, 0], [6, 0], [6, 1]];
    let n_debug3 = 6, edges_debug3 = [[4, 1], [5, 1], [3, 2], [5, 0], [4, 0], [3, 0], [2, 1]];
    let n_debug4 = 6, edges_debug4 = [[4, 1], [3, 2], [5, 0], [3, 0], [4, 0], [2, 1], [5, 1]];
    let n_debug5 = 6, edges_debug5 = [[4, 2], [5, 1], [5, 0], [0, 3], [5, 2], [1, 4], [1, 3], [3, 4]]; // rejudged failed test case
    pr(findShortestCycle(n, edges))
    pr(findShortestCycle(n2, edges2))
    pr(findShortestCycle(n_debug1, edges_debug1)) // 3
    pr(findShortestCycle(n_debug2, edges_debug2)) // 3
    pr(findShortestCycle(n_debug3, edges_debug3)) // 4
    pr(findShortestCycle(n_debug4, edges_debug4)) // 4
    pr(findShortestCycle(n_debug5, edges_debug5)) // 3
};

main()