/**
 * 6.11 night
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 */

// Accepted --- 72ms 36.6MB 33.01%
const findNumbers = (nums) => {
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 == 0) {
            cnt++;
        }
    }
    return cnt;
};

const main = () => {
    let nums = [12, 345, 2, 6, 7896];
    let nums2 = [555, 901, 482, 1771];
    console.log(findNumbers(nums));
    console.log(findNumbers(nums2));
};

main()