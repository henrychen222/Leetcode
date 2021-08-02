/**
 * 07/31/21 night
 * https://leetcode.com/problems/trapping-rain-water/
 */

// Accepted --- 80ms 80.04%
/**
 * reference:
 * https://www.geeksforgeeks.org/trapping-rain-water/
 * https://www.techiedelight.com/trapping-rain-water-within-given-set-bars/
 * https://www.programcreek.com/2014/06/leetcode-trapping-rain-water-java/
 */
const trap = (a) => {
    let n = a.length;
    if (n == 0) return 0;
    let left = Array(n).fill(0); // left[i]: height of tallest bar from 0 till i
    let right = Array(n).fill(0); // right[i]: height of tallest bar from i till n - 1
    left[0] = a[0];
    right[n - 1] = a[n - 1];
    for (let i = 1; i < n; i++) left[i] = Math.max(left[i - 1], a[i]);
    for (let i = n - 2; ~i; i--) right[i] = Math.max(right[i + 1], a[i]);
    // pr("left", left)
    // pr("right", right)
    let res = 0;
    for (let i = 0; i < n; i++) res += Math.min(left[i], right[i]) - a[i];
    return res;
};

const pr = console.log;
const main = () => {
    let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    let height2 = [4, 2, 0, 3, 2, 5];
    let debug1 = [];
    pr(trap(height))
    pr(trap(height2))
    pr(trap(debug1))
};

main()