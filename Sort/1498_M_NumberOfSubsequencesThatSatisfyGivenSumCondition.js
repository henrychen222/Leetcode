/**
 * 7/7/20 morning  7/8/20 morning  03/27/22 night fixed
 * https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
 * 
 * compare with 78
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

// Accepted --- 2575ms 5.36%
const ll = BigInt, mod = ll(1e9 + 7);
const numSubseq = (a, target) => {
    a.sort((x, y) => x - y);
    // pr(a);
    let n = a.length, bi = new Bisect(), res = 0n;
    for (let i = 0; i < n; i++) {
        let max = target - a[i];
        let j = bi.bisect_right(a, max) - 1;
        let len = j - i + 1;
        if (len <= 0) continue;
        // pr("max", max, "i", i, "a[i]", a[i], "j", j, "a[j]", a[j], "len", len)
        res += (1n << ll(len)) / 2n;
        res %= mod;
    }
    return res;
};

/////////////////////////////////////////////////
// time limit
const numSubseq1 = (nums, target) => {
    let cnt = 0;
    let n = nums.length;
    let N = 2 ** n;
    for (let i = 0; i < N; i++) {
        let data = [];
        let min = Number.MAX_VALUE;
        let max = Number.MIN_VALUE;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                data.push(nums[j]);
                min = Math.min(min, nums[j]);
                max = Math.max(max, nums[j]);
            }
        }
        // console.log(data, min, max);
        if ((min + max) <= target) cnt++;
    }
    return cnt % 1000000007;
};

const pr = console.log;
const main = () => {
    let nums = [3, 5, 6, 7],
        target = 9;
    let nums2 = [3, 3, 6, 8],
        target2 = 10;
    let nums3 = [2, 3, 3, 4, 6, 7],
        target3 = 12;
    let nums4 = [5, 2, 4, 1, 7, 6, 8],
        target4 = 16;
    let nums_debug1 = [7, 10, 7, 3, 7, 5, 4],
        target_debug1 = 12;
    let nums_debug2 = [14, 4, 6, 6, 20, 8, 5, 6, 8, 12, 6, 10, 14, 9, 17, 16, 9, 7, 14, 11, 14, 15, 13, 11, 10, 18, 13, 17, 17, 14, 17, 7, 9, 5, 10, 13, 8, 5, 18, 20, 7, 5, 5, 15, 19, 14],
        target_debug2 = 22;
    let nums_debug3 = [12,5,4,7,20,13,7,19,14,16,5,6,6,17,14,19,8,11,9,5,12,10,14,18,13,6,7,18,17,20,8,7,20,8,10,13,16,19,7,5,10,15,8,20,19,18,4],
        target_debug3 = 21;
    let nums_debug4 = [9,25,9,28,24,12,17,8,28,7,21,25,10,2,16,19,12,13,15,28,14,12,24,9,6,7,2,15,19,13,30,30,23,19,11,3,17,2,14,20,22,30,12,1,11,2,2,20,20,27,15,9,10,4,12,30,13,5,2,11,29,5,3,13,22,5,16,19,7,19,11,16,11,25,29,21,29,3,2,9,20,15,9],
        target_debug4 = 32
    pr(numSubseq(nums, target)); // 4
    pr(numSubseq(nums2, target2)); // 6
    pr(numSubseq(nums3, target3)); // 61
    pr(numSubseq(nums4, target4)); // 127
    pr(numSubseq(nums_debug1, target_debug1)); // 56
    pr(numSubseq(nums_debug2, target_debug2));
    pr(numSubseq(nums_debug3, target_debug3)); // 628937933
    pr(numSubseq(nums_debug4, target_debug4)); // 91931447
};

main()


// const numSubseq = (nums, target) => {
//     let cnt = 0;
//     let str = nums.join("");  // problem 10 will be 1 0 not 10
//     let n = str.length;
//     let N = 2 ** n;
//     console.log(str);
//     for (let i = 0; i < N; i++) {
//         let data = "";
//         let min = Number.MAX_VALUE;
//         let max = Number.MIN_VALUE;
//         for (let j = 0; j < n; j++) {
//             if (i & (1 << j)) {
//                 data += str[j];
//                 min = Math.min(min, Number(str[j]));
//                 max = Math.max(max, Number(str[j]));
//             }
//         }
//         // console.log(Number(data), min, max);
//         if ((min + max) <= target) cnt++;
//     }
//     return cnt % 1000000007;
// };