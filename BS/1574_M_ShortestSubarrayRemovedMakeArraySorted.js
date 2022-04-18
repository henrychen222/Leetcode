/**
 * 04/13/22 night
 * https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/
 */

const pr = console.log;

function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] > x ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) { // >= lower_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

// Accepted --- 155ms 23.53%
const findLengthOfShortestSubarray = (a) => {
    let n = a.length, i, j;
    for (i = 0; i + 1 < n; i++) {
        if (a[i + 1] < a[i]) break;
    }
    for (j = n - 1; j - 1 >= 0; j--) {
        if (a[j] < a[j - 1]) break;
    }
    let l = a.slice(0, i + 1), r = a.slice(j), bi = new Bisect();
    // pr(i, j, l, r);
    let max = 0;
    for (let i = 0; i < l.length; i++) {
        let idxR = bi.bisect_left(r, l[i]); // >= x
        let L = i + 1, R = r.length - idxR, keep = L + R;
        max = Math.max(max, keep);
        // pr(l.slice(0, i + 1), L, r.slice(idxR), R, "keep", keep);
    }
    for (let i = 0; i < r.length; i++) {
        let idxL = bi.bisect_right(l, r[i]) - 1; // <= x
        let L = idxL + 1, R = r.length - i, keep = L + R;
        max = Math.max(max, keep);
        // pr(l.slice(0, idxL + 1), L, r.slice(i), R, "keep", keep);
    }
    return Math.max(0, n - max);
};

const main = () => {
    let a = [1, 2, 3, 10, 4, 2, 3, 5];
    let a2 = [5, 4, 3, 2, 1];
    let a3 = [1, 2, 3];
    let debug1 = [2, 2, 2, 1, 1, 1];
    let debug2 = [1, 2, 3, 10, 0, 7, 8, 9];
    pr(findLengthOfShortestSubarray(a))
    pr(findLengthOfShortestSubarray(a2))
    pr(findLengthOfShortestSubarray(a3))
    pr(findLengthOfShortestSubarray(debug1)) // 3
    pr(findLengthOfShortestSubarray(debug2)) // 2
};

main()