/*
 * 02/25/23 evening
 * https://leetcode.com/contest/weekly-contest-334/problems/find-the-maximum-number-of-marked-indices/
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

// a[i] * 2 <= a[j]
const maxNumOfMarkedIndices1 = (a) => {
    a.sort((x, y) => x - y);
    // pr(a)
    let res = [], bi = new Bisect(), used = new Set();
    for (let i = 0; i < a.length; i++) {
        if (used.has(i)) continue;
        let v = 2 * a[i], j = bi.bisect_left(a, v);
        if (j == a.length - 1) {
            res.push(a[i]);
            res.push(a[j]);
            used.add(i);
            used.add(j);
        }
    }
    a = a.filter(x => !used.has(x))
    // pr("res1", res, 'a', a)
    used.clear();
    for (let i = 0; i < a.length; i++) {
        if (used.has(i)) continue;
        let v = 2 * a[i], j = bi.bisect_left(a, v);
        // pr(a[i], a[j]);
        if (j != a.length) {
            res.push(a[i]);
            res.push(a[j]);
            used.add(i);
            used.add(j)
        }
    }
    // pr("res2", res)
    return res.length;
};

//////////////////////////////////////////////////////////
// Accepted   02/26/23 night complete
// reference: qeetcode
const maxNumOfMarkedIndices = (a) => {
    a.sort((x, y) => x - y);
    let n = a.length, j = n - 1, res = 0;
    for (let i = (n >> 1) - 1; i >= 0; i--) {
        if (a[i] * 2 <= a[j]) {
            res += 2;
            j--;
        }
    }
    return res;
};

const main = () => {
    let a = [3, 5, 2, 4];
    let a2 = [9, 2, 5, 4];
    let a3 = [7, 6, 8];
    let a_debug1 = [1, 78, 27, 48, 14, 86, 79, 68, 77, 20, 57, 21, 18, 67, 5, 51, 70, 85, 47, 56, 22, 79, 41, 8, 39, 81, 59, 74, 14, 45, 49, 15, 10, 28, 16, 77, 22, 65, 8, 36, 79, 94, 44, 80, 72, 8, 96, 78, 39, 92, 69, 55, 9, 44, 26, 76, 40, 77, 16, 69, 40, 64, 12, 48, 66, 7, 59, 10];
    pr(maxNumOfMarkedIndices(a))
    pr(maxNumOfMarkedIndices(a2))
    pr(maxNumOfMarkedIndices(a3))
    pr(maxNumOfMarkedIndices(a_debug1)) // 64
};

main()