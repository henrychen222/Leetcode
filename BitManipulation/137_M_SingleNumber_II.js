/**
 * 7.11 evening
 * https://leetcode.com/problems/single-number-ii/
 */

// Accepted --- 2668ms 38.7MB 5.79%
const singleNumber = (nums) => {
    for (const i of nums) {
        if (nums.filter(x => x === i).length == 1) {
            return i;
        }
    }
};

// Accepted --- 120ms 34.6MB 8.31% 99.08% memory
const singleNumber2 = (nums) => {
    let element = [...new Set(nums)];
    for (const e of element) {
        if (nums.indexOf(e) == nums.lastIndexOf(e)) {
            return e;
        }
    }
};

// Accepted --- 140ms 34.6MB 5.79%
const singleNumber3 = (nums) => {
    for (const i of nums) {
        if (nums.indexOf(i) == nums.lastIndexOf(i)) {
            return i;
        }
    }
};

// Accepted --- 116ms 36.4MB 8.64%
const singleNumber4 = (nums) => {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i] != nums[i + 1]) {
            return nums[i];
        }
    }
};

const main = () => {
    let nums = [2, 2, 3, 2];
    let nums2 = [0, 1, 0, 1, 0, 1, 99];
    console.log(singleNumber(nums));
    console.log(singleNumber(nums2));

    console.log(singleNumber2(nums));
    console.log(singleNumber2(nums2));

    console.log(singleNumber3(nums));
    console.log(singleNumber3(nums2));

    console.log(singleNumber4(nums));
    console.log(singleNumber4(nums2));
};

main()