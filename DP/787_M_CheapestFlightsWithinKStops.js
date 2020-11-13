const {
    MinPriorityQueue
} = require('@datastructures-js/priority-queue');

/**
 * 11.12 evening
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/9109981.html
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/discuss/128217/Three-C++-solutions-BFS-DFS-and-BF (use)
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/discuss/361711/Java-DFSBFSBellman-Ford-Dijkstra's
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/discuss/115596/c++-8-line-bellman-ford
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/discuss/115541/JavaPython-Priority-Queue-Solution
 */

// Accepted --- 116ms 76.11%
// let res;
// const findCheapestPrice_DFS_origin = (n, flights, src, dst, K) => {
//     res = Number.MAX_VALUE;
//     let memo = new Map();
//     let visited = new Array(n).fill(0);
//     for (const e of flights) {
//         if (!memo.has(e[0])) {
//             memo.set(e[0], []);
//         }
//         memo.get(e[0]).push([e[1], e[2]]);
//     }
//     dfs(src, dst, K + 1, 0, visited, memo);
//     return res == Number.MAX_VALUE ? -1 : res;
// };

// const dfs = (src, dst, k, cost, visted, memo) => {
//     if (src == dst) {
//         res = cost;
//         return;
//     }
//     if (k == 0) return;
//     visted[src] = 1;
//     let tmp = memo.get(src);
//     if (tmp != undefined) {
//         for (const pair of tmp) {
//             if (visted[pair[0]] == 0) {
//                 if (cost + pair[1] > res) continue;
//                 dfs(pair[0], dst, k - 1, cost + pair[1], visted, memo);
//             }
//         }
//     }
//     visted[src] = 0;
// };


// Accepted --- 156ms 48.33% remove visited
// let res;
// const findCheapestPrice_DFS_modify = (n, flights, src, dst, K) => {
//     res = Number.MAX_VALUE;
//     let memo = new Map();
//     for (const e of flights) {
//         if (!memo.has(e[0])) {
//             memo.set(e[0], []);
//         }
//         memo.get(e[0]).push([e[1], e[2]]);
//     }
//     dfs(src, dst, K + 1, 0, memo);
//     return res == Number.MAX_VALUE ? -1 : res;
// };

// const dfs = (src, dst, k, cost, memo) => {
//     if (src == dst) {
//         res = cost;
//         return;
//     }
//     if (k == 0) return;
//     let tmp = memo.get(src);
//     if (tmp != undefined) {
//         for (const pair of tmp) {
//             if (cost + pair[1] > res) continue;
//             dfs(pair[0], dst, k - 1, cost + pair[1], memo);
//         }
//     }
// };


// Accepted --- 156ms 48.33%  remove visited + change memo to Global
let res;
let memo = new Map();
const findCheapestPrice = (n, flights, src, dst, K) => {
    res = Number.MAX_VALUE;
    memo.clear();
    for (const e of flights) {
        if (!memo.has(e[0])) {
            memo.set(e[0], []);
        }
        memo.get(e[0]).push([e[1], e[2]]);
    }
    // console.log(memo)
    dfs(src, dst, K + 1, 0);
    return res == Number.MAX_VALUE ? -1 : res;
};

const dfs = (src, dst, k, cost) => {
    // console.log(memo, res, src, dst, k, cost);
    if (src == dst) {
        res = cost;
        return;
    }
    if (k == 0) return;
    let tmp = memo.get(src);
    // console.log(tmp);
    if (tmp != undefined) {
        for (const pair of tmp) {
            if (cost + pair[1] > res) continue;
            dfs(pair[0], dst, k - 1, cost + pair[1]);
        }
    }
};

// Accepted --- 96ms 94.44%
const findCheapestPrice_BFS = (n, flights, src, dst, K) => {
    let memo = new Map();
    let res = Number.MAX_VALUE;
    let q = [
        [src, 0]
    ];
    for (const e of flights) {
        if (!memo.has(e[0])) {
            memo.set(e[0], []);
        }
        memo.get(e[0]).push([e[1], e[2]]);
    }
    let cnt = 0;
    while (q.length != 0) {
        // console.log(q);
        let n = q.length;
        for (let i = 0; i < n; i++) {
            let cur = q[0];
            q.shift();
            if (cur[0] == dst) { // cur[0]: src
                res = Math.min(res, cur[1]);
            }
            if (memo.has(cur[0])) {
                for (const pair of memo.get(cur[0])) {
                    if (cur[1] + pair[1] > res) continue;
                    q.push([pair[0], cur[1] + pair[1]]);
                }
            }
        }
        if (cnt++ > K) break;
    }
    return res == Number.MAX_VALUE ? -1 : res;
};

// Accepted --- 92ms 98.33%  Bellman–Ford Algorithm  https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm
const findCheapestPrice_DP = (n, flights, src, dst, K) => {
    let dp = new Array(n).fill(1e9); // cost
    dp[src] = 0;
    for (i = 0; i <= K; i++) {
        let tmp = [...dp];
        // let tmp = dp; wrong
        for (const e of flights) {
            tmp[e[1]] = Math.min(tmp[e[1]], dp[e[0]] + e[2]);
        }
        dp = tmp;
        // console.log(tmp, dp);
    }
    return dp[dst] >= 1e9 ? -1 : dp[dst];
};

// Accepted --- 140ms 54.44%   Dijkstra with PQ
const findCheapestPrice_PQ = (n, flights, src, dst, K) => {
    let memo = new Map();
    for (const e of flights) {
        if (!memo.has(e[0])) {
            memo.set(e[0], []);
        }
        memo.get(e[0]).push([e[1], e[2]]);
    }
    let pq = new MinPriorityQueue({
        priority: (x) => x.first
    });
    pq.enqueue({
        first: 0, // cost
        second: src,
        third: K + 1 // dst
    })
    while (!pq.isEmpty()) {
        // console.log(pq.toArray());
        let cur = pq.front().element;
        pq.dequeue();
        let cost = cur.first;
        let city = cur.second;
        let stop = cur.third;
        // console.log(cost, city, stop)
        if (city == dst) return cost;
        if (stop > 0) {
            if (!memo.has(city)) continue;
            for (const next of memo.get(city)) {
                pq.enqueue({
                    first: cost + next[1],
                    second: next[0],
                    third: stop - 1
                });
            }
        }
    }
    return -1;
};

const main = () => {
    let n = 3,
        edges = [
            [0, 1, 100],
            [1, 2, 100],
            [0, 2, 500]
        ],
        src = 0,
        dst = 2,
        k = 1;
    let n2 = 3,
        edges2 = [
            [0, 1, 100],
            [1, 2, 100],
            [0, 2, 500]
        ],
        src2 = 0,
        dst2 = 2,
        k2 = 0;

    let n_debug1 = 5,
        edges_debug1 = [
            [4, 1, 1],
            [1, 2, 3],
            [0, 3, 2],
            [0, 4, 10],
            [3, 1, 1],
            [1, 4, 3]
        ],
        src_debu1 = 2,
        dst_debug1 = 1,
        k_debug1 = 1;
    console.log(findCheapestPrice(n, edges, src, dst, k));
    console.log(findCheapestPrice(n2, edges2, src2, dst2, k2));
    console.log(findCheapestPrice(n_debug1, edges_debug1, src_debu1, dst_debug1, k_debug1));
};

main()