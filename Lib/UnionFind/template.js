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

*/
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
        if (parent[x] < parent[y])[x, y] = [y, x];
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


///////////////////////////////// with size //////////////////////////////////////////////
// https://leetcode.com/problems/largest-component-size-by-common-factor/ (06/09/21 night)
function DJSet(n) {
    let parent = Array(n).fill(-1);
    let size = Array(n).fill(0);
    return { find, union, updatesz, sz, par }
    function find(x) {
        return parent[x] < 0 ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x == y) return false;
        if (parent[x] < parent[y])[x, y] = [y, x];
        parent[x] += parent[y];
        parent[y] = x;
        size[x] += size[y];
        return true;
    }
    function updatesz(idx, v) {
        size[idx] = v;
    }
    function sz() {
        return size;
    }
    function par() {
        return parent;
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



/////////////////////////// other usage //////////////////////////////////////////////
// https://leetcode.com/problems/maximum-subarray-min-product (05/08/21 night 04/18/22 morning)
function DJSet(a, n) {
    let parent = Array(n).fill(0), sum = Array(n).fill(0n);
    for (let i = 0; i < n; i++) parent[i] = i, sum[i] = BigInt(a[i]);
    return { find, union, search }
    function find(x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x != y) {
            parent[x] = y;
            sum[y] += sum[x];
        }
        return x == y;
    }
    function search(i) {
        return sum[i];
    }
}