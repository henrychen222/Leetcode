/**
 * reference:
 * https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/ code
 * https://cp-algorithms.com/data_structures/segment_tree.html
 * 
 * example:
 * https://leetcode.com/problems/range-sum-query-mutable/
 */

function SegmentTreeRSQ(a) {
    let n = a.length, h = Math.ceil(Math.log2(n)), MAX = 2 * 2 ** h - 1, tree = Array(MAX).fill(0);
    build(a, 0, 0, n - 1);
    return { update, sum }
    function build(a, vi, tl, tr) {
        if (tl == tr) {
            tree[vi] = a[tl];
            return a[tl];
        }
        let mid = getMid(tl, tr);
        tree[vi] = build(a, vi * 2 + 1, tl, mid) + build(a, vi * 2 + 2, mid + 1, tr);
        return tree[vi];
    }
    function update(a, n, pos, newVal) {
        if (pos < 0 || pos > n - 1) return;
        let diff = newVal - a[pos];
        a[pos] = newVal;
        updateUtil(0, 0, n - 1, pos, diff);
    }
    function updateUtil(vi, tl, tr, pos, diff) {
        if (pos < tl || pos > tr) return;
        tree[vi] = tree[vi] + diff;
        if (tl != tr) {
            let mid = getMid(tl, tr);
            updateUtil(2 * vi + 1, tl, mid, pos, diff);
            updateUtil(2 * vi + 2, mid + 1, tr, pos, diff);
        }
    }
    function sum(n, tl, tr) { // [tl, tr]: tree query range
        if (tl < 0 || tr > n - 1 || tl > tr) return -1;
        return sumUtil(0, 0, n - 1, tl, tr);
    }
    function sumUtil(vi, l, r, tl, tr) { // [tl, tr]: tree query range  [l, r]: current selected range
        if (l >= tl && r <= tr) return tree[vi]; // inside range
        if (r < tl || l > tr) return 0; // out of range
        let mid = getMid(l, r);
        return sumUtil(2 * vi + 1, l, mid, tl, tr) + sumUtil(2 * vi + 2, mid + 1, r, tl, tr);
    }
    function getMid(low, high) {
        return low + (high - low >> 1);
    }
}