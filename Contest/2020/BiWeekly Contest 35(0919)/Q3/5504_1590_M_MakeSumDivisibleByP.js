/**
 * 9.19 morning
 * https://leetcode.com/contest/biweekly-contest-35/problems/make-sum-divisible-by-p/
 */

// Time limit 127/142
const minSubarray1 = (nums, p) => {
    let n = nums.length;
    if (sum(nums) % p == 0) return 0;
    let l = 1;
    while (l < n) {
        for (let i = 0; i < n; i++) {
            let sub = nums.slice(i, i + l);
            if (sub.length == l) {
                let rest = nums.slice(0, i).concat(nums.slice(i + l));
                // console.log(sub, rest);
                if (sum(rest) % p == 0) return l;
            }
        }
        l++;
    }
    return -1;
};

// Time limit 127/142
const minSubarray = (nums, p) => {
    let n = nums.length;
    let total = sum(nums);
    if (total % p == 0) return 0;
    let l = 1;
    while (l < n) {
        for (let i = 0; i < n; i++) {
            let sub = nums.slice(i, i + l);
            console.log(sub);
            if (sub.length == l) {
                let restSum = total - sum(sub);
                if (restSum % p == 0) return l;
            }
        }
        l++;
    }
    return -1;
};

const sum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur);
};

const main = () => {
    let nums = [3, 1, 4, 2], p = 6;
    let nums2 = [6, 3, 5, 2], p2 = 9;
    let nums3 = [1, 2, 3], p3 = 3;
    let nums4 = [1, 2, 3], p4 = 7;
    let nums5 = [1000000000, 1000000000, 1000000000], p5 = 3;
    console.log(minSubarray(nums, p));
    console.log(minSubarray(nums2, p2));
    console.log(minSubarray(nums3, p3));
    console.log(minSubarray(nums4, p4));
    console.log(minSubarray(nums5, p5));
}

main()
