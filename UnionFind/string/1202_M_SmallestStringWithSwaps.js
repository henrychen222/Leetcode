/*
 * 07/14/23 night
 * https://leetcode.com/problems/smallest-string-with-swaps/
 */

const pr = console.log;

function DJSet(n) {
    let parent = Array(n).fill(-1);
    return { find, union, count, equiv, par, grp }
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
    function grp() {
        let groups = [];
        for (let i = 0; i < n; i++) groups.push([]);
        for (let i = 0; i < n; i++) groups[find(i)].push(i); // sorted and unique
        return groups;
    }
}

// Accepted --- 194ms 75.93%
const smallestStringWithSwaps = (s, pairs) => {
    let n = s.length, ds = new DJSet(n), res = Array(n).fill(0);
    for (const [x, y] of pairs) ds.union(x, y);
    let groups = ds.grp().filter(e => e.length);
    // pr(ds.par(), groups)
    for (const group of groups) {
        let gs = '';
        for (let i of group) gs += s[i];
        gs = gs.split("").sort();
        for (let i = 0; i < group.length; i++) res[group[i]] = gs[i];
    }
    return res.join("");
};

const main = () => {
    let s = "dcab", pairs = [[0, 3], [1, 2]];
    let s2 = "dcab", pairs2 = [[0, 3], [1, 2], [0, 2]];
    let s3 = "cba", pairs3 = [[0, 1], [1, 2]];
    pr(smallestStringWithSwaps(s, pairs))
    pr(smallestStringWithSwaps(s2, pairs2))
    pr(smallestStringWithSwaps(s3, pairs3))
};

main()