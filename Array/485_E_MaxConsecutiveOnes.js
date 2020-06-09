/**
 * 6.8 night
 * https://leetcode.com/problems/max-consecutive-ones/
 */

// need to fix
const findMaxConsecutiveOnes = (nums) => {
    if (nums.length == 1 && nums[0] == 1) {
        return 1;
    }
    let res = [];
    let max = Number.MIN_VALUE;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == 1) {
                if (nums[j] != 1) {
                    let data = nums.slice(i, j);
                    if ([...new Set(data)].length == 1) {
                        res.push(data);
                        max = Math.max(max, data.length);
                    }
                }
                let tillLastItemData = nums.slice(i, nums.length);
                console.log(i);
                if ([...new Set(tillLastItemData)] == 1) {
                    res.push(tillLastItemData);
                    max = Math.max(max, tillLastItemData.length);
                }
            }
        }
    }
    console.log(res);
    return max;
};

const main = () => {
    let nums = [1, 1, 0, 1, 1, 1];
    let nums2 = [1, 0, 1, 1, 0, 1];
    let debug1 = [1];
    let debug2 =[0,1];
    // console.log(findMaxConsecutiveOnes(nums)); // 3
    // console.log(findMaxConsecutiveOnes(nums2)); // 2
    // console.log(findMaxConsecutiveOnes(debug1)); // 1
    console.log(findMaxConsecutiveOnes(debug2)); // 1
};

main()