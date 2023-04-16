/**
 * 10.3 evening
 * https://leetcode.com/contest/weekly-contest-209/problems/special-array-with-x-elements-greater-than-or-equal-x/
 */

// Accepted
const specialArray = (nums) => {
    let n = nums.length;
    for (let i = 1; i <= n; i++) {
        let cnt = 0;
        for (const item of nums) {
            if (item >= i) {
                cnt++;
            }
        }
        if (cnt == i) return cnt;
    }
    return -1;
};

const main = () => {
    let nums = [3, 5];
    let nums2 = [0, 0];
    let nums3 = [0, 4, 3, 0, 4];
    let nums4 = [3, 6, 7, 7, 0];
    console.log(specialArray(nums));
    console.log(specialArray(nums2));
    console.log(specialArray(nums3));
    console.log(specialArray(nums4));
};

main()