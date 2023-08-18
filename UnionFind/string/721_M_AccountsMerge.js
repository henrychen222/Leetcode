/*
 * 07/14/23 afternoon
 * https://leetcode.com/problems/accounts-merge/
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

// Accepted --- 3355ms 5.9%
const accountsMerge = (accounts) => {
    accounts = accounts.map(e => [e[0]].concat([...new Set(e.slice(1))].sort())); // remove duplicates first
    pr(accounts)
    let n = accounts.length, ds = new DJSet(n), merge = new Map(), used = new Set(), res = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let a = accounts[i], b = accounts[j];
            if (a[0] == b[0]) {
                let cnt = a.length + b.length - 2, check = new Set();
                for (let k = 1; k < a.length; k++) check.add(a[k]);
                for (let k = 1; k < b.length; k++) check.add(b[k])
                // pr(i, j, a, b, a.length, b.length, cnt, check.size, check)
                if (check.size != cnt) ds.union(i, j);
            }
        }
    }
    // pr(ds.par());
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (ds.equiv(i, j)) {
                let a = accounts[i], b = accounts[j], name = a[0];
                if (!merge.has(name)) merge.set(name, new Set());
                for (let k = 1; k < a.length; k++) merge.get(name).add(a[k]);
                for (let k = 1; k < b.length; k++) merge.get(name).add(b[k]);
                used.add(i);
                used.add(j);
            }
        }
    }
    // pr(merge);
    for (const [name, se] of merge) res.push([name].concat([...se].sort()))
    for (let i = 0; i < n; i++) {
        if (!used.has(i))res.push(accounts[i]);
    }
    return res;
};

const main = () => {
    let accounts = [["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["John", "johnsmith@mail.com", "john00@mail.com"], ["Mary", "mary@mail.com"], ["John", "johnnybravo@mail.com"]];
    let accounts2 = [["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe1@m.co"], ["Kevin", "Kevin3@m.co", "Kevin5@m.co", "Kevin0@m.co"], ["Ethan", "Ethan5@m.co", "Ethan4@m.co", "Ethan0@m.co"], ["Hanzo", "Hanzo3@m.co", "Hanzo1@m.co", "Hanzo0@m.co"], ["Fern", "Fern5@m.co", "Fern1@m.co", "Fern0@m.co"]]
    let debug1 = [["Alex","Alex5@m.co","Alex4@m.co","Alex0@m.co"],["Ethan","Ethan3@m.co","Ethan3@m.co","Ethan0@m.co"],["Kevin","Kevin4@m.co","Kevin2@m.co","Kevin2@m.co"],["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe2@m.co"],["Gabe","Gabe3@m.co","Gabe4@m.co","Gabe2@m.co"]];
    let debug2 = [["Kevin","Kevin1@m.co","Kevin5@m.co","Kevin2@m.co"],["Bob","Bob3@m.co","Bob1@m.co","Bob2@m.co"],["Lily","Lily3@m.co","Lily2@m.co","Lily0@m.co"],["Gabe","Gabe2@m.co","Gabe0@m.co","Gabe2@m.co"],["Kevin","Kevin4@m.co","Kevin3@m.co","Kevin3@m.co"]];
    let debug3 = [["David","Avid0@m.co","David0@m.co","David1@m.co"],["David","Gvid3@m.co","David3@m.co","David4@m.co"],["David","David4@m.co","David5@m.co"],["David","David2@m.co","David3@m.co"],["David","David1@m.co","David2@m.co"]];
    pr(accountsMerge(accounts))
    pr(accountsMerge(accounts2))
    pr(accountsMerge(debug1))
    pr(accountsMerge(debug2))
    pr(accountsMerge(debug3))
};

main()