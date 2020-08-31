/**
 * 8.30 evening
 * https://leetcode.com/problems/132-pattern/
 */

// Time Limit 87/101
const find132pattern1 = (nums) => {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] < nums[j]) {
                for (let k = j + 1; k < n; k++) {
                    if (nums[i] < nums[k] && nums[k] < nums[j]) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
};

// issue  95/101
const find132pattern = (nums) => {
    let n = nums.length;
    for (let i = 0; i < n - 2; i++) {
        let data = [...nums];
        for (let j = i + 1; j < n - 1; j++) {
            if (nums[i] < nums[j]) {
                let len = data.length;
                let idx = len - 1 + (n - len);
                // while (idx > j) {
                    if (data.length == 0) break;
                    let end = data[len - 1];
                    // console.log(nums[i], nums[j], data, end);
                    if (nums[i] < end && end < nums[j] && idx > j) {
                        return true;
                    }
                    data.pop(); // issue, only pop one time
                // }
            }
        }
    }
    return false;
};

const main = () => {
    let nums = [1, 2, 3, 4];
    let nums2 = [3, 1, 4, 2];
    let nums3 = [-1, 3, 2, 0];
    let debug1 = [-2, 1, 2, -2, 1, 2];
    let debug2 = [1, 3, 2, 4];
    console.log(find132pattern(nums)); // false
    console.log(find132pattern(nums2)); // true
    console.log(find132pattern(nums3)); // true
    console.log(find132pattern(debug1)); // true
    console.log(find132pattern(debug2)); // true
};

main()