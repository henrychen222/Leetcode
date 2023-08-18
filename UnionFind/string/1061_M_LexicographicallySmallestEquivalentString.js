/*
 * 07/14/23 evening
 * https://leetcode.com/problems/lexicographically-smallest-equivalent-string/
 */

const pr = console.log;

function DJSet(n) {
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

const ord = (c) => c.charCodeAt();
const char = (ascii) => String.fromCharCode(ascii);

// Accepted --- 94ms 28.79%
const smallestEquivalentString = (s, t, base) => {
    let n = s.length, ds = new DJSet(26), groups = new Map(), res = '';
    for (let i = 0; i < n; i++) {
        if (s[i] != t[i]) ds.union(ord(s[i]) - 97, ord(t[i]) - 97);
    }
    for (let i = 0; i < 26; i++) {
        for (let j = i + 1; j < 26; j++) {
            let ci = char(i + 97), cj = char(j + 97);
            if (ds.equiv(i, j)) {
                add(groups, ci, cj);
                add(groups, cj, ci);
            }
        }
    }
    // pr(groups);
    for (const c of base) {
        let connections = groups.get(c) || [], cur = c;
        for (const connect of connections) {
            if (connect < cur) cur = connect;
        }
        res += cur;
    }
    return res;
};

const add = (m, k, v) => {
    if (!m.has(k)) m.set(k, new Set());
    m.get(k).add(v);
};

const main = () => {
    let s = "parker", t = "morris", base = "parser";
    let s2 = "hello", t2 = "world", base2 = "hold";
    let s3 = "leetcode", t3 = "programs", base3 = "sourcecode";
    pr(smallestEquivalentString(s, t, base))
    pr(smallestEquivalentString(s2, t2, base2))
    pr(smallestEquivalentString(s3, t3, base3))
};

main()