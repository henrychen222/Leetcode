/**
 * 11/19/21 evening
 * 
 * example
 * https://leetcode.com/problems/frog-position-after-t-seconds/
 * https://leetcode.com/problems/n-ary-tree-level-order-traversal/
 */

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
const packUG = (G, Edges) => { for (const [u, v] of Edges) { G[u].push(v); G[v].push(u); } };

const getAllData_levelOrder_BFS = (n, g) => {
    let visit = Array(n + 1).fill(false);
    let q = [1], level = 0, d = [new Set([1])];
    visit[1] = true;
    while (q.length) {
        let len = q.length;
        level++;
        d.push(new Set());
        while (len--) {
            let cur = q.shift();
            for (const child of g[cur]) {
                if (!visit[child]) {
                    visit[child] = true;
                    d[level].add(child);
                    q.push(child);
                }
            }
        }
    }
    while (d[d.length - 1].size == 0) d.pop();
    return d;
};

// issue
// const getAllPathGraph = (n, g, root) => {
//     let res = [],
//         path = [],
//         visit = Array(n + 1).fill(false);
//     dfs(g, root, path, res, visit);
//     return res;
// };

// const dfs = (g, cur, path, res, visit) => {
//     if (g[cur].length == 0) return;
//     for (const child of g[cur]) {
//         if (!visit[child]) {
//             path.push(child);
//             visit[child] = true;
//             if (g[child].length == 0) res.push([...path]);
//             dfs(g, child, path, res, visit);
//             let reset = path.pop();
//             visit[reset] = false;
//         }
//     }
// };

const pr = console.log;
const main = () => {
    let n = 7, edges = [[1, 2],[1, 3],[1, 7],[2, 4],[2, 6],[3, 5]];

    let g = initializeGraph(n + 1);
    packUG(g, edges);
    pr(getAllData_levelOrder_BFS(n, g))
};

main()