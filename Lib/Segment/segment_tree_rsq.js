/**
 * reference:
 * https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/ code
 * https://cp-algorithms.com/data_structures/segment_tree.html
 * 
 * example:
 * https://leetcode.com/problems/range-sum-query-mutable/
 */

function SegmentTreeRSQ(A) { // array constructor
    let n = A.length, h = Math.ceil(Math.log2(n)), MAX = 2 * 2 ** h - 1, a = Array(MAX).fill(0);
    build(A, 0, 0, n - 1);
    return { update, rangeSum }
    function build(A, i, leftmost, rightmost) {
        if (leftmost == rightmost) {
            a[i] = A[leftmost];
            return A[leftmost];
        }
        let mid = getMid(leftmost, rightmost);
        a[i] = build(A, left(i), leftmost, mid) + build(A, right(i), mid + 1, rightmost);
        return a[i];
    }
    function update(pos, v) {
        if (pos < 0 || pos > n - 1) return;
        let diff = v - A[pos];
        A[pos] = v;
        updateUtil(0, 0, n - 1, pos, diff);
    }
    function updateUtil(i, leftmost, rightmost, pos, diff) {
        if (pos < leftmost || pos > rightmost) return;
        a[i] += diff;
        if (leftmost != rightmost) {
            let mid = getMid(leftmost, rightmost);
            updateUtil(2 * i + 1, leftmost, mid, pos, diff);
            updateUtil(2 * i + 2, mid + 1, rightmost, pos, diff);
        }
    }
    function rangeSum(l, r) {
        if (l < 0 || r > n - 1 || l > r) return -1;
        return sumUtil(0, 0, n - 1, l, r);
    }
    function sumUtil(i, leftmost, rightmost, l, r) {
        if (l <= leftmost && r >= rightmost) return a[i]; // [leftmost, rightmost] is part of give range [l, r]
        if (l > rightmost || r < leftmost) return 0; // out of range
        let mid = getMid(leftmost, rightmost);
        return sumUtil(left(i), leftmost, mid, l, r) + sumUtil(right(i), mid + 1, rightmost, l, r);
    }
    function getMid(low, high) {
        return low + (high - low >> 1);
    }
    function left(i) {
        return 2 * i + 1;
    }
    function right(i) {
        return 2 * i + 2;
    }
}