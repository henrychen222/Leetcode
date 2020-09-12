/**
 * 9.11 noon
 * https://leetcode.com/problems/longest-increasing-subsequence/
 */

// wrong
// const lengthOfLIS = (nums) => {
//     let n = nums.length;
//     let res = 0;
//     for (let i = 0; i < n; i++) {
//         let tmp = [nums[i]];
//         for (let j = i + 1; j < n; j++) {
//             if (nums[j] > tmp[tmp.length - 1]) {
//                 tmp.push(nums[j]);
//             }
//         }
//         console.log(tmp);
//         res = Math.max(res, tmp.length);
//     }
//     return res;
// };

// time limit 21/24
const lengthOfLIS = (nums) => {
    let n = nums.length;
    let N = 2 ** n;
    let res = 0;
    for (let i = 0; i < N; i++) {
        let data = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                data.push(nums[j]);
            }
        }
        let sorted = [...data].sort((a, b) => a - b);
        if (data.join("") == sorted.join("")) {
            if (isAscending(data)) {
                res = Math.max(res, data.length);
            }
        }
    }
    return res;
};

const isAscending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x > arr[i - 1];
    });
};

const main = () => {
    let nums = [10, 9, 2, 5, 3, 7, 101, 18];
    let debug1 = [10, 9, 2, 5, 3, 4];
    let debug2 = [2, 2];
    let debug3 = [0];
    console.log(lengthOfLIS(nums));
    console.log(lengthOfLIS(debug1)); // 3  [2, 3, 4]
    console.log(lengthOfLIS(debug2)); // 1
    console.log(lengthOfLIS(debug3)); // 1

};

main()