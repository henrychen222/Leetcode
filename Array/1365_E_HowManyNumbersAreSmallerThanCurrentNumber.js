/**
 * 6.11 night
 * https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 */

// Accepted --- 88ms 38.4MB 43.37%
const smallerNumbersThanCurrent = (nums) => {
    numsOrigin = [...nums]; // use const will 144ms 6.61%  - let 164ms 5.04%
    nums.sort((a, b) => b - a);
    let res = [];
    for (let i = 0; i < numsOrigin.length; i++) {
        let idx = nums.indexOf(numsOrigin[i]);
        let cnt = 0;
        for (let j = idx; j < nums.length; j++) {
            if (nums[j] < numsOrigin[i]) {
                cnt++;
            }
        }
        res.push(cnt);
    }
    return res;
};

const main = () => {
    let nums = [8, 1, 2, 2, 3];
    let nums2 = [6, 5, 4, 8];
    let nums3 = [7, 7, 7, 7];
    console.log(smallerNumbersThanCurrent(nums));
    console.log(smallerNumbersThanCurrent(nums2));
    console.log(smallerNumbersThanCurrent(nums3));
};

main()