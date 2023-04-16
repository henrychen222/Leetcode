/**
 * 11.28 evening
 * https://leetcode.com/contest/weekly-contest-217/problems/find-the-most-competitive-subsequence/
 */

// wrong 5/85
const mostCompetitive2 = (nums, k) => {
    let origin = [...nums];
    let tmp = origin.sort((a, b) => a - b);
    let n = nums.length;
    let res = [];
    while (true) {
        let min = Math.min.apply(Math, nums);
        if (res.length == k) break;
        if (nums.length == 0) {
           nums = origin;
           tmp.shift();
           min = nums[0]
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == min) {
                res.push(nums[i]);
                nums = [...nums].filter((x, idx) => idx > i);
                // nums.splice(i, 1);
                break;
            }
        }
        // console.log(res, nums, min);
    }
    return res;
};

// TLE 3/85
const mostCompetitive = (nums, k) => {
    let min = Math.min.apply(Math, nums);
    let n = nums.length;
    let N = 2 ** n;
    let res = [];
    for (let i = 0; i < N; i++) {
        let data = [];
        if (data.length > k) continue;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                // if (data.length >= 1 && data[0] != min) break;
                data.push(nums[j]);
            }
        }
        // console.log(min, data);
        if (data.length == k) {
            res.push(data);
        }
    }
    // console.log(res);
    res.sort((a, b) => {
        for (let i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                return a[i] - b[i];
            }
        }
    });
    // console.log(res);
    return res[0];
};

// const isMore = (target, compare) => {
//     let n = target.length;
//     for (let i = 0; i < n; i++) {
//         if (target[i] != compare[i]) {
//             return target[i] < compare[i] ? true : false;
//         }
//     }
// };

const main = () => {
    let nums = [3, 5, 2, 6], k = 2;
    let nums2 = [2, 4, 3, 3, 5, 4, 9, 6], k2 = 4;
    let nums_debug1 = [84, 10, 71, 23, 66, 61, 62, 64, 34, 41, 80, 25, 91, 43, 4, 75, 65, 13, 37, 41, 46, 90, 55, 8, 85, 61, 95, 71], k_debug1 = 24;
    let nums_debug2 = [71,18,52,29,55,73,24,42,66,8,80,2], k_debug2 = 3;
    console.log(mostCompetitive(nums, k));
    console.log(mostCompetitive(nums2, k2));
    console.log(mostCompetitive(nums_debug1, k_debug1));
    console.log(mostCompetitive(nums_debug2, k_debug2)); // [8,80,2]
};

main()