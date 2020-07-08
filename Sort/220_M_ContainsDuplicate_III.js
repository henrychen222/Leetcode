/**
 * 7.7 morning
 * https://leetcode.com/problems/contains-duplicate-iii/
 */

// Accepted --- 364ms 36.5MB 44.89%
const containsNearbyAlmostDuplicate = (nums, k, t) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let a = Math.abs(nums[i] - nums[j]);
            let b = j - i;
            if (a <= t && b <= k) {
                return true;
            }
        }
    }
    return false;
};

const main = () => {
    let nums = [1, 2, 3, 1],
        k = 3,
        t = 0;
    let nums2 = [1, 0, 1, 1],
        k2 = 1,
        t2 = 2;
    let nums3 = [1, 5, 9, 1, 5, 9],
        k3 = 2,
        t3 = 3;
    console.log(containsNearbyAlmostDuplicate(nums, k, t));
    console.log(containsNearbyAlmostDuplicate(nums2, k2, t2));
    console.log(containsNearbyAlmostDuplicate(nums3, k3, t3));
};

main()