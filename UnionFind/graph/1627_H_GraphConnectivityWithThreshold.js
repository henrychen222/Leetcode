/**
 * 09/10/21
 * https://leetcode.com/problems/graph-connectivity-with-threshold/
 */

function DJSet(n) {
    // parent[i] < 0, -parent[i] is the group size which root is i. example: (i -> parent[i] -> parent[parent[i]] -> parent[parent[parent[i]]] ...)
    // parent[i] >= 0, i is not the root and parent[i] is i's parent. example: (... parent[parent[parent[i]]] -> parent[parent[i]] -> parent[i] -> i)
    let parent = Array(n).fill(-1);
    return { find, union, count, equiv, getParent }
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
    function count() { // total connected groups (value < 0)
        return parent.filter(v => v < 0).length;
    }
    function equiv(x, y) {
        return find(x) == find(y);
    }
    function getParent() {
        return parent;
    }
}

// Accepted --- 272ms 100%
// reference: https://leetcode.com/contest/weekly-contest-211/ranking uwi
const areConnected = (n, threshold, queries) => {
    let ds = new DJSet(n + 1);
    for (let z = threshold + 1; z <= n; z++) {
        for (let x = 2 * z; x <= n; x += z) {
            // pr(z, x);
            ds.union(x, z);
        }
    }
    // pr(ds.getParent())
    let res = [];
    for (const q of queries) res.push(ds.equiv(q[0], q[1]));
    return res;
};

const pr = console.log;
const main = () => {
    let n = 6,
        threshold = 2,
        queries = [
            [1, 4],
            [2, 5],
            [3, 6]
        ];
    let n2 = 6,
        threshold2 = 0,
        queries2 = [
            [4, 5],
            [3, 4],
            [3, 2],
            [2, 6],
            [1, 3]
        ];
    let n3 = 5,
        threshold3 = 1,
        queries3 = [
            [4, 5],
            [4, 5],
            [3, 2],
            [2, 3],
            [3, 4]
        ];
    pr(areConnected(n, threshold, queries));
    pr(areConnected(n2, threshold2, queries2));
    pr(areConnected(n3, threshold3, queries3));
};

main()