/*
* 08/27/22 evening
* https://leetcode.com/contest/weekly-contest-308/problems/build-a-matrix-with-conditions/
*/

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packDGInDegree = (g, edges, indegree) => { for (const [u, v] of edges) { g[u].unshift(v); indegree[v]++; } };
// const packDGInDegree = (g, edges, indegree) => { for (const [u, v] of edges) { g[u-1].unshift(v-1); indegree[v-1]++; } };
const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };

// Accepted  reference uwi
// const buildMatrix1 = (k, rowConditions, colConditions) => {
//     let gr = make(k, rowConditions), gc = make(k, colConditions), d = initialize2DArray(k, 2), res = initialize2DArray(k, k);
//     pr("order", gr, gc)
//     if (gr.length == 0 || gc.length == 0) return [];
//     for (let i = 0; i < k; i++) {
//         d[gr[i]][0] = i;
//         d[gc[i]][1] = i;
//     }
//     pr('d', d)
//     for (let i = 0; i < k; i++) {
//         let [x, y] = d[i];
//         res[x][y] = i + 1;
//     }
//     return res;
// };

// const make = (n, edges) => {
//     let g = initializeGraph(n), deg = Array(n).fill(0);
//     packDGInDegree(g, edges, deg);
//     return topologicalSort(g, deg);
// };

// const topologicalSort = (g, indegree) => {
//     let res = [], q = [], n = g.length;
//     for (let i = 0; i < n; i++) {
//         if (indegree[i] == 0) q.push(i);
//     }
//     while (q.length) {
//         let cur = q.shift();
//         res.push(cur);
//         for (const child of g[cur]) {
//             indegree[child]--;
//             if (indegree[child] == 0) q.push(child);
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         if (indegree[i] > 0) return [];
//     }
//     return res;
// };


/////////////////////////////////////////////////////////////////////////////////////

// Accepted
const buildMatrix = (k, rowConditions, colConditions) => {
    let gr = make(k, rowConditions), gc = make(k, colConditions), d = initialize2DArray(k, 2), res = initialize2DArray(k, k);
    // pr("order", gr, gc)
    if (gr.length == 0 || gc.length == 0) return [];
    for (let i = 0; i < k; i++) {
        d[gr[i] - 1][0] = i
        d[gc[i] - 1][1] = i;
    }
    // pr('d', d)
    for (let i = 0; i < k; i++) {
        let [x, y] = d[i];
        res[x][y] = i + 1;
    }
    return res;
};

const make = (n, edges) => {
    let g = initializeGraph(n + 1), deg = Array(n + 1).fill(0);
    packDGInDegree(g, edges, deg);
    return topologicalSort_start_1(g, deg);
};

const topologicalSort_start_1 = (g, indegree) => {
    let res = [], q = [], n = g.length - 1;
    for (let i = 1; i <= n; i++) {
        if (indegree[i] == 0) q.push(i);
    }
    while (q.length) {
        let cur = q.shift();
        res.push(cur);
        for (const child of g[cur]) {
            indegree[child]--;
            if (indegree[child] == 0) q.push(child);
        }
    }
    for (let i = 1; i <= n; i++) {
        if (indegree[i] > 0) return [];
    }
    return res;
};

const main = () => {
    let k = 3, rowConditions = [[1, 2], [3, 2]], colConditions = [[2, 1], [3, 2]];
    let k2 = 3, rowConditions2 = [[1, 2], [2, 3], [3, 1], [2, 3]], colConditions2 = [[2, 1]];
    let k_debug1 = 8, rowConditions_debug1 = [[1, 2], [7, 3], [4, 3], [5, 8], [7, 8], [8, 2], [5, 8], [3, 2], [1, 3], [7, 6], [4, 3], [7, 4], [4, 8], [7, 3], [7, 5]], colConditions_debug1 = [[5, 7], [2, 7], [4, 3], [6, 7], [4, 3], [2, 3], [6, 2]];
    pr(buildMatrix(k, rowConditions, colConditions))
    pr(buildMatrix(k2, rowConditions2, colConditions2))
    pr(buildMatrix(k_debug1, rowConditions_debug1, colConditions_debug1)) // [[1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,7],[0,0,5,0,0,0,0,0],[0,4,0,0,0,0,0,0],[0,0,0,6,0,0,0,0],[0,0,0,0,8,0,0,0],[0,0,0,0,0,0,3,0],[0,0,0,0,0,2,0,0]]
};

main()


let G = [[1, 2], [], [1], [2, 2, 7], [7, 7], [], [2, 7, 5, 3, 2, 4], [1]]
Deg = [0, 3, 5, 1, 1, 1, 0, 4]

let G2 = [[2, 1], [], [1], [7, 2, 2], [7, 7], [], [4, 2, 3, 5, 7, 2], [1]]
Deg2 = [0, 3, 5, 1, 1, 1, 0, 4]

// pr(topologicalSort(G, Deg))
// pr(topologicalSort(G2, Deg2)) // [0, 6, 4, 3, 5, 7, 2, 1]  correct

