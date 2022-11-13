/**
 * 11/18/21 morning
 * https://leetcode.com/problems/parallel-courses-ii/
 */

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
const packDGDegree = (G, Edges, Deg) => { for (const [u, v] of Edges) { G[u].push(v); Deg[v]++; } };
const packDG = (G, Edges) => { for (const [u, v] of Edges) { G[u-1].push(v-1); } };
const bitCount = (n) => { n = n - ((n >> 1) & 0x55555555); n = (n & 0x33333333) + ((n >> 2) & 0x33333333); return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24; };

// Accepted --- 176ms 100%
// reference: https://leetcode.com/contest/biweekly-contest-29/ranking/1/ liouzhou_101
const MAX = Number.MAX_SAFE_INTEGER;
const minNumberOfSemesters2 = (n, relations, k) => {
    let g = initializeGraph(n);
    packDG(g, relations);
    let dp = Array(1 << n).fill(0);
    for (let mask = 0; mask < 1 << n; mask++) dp[mask] = MAX;
    dp[0] = 0;
    // pr(dp);
    for (let mask = 0; mask < 1 << n; mask++) {
        if (dp[mask] == MAX) continue;
        let can = 0;
        // pr("mask", mask)
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) continue;
            // pr("i", i);
            let set1s = false;
            for (const child of g[i]) {
                if (mask & (1 << child)) continue; // bit of 1's skip
                set1s = true; // bit of 0's, need to set
                break;
            }
            if (!set1s) can |= 1 << i;
        }
        // pr(can);
        for (let semester = can; semester; semester = (semester -1) & can) {
            if (bitCount(semester) > k) continue;
            dp[mask | semester] = Math.min(dp[mask | semester], dp[mask] + 1);
        }
    }
    return dp[(1 << n) - 1];
};

// // WA
// // reference: https://leetcode.com/contest/biweekly-contest-29/ranking/1/ exp_program
const {MaxPriorityQueue} = require('@datastructures-js/priority-queue')
const minNumberOfSemesters1 = (n, relations, k) => {
    let g = initializeGraph(n + 1), deg = Array(n + 1).fill(0);
    packDGDegree(g, relations, deg);
    let q = [];
    for (let i = 1; i <= n; i++) { // starting node
        if (deg[i] == 0) q.push(i);
    }
    // pr(g, deg, q);
    let res = 0;
    while (q.length) {
        // pr(q);
        res++;
        let t = q.length;
        for (let i = 0; i < k && t--; i++) { // bfs
            let cur = q.shift();
            // pr("cur", cur)
            for (const child of g[cur]) {
                if (--deg[child] == 0) q.push(child);
            }
        }
    }
    return res;
};

// issue
// https://leetcode.com/problems/parallel-courses-ii/discuss/708066/Javascript-use-degrees-%2B-courseMap
const minNumberOfSemesters = (n, relations, k) => { // modify from the version 1
    let g = initializeGraph(n + 1), deg = Array(n + 1).fill(0);
    packDGDegree(g, relations, deg);
    let pq = new MaxPriorityQueue({priority: x => x[0]})
    for (let i = 1; i <= n; i++) { // starting node
        if (deg[i] == 0) pq.enqueue([g[i].length, i]);
    }
    pr(pq.toArray())
    pr(g);
    pr(deg);
    let res = 0;
    while(pq.size()) {
        res++;
        let t = pq.size();
        for (let i = 0; i < k && t--; i++) { // bfs
            let cur = pq.dequeue().element[1];
            pr("cur", res, pq.toArray());
            for (const child of g[cur]) {
                if (--deg[child] == 0) {
                    pr("child", child, [g[child].length, child])
                    pq.enqueue([g[child].length, child]);
                }
            }
        }
        pr("res", res, pq.toArray());
    }
    return res;
};

const pr = console.log;
const main = () => {
    let n = 4,
        dependencies = [
            [2, 1],
            [3, 1],
            [1, 4]
        ],
        k = 2;
    let n2 = 5,
        dependencies2 = [
            [2, 1],
            [3, 1],
            [4, 1],
            [1, 5]
        ],
        k2 = 2;
    let n3 = 11,
        dependencies3 = [],
        k3 = 2;
    let n_debug1 = 4, dependencies_debug1 = [[2,1],[2,4]], k_debug1 = 2;
    let n_debug2 = 13, dependencies_debug2 = [[12,8],[2,4],[3,7],[6,8],[11,8],[9,4],[9,7],[12,4],[11,4],[6,4],[1,4],[10,7],[10,4],[1,7],[1,8],[2,7],[8,4],[10,8],[12,7],[5,4],[3,4],[11,7],[7,4],[13,4],[9,8],[13,8]], k_debug2 = 9;
    let n_debug3 = 5, dependencies_debug3 = [[5,1],[3,1],[5,4],[4,1],[2,3]], k_debug3 = 3;
    let n_debug4 = 8, dependencies_debug4 = [[2,7],[1,6],[2,8],[8,7],[6,7],[5,4],[1,7],[1,2],[1,4],[2,6]], k_debug4= 3;
    // pr(minNumberOfSemesters(n, dependencies, k))
    // pr(minNumberOfSemesters(n2, dependencies2, k2))
    // pr(minNumberOfSemesters(n3, dependencies3, k3))
    // pr(minNumberOfSemesters(n_debug1, dependencies_debug1, k_debug1)) // 2
    // pr(minNumberOfSemesters(n_debug2, dependencies_debug2, k_debug2)) // 3
    // pr(minNumberOfSemesters(n_debug3, dependencies_debug3, k_debug3)) // 3 (this case same code run here different from LC)
    pr(minNumberOfSemesters(n_debug4, dependencies_debug4, k_debug4)) // 4
};

main()