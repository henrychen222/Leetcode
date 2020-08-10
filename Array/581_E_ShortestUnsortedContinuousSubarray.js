/**
 * 6.4 evening  6.26 night (second do, still not solve)  8.8 afternoon (complete)
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 */

// Accepted --- 92ms 41.7MB 83.06%
const findUnsortedSubarray2 = (nums) => {
    let n = nums.length;
    let tmp = [...nums].sort((a, b) => a - b);
    let idx = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] != tmp[i]) {
            idx.push(i);
        }
    }
    return nums.slice(idx[0], idx[idx.length - 1] + 1).length;
};

// Accepted --- 116ms 41.6MB 42.56%	
const findUnsortedSubarray = (nums) => {
    let n = nums.length;
    let tmp = [...nums].sort((a, b) => a - b);
    let startIdx, endIdx;
    for (let i = 0; i < n; i++) {
        if (nums[i] != tmp[i]) {
            startIdx = i;
            break;
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] != tmp[i]) {
            endIdx = i;
            break;
        }
    }
    return nums.slice(startIdx, endIdx + 1).length;
};

const main = () => {
    let nums = [2, 6, 4, 8, 10, 9, 15];
    let debug1 = [1, 2, 3, 4];
    let debug2 = [2, 1];
    let debug3 = [1, 3, 2, 2, 2];
    console.log(findUnsortedSubarray(nums)); // 5
    console.log(findUnsortedSubarray(debug1)); // 0
    console.log(findUnsortedSubarray(debug2)); // 2
    console.log(findUnsortedSubarray(debug3)); // 4
};

main()


// // time limit exceed 207/307
// const findUnsortedSubarray = (nums) => {
//     let min = Number.MAX_VALUE;
//     for (let i = 0; i < nums.length; i++) {
//         let left = nums.slice(0, i);
//         for (let j = i; j <= nums.length; j++) {
//             let sub = nums.slice(i, j);
//             let right = nums.slice(j, nums.length);
//             sub.sort((a, b) => a - b);
//             let newArr = left.concat(sub).concat(right);
//             // console.log(left, sub, right, newArr);
//             if (isAscending(newArr)) {
//                 min = Math.min(min, sub.length);
//             } else {
//                 min = Math.min(min, nums.length);
//             }
//         }
//     }
//     return min;
// };

// // JavaScript heap out of memory  207/307
// const findUnsortedSubarray2 = (nums) => {
//     let min = Number.MAX_VALUE;
//     let data = [];
//     for (let i = 0; i < nums.length; i++) {
//         let left = nums.slice(0, i);
//         for (let j = i; j <= nums.length; j++) {
//             let sub = nums.slice(i, j);
//             let right = nums.slice(j, nums.length);
//             data.push({
//                 left: left,
//                 sub: sub,
//                 right: right
//             });
//         }
//     }
//     // console.log(data);
//     for (const item of data) {
//         item.sub.sort((a, b) => a - b);
//         let newArr = item.left.concat(item.sub).concat(item.right);
//         if (isAscending(newArr)) {
//             min = Math.min(min, item.sub.length);
//         } else {
//             min = Math.min(min, nums.length);
//         }
//     }
//     return min;
// };

// const isAscending = (arr) => {
//     return arr.every((x, i) => {
//         return i === 0 || x >= arr[i - 1];
//     });
// };