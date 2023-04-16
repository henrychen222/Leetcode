/*
 * 11/19/22 evening
 * https://leetcode.com/contest/weekly-contest-320/problems/minimum-fuel-cost-to-report-to-the-capital/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };

// Accepted reference: __declspec
let res, k, g;
const minimumFuelCost = (roads, seats) => {
    let n = roads.length + 1;
    k = seats, res = 0, g = initializeGraph(n);
    packUG(g, roads);
    dfs(0, -1);
    return res;
};

const dfs = (cur, par) => {
    let sum = 1;
    for (const child of g[cur]) {
        if (child != par) sum += dfs(child, cur);
    }
    if (cur != 0) res += parseInt((sum + k - 1) / k);
    return sum;
}
/////////////////////////////////////////////////////////////
// WA
const minimumFuelCost1 = (roads, seats) => {
    let n = roads.length + 1, g = initializeGraph(n);
    packUG(g, roads);
    let d = minDis(g, 0), res = 0;
    // pr(d);
    for (const x of d) {
        let v = x <= seats ? x : x - seats - 1;
        // pr(v);
        res += v;
    }
    return res;
};

const minDis = (g, start) => {
    let n = g.length, dis = Array(n).fill(Number.MAX_SAFE_INTEGER), q = [start];
    dis[start] = 0;
    while (q.length) {
        let cur = q.shift();
        for (const child of g[cur]) {
            if (dis[child] > dis[cur] + 1) {
                dis[child] = dis[cur] + 1;
                q.push(child);
            }
        }
    }
    return dis;
};

const main = () => {
    let roads = [[0, 1], [0, 2], [0, 3]], seats = 5;
    let roads2 = [[3, 1], [3, 2], [1, 0], [0, 4], [0, 5], [4, 6]], seats2 = 2;
    let roads3 = [], seats3 = 1;
    let roads_debug1 = [[0, 1], [0, 2], [1, 3], [1, 4]], seats_debug1 = 5;
    pr(minimumFuelCost(roads, seats))
    pr(minimumFuelCost(roads2, seats2))
    pr(minimumFuelCost(roads3, seats3))
    pr(minimumFuelCost(roads_debug1, seats_debug1)) // 4
};

main()
