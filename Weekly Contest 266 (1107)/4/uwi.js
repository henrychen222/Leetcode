/**
 * 11/06/21 night
 * 
 */

const pr = console.log;

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
const packUGCost = (G, Edges) => { for (const [u, v, cost] of Edges) { G[u].push([v, cost]); G[v].push([u, cost]); } };

let v, g, res, depth;
const maximalPathQuality = (values, edges, maxTime) => {
    let n = values.length;
    v = values, g = initializeGraph(n), res = 0, depth = Array(n).fill(0);
    packUGCost(g, edges);
    // pr(g);
    dfs(0, maxTime, 0);
    return res;
};

const dfs = (cur, time, sum) => {
    // pr(cur, time, sum, depth);
    if (time < 0) return;
    depth[cur]++;
    if (depth[cur] == 1) sum += v[cur]; // depth is 1, come back to starting node 0
    if (cur == 0) res = Math.max(sum, res);
    for (const [child, cost] of g[cur]) dfs(child, time - cost, sum)
    depth[cur]--; // backtracking, depth -1
};

const main = () => {
    let values = [0, 32, 10, 43], edges = [[0, 1, 10], [1, 2, 15], [0, 3, 10]], maxTime = 49;
    let values2 = [5, 10, 15, 20], edges2 = [[0, 1, 10], [1, 2, 10], [0, 3, 10]], maxTime2 = 30;
    let values3 = [1, 2, 3, 4], edges3 = [[0, 1, 10], [1, 2, 11], [2, 3, 12], [1, 3, 13]], maxTime3 = 50;
    let values4 = [0, 1, 2], edges4 = [[1, 2, 10]], maxTime4 = 10;
    pr(maximalPathQuality(values, edges, maxTime))
    pr(maximalPathQuality(values2, edges2, maxTime2))
    pr(maximalPathQuality(values3, edges3, maxTime3))
    pr(maximalPathQuality(values4, edges4, maxTime4))
};

main()