/**
 * 9.19 afternoon
 * https://leetcode.com/problems/make-sum-divisible-by-p/discuss/854197/JavaC%2B%2BPython-Prefix-Sum
 * https://leetcode.com/problems/make-sum-divisible-by-p/discuss/854166/JavaPython-3-O(n)-code-w-brief-explanation-analysis-and-similar-problems
 * https://leetcode.com/problems/make-sum-divisible-by-p/discuss/854174/C%2B%2BJava-O(n)
 * 
 * https://leetcode.com/problems/make-sum-divisible-by-p/discuss/854720/javascript-prefix-144ms
 */

// Accepted --- 168ms 100.00%
const minSubarray = (nums, p) => {
    let sum = 0;
    for (const i of nums) {
        sum += i;
    }
    sum %= p;
    if (sum == 0) return 0;
    let n = nums.length;
    let prefixSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }
    // console.log(prefixSum, sum);
    let map = new Map();
    map.set(0, -1);
    let min = Number.MAX_VALUE;
    for (let i = 0; i < n; i++) {
        let tmp = (prefixSum[i + 1] - sum) % p;
        if (tmp < 0) tmp += p;
        if (map.has(tmp)) {
            min = Math.min(min, i - map.get(tmp));
        }
        map.set(prefixSum[i + 1] % p, i);
        // console.log(tmp, map, min);
    }
    // console.log(prefixSum, sum, map);
    return min >= n ? -1 : min;
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