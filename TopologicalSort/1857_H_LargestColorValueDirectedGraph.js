/**
 * 11/28/21 evening
 * https://leetcode.com/problems/largest-color-value-in-a-directed-graph/
 * 
 * reference: https://leetcode.com/contest/weekly-contest-240/ranking uwi
 */
const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
const packDGDegree = (G, Edges, Deg) => { for (const [u, v] of Edges) { G[u].push(v); Deg[v]++; } };

// Accepted --- 912ms 62.50%
const largestPathValue = (colors, edges) => {
    let n = colors.length, m = edges.length, indegree = Array(n).fill(0);
    let g = initializeGraph(n);
    packDGDegree(g, edges, indegree);
    // pr(g);
    let order = topologicalSort(g, indegree);
    // pr("order", order)
    if (order.length == 0) return -1;
    let res = 0;
    for (let x = 97; x <= 122; x++) {
        let c = String.fromCharCode(x), dp = Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            let cur = order[i];
            if (colors[cur] == c) dp[cur]++;
            res = Math.max(res, dp[cur]);
            // pr("cur", cur, g[cur])
            for (const child of g[cur]) dp[child] = Math.max(dp[child], dp[cur]);
        }
    }
    return res;
};

/**
 * https://www.cnblogs.com/grandyang/p/15187461.html (LC 1203)
 * https://www.techiedelight.com/kahn-topological-sort-algorithm/
 */
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

const pr = console.log;
const main = () => {
  let colors = "abaca", edges = [[0,1],[0,2],[2,3],[3,4]];
  let colors2 = "a", edges2 = [[0,0]];
  pr(largestPathValue(colors, edges))
  pr(largestPathValue(colors2, edges2))
};

main()