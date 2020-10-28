/**
 * 10.24 evening
 * https://leetcode.com/contest/weekly-contest-212/problems/arithmetic-subarrays/
 */

const checkArithmeticSubarrays = (nums, l, r) => {
    let m = l.length;
    let res = [];
    for (let i = 0; i < m; i++) {
        let range = nums.slice(l[i], r[i] + 1);
        // console.log(range);
        if (ok(range)) {
            res.push(true);
        } else {
            res.push(false);
        }
    }
    return res;
};

const ok = (arr) => {
    let n = arr.length;
    let tmp = [...arr].sort((a, b) => a - b);
    for (let i = 1; i + 1 < n; i++) {
        if (tmp[i + 1] - tmp[i] != tmp[i] - tmp[i - 1]) {
            return false;
        }
    }
    return true;
};

const main = () => {
    let nums = [4, 6, 5, 9, 3, 7], l = [0, 0, 2], r = [2, 3, 5];
    let nums2 = [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10], l2 = [0, 1, 6, 4, 8, 7], r2 = [4, 4, 9, 7, 9, 10];
    console.log(checkArithmeticSubarrays(nums, l, r));
    console.log(checkArithmeticSubarrays(nums2, l2, r2));
};

main()