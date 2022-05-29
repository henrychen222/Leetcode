/**
 * 05/17/22 morning
 * https://leetcode.com/problems/range-sum-query-mutable/
 */

function Fenwick(n) {
    let a = Array(n).fill(0);
    return { query, update, rangeSum, tree }
    function query(i) {
        let sum = 0;
        for (i++; i > 0; i = parent(i)) sum += a[i];
        return sum;
    }
    function update(i, v) {
        for (i++; i < n; i = next(i)) a[i] += v;
    }
    function rangeSum(l, r) {
        return query(r) - query(l - 1);
    }
    function parent(x) {
        return x - lowestOneBit(x);
    }
    function next(x) {
        return x + lowestOneBit(x);
    }
    function lowestOneBit(x) {
        return x & -x;
    }
    function tree() {
        return a;
    }
}

// Accepted --- 644ms 81.45%
// reference: https://leetcode.com/problems/range-sum-query-mutable/discuss/1406686/C%2B%2BJavaPython-Binary-Indexed-Tree
function NumArray(a) {
    let n = a.length, fen = new Fenwick(n + 3);
    for (let i = 0; i < n; i++) fen.update(i, a[i]);
    return { update, sumRange }
    function update(i, v) {
       let diff = v - a[i];
       fen.update(i, diff);
       a[i] = v;
    }
    function sumRange(l, r) {
       return fen.rangeSum(l, r);
    }
}

const pr = console.log;
const main = () => {
    let numArray = new NumArray([1, 3, 5]);
    pr(numArray.sumRange(0, 2)); // 9
    numArray.update(1, 2);
    pr(numArray.sumRange(0, 2)); // 8

    pr()
    let debug1 = new NumArray([9, -8]);
    debug1.update(0, 3);
    pr(debug1.sumRange(1, 1)); // -8
    pr(debug1.sumRange(0, 1)); // -5
    debug1.update(1, -3);
    pr(debug1.sumRange(0, 1)); // 0
};

main()