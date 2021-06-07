/**
 * 06/06/21 night
 * https://leetcode.com/problems/longest-consecutive-sequence/
 */

// Accepted --- 96ms 60.46% 
// reference: https://leetcode.com/problems/longest-consecutive-sequence/discuss/41057/Simple-O(n)-with-Explanation-Just-walk-each-streak
const longestConsecutive = (a) => {
    let se = new Set(a);
    let res = 0;
    for (const x of se) {
        if (!se.has(x - 1)) {
            let y;
            for (y = x + 1; se.has(y); y++);
            res = Math.max(res, y - x);
        }
    }
    return res;
};

const pr = console.log;
const main = () => {
    let nums = [100, 4, 200, 1, 3, 2];
    let nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
    pr(longestConsecutive(nums))
    pr(longestConsecutive(nums2))
};

main()