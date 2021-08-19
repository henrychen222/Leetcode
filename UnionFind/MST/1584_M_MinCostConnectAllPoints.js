/**
 * 08/19/21 afternoon
 * https://leetcode.com/problems/min-cost-to-connect-all-points/
 */

function DJSet(n) {
    let parent = Array(n).fill(-1);
    return { find, union, getParent }
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
    function getParent() {
        return parent;
    }
}

function Edge(i, j, cost) {
    this.i = i;
    this.j = j;
    this.cost = cost;
}

// Accepted --- 992ms 68.75%
/**
 * reference:
 * https://leetcode.com/contest/weekly-contest-206/ranking (SecondThread)
 * https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/
 * https://www.tutorialspoint.com/kruskal-s-minimum-spanning-tree-using-stl-in-cplusplus
 * https://www.hackerearth.com/practice/algorithms/graphs/minimum-spanning-tree/tutorial/
 */
const minCostConnectPoints = (points) => {
    let n = points.length;
    let edges = new Array(n * (n - 1) / 2).fill(new Edge(0, 0, 0));
    let ind = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let cost = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
            edges[ind++] = new Edge(i, j, cost);
        }
    }
    edges.sort((x, y) => x.cost - y.cost);
    let ds = new DJSet(n);
    let res = 0;
    for (const edge of edges) {
        if (!ds.union(edge.i, edge.j)) res += edge.cost;
    }
    return res;
};

const pr = console.log;
const main = () => {
    let points = [
        [0, 0],
        [2, 2],
        [3, 10],
        [5, 2],
        [7, 0]
    ];
    let points2 = [
        [3, 12],
        [-2, 5],
        [-4, 1]
    ];
    let points3 = [
        [0, 0],
        [1, 1],
        [1, 0],
        [-1, 1]
    ];
    let points4 = [
        [-1000000, -1000000],
        [1000000, 1000000]
    ];
    let points5 = [
        [0, 0]
    ];
    pr(minCostConnectPoints(points))
    pr(minCostConnectPoints(points2))
    pr(minCostConnectPoints(points3))
    pr(minCostConnectPoints(points4))
    pr(minCostConnectPoints(points5))
};

main()