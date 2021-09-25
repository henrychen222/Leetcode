/**
 * 09/21/21 night
 * example: https://leetcode.com/problems/the-skyline-problem/
 */
// multiset can be mocked using treemap
function MultiSet() {
    let tm = new TreeMap();
    return { insert, eraseOne, erase, contains, first, last, show }
    function insert(x) {
        tm.set(x, tm.get(x) + 1 || 1);
    }
    function eraseOne(x) {
        let occ = tm.get(x);
        occ > 1 ? tm.set(x, occ - 1) : tm.remove(x);
    }
    function erase(x) {
        tm.remove(x);
    }
    function contains(x) {
        return tm.get(x) ? 1 : 0;
    }
    function first() {
        return tm.minKey();
    }
    function last() {
        return tm.maxKey();
    }
    function show() {
        let res = [];
        tm.forEach((v, k) => {
            res.push(k + " => " + v);
        })
        console.log(res);
    };
}

////////////////////////////////////////////////////////////////////////////////////
function MultiSet2() {
    let tm = {}; // works for key >= 0
    return { insert, eraseOne, erase, contains, first, last, show }
    function insert(x) {
        tm[x] ? tm[x]++ : tm[x] = 1;
    }
    function eraseOne(x) {
        let occ = tm[x];
        occ > 1 ? tm[x]-- : delete tm[x];
    }
    function erase(x) {
        delete tm[x];
    }
    function contains(x) {
        return tm[x] ? 1 : 0;
    }
    function first() {
        let a = Object.keys(tm);
        return a[0] - '0';
    }
    function last() {
        let a = Object.keys(tm);
        return a[a.length - 1] - '0';
    }
    function show() {
        console.log(tm);
    };
}