/**
 * 05/07/21 afternoon
 * https://leetcode.com/problems/range-sum-query-mutable/
 */

// Accepted --- 710ms clean up
function SegmentaRSQ1(A) { // array constructor
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

// issue
function SegmentaRSQ(A) {
    let n = A.length, h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(0);
    h = 2 ** h;
    initializeFromArray();
    function initializeFromArray() {
        for (let i = 0; i < n; i++) a[h + i] = A[i];
        // for (let i = h - 1; i >= 1; i--) pushup(i);
    }
    return { update, rangeSum }
    function update(pos, v) {
        a[h + pos] = v;
        for (let i = parent(h + pos); i >= 1; i = parent(i)) pushup(i);
        pr("update", a);
    }
    function pushup(i) {
        a[i] = a[left(i)] + a[right(i)];
    }
    function rangeSum(l, r) {
        let sum = 0;
        l += h;
        r += h;
        pr("query", a, l, r);
        for (; l < r; l = parent(l), r = parent(r)) {
            pr("query", l, r, a[l], a[r]);
            if (l & 1) sum += a[l++];
            if (r & 1) sum += a[--r];
        }
        return sum;
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

function NumArray(a) {
    let st = new SegmentaRSQ(a);
    return { update, sumRange };
    function update(idx, v) {
        st.update(idx, v);
    }
    function sumRange(left, right) {
        return st.rangeSum(left, right);
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