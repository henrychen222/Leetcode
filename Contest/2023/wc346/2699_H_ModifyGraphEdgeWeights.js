/*
 * 05/20/23 evening
 * https://leetcode.com/contest/weekly-contest-346/problems/modify-graph-edge-weights/
 * 
 * same problem: https://codeforces.com/problemset/problem/715/B
 */

const pr = console.log;

const { MinPriorityQueue } = require('@datastructures-js/priority-queue')

const deepCopy2DArray = (g) => { let d = []; for (const a of g) d.push([...a]); return d; };
const initializeGraphMap = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push(new Map()); } return g; };
// const packUG = (g, edges) => {
//     for (const [u, v, cost] of edges) {
//         g[u].push(v);
//         g[v].push(u);
//         m.set(u + ' ' + v, cost);
//         m.set(v + ' ' + u, cost);
//     }
// };
const packUGCost = (g, edges) => {
    for (let i = 0; i < edges.length; i++) {
        let [u, v, cost] = edges[i];
        if (cost == -1) {
            canModify.push([u, v, cost]);
            edges[i][2] = 2e9;
        }
        g[u].set(v, edges[i][2])
        g[v].set(u, edges[i][2])
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////
// Accepted --- https://leetcode.cn/circle/discuss/fwWHZg/ liupengsay

/*
首先注意到target的范围，与边权最大值范围，先将所有的−1改为2*10^9
计算初始的最短路，如果小于target则无论怎么修改肯定无解，如果等于target则直接返回。
如果大于target，则尝试依次将每条边权2*10^9改为1
计算此时最短路dis，如果此时dis小于等于target，则有解，并将此时这条边权增加target-dis，输出即可
*/
let n, canModify;
const modifiedGraphEdges = (N, edges, start, dest, target) => {
    n = N, canModify = [];
    let g = initializeGraphMap(n);
    packUGCost(g, edges);
    // pr(g)
    let d = dijkstra(g, start)
    if (d[dest] == target) return go(g);
    if (d[dest] < target) return [];
    for (const [u, v, cost] of canModify) {
        g[u].set(v, 1);
        g[v].set(u, 1);
        // pr("g222", g)
        let d = dijkstra(g, start);
        if (d[dest] <= target) {
            let gap = target - d[dest];
            let pre = g[u].get(v), update = pre + gap;
            g[u].set(v, update);
            g[v].set(u, update);
            // pr("g333", g)
            return go(g);
        }
    }
    return [];
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
        // pr(cur)
        for (const [child, cost] of g[cur]) {
            let toChildCost = d + cost;
            // pr("child", child)
            if (toChildCost < dis[child]) {
                dis[child] = toChildCost;
                // pr([toChildCost, child])
                pq.enqueue([toChildCost, child]);
            }
        }
    }
    // pr(dis)
    return dis; // min distance: start -> all other nodes
};

const go = (g) => {
    let res = new Set();
    for (let i = 0; i < n; i++) {
        for (const [child, cost] of g[i]) {
            // pr([child, cost])
            res.add(JSON.stringify([Math.min(i, child), Math.max(i, child), cost]))
        }
    }
    return [...res].map(e => JSON.parse(e));
};


/////////////////////////////////////////////////////////////////////////////////////////
// issue
// let m;
// const modifiedGraphEdges1 = (n, edges, start, dest, target) => {
//     m = new Map();
//     let g = initializeGraph(n);
//     packUG(g, edges);
//     let paths = findAllPathSourceToTargetUG(g, start, dest), res = deepCopy2DArray(edges);
//     pr(m, paths, "res", res, "edges", edges)
//     for (const p of paths) {
//         let c = [];
//         let ms = new Set();
//         for (let i = 1; i < p.length; i++) {
//             let ke = p[i - 1] + " " + p[i];
//             c.push(m.get(ke))
//             ms.add(ke);
//             ms.add(p[i] + " " + p[i - 1])
//         }
//         pr(p, c, "res", res);
//         let sum = 0, last;
//         for (let i = 0; i < c.length; i++) {
//             if (c[i] == -1) {
//                 last = i;
//             }
//             sum += c[i]
//         }
//         if (last != undefined && sum < target) {
//             let s = 0;
//             for (let i = 0; i < c.length; i++) {
//                 if (c[i] == -1) {
//                     if (i != last) {
//                         c[i] = 1;
//                         s++;
//                     }
//                 } else {
//                     s += c[i];
//                 }
//             }
//             c[last] = target - s;
//             if (c[last] <= 0 || c[last] > 2e9) continue;
//             for (let i = 1; i < p.length; i++) {
//                 let newCost = c[i - 1];
//                 m.set(p[i - 1] + " " + p[i], newCost);
//                 m.set(p[i] + " " + p[i - 1], newCost);
//             }
//             pr("before", res)
//             for (let i = 0; i < res.length; i++) {
//                 let [u, v, cost] = res[i];
//                 if (cost == -1) {
//                     res[i][2] = m.get(u + " " + v);
//                 }
//             }
//             pr("updated", c, m, "res", res, "ms", ms);
//             for (let i = 0; i < res.length; i++) {
//                 let [u, v, cost] = res[i];
//                 if (cost == -1 && !ms.has(u + " " + v)) res[i][2] = 1;
//             }
//             let d = dijkstra(g, start);
//             pr(d[dest], target)
//             if (d[dest] == target) return res;
//             res = deepCopy2DArray(edges)
//         }

//     }
//     return [];
// };

// let G, n, des;
// const findAllPathSourceToTargetUG = (g, start, dest) => {
//     G = g;
//     n = g.length;
//     des = dest;
//     let res = [], path = [];
//     dfs(start, new Set(), path, res);
//     return res;
// };

// const dfs = (cur, used, path, res) => {
//     // pr(cur, path);
//     path.push(cur);
//     used.add(cur);
//     if (cur == des) res.push([...path]);
//     for (const child of G[cur]) {
//         if (!used.has(child)) {
//             dfs(child, used, path, res);
//         }
//     }
//     used.delete(path.pop());
// };

const main = () => {
    let n = 5, edges = [[4, 1, -1], [2, 0, -1], [0, 3, -1], [4, 3, -1]], src = 0, dest = 1, target = 5;
    let n2 = 3, edges2 = [[0, 1, -1], [0, 2, 5]], src2 = 0, dest2 = 2, target2 = 6
    let n3 = 4, edges3 = [[1, 0, 4], [1, 2, 3], [2, 3, 5], [0, 3, -1]], src3 = 0, dest3 = 2, target3 = 6
    let n_debug1 = 4, edges_debug1 = [[2, 1, 5], [0, 1, 3], [0, 3, -1], [2, 3, 9]], src_debug1 = 0, dest_debug1 = 2, target_debug1 = 9;
    let n_debug2 = 4, edges_debug2 = [[0, 1, -1], [1, 2, -1], [3, 1, -1], [3, 0, 2], [0, 2, 5]], src_debug2 = 2, dest_debug2 = 3, target_debug2 = 8
    let n_debug3 = 5, edges_debug3 = [[1, 4, 1], [2, 4, -1], [3, 0, 2], [0, 4, -1], [1, 3, 10], [1, 0, 10]], src_debug3 = 0, dest_debug3 = 2, target_debug3 = 15
    pr(modifiedGraphEdges(n, edges, src, dest, target))
    pr(modifiedGraphEdges(n2, edges2, src2, dest2, target2))
    pr(modifiedGraphEdges(n3, edges3, src3, dest3, target3))
    pr(modifiedGraphEdges(n_debug1, edges_debug1, src_debug1, dest_debug1, target_debug1)) // []
    pr(modifiedGraphEdges(n_debug2, edges_debug2, src_debug2, dest_debug2, target_debug2)) // []
    pr(modifiedGraphEdges(n_debug3, edges_debug3, src_debug3, dest_debug3, target_debug3)) // [[1,4,1],[2,4,4],[3,0,2],[0,4,14],[1,3,10],[1,0,10]]
};

main()

/*
   4
  1 --- 0
3 |     | -1
  2 --- 3
     5


  1 --- 0
*/
