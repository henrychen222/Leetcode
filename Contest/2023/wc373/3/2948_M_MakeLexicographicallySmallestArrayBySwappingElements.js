/*
 * 11/25/23 night
 * https://leetcode.com/contest/weekly-contest-373/problems/make-lexicographically-smallest-array-by-swapping-elements/
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

// https://leetcode.com/problems/smallest-string-with-swaps/
const LexicalSmallestArrayWithSwaps = (a, pairs) => {
    let n = a.length, ds = new DJSet(n), res = Array(n).fill(0);
    for (const [x, y] of pairs) ds.union(x, y);
    let groups = ds.grp().filter(e => e.length);
    for (const group of groups) {
        let ga = [];
        for (let i of group) ga.push(a[i]);
        ga.sort((x, y) => x - y);
        for (let i = 0; i < group.length; i++) res[group[i]] = ga[i];
    }
    return res;
};

const lexicographicallySmallestArray = (a, limit) => {
    let d = a.map((x, i) => [x, i]).sort((x, y) => x[0] - y[0] || x[1] - y[1]), pairs = [];
    for (let i = 1; i < a.length; i++) {
        if (d[i][0] - d[i - 1][0] <= limit) pairs.push([d[i - 1][1], d[i][1]]);
    }
    return LexicalSmallestArrayWithSwaps(a, pairs)
};

const main = () => {
    let a = [1, 5, 3, 9, 8], limit = 2
    let a2 = [1, 7, 6, 18, 2, 1], limit2 = 3
    let a3 = [1, 7, 28, 19, 10], limit3 = 3
    pr(lexicographicallySmallestArray(a, limit))
    pr(lexicographicallySmallestArray(a2, limit2))
    pr(lexicographicallySmallestArray(a3, limit3))
};

main()