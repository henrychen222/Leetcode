/**
 * 6.14 evening  10.28 complete
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
 */

// Accepted --- 88ms 56.91%
// reference: https://leetcode.com/problems/minimum-moves-to-equal-array-elements/discuss/93817/It-is-a-math-question
const minMoves = (nums) => {
    let n = nums.length;
    let sum = nums.reduce((acc, cur) => acc + cur);
    let min = Math.min.apply(Math, nums);
    return sum - n * min;
};

// Accepted --- 88ms 56.91%
const minMoves_modify = (nums) => {
    let n = nums.length;
    let sum = 0;
    let min = Number.MAX_VALUE;
    for (const item of nums) {
        sum += item;
        min = Math.min(min, item);
    }
    return sum - n * min;
};

// Accepted --- 80ms 91.71%
// reference:https://leetcode.com/problems/minimum-moves-to-equal-array-elements/discuss/93815/Java-O(n)-solution.-Short.
const minMoves3 = (nums) => {
    let res = 0;
    let min = Number.MAX_VALUE;
    for (const item of nums) {
        min = Math.min(min, item);
    }
    for (const item of nums) {
        res += item - min;
    }
    return res;
};

const main = () => {
    let nums = [1, 2, 3];
    let debug1 = [1, 2147483647];
    console.log(minMoves(nums));
    console.log(minMoves(debug1));
};

main()

// need to fix TLE
// const minMoves = (nums) => {
//     let n = nums.length;
//     let cnt = 0;
//     while ([...new Set(nums)].length != 1) {
//         nums.sort((a, b) => a - b);
//         for (let i = 0; i < n - 1; i++) {
//             nums[i]++;
//         }
//         cnt++;
//     }
//     console.log(nums);
//     return cnt;
// };