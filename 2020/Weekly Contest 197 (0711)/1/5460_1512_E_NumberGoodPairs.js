/**
 * 7.11 evening
 * https://leetcode.com/contest/weekly-contest-197/problems/number-of-good-pairs/
 */

const numIdenticalPairs = (nums) => {
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                cnt++;
            }
        }
    }
    return cnt;
};

const main = () => {
    let nums = [1, 2, 3, 1, 1, 3];
    let nums2 = [1, 1, 1, 1];
    let nums3 = [1, 2, 3];
    console.log(numIdenticalPairs(nums));
    console.log(numIdenticalPairs(nums2));
    console.log(numIdenticalPairs(nums3));
};

main()