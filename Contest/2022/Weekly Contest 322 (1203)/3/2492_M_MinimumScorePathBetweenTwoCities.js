/*
 * 12/03/22 evening
 * https://leetcode.com/contest/weekly-contest-322/problems/minimum-score-of-a-path-between-two-cities/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges, m) => {
    for (const [u, v, cost] of edges) {
        g[u].push(v);
        g[v].push(u);
        m.set(u + " " + v, cost)
        m.set(v + " " + u, cost)
    }
};

// WA hidden case  35/36 fuck
const minScore1 = (n, roads) => {
    let g = initializeGraph(n + 1), m = new Map(), dis = Array(n + 1).fill(Number.MAX_SAFE_INTEGER), q = [1], vis = Array(n + 1).fill(false);
    packUG(g, roads, m);
    // pr(g, m)
    vis[1] = true;
    while (q.length) {
        let cur = q.shift();
        for (const child of g[cur]) {
            let cost = m.get(cur + " " + child), min = Math.min(dis[cur], cost);
            dis[cur] = min;
            if (dis[child] > min) {
                dis[child] = min;
                q.push(child);
            }
        }
    }
    return dis[n];
};

// Accepted
// reference: Heltion
const minScore2 = (n, roads) => {
    let g = initializeGraph(n + 1), m = new Map(), q = [1], vis = Array(n + 1).fill(false), res = Number.MAX_SAFE_INTEGER;
    packUG(g, roads, m);
    vis[1] = true;
    while (q.length) {
        let cur = q.shift();
        for (const child of g[cur]) {
            let cost = m.get(cur + " " + child);
            res = Math.min(res, cost);
            if (!vis[child]) {
                q.push(child);
                vis[child] = true;
            }
        }
    }
    return res;
};

/////////////////////////////////////////////////////////////////////

function DJSet(n, m) {
    // parent[i] < 0, -parent[i] is the group size which root is i. example: (i -> parent[i] -> parent[parent[i]] -> parent[parent[parent[i]]] ...)
    // parent[i] >= 0, i is not the root and parent[i] is i's parent. example: (... parent[parent[parent[i]]] -> parent[parent[i]] -> parent[i] -> i)
    let parent = Array(n).fill(-1), min = Array(n).fill(Number.MAX_SAFE_INTEGER);
    // pr(m);
    return { find, union, count, equiv, par }
    function find(x) {
        return parent[x] < 0 ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        let ke = x + " " + y, cost = m.get(ke);
        min[x] = Math.min(min[x], cost);
        min[y] = Math.min(min[y], cost);
        x = find(x);
        y = find(y);
        if (x != y) {
            if (parent[x] < parent[y]) [x, y] = [y, x];
            parent[x] += parent[y];
            parent[y] = x;

        }
        return x == y;
    }
    function count() {
        let res = Number.MAX_SAFE_INTEGER;
        for (let i = 1; i < n; i++) {
            if (equiv(1, i)) res = Math.min(res, min[i]);
            // if (parent[i] < 0 && parent[i] != -1) {  // issue   reference: https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/2874953/javascript-union-find/
            //     res = Math.min(min[i], res);
            // }
        }
        return res;
    }
    function equiv(x, y) { // isConnected
        return find(x) == find(y);
    }
    function par() {
        return parent;
    }
}

// Accepted
const minScore = (n, roads) => {
    let g = initializeGraph(n + 1), m = new Map();
    packUG(g, roads, m);
    let ds = new DJSet(n + 1, m);
    for (const [u, v, cost] of roads) ds.union(u, v)
    return ds.count();
};

const main = () => {
    let n = 4, roads = [[1, 2, 9], [2, 3, 6], [2, 4, 5], [1, 4, 7]];
    let n2 = 4, roads2 = [[1, 2, 2], [1, 3, 4], [3, 4, 7]];
    let n_debug1 = 6, road_debug1 = [[4, 5, 7468], [6, 2, 7173], [6, 3, 8365], [2, 3, 7674], [5, 6, 7852], [1, 2, 8547], [2, 4, 1885], [2, 5, 5192], [1, 3, 4065], [1, 4, 7357]]
    let n_debug2 = 20, road_debug2 = [[18, 20, 9207], [14, 12, 1024], [11, 9, 3056], [8, 19, 416], [3, 18, 5898], [17, 3, 6779], [13, 15, 3539], [15, 11, 1451], [19, 2, 3805], [9, 8, 2238], [1, 16, 618], [16, 14, 55], [17, 7, 6903], [12, 13, 1559], [2, 17, 3693]]
    let n_debug3 = 36, road_debug3 = [[7, 11, 418], [13, 23, 287], [16, 25, 7891], [15, 7, 9695], [4, 3, 9569], [17, 7, 1809], [14, 3, 4720], [14, 4, 6118], [9, 2, 4290], [32, 17, 5645], [14, 16, 426], [36, 7, 6721], [13, 30, 9444], [3, 25, 4635], [33, 5, 1669], [22, 18, 8910], [5, 28, 7865], [13, 10, 9466], [7, 9, 2457], [11, 8, 4711], [17, 11, 6308], [7, 34, 3789], [8, 33, 9659], [16, 3, 4187], [16, 20, 3595], [23, 10, 6251], [26, 22, 6180], [4, 16, 5577], [26, 7, 5398], [6, 36, 8671], [10, 19, 3028], [23, 30, 1330], [19, 13, 8315], [25, 20, 4740], [25, 4, 5818], [30, 10, 8030], [30, 19, 7527], [28, 6, 6804], [21, 27, 1746], [18, 9, 5189], [7, 27, 6560], [20, 14, 2450], [27, 32, 3951], [2, 21, 3927], [1, 15, 9283], [3, 20, 5428], [15, 26, 5871], [19, 23, 4533], [14, 25, 6992], [4, 20, 5831]]
    pr(minScore(n, roads))
    pr(minScore(n2, roads2))
    pr(minScore(n_debug1, road_debug1)) // 1885
    pr(minScore(n_debug2, road_debug2)) // 55
    pr(minScore(n_debug3, road_debug3)) // 418
};

main()