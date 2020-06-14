/**
 * 6.13 afternoon evening
 * https://leetcode.com/problems/set-mismatch/
 */

// Accepted ---  404ms 45.7 MB 13.97%
const findErrorNums = (nums) => {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            res.push(nums[i]);
        }
    }
    let uniqueNums = [...new Set([...nums])];
    if (uniqueNums.length == 1 && uniqueNums[0] == 1) {
        res.push(2);
    }
    let end = uniqueNums[uniqueNums.length - 1];
    for (let i = 1; i <= end + 1; i++) {
        let add = [];
        if (!uniqueNums.includes(i)) {
            add.push(i);
            res.push(add.sort((a, b) => a - b)[0]);
            break;
        }
    }
    return [...new Set(res)];
};

const main = () => {
    let nums = [1, 2, 2, 4];
    let debug1 = [1, 1];
    let debug2 = [2, 2];
    let debug3 = [2, 3, 2];
    let debug4 = [1, 5, 3, 2, 2, 7, 6, 4, 8, 9];
    console.log(findErrorNums(nums)); // [2, 3]
    console.log(findErrorNums(debug1)); // [1,2]
    console.log(findErrorNums(debug2)); // [2, 1]
    console.log(findErrorNums(debug3)); // [2, 1]
    console.log(findErrorNums(debug4)); // [2, 10]
};

main()