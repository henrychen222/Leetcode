/**
 * 06/25/22 morning
 * https://leetcode.com/contest/biweekly-contest-81/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/
 */

const pr = console.log;

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
        if (x == y) return false;
        if (parent[x] < parent[y]) [x, y] = [y, x];
        parent[x] += parent[y];
        parent[y] = x;
        return true;
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

// Accepted
const countPairs = (n, edges) => {
    let ds = new DJSet(n);
    for (const [x, y] of edges) ds.union(x, y);
    let d = [];
    for (const x of ds.par()) {
        if (x < 0) d.push(-x);
    }
    // pr(ds.par(), ds.count(), d)
    let len = d.length, res = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            res += d[i] * d[j];
        }
    }
    return res;
};

const main = () => {
    let n = 3, edges = [[0, 1], [0, 2], [1, 2]];
    let n2 = 7, edges2 = [[0, 2], [0, 5], [2, 4], [1, 6], [5, 4]];
    pr(countPairs(n, edges))
    pr(countPairs(n2, edges2))
};

main()

/*
[0,1],[0,3],[0,6],
[2,1],[2,3],[2,6]
[5,1],[5,3],[5,6]
[4,1],[4,3],[4,6]

[1,3],,,,,[,,[3,6],,
*/