/**
 * 11.19 night
 * https://leetcode.com/problems/partition-to-k-equal-sum-subsets/
 */

// Accepted --- 68ms 99.41%
const canPartitionKSubsets_refine = (nums, k) => {
    let n = nums.length;
    let sum = nums.reduce((a, b) => a + b);
    if (sum % k != 0) return false;
    nums.sort((a, b) => b - a); // add
    let visited = new Array(n).fill(false);
    return dfs(nums, k, sum / k, 0, 0, visited);
};

const dfs = (nums, k, target, startIdx, curSum, visited) => {
    if (k == 1) return true;
    if (curSum > target) return false; // add
    if (curSum == target) return dfs(nums, k - 1, target, 0, 0, visited);
    for (let i = startIdx; i < nums.length; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        if (dfs(nums, k, target, i + 1, curSum + nums[i], visited)) return true;
        visited[i] = false;
    }
    return false;
};

// Accepted --- 84ms 78.24%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/7733098.html
 */
const canPartitionKSubsets = (nums, k) => {
    let n = nums.length;
    let sum = nums.reduce((a, b) => a + b);
    if (sum % k != 0) return false;
    // nums.sort((a, b) => b - a); // only add this line 96ms 40.00%
    let visited = new Array(n).fill(false);
    return dfs2(nums, k, sum / k, 0, 0, visited);
};

const dfs2 = (nums, k, target, startIdx, curSum, visited) => {
    if (k == 1) return true;
    // if (curSum > target) return false;  // only add this line still the same 84ms 78.24%
    if (curSum == target) return dfs2(nums, k - 1, target, 0, 0, visited);
    for (let i = startIdx; i < nums.length; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        if (dfs2(nums, k, target, i + 1, curSum + nums[i], visited)) return true;
        visited[i] = false;
    }
    return false;
};

// Accepted --- 84ms 78.24%
/**
 * reference: 
 * https://www.geeksforgeeks.org/partition-set-k-subsets-equal-sum/
 * https://leetcode.com/problems/partition-to-k-equal-sum-subsets/discuss/108741/Solution-with-Reference
 */
let n;
const canPartitionKSubsets1 = (nums, k) => {
    n = nums.length;
    if (k == 1) return true;
    if (n < k) return false;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }
    if (sum % k != 0) return false;
    let target = parseInt(sum / k);
    let subsetSum = new Array(k).fill(0);
    let visited = new Array(n).fill(false);
    for (let i = 0; i < k; i++) {
        subsetSum[i] = 0;
    }
    for (let i = 0; i < n; i++) {
        visited[i] = false;
    }
    subsetSum[0] = nums[n - 1];
    visited[n - 1] = true;
    return dfs1(nums, subsetSum, visited, target, k, 0, n - 1);
};

const dfs1 = (nums, subsetSum, visited, target, k, startIdx, endIdx) => {
    if (subsetSum[startIdx] == target) {
        if (startIdx == k - 2) return true;
        return dfs1(nums, subsetSum, visited, target, k, startIdx + 1, n - 1);
    }
    for (let i = endIdx; i >= 0; i--) {
        if (visited[i]) continue;
        let tmp = subsetSum[startIdx] + nums[i];
        if (tmp <= target) {
            visited[i] = true;
            subsetSum[startIdx] += nums[i];
            let next = dfs1(nums, subsetSum, visited, target, k, startIdx, i - 1);
            visited[i] = false;
            subsetSum[startIdx] -= nums[i];
            if (next) return true;
        }
    }
    // console.log(subsetSum, visited);
    return false;
};

const main = () => {
    let nums = [4, 3, 2, 3, 5, 2, 1],
        k = 4;
    console.log(canPartitionKSubsets(nums, k));
};

main()