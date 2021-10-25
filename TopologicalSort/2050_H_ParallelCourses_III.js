/**
 * 10/24/21 evening
 * https://leetcode.com/problems/parallel-courses-iii/
 */

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
const packDGDegree = (G, Edges, Deg) => { for (const [u, v] of Edges) { G[u - 1].push(v - 1); Deg[v - 1]++; } };

// Accepted --- 502ms
/**
 * reference:
 * https://leetcode.com/contest/weekly-contest-264/ranking/  wifi
 * https://leetcode.com/problems/parallel-courses-iii/discuss/1537479/C%2B%2BPython-Topology-Sort-O(M%2B-N)-Clean-and-Concise
 */
const minimumTime1 = (n, relations, time) => {
    let g = initializeGraph(n);
    let deg = Array(n).fill(0);
    packDGDegree(g, relations, deg);
    let q = [];
    for (let i = 0; i < n; i++) {
        if (deg[i] == 0) q.push(i);
    }
    // pr(deg, g)
    let dis = Array(n).fill(0);
    while (q.length) {
        let cur = q.shift();
        dis[cur] += time[cur];
        for (const child of g[cur]) {
            deg[child]--;
            if (deg[child] == 0) q.push(child);
            dis[child] = Math.max(dis[child], dis[cur]);
        }
        // pr(dis);
    }
    return Math.max(...dis);
};


/////////////////////////////////////////////////////////////////////////////////////////////
// uwi
// read: https://www.hackerearth.com/practice/algorithms/graphs/topological-sort/tutorial/
// Accepted --- 264ms
const minimumTime = (n, relations, time) => {
    let g = initializeGraph(n);
    let deg = Array(n).fill(0);
    packDGDegree(g, relations, deg);
    let order = topologicalSort(g);
    // pr(order);
    let dis = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let cur = order[i];
        dis[cur] += time[cur];
        for (const child of g[cur]) {
            dis[child] = Math.max(dis[child], dis[cur]);
        }
    }
    return Math.max(...dis);
};

const topologicalSort = (g) => {
    let n = g.length;
    let deg = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (const child of g[i]) deg[child]++;
    }
    let res = Array(n).fill(0);
    let q = 0;
    for (let i = 0; i < n; i++) { // sources
        if (deg[i] == 0) res[q++] = i;
    }
    for (let p = 0; p < q; p++) {
        for (const child of g[res[p]]) {
            if (--deg[child] == 0) res[q++] = child;
        }
    }
    for (let i = 0; i < n; i++) { // loop
        if (deg[i] > 0) return null;
    }
    return res;
};

const pr = console.log;
const main = () => {
    let n = 3,
        relations = [
            [1, 3],
            [2, 3]
        ],
        time = [3, 2, 5];
    let n2 = 5,
        relations2 = [
            [1, 5],
            [2, 5],
            [3, 5],
            [3, 4],
            [4, 5]
        ],
        time2 = [1, 2, 3, 4, 5];
    pr(minimumTime(n, relations, time))
    pr(minimumTime(n2, relations2, time2))
};

main()