/**
 * 12.24 evening  12.25 night complete
 * https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/
 */

// Accepted --- 136ms 76.92%
/**
 * referenece:
 * https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/discuss/780921/C%2B%2B-O(n)
 * https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/discuss/780882/Java-14-lines-Greedy-PrefixSum-with-line-by-line-explanation-easy-to-understand
 */
const maxNonOverlapping = (nums, target) => {
    let n = nums.length;
    let pre = new Map(); // {prefix sum -> last_index}
    pre.set(0, -1);
    let sum = cnt = 0;
    let right = -1;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        let complement = sum - target;
        if (pre.has(complement)) {
            let left = pre.get(complement);
            if (right <= left) { // a valid subarray (non-overlapping) exist
                cnt++;
                right = i;
            }
        }
        pre.set(sum, i);
    }
    console.log(pre);
    return cnt;
};

// Accepted --- 140ms 53.85%
// reference: https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-1546-maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/
const maxNonOverlapping1 = (nums, target) => {
    let n = nums.length;
    let dp = Array(n + 1).fill(0); // res at nums[i]
    let pre = new Map(); // {prefix sum -> last_index}
    pre.set(0, -1);
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        let complement = sum - target;
        dp[i + 1] = dp[i];
        if (pre.has(complement)) {
            dp[i + 1] = Math.max(dp[i + 1], dp[pre.get(complement) + 1] + 1);
        }
        pre.set(sum, i);
    }
    // console.log(dp, pre)
    return dp[n];
};

// don't know
// const maxNonOverlapping = (nums, target) => {
//     let n = nums.length;
//     let set = new Set();
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             let sub = nums.slice(i, j + 1);
//             let sum = sub.reduce((a, b) => a + b);
//             if (sum == target && !set.has(i +  '' + j)) {
//                 // console.log(i + '' + j, sum, target);
//                 set.add(i + '' + j);
//             }
//         }
//     }
//     console.log(set);
//     // return set.size;
// };

const main = () => {
    let nums = [1, 1, 1, 1, 1],
        target = 2;
    let nums2 = [-1, 3, 5, 1, 4, 2, -9],
        target2 = 6;
    let nums3 = [-2, 6, 6, 3, 5, 4, 1, 2, 8],
        target3 = 10;
    let nums4 = [0, 0, 0],
        target4 = 0;
    console.log(maxNonOverlapping(nums, target));
    console.log(maxNonOverlapping(nums2, target2));
    console.log(maxNonOverlapping(nums3, target3));
    console.log(maxNonOverlapping(nums4, target4));
};

main()