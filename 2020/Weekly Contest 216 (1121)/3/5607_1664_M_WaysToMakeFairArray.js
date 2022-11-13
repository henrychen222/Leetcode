/**
 * 11.21 evening
 * https://leetcode.com/contest/weekly-contest-216/problems/ways-to-make-a-fair-array/
 */

// TLE
const waysToMakeFair1 = (nums) => {
    let cnt = 0;
    let n = nums.length;
    let sum = nums.reduce((a, b) => a + b);
    for (let i = 0; i < n; i++) {
        let total = sum - nums[i];
        let evenSum = 0;
        let arr = nums.filter((x, idx) => idx != i);
        // console.log(arr);
        for (let i = 0; i < arr.length; i += 2) {
            evenSum += arr[i];
        }
        // console.log(total - evenSum, evenSum);
        if (total - evenSum == evenSum) {
            cnt++;
        }
    }
    return cnt;
};

// don't know
const waysToMakeFair2 = (nums) => {
    let cnt = 0;
    let n = nums.length;
    let sum = nums.reduce((a, b) => a + b);
    let oddM = new Map();
    let evenM = new Map();
    for (let i = 0; i < n; i++) {
        if (i % 2 == 1) {
            oddM.set(i, nums[i]);
        } else {
            evenM.set(i, nums[i]);
        }
    }
    // console.log(evenM);
    for (let i = 0; i < n; i++) {
       let tmp = evenM;
    }
};

// wrong
const waysToMakeFair = (nums) => {
    let n = nums.length;
    let cnt = 0;
    let sum = nums.reduce((a, b) => a + b);
    // let map = new Map();
    // let pre = 0;
    // for (let i = 0; i < n; i++) {
    //    pre += nums[i];
    //    map.set(i, pre);
    // }
    // console.log(map)
    for (let i = 0; i < n; i++) {
        let curSum = sum - nums[i];
        // console.log(curSum);
        if (curSum % 2 == 0) {
            cnt++;
        }
    }
    return cnt;
};


const main = () => {
    let nums = [2, 1, 6, 4];
    let nums2 = [1, 1, 1];
    let nums3 = [1, 2, 3];
    console.log(waysToMakeFair(nums));
    console.log(waysToMakeFair(nums2));
    console.log(waysToMakeFair(nums3));
};

main()

