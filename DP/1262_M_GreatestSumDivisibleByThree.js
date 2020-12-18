/**
 * 12.16 morning
 * https://leetcode.com/problems/greatest-sum-divisible-by-three/
 */

// Accepted --- 128ms 42.86%
/**
 * reference:
 * https://leetcode.com/problems/greatest-sum-divisible-by-three/discuss/431077/JavaC%2B%2BPython-One-Pass-O(1)-space
 * https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-1262-greatest-sum-divisible-by-three/
 */
const maxSumDivThree = (nums) => {
    let dp = Array(3).fill(0); // dp[i]: current maximum possible sum that sum % 3 == i
    for (const num of nums) {
        for (const i of [...dp]) {
            dp[(num + i) % 3] = Math.max(dp[(num + i) % 3], num + i);
            // console.log(dp);
        }
    }
    return dp[0];
};

const main = () => {
    let nums = [3, 6, 5, 1, 8];
    let nums2 = [4];
    let nums3 = [1, 2, 3, 4, 4];
    console.log(maxSumDivThree(nums));
    console.log(maxSumDivThree(nums2));
    console.log(maxSumDivThree(nums3));
};

main()