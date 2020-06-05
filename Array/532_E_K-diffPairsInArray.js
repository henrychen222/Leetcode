/**
 * 6.4 evening
 * https://leetcode.com/problems/k-diff-pairs-in-an-array/
 */

// need to fix
const findPairs = (nums, k) => {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            let b = nums[j];
            if (Math.abs(a - b) == k && (!res.includes([a, b]))) {
                res.push([a, b]);
            }
        }
    }
    console.log(res);
    return [...new Set(res)];
};

const main = () => {
    let nums = [3, 1, 4, 1, 5],
        k = 2;
    let nums2 = [1, 2, 3, 4, 5],
        k2 = 1;
    let nums3 = [1, 3, 1, 5, 4],
        k3 = 0;
    console.log(findPairs(nums, k));
    console.log(findPairs(nums2, k2));
    console.log(findPairs(nums3, k3));
};

main()