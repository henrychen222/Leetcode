/**
 * 12.12 morning
 * https://leetcode.com/contest/biweekly-contest-41/problems/sum-of-absolute-differences-in-a-sorted-array/
 */


// TLE 53/59
const getSumAbsoluteDifferences1 = (nums) => {
    let res = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            if (j == i) continue;
            sum += Math.abs(nums[i] - nums[j]);
        }
        res.push(sum);
    }
    return res;
};


// TLE 53/59
const getSumAbsoluteDifferences = (nums) => {
    let res = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = n >> 1, k = (n >> 1) + 1; j >= 0 || k < n; j--, k++) {
            // console.log(nums[i], nums[j], nums[k]);
            if (j >= 0 && j != i) {
                // sum += Math.abs(nums[i] - nums[j]);
                i > j ? sum += nums[i] - nums[j] : sum += nums[j] - nums[i];
                // console.log("111", nums[i], nums[j]);
            }
            if (k < n && k != i) {
                // sum += Math.abs(nums[i] - nums[k]);
                i > k ? sum += nums[i] - nums[k] : sum += nums[k] - nums[i];
                // console.log("222", nums[i], nums[k]);
            }
        }
        // console.log("--------------------", sum)
        res.push(sum);
    };
    return res;
};

const main = () => {
    let nums = [2, 3, 5];
    let nums2 = [1, 4, 6, 8, 10];
    console.log(getSumAbsoluteDifferences(nums));
    console.log(getSumAbsoluteDifferences(nums2));
};

main()