/*
 * 11/05/23 morning  11:15 starts
 * https://leetcode.com/contest/weekly-contest-370/problems/find-champion-ii/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packDG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); } };

// const findChampion = (n, edges) => {
//     let g = initializeGraph(n);
//     packDG(g, edges);
//     // pr(g)
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             let paths = findAllPathsSource(g, i, j);
//             pr(i, j, paths)
//             for (let p of paths) {
//                 if (p.length == n) return i;
//             }
//         }
//     }
//     return -1;
// };

// Accepted
const findChampion = (n, edges) => {
    let hit = new Set(), not = new Set();
    for (const [, v] of edges) hit.add(v);
    for (let i = 0; i < n; i++) {
       if (!hit.has(i)) not.add(i);
    }
    return not.size == 1 ? not.values().next().value : -1;
};


let G;
const findAllPathsSource = (g, start, dest) => {
    G = g;
    let res = [], path = [];
    dfs(start, path, res, dest);
    return res;
};

const dfs = (node, path, res, dest) => {
    path.push(node);
    if (node == dest) res.push([...path]);
    for (const child of G[node]) {
        dfs(child, path, res, dest);
    }
    path.pop();
};

const main = () => {
    let n = 3, edges = [[0, 1], [1, 2]];
    let n2 = 4, edges2 = [[0, 2], [1, 3], [1, 2]]
    let n_debug1 = 2, edges_debug1 =  [[1,0]]
    let n_debug2 = 3, edges_debug2 =  [[0,2],[0,1]]
    pr(findChampion(n, edges))
    pr(findChampion(n2, edges2))
    pr(findChampion(n_debug1, edges_debug1)) // 1
    pr(findChampion(n_debug2, edges_debug2)) // 0
};

main()