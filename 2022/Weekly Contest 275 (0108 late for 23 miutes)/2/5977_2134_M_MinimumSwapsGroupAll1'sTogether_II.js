/**
 * 01/08/21 evening
 * https://leetcode.com/contest/weekly-contest-275/problems/minimum-swaps-to-group-all-1s-together-ii/
 */

const pr = console.log;

// Accepted
const minSwaps = (a) => {
    let res1 = groupTogether(a, 1);
    let res0 = groupTogether(a, 0);
    // pr(res1, res0);
    return Math.min(res1, res0);
};

const groupTogether = (a, c) => {
    let n = a.length, cntC = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] == c) cntC++;
    }
    let x = cntC, max = Number.MIN_VALUE, preCompute = Array(n).fill(0);
    if (a[0] == c) preCompute[0] = 1;
    for (let i = 1; i < n; i++) {
        if (a[i] == c) {
            preCompute[i] = preCompute[i - 1] + 1;
        } else {
            preCompute[i] = preCompute[i - 1];
        }
    }
    for (let i = x - 1; i < n; i++) {
        if (i == x - 1) {
            cntC = preCompute[i];
        } else {
            cntC = preCompute[i] - preCompute[i - x];
        }
        if (max < cntC) max = cntC;
    }
    return Math.max(x - max, 0);
};

// const groupTogether = (a, c) => {
//     let n = a.length, notC = 0, res = 0;
//     for (let i = 0; i < n; i++) {
//         if (a[i] != c) notC++;
//     }
//     for (let i = 0; i < notC; i++) {
//         if (a[i] == c) {
//             res++;
//         }
//     }
//     return res;
// };

const main = () => {
    let nums = [0, 1, 0, 1, 1, 0, 0];
    let nums2 = [0, 1, 1, 1, 0, 0, 1, 1, 0];
    let nums3 = [1, 1, 0, 0, 1];
    let debug1 = [1];
    pr(minSwaps(nums))
    pr(minSwaps(nums2))
    pr(minSwaps(nums3))
    pr(minSwaps(debug1)) // 0
};

main()


