/**
 * 11.7 evening
 * https://leetcode.com/contest/weekly-contest-214/problems/get-maximum-in-generated-array/
 */

// Accepted
const getMaximumGenerated = (n) => {
    if (n == 0) return 0;
    let nums = new Array(n + 1).fill(0);
    nums[1] = 1;
    for (i = 2; i <= n; i++) {
        if (i % 2 == 0) {
            nums[i] = nums[i / 2];
        } else {
            let idx = (i - 1) / 2;
            // console.log(i, idx, idx + 1);
            nums[i] = nums[idx] + nums[idx + 1];
        }
    }
    // console.log(nums);
    return Math.max.apply(Math, nums);
};

const main = () => {
    let n = 7;
    let n2 = 2;
    let n3 = 3;
    let debug1 = 0;
    console.log(getMaximumGenerated(n));
    console.log(getMaximumGenerated(n2));
    console.log(getMaximumGenerated(n3));
    console.log(getMaximumGenerated(debug1));
};

main()