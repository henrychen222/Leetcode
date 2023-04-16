/**
 * 08/06/22 evening
 * https://leetcode.com/contest/weekly-contest-305/problems/reachable-nodes-with-restrictions/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };

// Accepted
const reachableNodes = (n, edges, restricted) => {
    let g = initializeGraph(n), notAllow = new Set(), visit = new Set(), q = [0], res = new Set([0]);
    packUG(g, edges);
    // pr(g);
    for (const x of restricted) notAllow.add(x);
    while (q.length) {
        let cur = q.shift();
        for (const child of g[cur]) {
            if (!notAllow.has(child) && !visit.has(child)) {
                res.add(child);
                visit.add(child);
                q.push(child);
            }
        }
    }
    // pr(res);
    return res.size;
};

const main = () => {
    let n = 7, edges = [[0, 1], [1, 2], [3, 1], [4, 0], [0, 5], [5, 6]], restricted = [4, 5];
    let n2 = 7, edges2 = [[0, 1], [0, 2], [0, 5], [0, 4], [3, 2], [6, 5]], restricted2 = [4, 2, 1];
    let n_debug1 = 2, edges_debug1 = [[0,1]], restricted_debug1 = [1];
    pr(reachableNodes(n, edges, restricted))
    pr(reachableNodes(n2, edges2, restricted2))
    pr(reachableNodes(n_debug1, edges_debug1, restricted_debug1)) // 1
};

main()