/**
 * 10/16/21 evening
 * https://leetcode.com/contest/weekly-contest-263/problems/count-number-of-maximum-bitwise-or-subsets/
 */

const pr = console.log;

// Accepted
const countMaxOrSubsets = (a) => {
    let n = a.length, max = Number.MIN_SAFE_INTEGER;
    let m = new Map();
    for (let i = 0; i < 1 << n; i++) {
        let data = [], or = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                data.push(a[j]);
                or |= a[j];
            }
        }
        if (!m.has(or)) m.set(or, []);
        m.get(or).push(data);
        max = Math.max(max, or);
    }
    // pr(m, max);
    return m.get(max).length;
};

const main = () => {
    let nums = [3, 1];
    let nums2 = [2, 2, 2];
    let nums3 = [3, 2, 1, 5];
    pr(countMaxOrSubsets(nums))
    pr(countMaxOrSubsets(nums2))
    pr(countMaxOrSubsets(nums3))
};

main()


// pr(0 ^ 2 ^ 1 ^ 5);
// pr(2 ^ 1 ^ 5);