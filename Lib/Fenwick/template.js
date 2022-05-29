/*
reference:
https://en.wikipedia.org/wiki/Fenwick_tree
https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/

Example Problems:
https://leetcode.com/problems/range-sum-query-mutable/
https://leetcode.com/problems/count-good-triplets-in-an-array/
https://leetcode.com/problems/count-of-range-sum/
https://leetcode.com/problems/create-sorted-array-through-instructions/
https://leetcode.com/problems/reverse-pairs/
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