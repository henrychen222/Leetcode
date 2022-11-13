/**
 * 11/27/21 evening
 * https://leetcode.com/contest/weekly-contest-269/problems/removing-minimum-and-maximum-from-array/
 */

const pr = console.log;

// Accepted
const mi = Math.min, mx = Math.max;
const minimumDeletions = (a) => {
    let n = a.length, m = new Map(), min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        min = mi(min, a[i]);
        max = mx(max, a[i]);
        m.set(a[i], i);
    }
    // pr(min, max);
    let si = m.get(min), li = m.get(max), l = mi(si, li), r = mx(si, li);
    // pr(l, r);
    let bothLeft = r + 1, bothRight = n - l;
    let oneLeftOneRight = l + 1 + n - r;
    // pr("bothLeft", bothLeft, "bothRight", bothRight, "oneLeftOneRight", oneLeftOneRight);
    return mi(bothLeft, bothRight, oneLeftOneRight);
};

const main = () => {
    let nums = [2, 10, 7, 5, 4, 1, 8, 6];
    let nums2 = [0, -4, 19, 1, 8, -2, -3, 5];
    let nums3 = [101];
    pr(minimumDeletions(nums))
    pr(minimumDeletions(nums2))
    pr(minimumDeletions(nums3))
};

main()