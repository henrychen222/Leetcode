/**
 * 02/19/21 night created
 * 
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