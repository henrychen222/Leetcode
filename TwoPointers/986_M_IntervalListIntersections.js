/**
 * 09/09/20 morning  03/30/22 evening fixed
 * https://leetcode.com/problems/interval-list-intersections/
 */

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

// Accepted --- 261ms 5.07%
const intervalIntersection = (A, B) => {
    let res = [], L = [], R = [], n = B.length, bi = new Bisect();
    for (let i = 0; i < n; i++) {
        L[i] = B[i][0];
        R[i] = B[i][1];
    }
    for (const [la, ra] of A) {
        // A in B  rb >= ra (lower_bound), lb <= la (upper_bound - 1)
        let start = bi.bisect_left(L, ra), end = Math.max(0, bi.bisect_right(R, la) - 1);
        let min = Math.min(start, end), max = Math.max(start, end);
        let d = B.slice(min, max + 1);
        for (const [lb, rb] of d) {
            if (lb > ra || rb < la) continue;
            let left = Math.max(la, lb);
            let right = Math.min(ra, rb);
            res.push([left, right]);
        }
        // pr([la, ra], min, max, d);
    }
    return res;
};

const pr = console.log;
const main = () => {
    let A = [
            [0, 2],
            [5, 10],
            [13, 23],
            [24, 25]
        ],
        B = [
            [1, 5],
            [8, 12],
            [15, 24],
            [25, 26]
        ];
    let A2 = [
            [1, 3],
            [5, 9]
        ],
        B2 = [];
    let A_debug1 = [[8,15]], B_debug1 = [[2,6],[8,10],[12,20]]
    pr(intervalIntersection(A, B));
    pr(intervalIntersection(A2, B2));
    pr(intervalIntersection(A_debug1, B_debug1)); // [[8,10],[12,15]]
};

main()

// const intervalIntersection = (A, B) => {
//     let a = A.length;
//     let b = B.length;
//     let n;
//     if (a <= b) {
//         n = a;
//     } else {
//         n = b;
//     } 
//     for (let i = 0; i < n; i++) {
//         let la = A[i][0];
//         let ra = A[i][1];
//         let lb = B[i][0];
//         let rb = B[i][1];
//     }
// };