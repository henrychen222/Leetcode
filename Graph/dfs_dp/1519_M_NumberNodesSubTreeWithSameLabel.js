/*
 * 01/09/22 night
 * https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };

const packDG1 = (g, pa, edges) => { for (const [u, v] of edges) { g[u].push(v); pa[v] = u } };
const packDG = (pa, edges) => {
    for (const [u, v] of edges) {
        if (u == 0) {
            pa[v] = 0;
        } else if (v == 0) {
            pa[u] = 0;
        }
    }
    // pr("pa", pa);
    for (const [u, v] of edges) {
        if (u == 0 || v == 0) continue;
        if (pa[v] == -1) {
            pa[v] = u;
        } else {
            pa[u] = v;
        }
    }
};

// WA
const countSubTrees1 = (n, edges, s) => {
    let g = initializeGraph(n), pa = Array(n).fill(-1), q = [0], res = Array(n).fill(1), vis = new Set();
    packDG(g, pa, edges);
    // pr("g", g);
    pr("pa", pa)
    while (q.length) {
        let cur = q.shift();
        // pr("cur", cur, res)
        for (const child of g[cur]) {
            if (vis.has(child)) continue;
            if (s[child] == s[cur]) {
                // pr("cur", cur, child)
                for (let i = pa[child]; ; i = pa[i]) {
                    // pr(i);
                    res[i]++;
                    if (i == 0) break;
                }
                // pr("after", res);
            }
            vis.add(child);
            q.push(child);
        }
    }
    return res;
};


const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], new Set()); m.get(a_or_s[i]).add(i); } return m; };

// TLE 58/59
const countSubTrees2 = (n, edges, s) => {
    let pa = Array(n).fill(-1), res = Array(n).fill(1), m = counter_value_in_indexA_in(s);
    packDG(pa, edges);
    // pr(m, pa);
    for (const [, se] of m) {
        // pr(se, se.size)
        if (se.size > 1) {
            for (const start of se) {
                // pr(start)
                for (let i = pa[start]; i != undefined; i = pa[i]) {
                    // pr(i);
                    if (se.has(i)) res[i]++;
                }
            }
        }
    }
    return res;
};

// TLE  58/59
const countSubTrees3 = (n, edges, s) => {
    let pa = Array(n).fill(-1), res = Array(n).fill(1);
    packDG(pa, edges);
    for (let start = 0; start < n; start++) {
        for (let i = pa[start]; i != undefined; i = pa[i]) {
            if (s[start] == s[i]) res[i]++;
        }
    }
    return res;
};

/////////////////////////////////////////////////////////

const ord = (c) => c.charCodeAt();

// Accepted --- 412ms
// reference: https://leetcode.com/contest/weekly-contest-198/ranking tmwilliamlin168
let g, f, s, res;
const countSubTrees = (n, edges, labels) => {
    g = initializeGraph(n), f = Array(26).fill(0), s = labels, res = Array(n).fill(0);
    packUG(g, edges);
    dfs(0, -1);
    return res;
};

const dfs = (cur, pa) => {
    let cnt = f[ord(s[cur]) - 97]++;
    for (const child of g[cur]) {
        if (child != pa) dfs(child, cur);
    }
    // pr(f[ord(s[cur]) - 97], cnt)
    res[cur] = f[ord(s[cur]) - 97] - cnt;
};

const main = () => {
    let n = 7, edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], s = "abaedcd";
    let n2 = 4, edges2 = [[0, 1], [1, 2], [0, 3]], s2 = "bbbb"
    let n3 = 5, edges3 = [[0, 1], [0, 2], [1, 3], [0, 4]], s3 = "aabab";
    let n_debug1 = 6, edges_debug1 = [[0, 1], [0, 2], [1, 3], [3, 4], [4, 5]], s_debug1 = "cbabaa";
    let n_debug2 = 7, edges_debug2 = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]], s_debug2 = "aaabaaa";
    let n_debug3 = 4, edges_debug3 = [[0, 2], [0, 3], [1, 2]], s_debug3 = "aeed";
    let n_debug4 = 25, edges_debug4 = [[4, 0], [5, 4], [12, 5], [3, 12], [18, 3], [10, 18], [8, 5], [16, 8], [14, 16], [13, 16], [9, 13], [22, 9], [2, 5], [6, 2], [1, 6], [11, 1], [15, 11], [20, 11], [7, 20], [19, 1], [17, 19], [23, 19], [24, 2], [21, 24]], s_debug4 = "hcheiavadwjctaortvpsflssg";
    pr(countSubTrees(n, edges, s))
    pr(countSubTrees(n2, edges2, s2))
    pr(countSubTrees(n3, edges3, s3))
    pr(countSubTrees(n_debug1, edges_debug1, s_debug1)) // [1,2,1,1,2,1]
    pr(countSubTrees(n_debug2, edges_debug2, s_debug2)) // [6,5,4,1,3,2,1]
    pr(countSubTrees(n_debug3, edges_debug3, s_debug3)) // [1,1,2,1]
    pr(countSubTrees(n_debug4, edges_debug4, s_debug4)) // [2,2,1,1,1,3,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1]
};

main()