/**
 * 06/26/21 morning
 * https://leetcode.com/contest/biweekly-contest-55/problems/remove-one-element-to-make-the-array-strictly-increasing/
 */

const pr = console.log;

// Accepted
const canBeIncreasing = (a) => {
    if (isAscending(a)) return 1;
    let n = a.length;
    for (let i = 0; i < n; i++) {
        let tmp = a.slice(0, i).concat(a.slice(i + 1));
        // pr(tmp);
        if (isAscending(tmp)) return 1;
    }
    return 0;
};

const isAscending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x > arr[i - 1];
    });
};

const main = () => {
    let nums = [1, 2, 10, 5, 7];
    let nums2 = [2, 3, 1, 2];
    let nums3 = [1, 1, 1];
    let nums4 = [1, 2, 3];
    pr(canBeIncreasing(nums))
    pr(canBeIncreasing(nums2))
    pr(canBeIncreasing(nums3))
    pr(canBeIncreasing(nums4))
};

main()