/**
 * 4.30 night
 * https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/
 */

/**
 * Accepted --- 104ms 36.3MB 33.07%
 * https://www.cnblogs.com/qinduanyinghua/p/12677849.html
 */
const minSubsequence_cnblog = (nums) => {
    nums.sort((a, b) => a - b);
    let result = [];

    // Greedy
    let j = 0; //子序列的和
    for (let i = nums.length - 1; i >= 0; i--) {
        if (j > accumulate(nums) / 2) { // 子序列的和大于一半结束，因为子序列的和加上原数组剩余元素和是固定的
            break;
        }
        j += nums[i];
        result.push(nums[i]);
    }
    return result;
};

/**
 * Accpeted --- 92ms 36.2 MB 39.06%
 * https://blog.csdn.net/Eric_1993/article/details/105570670
 * https://www.acwing.com/file_system/file/content/whole/index/content/437129/
 */
const minSubsequence_csdn = (nums) => {
    nums.sort((a, b) => b - a);
    let result = [];

    // Greedy, similar to cnblog 
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        j += nums[i];
        result.push(nums[i]);
        if (j > accumulate(nums) - j) { // sum(nums[0, ..., i]) 能大于 nums 剩下的元素之和, 返回 nums[0, ..., i]
            break;
        }
    }
    return result;
};

const accumulate = (arr) => {
    return arr.reduce((a, b) => {
        return a + b;
    });
};

// const minSubsequence_cnblog_pq = (nums) => {
//     let result = [];
//     let pq = new PriorityQueue();
//     for (let i = 0; i < nums.length; i++) {
//         pq.enqueue(i);
//     }
//     let sub_sum = 0;
//     let half_sum = accumulate(nums) / 2
//     while (sub_sum <= half_sum) {
//         result.push(pq.front());
//         sub_sum += result.pop();
//         pq.dequeue();
//     }
//     return result;
// };

const main = () => {
    const nums = [4, 3, 10, 9, 8];
    const nums2 = [4, 4, 7, 6, 7];
    const nums3 = [6];

    console.log(minSubsequence_cnblog(nums));
    console.log(minSubsequence_cnblog(nums2));
    console.log(minSubsequence_cnblog(nums3));

    console.log("");
    console.log(minSubsequence_csdn(nums));
    console.log(minSubsequence_csdn(nums2));
    console.log(minSubsequence_csdn(nums3));

    console.log("");
    console.log(minSubsequence_cnblog_pq(nums));
    console.log(minSubsequence_cnblog_pq(nums2));
    console.log(minSubsequence_cnblog_pq(nums3));
};

main()