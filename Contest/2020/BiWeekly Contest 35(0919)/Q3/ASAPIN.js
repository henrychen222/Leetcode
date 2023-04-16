/**
 * 9.19 afternoon
 * https://leetcode.com/problems/make-sum-divisible-by-p/discuss/854197/JavaC%2B%2BPython-Prefix-Sum
 * https://leetcode.com/problems/make-sum-divisible-by-p/discuss/854166/JavaPython-3-O(n)-code-w-brief-explanation-analysis-and-similar-problems
 * https://leetcode.com/problems/make-sum-divisible-by-p/discuss/854174/C%2B%2BJava-O(n)
 * 
 * https://leetcode.com/problems/make-sum-divisible-by-p/discuss/854720/javascript-prefix-144ms
 */

// Accepted --- 144ms
const minSubarray = (nums, p) => {
    let n = nums.length;
    let prefixRemainder = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        prefixRemainder[i] = (prefixRemainder[i - 1] + nums[i - 1]) % p;
    }
    // console.log(prefixRemainder);
    let map = new Map();
    if (prefixRemainder[n] == 0) return 0;
    map.set(0, 0);
    let min = n + 1;
    for (let i = 1; i <= n; i++) {
        let tmp = (prefixRemainder[i] - prefixRemainder[n] + p) % p;
        if (map.has(tmp)) {
            min = Math.min(min, i - map.get(tmp));
        }
        map.set(prefixRemainder[i], i);
    }
    if (min >= n) min = -1;
    return min;
};

const main = () => {
    let nums = [3, 1, 4, 2], p = 6;
    let nums2 = [6, 3, 5, 2], p2 = 9;
    let nums3 = [1, 2, 3], p3 = 3;
    let nums4 = [1, 2, 3], p4 = 7;
    let nums5 = [1000000000, 1000000000, 1000000000], p5 = 3;
    let nums_debug1 = [8, 32, 31, 18, 34, 20, 21, 13, 1, 27, 23, 22, 11, 15, 30, 4, 2],
        p_debug1 = 148;
    console.log(minSubarray(nums, p));
    console.log(minSubarray(nums2, p2));
    console.log(minSubarray(nums3, p3));
    console.log(minSubarray(nums4, p4));
    console.log(minSubarray(nums5, p5));
    console.log(minSubarray(nums_debug1, p_debug1));
}

main()