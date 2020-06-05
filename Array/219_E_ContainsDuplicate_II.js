/**
 * 6.4 night (first time did in 08/2018)
 * https://leetcode.com/problems/contains-duplicate-ii/
 */

// Accepted --- 840ms 37.2MB 20.03%
const containsNearbyDuplicate = (nums, k) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
                return true;
            }
        }
    }
    return false;
};

const main = () => {
    let nums = [1, 2, 3, 1],
        k = 3;
    let nums2 = [1, 0, 1, 1],
        k2 = 1;
    let nums3 = [1, 2, 3, 1, 2, 3],
        k3 = 2;
    console.log(containsNearbyDuplicate(nums, k));
    console.log(containsNearbyDuplicate(nums2, k2));
    console.log(containsNearbyDuplicate(nums3, k3));
};

main()