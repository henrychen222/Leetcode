/**
 * 12/01/21 evening created
 * 
 * example: https://leetcode.com/problems/bitwise-ors-of-subarrays/
 */

// reference: https://www.geeksforgeeks.org/number-of-subarrays-have-bitwise-or-k/
function SegmentTreeRBQ(a) { // range bitwise query
    let n = a.length, h = Math.ceil(Math.log2(n));
    const MAX = 2 * 2 ** h - 1;
    let tree = Array(MAX).fill(0);
    build(a, 1, 0, n - 1);
    return { query }
    function build(a, i, tl, tr) {
        if (tl == tr) {
            tree[i] = a[tl];
            return;
        }
        let mid = tl + tr >> 1;
        build(a, 2 * i, tl, mid);
        build(a, 2 * i + 1, mid + 1, tr);
        tree[i] = tree[2 * i] | tree[2 * i + 1];
    }
    function query(i, tl, tr, l, r) {
        if (l > tr || r < tl) return 0; // out of range
        if (l <= tl && r >= tr) return tree[i]; // inside
        let mid = tl + tr >> 1;
        let q1 = query(2 * i, tl, mid, l, r);
        let q2 = query(2 * i + 1, mid + 1, tr, l, r);
        return q1 | q2;
    }
}