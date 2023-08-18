/**
 * 03/14/22 night
 * https://leetcode.com/problems/path-with-maximum-probability/
 */

const {
    MinPriorityQueue
} = require("@datastructures-js/priority-queue");

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUGCost = (g, edges, succProb) => {
    for (let i = 0; i < succProb.length; i++) {
        let [u, v] = edges[i], cost = succProb[i];
        g[u].push([v, cost]);
        g[v].push([u, cost]);
    }
};

// Accepted --- 389ms 61.36%
const maxProbability = (n, edges, succProb, start, end) => {
    let g = initializeGraph(n);
    succProb = succProb.map(x => -x);
    packUGCost(g, edges, succProb);
    // pr(succProb, g);
    let d = dijkstra(g, start), res = d[end];
    // pr(d);
    return res == Number.MAX_SAFE_INTEGER ? 0 : -res; 
};

const dijkstra = (g, start) => {
    let n = g.length, dis = Array(n).fill(Number.MAX_SAFE_INTEGER);
    let pq = new MinPriorityQueue({
        compare: (x, y) => {
            if (x[0] != y[0]) return x[0] - y[0];
            return x[1] - y[1];
        }
    });
    dis[start] = -1;
    pq.enqueue([-1, start]);
    while (pq.size()) {
        let [d, cur] = pq.dequeue();
        if (-d > -dis[cur]) continue; // Accepted --- 328ms 75.00%
        for (const [child, cost] of g[cur]) {
            let toChildCost = -(d * cost);
            if (toChildCost < dis[child]) {
                dis[child] = toChildCost;
                pq.enqueue([toChildCost, child]);
            }
        }
    }
    return dis;
};

const main = () => {
    let n = 3,
        edges = [
            [0, 1],
            [1, 2],
            [0, 2]
        ],
        succProb = [0.5, 0.5, 0.2],
        start = 0,
        end = 2;
    let n2 = 3,
        edges2 = [
            [0, 1],
            [1, 2],
            [0, 2]
        ],
        succProb2 = [0.5, 0.5, 0.3],
        start2 = 0,
        end2 = 2;
    let n3 = 3,
        edges3 = [
            [0, 1]
        ],
        succProb3 = [0.5],
        start3 = 0,
        end3 = 2;
    let n_debug1 = 5,
        edges_debug1 = [[2,3],[1,2],[3,4],[1,3],[1,4],[0,1],[2,4],[0,4],[0,2]],
        succProb_debug1 = [0.06,0.26,0.49,0.25,0.2,0.64,0.23,0.21,0.77],
        start_debug1 = 0,
        end_debug1 = 3;
    pr(maxProbability(n, edges, succProb, start, end))
    pr(maxProbability(n2, edges2, succProb2, start2, end2))
    pr(maxProbability(n3, edges3, succProb3, start3, end3))
    pr(maxProbability(n_debug1, edges_debug1, succProb_debug1, start_debug1, end_debug1)) // 0.16000
};

main()