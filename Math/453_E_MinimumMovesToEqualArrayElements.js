/**
 * 6.14 evening
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
 */

// need to fix wrong
const minMoves = (nums) => {
    let n = nums.length;
    let cnt = 0;
    while ([...new Set(nums)].length != 1) {
        nums.sort((a, b) => a - b);
        for (let i = 0; i < n - 1; i++) {
            nums[i]++;
        }
        cnt++;
    }
    console.log(nums);
    return cnt;
};

const main = () => {
    let nums = [1, 2, 3];
    let debug1 = [1,2147483647];
    console.log(minMoves(nums));
    console.log(minMoves(debug1)); // time limit
};

main()