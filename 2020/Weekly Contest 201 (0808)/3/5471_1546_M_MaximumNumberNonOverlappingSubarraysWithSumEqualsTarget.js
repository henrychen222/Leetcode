/**
 * 8.8 night
 * https://leetcode.com/contest/weekly-contest-201/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/
 */

// reference: https://www.geeksforgeeks.org/maximum-sum-lengths-non-overlapping-subarrays-k-max-element/
// not work
const maxNonOverlapping = (num, target) => {
    let n = num.length;
    let res = 0;
    let cnt = 0;
    let flag = 0;
    let sum = 0;
    for (let i = 0; i < n;) {
        cnt = 0;
        flag = 0;
        while (sum <= target && i < n) {
            cnt++;
            sum += num[i];
            if (sum == target) {
                flag = 1;
            }
            i++;
        }
        if (flag == 1) res += cnt;
        while (sum > target && i < n) {
            i++;
        }
    }
    return res;
};

const main = () => {
    let nums = [1, 1, 1, 1, 1], target = 2;
    let nums2 = [-1, 3, 5, 1, 4, 2, -9], target2 = 6;
    let nums3 = [-2, 6, 6, 3, 5, 4, 1, 2, 8], target3 = 10;
    let nums4 = [0, 0, 0], target4 = 0;
    console.log(maxNonOverlapping(nums, target));
    console.log(maxNonOverlapping(nums2, target2));
    console.log(maxNonOverlapping(nums3, target3));
    console.log(maxNonOverlapping(nums4, target4));
};

main()