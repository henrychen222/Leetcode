/**
 * 9.9 morning
 * https://leetcode.com/problems/count-number-of-nice-subarrays/
 */

// don't know
const numberOfSubarrays = (nums, k) => {
    let n = nums.length;
    let oddIdx = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] % 2 == 1) oddIdx.push(i);
    }
    console.log(oddIdx);
    if (oddIdx.length == 0) return 0;
    let start = oddIdx[0];
    let end = oddIdx[oddIdx.length - 1];
    let cnt = 0;
    for (let i = start; i <= end; i++) {
        let odd = 1;
        for (let j = start + 1; j < n; j++) {
            if (nums[i] % 2 == 1) {
                odd++;
            }
            if (odd == k) {
                odd += n - 1 - j;
                break;
            }
            console.log(odd)
        }
        console.log(odd);
        cnt += odd;
    }
    return cnt;
};

const main = () => {
    let nums = [1, 1, 2, 1, 1],
        k = 3;
    let nums2 = [2, 4, 6],
        k2 = 1;
    let nums3 = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2],
        k3 = 2;
    // console.log(numberOfSubarrays(nums, k));
    // console.log(numberOfSubarrays(nums2, k2));
    console.log(numberOfSubarrays(nums3, k3));
};

main()