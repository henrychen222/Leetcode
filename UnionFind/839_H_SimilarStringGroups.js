/**
 * 07/07/21
 * https://leetcode.com/problems/similar-string-groups/
 */

function DJSet(n) {
    let parent = Array(n).fill(-1);
    return { find, union, count, getParent }
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
    function count() {
        let cnt = 0;
        for (const u of parent) {
            if (u < 0) cnt++;
        }
        return cnt;
    }
    function getParent() {
        return parent;
    }
}

// Accepted --- 184ms
const numSimilarGroups = (a) => {
    let n = a.length;
    let ds = new DJSet(n);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (canSwap(a[i], a[j])) {
                pr(i, a[i], j, a[j])
                ds.union(i, j);
                pr(ds.getParent())
            }
        }
    }
    pr(ds.getParent())
    return ds.count();
};

const canSwap = (s, t) => {
    let [n, cnt] = [s.length, 0];
    for (let i = 0; i < n; i++) {
        if (s[i] != t[i]) cnt++;
    }
    return cnt <= 2;
};

const pr = console.log;
const main = () => {
    let strs = ["tars", "rats", "arts", "star"];
    let strs2 = ["omv", "ovm"];
    pr(numSimilarGroups(strs));
    pr(numSimilarGroups(strs2));
};

main()