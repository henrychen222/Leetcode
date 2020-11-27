/**
 * 11.26 night
 * https://leetcode.com/problems/delete-and-earn/
 */

// Accepted --- 100ms 23.53%
const deleteAndEarn_modify = (nums) => {
    let n = 2 * nums.length;
    let sum = new Array(n).fill(0); // 数字和其总积分的映射
    for (const num of nums) {
        sum[num] += num;
    }
    // console.log(sum);
    for (let i = 2; i < n; i++) {
        sum[i] = Math.max(sum[i - 1], sum[i - 2] + sum[i]); // neighbor cannot pick, so each time, compare [i-2] + [i] with [i-1], similar to house robber
    }
    // console.log(sum);
    return sum.length == 0 ? 0 : sum[n - 1];
};

// Accepted --- 88ms 66.67%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/8176933.html
 * https://leetcode.com/problems/delete-and-earn/discuss/109891/sharing-my-simple-straight-forward-java-on-solution-explanation-included
 */
const deleteAndEarn = (nums) => {
    let n = 10001;
    let sum = new Array(n).fill(0);
    for (const num of nums) {
        sum[num] += num;
    }
    for (let i = 2; i < n; i++) {
        sum[i] = Math.max(sum[i - 1], sum[i - 2] + sum[i]);
    }
    return sum[n - 1];
};

// Accepted --- 76ms 100%
const deleteAndEarn1_refine = (nums) => {
    let n = 2 * nums.length;
    let sum = new Array(n).fill(0);
    for (const num of nums) {
        sum[num] += num;
    }
    let take = skip = 0;
    for (let i = 0; i < n; i++) {
        let takei = skip + sum[i];
        let skipi = Math.max(skip, take);
        take = takei;
        skip = skipi;
    }
    // console.log(sum);
    return Math.max(take, skip);
};

// Accepted --- 84ms 84.31%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/8176933.html
 * https://leetcode.com/problems/delete-and-earn/discuss/109895/javac-clean-code-with-explanation
 */
const deleteAndEarn1 = (nums) => {
    let n = 10001;
    let sum = new Array(n).fill(0);
    for (const num of nums) {
        sum[num] += num;
    }
    let take = skip = 0;
    for (let i = 0; i < n; i++) {
        let takei = skip + sum[i];
        let skipi = Math.max(skip, take);
        take = takei;
        skip = skipi;
    }
    return Math.max(take, skip);
};

const main = () => {
    let nums = [3, 4, 2];
    let nums2 = [2, 2, 3, 3, 3, 4];
    let debug1 = [];
    console.log(deleteAndEarn(nums));
    console.log(deleteAndEarn(nums2));
    console.log(deleteAndEarn(debug1));
};

main()