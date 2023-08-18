///////////////////////////////// floyd-warshall ////////////////////////////////////////////////
/**
 * 12/07/22 night  05/06/23 night
 * 
 * Example problem:
 * https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/
 * https://leetcode.com/problems/network-delay-time/
 * 
 * reference:
 * https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm
 */

const floyd_warshall = (n, edges, start) => {
    let d = [...Array(n)].map(() => Array(n).fill(Number.MAX_SAFE_INTEGER));
    for (const [u, v, cost] of edges) { // UG
        let c = cost == undefined ? 1 : cost;
        d[u][v] = d[v][u] = c;
    }
    // for (const [u, v, cost] of edges) d[u][v] = cost == undefined ? 1 : cost; // DG
    for (let i = start; i < n; i++) d[i][i] = 0;
    for (let k = start; k < n; k++) {
        for (let i = start; i < n; i++) {
            for (let j = start; j < n; j++) {
                if (d[i][j] > d[i][k] + d[k][j]) d[i][j] = d[i][k] + d[k][j];
            }
        }
    }
    return d;
};

///////////////////////////////// Dijkstra ////////////////////////////////////////////////

/*
02/19/21 night
https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
https://atcoder.jp/contests/abc190/submissions/20270717
*/

// 03/17/22 morning
const dijkstra = (g, start) => {
    let n = g.length, dis = Array(n).fill(Number.MAX_SAFE_INTEGER);
    let pq = new MinPriorityQueue({
        compare: (x, y) => {
            if (x[0] != y[0]) return x[0] - y[0];
            return x[1] - y[1];
        }
    });
    dis[start] = 0;
    pq.enqueue([0, start]);
    while (pq.size()) {
        let [d, cur] = pq.dequeue();
        if (d > dis[cur]) continue;
        for (const [child, cost] of g[cur]) {
            let toChildCost = d + cost;
            if (toChildCost < dis[child]) {
                dis[child] = toChildCost;
                pq.enqueue([toChildCost, child]);
            }
        }
    }
    return dis; // min distance: start -> all other nodes
};
