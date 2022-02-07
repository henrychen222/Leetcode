/**
 * 02/03/22 night
 * https://leetcode.com/problems/course-schedule-iv/
 * 
 * https://leetcode.com/contest/biweekly-contest-27/ranking
 */
const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
const packDGDegree = (G, Edges, Deg) => { for (const [u, v] of Edges) { G[u].push(v); Deg[v]++; } };
const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(false); d.push(t); } return d; };

// Accepted --- 132ms 100%
// reference: https://leetcode.com/problems/course-schedule-iv/discuss/1535210/C%2B%2B-or-Kahn's-Algorithm-or-Short-and-simple-or-Explained
const checkIfPrerequisite = (n, edges, queries) => {
    let g = initializeGraph(n), indegree = Array(n).fill(0);
    packDGDegree(g, edges, indegree);
    let isReachable = topologicalSort_modify(g, indegree);
    let res = [];
    for (const [u, v] of queries) res.push(isReachable[u][v]);
    return res;
};

const topologicalSort_modify = (g, indegree) => {
    let q = [], n = g.length, isReachable = initialize2DArray(n, n);
    for (let i = 0; i < n; i++) {
        if (indegree[i] == 0) q.push(i);
    }
    while (q.length) {
        let cur = q.shift();
        for (const child of g[cur]) {
            isReachable[cur][child] = true;
            for (let i = 0; i < n; i++) {
                if (isReachable[i][cur]) isReachable[i][child] = true;
            }
            if (--indegree[child] == 0) q.push(child);
        }
    }
    return isReachable;
};