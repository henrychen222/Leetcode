/**
 * 8.29 evening
 * https://leetcode.com/contest/weekly-contest-204/problems/maximum-length-of-subarray-with-positive-product/
 */

// Time Limit  109/112
const getMaxLen = (nums) => {
    let n = nums.length;
    let product = 1;
    let max = 0;
    let round = 0;
    for (let i = 0; i < n; i++) {
        product *= nums[i];
        if (product > 0) {
            let len = i - round + 1;
            // console.log(nums.slice(round, i + 1));
            max = Math.max(max, len);
        }
        if (i == n - 1) {
            i = round;
            round++;
            product = 1;
        }
        if (round == n) break;
    }
    return max;
};

const getMaxProduct = (A) => {
    let n = A.length;
    if (n == 0) return 0;
    let maxi = 1, mini = 1;
    let out = 0;
    for (let i = 0; i < n; i++) {
        let oldmaxi = Math.max(maxi, 1);
        if (A[i] > 0) {
            maxi = oldmaxi * A[i];
            mini *= A[i];
        } else {
            maxi = mini * A[i];
            mini = oldmaxi * A[i];
        }
        out = Math.max(out, maxi);
    }
    return out;
};

const getMaxProduct2 = (arr) => {
    let n = arr.length;
    let minVal = arr[0];
    let maxVal = arr[0];
    let maxProduct = arr[0];
    for (let i = 1; i < n; i++) {
        if (arr[i] < 0) {
            [maxVal, minVal] = [minVal, maxVal]
        }
        maxVal = Math.max(arr[i], maxVal * arr[i]);
        minVal = Math.min(arr[i], minVal * arr[i]);
        maxProduct = Math.max(maxProduct, maxVal);
    }
    return maxProduct;
};


const main = () => {
    let nums = [1, -2, -3, 4];
    let nums2 = [0, 1, -2, -3, -4];
    let nums3 = [-1, -2, -3, 0, 1];
    let nums4 = [-1, 2];
    let nums5 = [1, 2, 3, 5, -6, 4, 0, 10];
    // console.log(getMaxLen(nums));
    console.log(getMaxLen(nums2));
    // console.log(getMaxLen(nums3));
    // console.log(getMaxLen(nums4));
    // console.log(getMaxLen(nums5));

};

main()