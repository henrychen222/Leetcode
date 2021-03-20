/**
 * 03/19/21 night
 * https://leetcode.com/problems/first-missing-positive/
 */

const pr = console.log;

// Accepted --- 76ms 91.44%
const firstMissingPositive = (nums) => {
    let a = nums.filter(x => x > 0);
    if (a.length == 0) return 1;
    a.sort((x, y) => x - y);
    let se = new Set(a);
    // pr(se);
    let n = se.size;
    let i = 1;
    for (const e of se) {
        // pr(i, e, n)
        if (i != e) return i;
        if (i == n) return e + 1;
        i++;
    }
};

const main = () => {
    let nums = [1, 2, 0];
    let nums2 = [3, 4, -1, 1];
    let nums3 = [7, 8, 9, 11, 12];
    let debug1 = [];
    let debug2 = [0, 2, 2, 1, 1]
    pr(firstMissingPositive(nums));
    pr(firstMissingPositive(nums2));
    pr(firstMissingPositive(nums3));
    pr(firstMissingPositive(debug1)); // 1
    pr(firstMissingPositive(debug2)); // 3
};

main()