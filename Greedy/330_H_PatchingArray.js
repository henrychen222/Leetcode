/**
 * 08/29/21 night
 * https://leetcode.com/problems/patching-array/
 */

// Accepted --- 159ms 50%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/5165821.html
 * https://leetcode.com/problems/patching-array/discuss/78488/Solution-%2B-explanation
 */
const minPatches = (a, n) => {
    let m = a.length, miss = 1, res = 0, i = 0;
    while (miss <= n) {
        if (i < m && a[i] <= miss) {
            miss += a[i];
            i++;
        } else {
            miss *= 2;
            res++;
        }
    }
    return res;
};

const pr = console.log;
const main = () => {
    let nums = [1, 3],
        n = 6;
    let nums2 = [1, 5, 10],
        n2 = 20;
    let nums3 = [1, 2, 2],
        n3 = 5;
    pr(minPatches(nums, n));
    pr(minPatches(nums2, n2));
    pr(minPatches(nums3, n3));
};

main()