/**
 * 01/29/22 evening
 * https://leetcode.com/contest/weekly-contest-278/problems/find-substring-with-given-hash-value/
 */

const pr = console.log;

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
            if (parent[x] < parent[y]) [x, y] = [y, x];
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

// Accepted
// reference: uwi
const groupStrings = (words) => {
    let n = words.length, ds = new DJSet(n), pre = Array(n).fill(0), m = new Map();
    for (let i = 0; i < n; i++) {
        for (const c of words[i]) {
            pre[i] |= 1 << c.charCodeAt() - 97;
        }
        if (m.has(pre[i])) ds.union(i, m.get(pre[i]));
        m.set(pre[i], i);
    }
    // pr(ds.getParent(), m)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 26; j++) {
            let toggle = pre[i] ^ 1 << j;
            if (m.has(toggle)) ds.union(i, m.get(toggle));
        }
        for (let j = 0; j < 26; j++) {
            for (let k = 0; k < 26; k++) {
                let bitOfOneIJ = pre[i] & (1 << j), bitOfOneIK = pre[i] & (1 << k);
                if (bitOfOneIJ && !bitOfOneIK) {
                    let toggle = pre[i] ^ (1 << j) ^ (1 << k);
                    if (m.has(toggle)) ds.union(i, m.get(toggle));
                }
            }
        }
    }
    // pr(ds.getParent(), m)
    return [ds.count(), -(Math.min(...ds.getParent()))];
};

const main = () => {
    let words = ["a", "b", "ab", "cde"];
    let words2 = ["a", "ab", "abc"];
    pr(groupStrings(words))
    pr(groupStrings(words2))
};

main()