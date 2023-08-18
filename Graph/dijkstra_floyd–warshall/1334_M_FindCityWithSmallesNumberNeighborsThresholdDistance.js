/**
 * 03/17/22 morning
 * https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/
 */

const {
    MinPriorityQueue
} = require("@datastructures-js/priority-queue");

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUGCost = (g, edges) => { for (const [u, v, cost] of edges) { g[u].push([v, cost]); g[v].push([u, cost]); } };

// 05/06/23 night
// Accepted --- 108ms 71.43%
const findTheCity = (n, edges, distanceThreshold) => {
    let dis = floyd_warshall(n, edges, 0), res = [];
    for (let start = 0; start < n; start++) {
        let canReach = new Set();
        for (let dest = 0; dest < n; dest++) {
            if (start == dest) continue;
            if (dis[start][dest] <= distanceThreshold) canReach.add(dest);
        }
        res.push([start, canReach.size]);
    }
    res.sort((x, y) => {
        if (x[1] != y[1]) return x[1] - y[1];
        return y[0] - x[0];
    });
    return res[0][0];
};

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

///////////////////////////////////////////////////////////////////////////////////////////
// Accepted --- 267ms 20.00%
const findTheCity1 = (n, edges, distanceThreshold) => {
    let g = initializeGraph(n), res = [];
    packUGCost(g, edges);
    for (let start = 0; start < n; start++) {
        let dis = dijkstra(g, start), canReach = new Set();
        // pr(dis);
        for (let dest = 0; dest < n; dest++) {
            if (start == dest) continue;
            if (dis[dest] <= distanceThreshold) canReach.add(dest);
        }
        // pr(start, canReach);
        res.push([start, canReach.size]);
    }
    res.sort((x, y) => {
        if (x[1] != y[1]) return x[1] - y[1]; // smaller number of cities can reach
        return y[0] - x[0] // same, greatest number comes first
    });
    // pr(res);
    return res[0][0];
};

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
    return dis;
};

const main = () => {
    let n = 4,
        edges = [
            [0, 1, 3],
            [1, 2, 1],
            [1, 3, 4],
            [2, 3, 1]
        ],
        distanceThreshold = 4;
    let n2 = 5,
        edges2 = [
            [0, 1, 2],
            [0, 4, 8],
            [1, 2, 3],
            [1, 4, 2],
            [2, 3, 1],
            [3, 4, 1]
        ],
        distanceThreshold2 = 2;
    pr(findTheCity(n, edges, distanceThreshold))
    pr(findTheCity(n2, edges2, distanceThreshold2))
};

main()