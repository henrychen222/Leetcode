// 12.19 night

// 196ms  https://leetcode.com/contest/weekly-contest-220/ranking/178/
const maximumUniqueSubarray = (nums) => {
    let n = nums.length;
    let res = 0;
    let pre = preSum(nums, n);
    let set = new Set();
    let left = 1;
    for (let i = 0; i < n; i++) {
        while (set.has(nums[i])) {
            set.delete(nums[left - 1]);
            left++;
        }
        set.add(nums[i]);
        // console.log(left, i, nums.slice(left, i + 1), set);
        let sum = pre[i + 1] - pre[left - 1];
        res = Math.max(res, sum);
    }
    return res;
};

// const preSum = (a, n) => {
//     let pre = Array(n + 1).fill(0);
//     for (let i = 1; i <= n; i++) {
//         pre[i] = pre[i - 1] + a[i - 1];
//     }
//     return pre;
// };

const preSum = (a, n) => {
    let pre = [a[0]];
    for (let i = 1; i < n; i++) {
        pre[i] = pre[i - 1] + a[i];
    }
    pre.unshift(0);
    return pre;
};

const main = () => {
    let nums = [4, 2, 4, 5, 6];
    let nums2 = [5, 2, 1, 2, 5, 2, 1, 2, 5];
    console.log(maximumUniqueSubarray(nums));
    console.log(maximumUniqueSubarray(nums2));
};

main()