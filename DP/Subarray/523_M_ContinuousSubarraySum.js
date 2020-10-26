/**
 * 10.24 evening
 * https://leetcode.com/problems/continuous-subarray-sum/
 */

// Accepted --- 3040ms 5.04%
const checkSubarraySum3 = (nums, k) => {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (j - i + 1 < 2) continue;
            let ss = sum(nums.slice(i, j + 1));
            // console.log(nums.slice(i, j + 1), ss, j - i);
            if (ss == 0 && k == 0) return true;
            if (ss % k == 0) return true;
        }
    }
    return false;
};

const sum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur);
};

// Accepted --- 104ms 42.54%
// reference: https://leetcode.com/problems/continuous-subarray-sum/discuss/99518/Not-smart-solution-but-easy-to-understand
const checkSubarraySum = (nums, k) => {
    let n = nums.length;
    let pre = preSum(nums, n);
    // console.log(pre);
    for (let i = 0; i < n; i++) {
        for (let j = i + 2; j <= n; j++) {
            if (k == 0) {
                if (pre[j] - pre[i] == 0) {
                    return true;
                }
            } else if ((pre[j] - pre[i]) % k == 0) {
                return true;
            }
        }
    }
    return false;
};

const preSum = (arr, n) => {
    let pre = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        pre[i] = pre[i - 1] + arr[i - 1];
    }
    return pre;
};

// const checkSubarraySum1 = (nums, k) => {
//     let n = nums.length;
//     let map = new Map();
//     let pre = [nums[0]];
//     for (let i = 0; i + 1 < n; i++) {
//         pre[i + 1] = pre[i] + nums[i + 1];
//         map.set(i, pre[i]);
//     }
//     // console.log(pre, map);
//     for (let i = 1; i < n; i++) {
//         let sum = nums[i] + map.get(i - 1);
//         if (sum == 0 && k == 0) return true;
//         if (sum % k == 0) {
//             // console.log(sum);
//             return true;
//         }
//     }
//     return false;
// };


const main = () => {
    let nums = [23, 2, 4, 6, 7],
        k = 6;
    let nums2 = [23, 2, 6, 4, 7],
        k2 = 6;
    let nums_debug1 = [0, 0],
        k_debug1 = 0
    let nums_debug2 = [5, 0, 0],
        k_debug2 = 0;
    let nums_debug3 = [23, 2, 6, 4, 7],
        k_debug3 = 0;
    let nums_debug4 = [0, 1, 0],
        k_debug4 = 0;
    console.log(checkSubarraySum(nums, k));
    console.log(checkSubarraySum(nums2, k2));
    console.log(checkSubarraySum(nums_debug1, k_debug1)); // true
    console.log(checkSubarraySum(nums_debug2, k_debug2)); // true
    console.log(checkSubarraySum(nums_debug3, k_debug3)); // false
    console.log(checkSubarraySum(nums_debug4, k_debug4)); // false
};

main()