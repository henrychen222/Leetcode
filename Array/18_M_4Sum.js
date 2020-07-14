/**
 * 7.13 evening
 * https://leetcode.com/problems/4sum/
 */

// Accepted --- 736ms 40MB
const fourSum = (nums, target) => {
    let res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                for (let l = k + 1; l < nums.length; l++) {
                    if ((nums[i] + nums[j] + nums[k] + nums[l]) == target) {
                        let arr = [nums[i], nums[j], nums[k], nums[l]];
                        res.push(arr);
                    }
                }
            }
        }
    }
    return removeDuplicatesMultiArray(res);
};

const removeDuplicatesMultiArray = (arr) => {
    return arr.map(JSON.stringify).reverse().filter((item, index, arr) => {
        return arr.indexOf(item, index + 1) === -1;
    }).reverse().map(JSON.parse);
};

const main = () => {
    let nums = [1, 0, -1, 0, -2, 2],
        target = 0;
    let nums_debug1 = [-3, -2, -1, 0, 0, 1, 2, 3],
        target_debug1 = 0;
    console.log(fourSum(nums, target));
    console.log(fourSum(nums_debug1, target_debug1)); // [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
};

main()