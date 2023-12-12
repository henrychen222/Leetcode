/*
 * 12/09/23 evening
 * https://leetcode.com/contest/weekly-contest-375/problems/count-subarrays-where-max-element-appears-at-least-k-times/
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

// Accepted
const countSubarrays = (a, k) => {
    let max = Math.max(...a), ia = [], bi = new Bisect(), res = 0;
    a.map((x, i) => {
        if (x == max) ia.push(i);
    })
    a.map((x, i) => {
        let idx = bi.bisect_left(ia, i), atLeast = idx + k - 1, startIdx = ia[atLeast];
        if (startIdx != undefined) {
            cnt = a.length - startIdx;
            // pr(i, idx, "atLeast", atLeast, "startIdx", startIdx, "cnt", cnt)
            res += cnt;
        }
    })
    return res;
};

// const countSubarrays = (a, k) => {
//     let n = a.length, max = Math.max(...a), f = Array(max + 1).fill(0), res = 0, l = 0;
//     a.map((x, i) => {
//         while (f[max] >= k && l < i) {
//             if (f[max] >= k) {
//                 let len = i - l + 1;
//                 pr(a.slice(l, i + 1), len)
//                 // res++;
//                 res += len;
//             }
//             f[l]--;
//             l++;
//         }
//         // if (f[max] >= k) res++;
//         if (f[max] >= k) res += i - l + 1;
//         f[x]++;
//     })
//     return res;
// };

const main = () => {
    let a = [1, 3, 2, 3, 3], k = 2
    let a2 = [1, 4, 2, 1], k2 = 3
    let a_debug1 = [61, 23, 38, 23, 56, 40, 82, 56, 82, 82, 82, 70, 8, 69, 8, 7, 19, 14, 58, 42, 82, 10, 82, 78, 15, 82], k_debug1 = 2
    pr(countSubarrays(a, k))
    pr(countSubarrays(a2, k2))
    pr(countSubarrays(a_debug1, k_debug1)) // 224

};

main()


/*
[1, 3, 4]


*/