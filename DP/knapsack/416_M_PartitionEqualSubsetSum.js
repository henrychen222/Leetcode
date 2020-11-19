/**
 * 11.18 night
 * https://leetcode.com/problems/partition-equal-subset-sum/
 */

// Accepted --- 76ms 100%
const canPartition_bitset_refine = (nums) => {
    let sum = 0n;
    let bits = 1n;
    for (const num of nums) {
        let tmp = BigInt(num);
        sum += tmp;
        bits |= bits << tmp;
    }
    let one = sum % 2n == 0n;
    let two = bits >> (sum >> 1n);
    return one && (two % 2n == 1n);
};

// Accepted --- 76ms 100%
// reference: https://leetcode.com/problems/partition-equal-subset-sum/discuss/90590/Simple-C++-4-line-solution-using-a-bitset
const canPartition_bitset = (nums) => {
    let sum = 0n;
    let bits = 1n;
    for (const num of nums) {
        let tmp = BigInt(num);
        sum += tmp;
        bits |= bits << tmp;
    }
    // console.log(bits, sum);
    let one = sum % 2n == 0n;
    let two = bits >> (sum >> 1n);
    // console.log(one, two, two % 2n == 1n);
    two = two % 2n == 1n;
    return one && two;
    // return (sum % 2 == 0) && (bits >> (sum >> 1)) & 1 == 1;
    // return !(sum & 1) && ((bits >> (sum >> 1)) & 1 == 1);
};

// Accepted --- 120ms 72.88%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/5951422.html
 * https://leetcode.com/problems/partition-equal-subset-sum/discuss/90588/Concise-C++-Solution-summary-with-DFS-DP-BIT
 */
const canPartition_1D_DP = (nums) => {
    let sum = nums.reduce((a, b) => a + b);
    if (sum % 2 == 1) return false;
    sum >>= 1;
    let dp = new Array(sum + 1).fill(false);
    dp[0] = true;
    for (const num of nums) {
        for (let i = sum; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }
    // console.log(dp);
    return dp[sum];
};

// Accepted --- 332ms 20.77%
/**
 * reference:
 * https://www.geeksforgeeks.org/partition-problem-dp-18/ (follow)
 * https://leetcode.com/problems/partition-equal-subset-sum/discuss/90592/01-knapsack-detailed-explanation
 */
const canPartition_2D_DP = (nums) => {
    let n = nums.length;
    let sum = nums.reduce((a, b) => a + b);
    if (sum % 2 == 1) return false; // another way if (sum & 1 == 1) return false;
    sum >>= 1;
    let dp = initialize2DArrayNew(sum + 1, n + 1);
    for (let j = 0; j <= n; j++) {
        dp[0][j] = true;
    }
    for (i = 1; i <= sum; i++) {
        dp[i][0] == false;
    }
    for (i = 1; i <= sum; i++) {
        for (j = 1; j <= n; j++) {
            dp[i][j] = dp[i][j - 1];
            if (i >= nums[j - 1]) {
                dp[i][j] = dp[i][j] || dp[i - nums[j - 1]][j - 1];
            }
        }
    }
    return dp[sum][n];
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(false);
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let nums = [1, 5, 11, 5];
    let nums2 = [1, 2, 3, 5];
    let debug1 = [100];
    let debug2 = [14, 9, 8, 4, 3, 2];
    let debug3 = [23, 13, 11, 7, 6, 5, 5];
    let debug4 = [100, 100, 100, 100, 100, 100, 100, 100];
    let debug5 = [1, 2, 5]
    console.log(canPartition(nums));
    console.log(canPartition(nums2));
    console.log(canPartition(debug1));
    console.log(canPartition(debug2)); // true
    console.log(canPartition(debug3)); // true
    console.log(canPartition(debug4)); // true
    console.log(canPartition(debug5)); // false
};

main()


// TLE  https://leetcode.com/problems/partition-equal-subset-sum/discuss/152446/Simple-Java-Backtrack-Solution-beats-99.76
// const canPartition = (nums) => {
//     let n = nums.length;
//     let sum = 0;
//     for (const num of nums) {
//         sum += num;
//     }
//     if (sum % 2 == 1) return false;
//     nums.sort((a, b) => a - b);
//     if (nums[n - 1] > sum >> 1) return false;
//     return dfs(nums, sum >> 1, n - 1);
// };

// const dfs = (nums, sum, pos) => {
//     if (sum == 0) return true;
//     for (let i = pos; ~i; i--) {
//         if (sum - nums[i] >= 0 && dfs(nums, sum - nums[i], i - 1)) return true;
//     }
//     return false;
// };



// TLE
// reference: https://leetcode.com/problems/partition-equal-subset-sum/discuss/90682/Java-solution-with-comments-using-dfs
// let memo;
// const canPartition = (nums) => {
//     memo = new Map();
//     let sum = 0;
//     for (const num of nums) {
//         memo.set(num, (memo.get(num) + 1) || 1);
//         sum += num;
//     }
//     // console.log(memo, sum);
//     if (sum % 2 == 1) return false;
//     return dfs(sum >> 1);
// };

// const dfs = (target) => {
//     // if (memo.has(target) && memo.has(target) > 0) return true; fuck here has(), should be get()
//     if (memo.has(target) && memo.get(target) > 0) return true;
//     for (const k of memo.keys()) {
//         if (k < target && memo.get(k) > 0) {
//             memo.set(k, memo.get(k) - 1);
//             if (dfs(target - k)) return true;
//             memo.set(k, memo.get(k) + 1);
//         }
//     }
//     return false;
// };