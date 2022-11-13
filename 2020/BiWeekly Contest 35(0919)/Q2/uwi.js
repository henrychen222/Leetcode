/**
 * 9.19 afternoon
 * https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/discuss/854772/javascript-212ms
 * 
 * reference read (sweep line):
 * https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/discuss/854206/JavaC%2B%2BPython-Sweep-Line
 * https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/discuss/854792/Java-Beats-100
 * 
 * https://en.wikipedia.org/wiki/Sweep_line_algorithm
 * https://www.hackerearth.com/practice/math/geometry/line-sweep-technique/tutorial/
 * https://courses.csail.mit.edu/6.006/spring11/lectures/lec24.pdf
 */

// Accepted --- 240ms 100.00%
const maxSumRangeQuery = (nums, requests) => {
    let n = nums.length;
    let f = new Array(n + 1).fill(0);  // frequency of each element appear in all the request ranges
    for (const r of requests) {
        f[r[0]]++;
        f[r[1] + 1]--;
    }
    console.log(f);
    for (let i = 0; i < n; i++) {
        f[i + 1] += f[i];
    }
    console.log(f);
    f = f.slice(0, n);  // get the same length of nums
    console.log(f);
    f.sort((a, b) => a - b);
    nums.sort((a, b) => a - b);
    console.log(f, nums);
    let res = 0;
    let mod = 1e9 + 7;
    for (let i = 0; i < n; i++) {
        res += f[i] * nums[i];
        res %= mod;
    }
    return res;
};

// Accepted --- 212ms 100.00%
const maxSumRangeQuery_modify = (nums, requests) => {
    let n = nums.length;
    let f = new Array(n + 1).fill(0);
    for (const r of requests) {
        f[r[0]]++;
        f[r[1] + 1]--;
    }
    for (let i = 0; i < n; i++) {
        f[i + 1] += f[i];
    }
    f.pop(); // difference
    f.sort((a, b) => a - b);
    nums.sort((a, b) => a - b);
    let res = 0;
    let mod = 1e9 + 7;
    for (let i = 0; i < n; i++) {
        res += f[i] * nums[i];
        res %= mod;
    }
    return res;
};

const main = () => {
    let nums = [1, 2, 3, 4, 5], requests = [[1, 3], [0, 1]];
    let nums2 = [1, 2, 3, 4, 5, 6], requests2 = [[0, 1]];
    let nums3 = [1, 2, 3, 4, 5, 10], requests3 = [[0, 2], [1, 3], [1, 1]];
    console.log(maxSumRangeQuery(nums, requests));
    console.log(maxSumRangeQuery(nums2, requests2));
    console.log(maxSumRangeQuery(nums3, requests3));

    console.log("");
    console.log(maxSumRangeQuery_modify(nums, requests));
    console.log(maxSumRangeQuery_modify(nums2, requests2));
    console.log(maxSumRangeQuery_modify(nums3, requests3));
};

main()