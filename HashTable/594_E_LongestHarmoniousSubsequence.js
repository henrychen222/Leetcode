/**
 * 6.18 night
 * https://leetcode.com/problems/longest-harmonious-subsequence/
 */

// need to fix
const findLHS = (nums) => {
    let max = Number.MIN_VALUE;
    let res = [];
    let N = nums.length;
    let len = 2 ** N - 1;
    for (let i = 1; i < len; i++) {
        let data = [];
        for (let j = 0; j <= N; j++) {
            if (i & (1 << j)) {
                data.push(nums[j]);
            }
        }
        // if (isharmounious(data)) {
        res.push(data);
        max = Math.max(max, data.length);
        // }
    }
    console.log(res);
    return max;
};

const isharmounious = (arr) => {
    let sortedArr = [...arr].sort((a, b) => a - b);
    if (sortedArr[sortedArr.length - 1] - sortedArr[0] != 1) {
        return false;
    }
    return true;
};

// const getAllSubsequences = (arr, N) => {
//     let res = [];
//     let len = 2 ** N - 1;
//     for (let i = 1; i < len; i++) {
//         let data = [];
//         for (let j = 0; j <= N; j++) {
//             if (i & (1 << j)) {
//                 data.push(arr[j]);
//             }
//         }
//         if (isharmounious(data)) {
//             res.push(data);
//         }
//     }
//     return res;
// };

const main = () => {
    let nums = [1, 3, 2, 2, 5, 2, 3, 7];
    let debug1 = [1, 2, 2, 1];
    console.log(findLHS(nums))
    console.log(findLHS(debug1))
};

main()