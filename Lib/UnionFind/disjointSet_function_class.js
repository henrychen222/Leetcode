// 05/08/21 night
// https://leetcode.com/problems/maximum-subarray-min-product  prefix sum
function DJSet(a, n) {
    let parent = Array(n).fill(0);
    let sum = Array(n).fill(0n);
    for (let i = 0; i < n; i++) parent[i] = i, sum[i] = BigInt(a[i]);
    return { find, union, sm }
    function find(x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x == y) return;
        parent[x] = y;
        sum[y] += sum[x];
    }
    function sm() {
        return sum;
    }
}


// 06/09/21 night
// https://leetcode.com/problems/largest-component-size-by-common-factor/
function DJSet(n) {
    let parent = Array(n).fill(-1);
    let size = Array(n).fill(0);
    return { find, union, updateS, getSize, getParent }
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
            size[x] += size[y];
        }
        return x == y;
    }
    function updateS(idx, v) {
        size[idx] = v;
    }
    function getSize() {
        return size;
    }
    function getParent() {
        return parent;
    }
}