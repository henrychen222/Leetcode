/**
 * 9.5 morning
 * https://leetcode.com/problems/next-greater-element-ii/
 */

// Accepted --- 132ms 57.51%
const nextGreaterElements = (nums) => {
    let res = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let tmp;
        if (i == n - 1) {
            for (let j = 0; j < n - 1; j++) {
                if (nums[j] > nums[i]) {
                    tmp = nums[j];
                    break;
                }
            }
            if (tmp != undefined) {
                res.push(tmp);
            } else {
                res.push(-1);
            }
        } else {
            for (let j = i + 1; j < n; j++) {
                if (nums[j] > nums[i]) {
                    tmp = nums[j];
                    break;
                }
            }
            if (tmp != undefined) {
                res.push(tmp);
                continue;
            }
            for (let j = 0; j < i; j++) { // if right search cannot find, circular back to 0 contiune search
                if (nums[j] > nums[i]) {
                    tmp = nums[j];
                    break;
                }
            }
            if (tmp != undefined) {
                res.push(tmp);
            } else {
                res.push(-1);
            }
        }
    }
    return res;
};

const main = () => {
    let nums = [1, 2, 1];
    let debug1 = [5, 4, 3, 2, 1];
    console.log(nextGreaterElements(nums));
    console.log(nextGreaterElements(debug1)); // [-1,5,5,5,5]
};

main()