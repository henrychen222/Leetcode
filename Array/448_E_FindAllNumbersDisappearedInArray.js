/**
 * 6.8 night
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */

// Accepted --- 8528ms	45.1MB 5.02%
const findDisappearedNumbers = (nums) => {
    let res = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            res.push(i);
        }
    }
    return res;
};

const main = () => {
    let nums = [4, 3, 2, 7, 8, 2, 3, 1];
    let debug1 = [1, 1];
    console.log(findDisappearedNumbers(nums));
    console.log(findDisappearedNumbers(debug1));
};

main()