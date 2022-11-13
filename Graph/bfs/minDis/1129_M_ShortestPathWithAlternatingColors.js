/**
 * 06/15/22 morning
 * https://leetcode.com/problems/shortest-path-with-alternating-colors/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(Number.MAX_SAFE_INTEGER); d.push(t); } return d; };
const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packDG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); } };

// Accepted --- 80ms
// reference: https://leetcode.com/problems/shortest-path-with-alternating-colors/discuss/339964/JavaPython-BFS
let rg, bg;
const shortestAlternatingPaths = (n, redEdges, blueEdges) => {
    rg = initializeGraph(n), bg = initializeGraph(n);
    packDG(rg, redEdges);
    packDG(bg, blueEdges);
    // pr("rg", rg);
    // pr("bg", bg);
    let dis = initialize2DArray(n, 2), res = [];
    dis[0][0] = dis[0][1] = 0;
    // pr(dis)
    let q = [[0, 0], [0, 1]];
    minDis2DGlobal(dis, q);
    // pr(dis);
    for (let i = 0; i < n; i++) {
        let v = Math.min(dis[i][0], dis[i][1]);
        res.push(v == Number.MAX_SAFE_INTEGER ? -1 : v);
    }
    return res;
};

const minDis2DGlobal = (dis, q) => {
    while (q.length) {
        let [cur, mark] = q.shift(), g = mark == 0 ? rg : bg;
        // pr(cur, mark, g);
        for (const child of g[cur]) {
            if (dis[child][mark ^ 1] == Number.MAX_SAFE_INTEGER) {
                dis[child][mark ^ 1] = dis[cur][mark] + 1;
                q.push([child, mark ^ 1]);
            }
        }
    }
};

const main = () => {
    let n = 3, redEdges = [[0, 1], [1, 2]], blueEdges = [];
    let n2 = 3, redEdges2 = [[0, 1]], blueEdges2 = [[2, 1]];
    let n_debug1 = 5, redEdges_debug1 = [[0, 1], [1, 2], [2, 3], [3, 4]], blueEdges_debug1 = [[1, 2], [2, 3], [3, 1]];
    pr(shortestAlternatingPaths(n, redEdges, blueEdges))
    pr(shortestAlternatingPaths(n2, redEdges2, blueEdges2))
    pr(shortestAlternatingPaths(n_debug1, redEdges_debug1, blueEdges_debug1)) // [0,1,2,3,7]
};

main()


/*
   r      r      r      r
0 ---> 1 ---> 2 ---> 3 ----> 4
       |   b     b   |
       <-------------|
            b
  
   r   b    r     b   r    b    r 
0 -> 1 -> 2 -> 3 -> 1 -> 2 -> 3 -> 4
*/ 