/**
 * 03/17/22 morning
 * https://leetcode.com/problems/network-delay-time/
 */

const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packDGCost = (g, edges) => { for (const [u, v, cost] of edges) { g[u].push([v, cost]); } };

// Accepted --- 144ms 39.3%   05/06/23 night
const networkDelayTime = (times, n, k) => {
    let d = floyd_warshall(n+1, times, 1), max = 0;
    for (let i = 1; i <= n; i++) { // d[k][i]: min distance from k to i
        if (d[k][i] == Number.MAX_SAFE_INTEGER) return -1;
        max = Math.max(d[k][i], max);
    }
    return max;
};

const floyd_warshall = (n, edges, start) => {
    let d = [...Array(n)].map(() => Array(n).fill(Number.MAX_SAFE_INTEGER));
    for (const [u, v, cost] of edges) d[u][v] = cost == undefined ? 1 : cost; // DG
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

///////////////////////////////////////////////////////////////////////////////////////

// Accepted --- 199ms 48.92%
const networkDelayTime1 = (times, n, k) => {
    let g = initializeGraph(n + 1);
    packDGCost(g, times);
    let dis = dijkstra(g, k), max = 0;
    // pr(dis);
    for (let i = 1; i <= n; i++) {
        if (dis[i] == Number.MAX_SAFE_INTEGER) return -1;
        max = Math.max(max, dis[i]);
    }
    return max;
};

// use this as template
const dijkstra = (g, start) => {
    let n = g.length, dis = Array(n).fill(Number.MAX_SAFE_INTEGER);
    let pq = new MinPriorityQueue({
        compare: (x, y) => {
            if (x[0] != y[0]) return x[0] - y[0];
            return x[1] - y[1];
        }
    });
    dis[start] = 0;
    pq.enqueue([0, start]); // change: set distance as first priority compare
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
    let times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2;
    let times2 = [[1,2,1]], n2 = 2, k2 = 1;
    let times3 = [[1,2,1]], n3 = 2, k3 = 2;
    pr(networkDelayTime(times, n, k))
    pr(networkDelayTime(times2, n2, k2))
    pr(networkDelayTime(times3, n3, k3))
};

main()