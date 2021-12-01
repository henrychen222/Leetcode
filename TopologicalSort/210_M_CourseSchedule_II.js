/**
 * 11/28/21 night
 * https://leetcode.com/problems/course-schedule/
 */

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
const packDGDegree = (G, Edges, Deg) => { for (const [u, v] of Edges) { G[u].push(v); Deg[v]++; } };

// Accepted --- 100ms
const findOrder = (n, edges) => {
    let g = initializeGraph(n), indegree = Array(n).fill(0);
    packDGDegree(g, edges, indegree);
    let order = topologicalSort(g, indegree);
    order.reverse();
    return order;
};

const topologicalSort = (g, indegree) => {
    let res = [], q = [], n = g.length;
    for (let i = 0; i < n; i++) { // all nodes with no incoming edges
        if (indegree[i] == 0) q.push(i);
    }
    while (q.length) {
        let cur = q.shift();
        res.push(cur);
        for (const child of g[cur]) {
            indegree[child]--; // remove an edge from cur to child
            if (indegree[child] == 0) q.push(child); // child has no other incoming edges, add to q for next bfs
        }
    }
    for (let i = 0; i < n; i++) {
        if (indegree[i] > 0) return [];
    }
    return res;
};