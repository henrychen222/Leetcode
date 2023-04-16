/*
01/17/23 night reorganize

fenwick reference:
https://en.wikipedia.org/wiki/Fenwick_tree
https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/


translate:
fen.update(idx, 1) -> st.update(idx, ++f[idx])
fen.update(x, 1) -> st.update(x, ++f[x])

Example Problems:
*************************** i -> a[i] update index/pos **************************************
https://leetcode.com/problems/range-sum-query-mutable/

(count problem)
https://leetcode.com/problems/count-good-triplets-in-an-array/
https://leetcode.com/problems/count-of-range-sum/

*************************** a[i] -> i  update value **************************************
https://leetcode.com/problems/create-sorted-array-through-instructions/ (count freq of f[i] in RSQ, fenwick +1)
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

/////////////////////////// 01/17/23 noon in company (use) ////////////////////////////////
function SegmentTreeRSQ(n) {
    let h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(0);
    return { update, query, rangeSum, tree }
    function update(pos, v) {
        a[n + pos] = v;
        for (let i = parent(n + pos); i >= 1; i = parent(i)) pushup(i);
    }
    function pushup(i) {
        a[i] = a[left(i)] +  a[right(i)];
    }
    function query(l, r) { // [L, R)
        let sum = 0;
        if (l >= r) return 0;
        l += n;
        r += n;
        for (; l < r; l = parent(l), r = parent(r)) {
            if (l & 1) sum += a[l++];
            if (r & 1) sum += a[--r];
        }
        return sum;
    }
    function rangeSum(l, r) {
        return query(0, r + 1) - query(0, l);
    }
    function parent(i) {
        return i >> 1;
    }
    function left(i) {
        return 2 * i;
    }
    function right(i) {
        return 2 * i + 1;
    }
    function tree() {
        return a;
    }
}


//////////////////////////////// old /////////////////////////////////////////////
/**
 * reference:
 * https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/ code
 * https://cp-algorithms.com/data_structures/segment_tree.html
 */
// function SegmentTreeRSQ(A) { // array constructor
//     let n = A.length, h = Math.ceil(Math.log2(n)), MAX = 2 * 2 ** h - 1, a = Array(MAX).fill(0);
//     build(A, 0, 0, n - 1);
//     return { update, rangeSum }
//     function build(A, i, leftmost, rightmost) {
//         if (leftmost == rightmost) {
//             a[i] = A[leftmost];
//             return A[leftmost];
//         }
//         let mid = getMid(leftmost, rightmost);
//         a[i] = build(A, left(i), leftmost, mid) + build(A, right(i), mid + 1, rightmost);
//         return a[i];
//     }
//     function update(pos, v) {
//         if (pos < 0 || pos > n - 1) return;
//         let diff = v - A[pos];
//         A[pos] = v;
//         updateUtil(0, 0, n - 1, pos, diff);
//     }
//     function updateUtil(i, leftmost, rightmost, pos, diff) {
//         if (pos < leftmost || pos > rightmost) return;
//         a[i] += diff;
//         if (leftmost != rightmost) {
//             let mid = getMid(leftmost, rightmost);
//             updateUtil(2 * i + 1, leftmost, mid, pos, diff);
//             updateUtil(2 * i + 2, mid + 1, rightmost, pos, diff);
//         }
//     }
//     function rangeSum(l, r) {
//         if (l < 0 || r > n - 1 || l > r) return -1;
//         return sumUtil(0, 0, n - 1, l, r);
//     }
//     function sumUtil(i, leftmost, rightmost, l, r) {
//         if (l <= leftmost && r >= rightmost) return a[i]; // [leftmost, rightmost] is part of give range [l, r]
//         if (l > rightmost || r < leftmost) return 0; // out of range
//         let mid = getMid(leftmost, rightmost);
//         return sumUtil(left(i), leftmost, mid, l, r) + sumUtil(right(i), mid + 1, rightmost, l, r);
//     }
//     function getMid(low, high) {
//         return low + (high - low >> 1);
//     }
//     function left(i) {
//         return 2 * i + 1;
//     }
//     function right(i) {
//         return 2 * i + 2;
//     }
// }