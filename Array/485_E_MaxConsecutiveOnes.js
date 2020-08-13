/**
 * 6.8 night  8.12 night complete
 * https://leetcode.com/problems/max-consecutive-ones/
 */

// Accepted --- 84ms 43.4MB 57.78%
const findMaxConsecutiveOnes = (nums) => {
    let data = [];
    let stack = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            stack.push(nums[i]);
        } else {
            data.push(stack);
            stack = [];
            continue;
        }
    }
    data.push(stack);
    // console.log(data);
    data.sort((a, b) => b.length - a.length);
    return data[0].length;
};

const main = () => {
    let nums = [1, 1, 0, 1, 1, 1];
    let nums2 = [1, 0, 1, 1, 0, 1];
    let debug1 = [1];
    let debug2 = [0, 1];
    console.log(findMaxConsecutiveOnes(nums)); // 3
    console.log(findMaxConsecutiveOnes(nums2)); // 2
    console.log(findMaxConsecutiveOnes(debug1)); // 1
    console.log(findMaxConsecutiveOnes(debug2)); // 1
};

main()

// // need to fix
// const findMaxConsecutiveOnes = (nums) => {
//     if (nums.length == 1 && nums[0] == 1) {
//         return 1;
//     }
//     let res = [];
//     let max = Number.MIN_VALUE;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] == 1) {
//                 if (nums[j] != 1) {
//                     let data = nums.slice(i, j);
//                     if ([...new Set(data)].length == 1) {
//                         res.push(data);
//                         max = Math.max(max, data.length);
//                     }
//                 }
//                 let tillLastItemData = nums.slice(i, nums.length);
//                 console.log(i);
//                 if ([...new Set(tillLastItemData)] == 1) {
//                     res.push(tillLastItemData);
//                     max = Math.max(max, tillLastItemData.length);
//                 }
//             }
//         }
//     }
//     console.log(res);
//     return max;
// };