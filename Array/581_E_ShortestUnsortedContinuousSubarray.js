/**
 * 6.4 evening
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 */

// need to fix
const findUnsortedSubarray = (nums) => {
    const origin = [...nums];
    console.log(origin);
    nums.sort((a, b) => a - b);
    console.log(nums);
    console.log(origin);
    let remove = [];
    for (let i = 0; i < origin.length; i++) {
        if (origin[i] == nums[i]) {
            remove.push(origin[i]);
        }
    }
    console.log(remove);
    // return nums
};

const main = () => {
    let nums = [2, 6, 4, 8, 10, 9, 15];
    console.log(findUnsortedSubarray(nums));
};

 main()