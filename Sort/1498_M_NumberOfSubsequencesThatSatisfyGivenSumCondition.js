/**
 * 7.7 morning  7.8 morning
 * https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
 * 
 * compare with 78
 */

// time limit
const numSubseq = (nums, target) => {
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
    console.log(numSubseq(nums, target)); // 4
    console.log(numSubseq(nums2, target2)); // 6
    console.log(numSubseq(nums3, target3)); // 61
    console.log(numSubseq(nums4, target4)); // 127
    console.log(numSubseq(nums_debug1, target_debug1)); // 56
    console.log(numSubseq(nums_debug2, target_debug2));
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