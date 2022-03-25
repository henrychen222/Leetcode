// use this as template
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


/**
 * 02/19/21 night created
 * read: 
 * https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
 * https://atcoder.jp/contests/abc190/submissions/20270717
 */
const dijkstra = (G, src) => {
    let q = [src];
    let dist = Array(n).fill(MAX);
    dist[src] = 0;
    for (let i = 0; i < q.length; i++) {
        let cur = q[i];
        for (const e of G[cur]) {
            if (dist[e] > dist[cur] + 1) {
                dist[e] = dist[cur] + 1;
                q.push(e);
            }
        }
    }
    return dist;
};