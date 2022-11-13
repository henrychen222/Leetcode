/**
 * 09/04/21 morning
 * https://leetcode.com/contest/biweekly-contest-60/problems/find-the-middle-index-in-array/
 */

const pr = console.log;

const sm = (a) => a.reduce(((x, y) => x + y), 0);

// Accepted
const findMiddleIndex = (a) => {
    for (let i = 0; i < a.length; i++) {
        let left = a.slice(0, i);
        let right = a.slice(i + 1);
        let ls = sm(left), rs = sm(right)
        // pr(left, right);
        if (ls == rs) return i;
    }
    return -1;
};

const main = () => {
    let nums = [2, 3, -1, 8, 4];
    let nums2 = [1, -1, 4];
    let nums3 = [2, 5];
    let nums4 = [1]
    pr(findMiddleIndex(nums))
    pr(findMiddleIndex(nums2))
    pr(findMiddleIndex(nums3))
    pr(findMiddleIndex(nums4))
};

main()