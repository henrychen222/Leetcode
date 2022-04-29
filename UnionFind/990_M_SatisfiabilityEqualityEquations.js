/**
 * 04/19/22 afternoon
 * https://leetcode.com/problems/surrounded-regions/
 */

const pr = console.log;

///////////////////////////////////////////////////////////////////////////////////////////////
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
        if (x != y) {
            if (parent[x] < parent[y])[x, y] = [y, x];
            parent[x] += parent[y];
            parent[y] = x;
        }
        return x == y;
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

// Accepted --- 147ms 15.00%
const equationsPossible = (a) => {
    let ds = new DJSet(26);
    for (const s of a) {
        if (s[1] == '=') {
            let x = ord(s[0]) - 97, y = ord(s[3]) - 97;
            ds.union(x, y);
        }
    }
    // pr(ds.par())
    for (const s of a) {
        if (s[1] == '!') {
            let x = ord(s[0]) - 97, y = ord(s[3]) - 97;
            if (ds.equiv(x, y)) return false;
        }
    }
    return true;
};

const main = () => {
    let equations = ["a==b","b!=a"];
    let equations2 = ["b==a","a==b"];
    pr(equationsPossible(equations))
    pr(equationsPossible(equations2))
};

main()