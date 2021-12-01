/**
 * 11/28/21 evening create
 * reference:
 * https://www.cnblogs.com/grandyang/p/15187461.html
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