/**
 * 04/19/22 evening
 * https://leetcode.com/problems/possible-bipartition/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };

const possibleBipartition = (n, dislikes) => {
    let g = initializeGraph(n + 1);
    packUG(g, dislikes);
    // pr(g);
    return isBipartite(g, n + 1, 1);
};

/**
 * https://zxi.mytechroad.com/blog/graph/leetcode-886-possible-bipartition/
 * https://leetcode.com/problems/possible-bipartition/discuss/654887/C%2B%2B-BFS-with-detailed-explanation
 */
// Accepted --- 159ms 67.48%
// Accepted --- 152ms 73.98% add visit
const isBipartite1 = (g, n, start) => {
    let visit = Array(n).fill(false), q = [], color = Array(n).fill(0); // 0: no color, 1: red  -1: blue
    for (let i = start; i < n; i++) {
        if (color[i] != 0) continue;
        q.push(i);
        color[i] = 1;
        if (visit[i]) continue;
        while (q.length) {
            let cur = q.shift();
            if (visit[cur]) continue;
            for (const child of g[cur]) {
                if (color[child] == color[cur]) return false;
                if (color[child]) continue;
                color[child] = -color[cur];
                q.push(child);
            }
        }
    }
    return true;
};

// WA https://www.techiedelight.com/bipartite-graph/
// const isBipartite1 = (g, n, start) => {
//     let visit = new Set([start]), level = Array(n).fill(0), q = [start];
//     while (q.length) {
//         let cur = q.shift();
//         for (const child of g[cur]) {
//             if (visit.has(child)) {
//                 // pr(cur, child, level[child], level[cur])
//                 if (level[child] == level[cur]) return false;
//             } else {
//                 // pr("222", cur,child, level[child], level[cur])
//                 visit.add(child);
//                 level[child] = level[cur] + 1;
//                 q.push(child);
//             }
//         }
//     }
//     return true;
// };


/////////////////////////////////////////////////////////////////////////
function DJSet(n) {
    // parent[i] < 0, -parent[i] is the group size which root is i. example: (i -> parent[i] -> parent[parent[i]] -> parent[parent[parent[i]]] ...)
    // parent[i] >= 0, i is not the root and parent[i] is i's parent. example: (... parent[parent[parent[i]]] -> parent[parent[i]] -> parent[i] -> i)
    let parent = Array(n).fill(-1);
    return { find, union, count, equiv, par }
    function find(x) {
        return parent[x] < 0 ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x != y) {
            if (parent[x] < parent[y])[x, y] = [y, x];
            parent[x] += parent[y];
            parent[y] = x;
        }
        return x == y;
    }
    function count() { // total groups
        return parent.filter(v => v < 0).length;
    }
    function equiv(x, y) { // isConnected
        return find(x) == find(y);
    }
    function par() {
        return parent;
    }
}

// Accepted --- 176ms 60.98%
// reference: https://leetcode.com/problems/possible-bipartition/discuss/1301784/Union-Find-With-Explanation-Java
const isBipartite = (g, n, start) => {
    let ds = new DJSet(n);
    for (let i = start; i < n; i++) {
        if (g[i].length == 0) continue;
        let firstChild = g[i][0];
        for (const child of g[i]) {
            if (ds.equiv(i, child)) return false; // if currnet node i is connected with any of its child, graph is not bipartite
            ds.union(firstChild, child);
        }
    }
    return true;
};


const main = () => {
    let n = 4,
        dislikes = [
            [1, 2],
            [1, 3],
            [2, 4]
        ]
    let n2 = 3,
        dislikes2 = [
            [1, 2],
            [1, 3],
            [2, 3]
        ];
    let n3 = 5,
        dislikes3 = [
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5],
            [1, 5]
        ];
    let n_debug1 = 5, dislikes_debug1 = [[1,2],[3,4],[4,5],[3,5]]
    pr(possibleBipartition(n, dislikes))
    pr(possibleBipartition(n2, dislikes2))
    pr(possibleBipartition(n3, dislikes3))
    pr(possibleBipartition(n_debug1, dislikes_debug1)) // false
};

main()