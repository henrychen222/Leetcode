/**
 * 05/07/21 afternoon
 * https://leetcode.com/problems/range-sum-query-mutable/
 */

//////////////////////////////////////////////////////////////////////////////////////////////
// Accepted --- 600ms 57.29%
// Accepted --- 592ms 57.29%
function SegmentTreeRSQ(a) {
    let n = a.length;
    let h = Math.ceil(Math.log2(n));
    const MAX = 2 * 2 ** h - 1;
    // pr(h, MAX);
    let tree = Array(MAX).fill(0);
    build(a, 0, 0, n - 1);
    return {
        update,
        sum
    }

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
        // pr(tree);
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

function NumArray(a) {
    let st = new SegmentTreeRSQ(a);
    let n = a.length;
    return {
        update,
        sumRange
    };

    function update(index, val) {
        st.update(a, n, index, val);
    }

    function sumRange(left, right) {
        return st.sum(n, left, right);
    }
}

// Accepted --- 544ms 77.08%
function NumArray1(a) {
    let sum = a.reduce((x, y) => x + y);
    let n = a.length;
    return {
        update,
        sumRange
    };

    function update(index, val) {
        sum = sum + val - a[index];
        a[index] = val;
    }

    function sumRange(left, right) {
        let middleLen = right - left + 1;
        let rest = n - middleLen;
        let rsum = 0;
        if (middleLen <= rest) {
            for (let i = left; i <= right; i++) rsum += a[i];
            return rsum;
        } else {
            for (let i = 0; i < left; i++) rsum += a[i];
            for (let i = right + 1; i < n; i++) rsum += a[i];
            return sum - rsum;
        }
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



// https: //cp-algorithms.com/data_structures/segment_tree.html
// function SegmentTreeRSQ(a) {
//     let n = a.length;
//     // let h = (Math.log2(n) >> 0) + 1;
//     // const MAX = 2 * 2 ** h - 1;
//     let MAX = highestOneBit(Math.max(n - 1, 1)) << 2;
//     let h = MAX >>> 1;
//     let tree = Array(MAX).fill(0);
//     build(a, 1, 0, n - 1);
//     return {
//         update,
//         sum,
//         vize,
//         height,
//     }

//     function highestOneBit(i) {
//         i |= (i >> 1);
//         i |= (i >> 2);
//         i |= (i >> 4);
//         i |= (i >> 8);
//         i |= (i >> 16);
//         return i - (i >>> 1);
//     }

//     function build(a, v, l, r) {
//         if (l == r) {
//             tree[v] = a[l];
//         } else {
//             let m = l + r >> 1;
//             build(a, v * 2, l, m);
//             build(a, v * 2 + 1, m + 1, r);
//             tree[v] = tree[v * 2] + tree[v * 2 + 1];
//         }
//         pr("build finish", tree)
//     }

// function update(vi, l, r, pos, newVal) {
//     if (l == r) {
//         tree[vi] = newVal;
//     } else {
//         let m = l + r >> 1;
//         pos <= m ? update(vi * 2, l, m, pos, newVal) : update(v * 2 + 1, m + 1, r, pos, newVal);
//         tree[vi] = tree[vi * 2] + tree[vi * 2 + 1];
//     }
//     pr("update finish", tree)
// }

//     function sum(v, tl, tr, l, r) {
//         if (l > r) return 0;
//         if (l == tl && r == tr) return tree[v];
//         let tm = tl + tr >> 1;
//         return sum(v * 2, tl, tm, l, Math.min(r, tm)) + sum(v * 2 + 1, tm + 1, tr, Math.max(l, tm + 1), r);
//     }

//     function vize() {
//         return MAX;
//     }

//     function height() {
//         return h;
//     }
// }

// https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/tutorial/
// function SegmentTreeRSQ(a) {
//     let n = a.length;
//     let MAX = highestOneBit(Math.max(n - 1, 1)) << 2;
//     let h = MAX >>> 1;
//     // let h = (Math.log2(n) >> 0) + 1;
//     // const MAX = 2 * (2 ** h) - 1;
//     // const MAX = 2 * (2 ** (Math.log2(n) >> 0)) + 1;
//     // const MAX = 4 * n
//     pr(MAX)
//     let tree = Array(MAX).fill(0);
//     build(1, 0, n - 1);
//     pr(tree)
//     return {
//         update,
//         sum,
//         vize,
//         // height
//     }

//     function highestOneBit(i) {
//         i |= (i >> 1);
//         i |= (i >> 2);
//         i |= (i >> 4);
//         i |= (i >> 8);
//         i |= (i >> 16);
//         return i - (i >>> 1);
//     }

//     function build(vi, start, end) {
//         if (start == end) {
//             tree[vi] = a[start];
//         } else {
//             let mid = start + end >> 1;
//             build(2 * vi, start, mid);
//             build(2 * vi + 1, mid + 1, end);
//             tree[vi] = tree[2 * vi] + tree[2 * vi + 1];
//         }
//     }

//     function update(vi, start, end, pos, val) {
//         if (start == end) {
//             a[pos] += val;
//             tree[vi] += val;
//         } else {
//             let mid = start + end >> 1;
//             if (start <= pos && pos <= mid) {
//                 update(2 * vi, start, mid, pos, val);
//             } else {
//                 update(2 * vi + 1, mid + 1, end, pos, val);
//             }
//             tree[vi] = tree[2 * vi] + tree[2 * vi + 1];
//         }
//         pr("update", tree)
//     }

//     function sum(vi, start, end, l, r) {
//         pr(vi, start, end, l, r)
//         if (r < start || end < l) return 0;
//         if (l <= start && end <= r) return tree[vi];
//         let mid = start + end >> 1;
//         let s1 = sum(2 * vi, start, mid, l, r);
//         let s2 = sum(2 * vi + 1, mid + 1, end, l, r);
//         pr("sum1", s1, "sum2", s2);
//         return s1 + s2;
//     }

//     function vize() {
//         return MAX;
//     }
// }