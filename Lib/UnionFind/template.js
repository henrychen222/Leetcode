//////////////////////// standard one ///////////////////////////////////
/*
Matrix
https://leetcode.com/problems/path-with-minimum-effort/ (10/24/20 night)
https://leetcode.com/problems/count-sub-islands/ (06/23/21 evening)

Graph
https://leetcode.com/problems/redundant-connection/ (06/24/21 night)
https://codeforces.com/contest/1624/submission/153991938 (trace group)
   https://codeforces.com/contest/1624/submission/153998748 (count() to calculate group)
https://atcoder.jp/contests/abc190/submissions/20270717 (02/19/21 night)
   (04/18/22 morning)
   https://atcoder.jp/contests/abc190/submissions/31085398 (parent[x] < parent[y] not work)
   https://atcoder.jp/contests/abc190/submissions/31085545 (parent[x] > parent[y] AC)

Array
https://leetcode.com/problems/couples-holding-hands/ (07/22/21 morning)
https://leetcode.com/problems/find-latest-group-of-size-m/ (08/23/20 night  04/18/22 morning)
https://leetcode.com/problems/smallest-string-with-swaps/ (07/14/23 night)
*/
// parent[i] < 0, -parent[i] is the group size which root is i. example: (i -> parent[i] -> parent[parent[i]] -> parent[parent[parent[i]]] ...)
// parent[i] >= 0, i is not the root and parent[i] is i's parent. example: (... parent[parent[parent[i]]] -> parent[parent[i]] -> parent[i] -> i)
function DJSet(n) {
    let p = Array(n).fill(-1);
    return { find, union, count, equiv, par, grp }
    function find(x) {
        return p[x] < 0 ? x : p[x] = find(p[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x == y) return false;
        if (p[x] < p[y])[x, y] = [y, x];
        p[x] += p[y];
        p[y] = x;
        return true;
    }
    function count() { // total groups
        return p.filter(v => v < 0).length;
    }
    function equiv(x, y) { // isConnected
        return find(x) == find(y);
    }
    function par() {
        return p;
    }
    function grp() { // generate all groups (nlogn)
        let g = [];
        for (let i = 0; i < n; i++) g.push([]);
        for (let i = 0; i < n; i++) g[find(i)].push(i); // sorted and unique
        return g;
    }
}


///////////////////////////////// with prefix sum //////////////////////////////////////////////
// https://leetcode.com/problems/largest-component-size-by-common-factor/ (06/09/21 night)
// https://leetcode.com/problems/maximum-segment-sum-after-removals/ (08/22/23 night)
// https://leetcode.com/problems/maximum-subarray-min-product (05/08/21 night 04/18/22 morning 08/22/23 night)
function DJSet(n) {
    let p = Array(n).fill(-1), s = Array(n).fill(0); // s: group prefix sum
    return { find, union, update, sum, par }
    function find(x) {
        return p[x] < 0 ? x : p[x] = find(p[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x == y) return false;
        if (p[x] < p[y]) [x, y] = [y, x];
        p[x] += p[y];
        p[y] = x;
        s[x] += s[y];
        return true;
    }
    function update(idx, v) {
        s[idx] += v;
    }
    function sum() {
        return s;
    }
    function par() {
        return p;
    }
}


///////////////////////////////// with cycle //////////////////////////////////////////////
/*
https://atcoder.jp/contests/arc111/submissions/19502445 (01/17/21 evening)
   https://atcoder.jp/contests/arc111/submissions/31086124 (04/18/22 morning)
   https://atcoder.jp/contests/arc111/submissions/31476862 (05/06/22 afternoon)
*/
function DJSet(n) {
    let parent = Array(n).fill(-1);
    let cycle = Array(n).fill(false);
    return { find, union, count, equiv, par, cyc }
    function find(x) {
        return parent[x] < 0 ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x == y) {
            cycle[x] = true;
            return false;
        } else {
            if (parent[x] < parent[y]) [x, y] = [y, x];
            parent[x] += parent[y];
            parent[y] = x;
            cycle[x] |= cycle[y];
            return true;
        }
    }
    function count() { // total groups
        return parent.filter(v => v < 0).length;
    }
    function equiv(x, y) {
        return find(x) == find(y);
    }
    function par() {
        return parent;
    }
    function cyc() {
        return cycle;
    }
}