/**
 * 6.5 evening (first time did in 08/2018) completed 08/14/20 night
 * https://leetcode.com/problems/longest-continuous-increasing-subsequence/
 */

// Accepted --- 72ms 40.1MB 80.14%
const findLengthOfLCIS_refine = (nums) => {
    if (nums.length == 0) return 0;
    let max = Number.MIN_VALUE;
    let stack = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        let end = stack[stack.length - 1];
        if (nums[i] > end) {
            stack.push(nums[i]);
        } else {
            max = Math.max(max, stack.length);
            stack = [];
            stack.push(nums[i]);
            continue;
        }
    }
    max = Math.max(max, stack.length);
    return max;
};

// Accepted --- 84ms 40.8MB 37.08%
const findLengthOfLCIS2 = (nums) => {
    if (nums.length == 0) return 0;
    let stack = [nums[0]];
    let res = [];
    for (let i = 1; i < nums.length; i++) {
        let end = stack[stack.length - 1];
        if (nums[i] > end) {
            stack.push(nums[i]);
        } else {
            res.push(stack);
            stack = [];
            stack.push(nums[i]);
        }
    }
    res.push(stack);
    res.sort((a, b) => b.length - a.length);
    return res[0].length;
};

// Accepted --- 76ms 41.2MB 61.00%
const findLengthOfLCIS = (nums) => {
    if (nums.length == 0) return 0;
    let stack = [nums[0]];
    let res = [];
    for (let i = 1; i < nums.length; i++) {
        let end = stack[stack.length - 1];
        if (nums[i] > end) {
            stack.push(nums[i]);
        } else {
            res.push(stack);
            stack = [];
            stack.push(nums[i]);
            continue;
        }
    }
    res.push(stack);
    // console.log(res);
    res.sort((a, b) => b.length - a.length);
    return res[0].length;
};


const main = () => {
    let nums = [1, 3, 5, 4, 7];
    let nums2 = [2, 2, 2, 2, 2];
    let debug1 = [1, 3, 5, 7];
    let debug2 = [1, 3, 5, 4, 2, 3, 4, 5];
    let debug3 = [];
    console.log(findLengthOfLCIS(nums)); // 3
    console.log(findLengthOfLCIS(nums2)); // 1
    console.log(findLengthOfLCIS(debug1)); // 4
    console.log(findLengthOfLCIS(debug2)); // 4
    console.log(findLengthOfLCIS(debug3)); // 0

    console.log("");
    console.log(findLengthOfLCIS2(nums));
    console.log(findLengthOfLCIS2(nums2));
    console.log(findLengthOfLCIS2(debug1));
    console.log(findLengthOfLCIS2(debug2));
    console.log(findLengthOfLCIS2(debug3));

    console.log("");
    console.log(findLengthOfLCIS_refine(nums));
    console.log(findLengthOfLCIS_refine(nums2));
    console.log(findLengthOfLCIS_refine(debug1));
    console.log(findLengthOfLCIS_refine(debug2));
    console.log(findLengthOfLCIS_refine(debug3));
};

main()


///////////////////////////////////// 8.14 night //////////////////////////////////////
// const findLengthOfLCIS = (nums) => {
//     let n = nums.length;
//     let idx = [];
//     for (let i = 2; i < n; i++) {
//         if (nums[i - 1] > nums[i - 2] && nums[i - 1] > nums[i]) {
//             idx.push(i - 1);
//         }
//     }
//     let last = nums.slice(idx[idx.length - 1])
//     console.log(idx);
// };

///////////////////////////////////// 6.5 evening //////////////////////////////////////
// // need to fix
// const findLengthOfLCIS = (nums) => {
//     let max = 1;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j - 1] < nums[j] && nums[j] < nums[j + 1]) {
//                 max = Math.max(max, nums.slice(i, j).length);
//             }
//         }
//     }
//     return max;
// };

// // time limit exceed  23 / 36 test cases passed.
// const findLengthOfLCIS1 = (nums) => {
//     if (isAscending(nums)) return nums.length;
//     let max = 1;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             let sub = nums.slice(i, j + 1);
//             if (isAscending(sub)) {
//                 // console.log(sub);
//                 max = Math.max(max, sub.length);
//             }
//         }
//     }
//     return max;
// };

// const isAscending = (arr) => {
//     return arr.every((x, i) => {
//         return i === 0 || x > arr[i - 1];
//     });
// };