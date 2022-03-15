/**
 * 03/12/22 night
 * https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/
 * 
 * reference:
 * https://leetcode-cn.com/circle/discuss/FEBvWq/
 * https://leetcode.com/contest/weekly-contest-284/ranking/2/ lucifer1006 cuiaoxiang uwi
 * 
 * https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/discuss/1844130/Python-3-Dijkstras-explained.
 * https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/discuss/1844095/Three-Dijkstras
 */

const pr = console.log;
const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packDGCost = (g, ig, edges) => {
    for (const [u, v, cost] of edges) {
        g[u].push([v, cost]);
        ig[v].push([u, cost]);
    }
};

// Accepted --- 1363ms
const minimumWeight = (n, edges, src1, src2, dest) => {
    let g = initializeGraph(n), ig = initializeGraph(n);
    packDGCost(g, ig, edges);
    /*
        src1 -> x
        src2 -> x
        x -> dest  find smallest distance from all nodes to the destination, run Dijkstra in reverse from the destination
     */
    let d1 = dijkstra(g, src1), d2 = dijkstra(g, src2), d3 = dijkstra(ig, dest), res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) res = Math.min(res, d1[i] + d2[i] + d3[i]);
    return res == Number.MAX_SAFE_INTEGER ? -1 : res;
};

const dijkstra = (g, start) => { // store the shortest distance from startNode to all other nodes
    let n = g.length, dis = Array(n).fill(Number.MAX_SAFE_INTEGER);
    let pq = new MinPriorityQueue({
        compare: (x, y) => {
            if (x[0] != y[0]) return x[0] - y[0];
            return x[1] - y[1];
        }
    });
    dis[start] = 0;
    pq.enqueue([start, 0]);
    while (pq.size()) {
        let [cur, d] = pq.dequeue();
        if (d > dis[cur]) continue;
        for (const [child, cost] of g[cur]) {
            let toChildCost = d + cost;
            if (toChildCost < dis[child]) {
                dis[child] = toChildCost;
                pq.enqueue([child, toChildCost]);
            }
        }
    }
    return dis;
};

const main = () => {
    let n = 6,
        edges = [
            [0, 2, 2],
            [0, 5, 6],
            [1, 0, 3],
            [1, 4, 5],
            [2, 1, 1],
            [2, 3, 3],
            [2, 3, 4],
            [3, 4, 2],
            [4, 5, 1]
        ],
        src1 = 0,
        src2 = 1,
        dest = 5;
    let n2 = 3,
        edges2 = [
            [0, 1, 1],
            [2, 1, 1]
        ],
        src1_2 = 0,
        src2_2 = 1,
        dest_2 = 2;
    pr(minimumWeight(n, edges, src1, src2, dest))
    pr(minimumWeight(n2, edges2, src1_2, src2_2, dest_2))
};

main()