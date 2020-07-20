/**
 * 7.19 evening
 * https://leetcode.com/problems/product-of-array-except-self/
 */

// Accepted --- 100ms 43MB 48.18%
const productExceptSelf = (nums) => {
    let totalProduct = 1;
    let zeroIdx = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            totalProduct *= nums[i];
        } else {
            zeroIdx.push(i);
        }
    }
    // console.log("zeroidx", zeroIdx);
    let res = [];
    if (zeroIdx.length == 0) {
        for (let i = 0; i < nums.length; i++) {
            res.push(totalProduct / nums[i]);
        }
    } else if (zeroIdx.length == 1) {
        // one zero
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                res.push(totalProduct);
            } else {
                res.push(0);
            }
        }
    } else {
        // at least two zero
        for (let i = 0; i < nums.length; i++) {
            res.push(0);
        }
    }
    return res;
};

// Time Limit 17/18
const productExceptSelf1 = (nums) => {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let tmp = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
        res.push(getProduct(tmp));
    }
    return res;
};

const getProduct = (arr) => {
    return arr.reduce((acc, cur) => acc * cur);
};

const main = () => {
    let nums = [1, 2, 3, 4];
    let debug1 = [0, 0];
    let debug2 = [1, 0];
    console.log(productExceptSelf(nums));
    console.log(productExceptSelf(debug1)); // [0, 0]
    console.log(productExceptSelf(debug2)); // [0, 1]
};

main()