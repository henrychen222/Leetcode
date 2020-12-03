/**
 * 12.2 noon
 * https://leetcode.com/problems/integer-break/
 */

// Accepted --- 76ms 85.56%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/5411919.html
 * https://leetcode.com/problems/integer-break/discuss/80689/A-simple-explanation-of-the-math-part-and-a-O(n)-solution
 */
const integerBreak1 = (n) => {
    if (n == 2 || n == 3) return n - 1;
    let product = 1;
    while (n > 4) {
        product *= 3;
        n -= 3;
        // console.log(n, product);
    }
    return product * n;
};

// Accepted --- 76ms 85.56%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/5411919.html
 * https://leetcode.com/problems/integer-break/discuss/80694/Java-DP-solution
 */
const integerBreak_DP = (n) => {
    let dp = new Array(n + 1).fill(1); // dp[i]: 数字i拆分为至少两个正整数之和的最大乘积
    for (let i = 3; i <= n; i++) { // 从3开始遍历，因为n是从2开始的，而2只能拆分为两个1，乘积还是1
        for (let j = 1; j < i; j++) { // 对于每个i，需要遍历所有小于i的数字，因为这些都是潜在的拆分情况
            dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j])); // j * (i - j): 拆分为两个数字. j * dp[i - j]: 拆分为多个数字, dp[i - j]: 数字i-j任意拆分可得到的最大乘积
        }
    }
    // console.log(dp);
    return dp[n];
};

// Both Accepted --- 80ms 54.44%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/5411919.html
 * https://leetcode.com/problems/integer-break/discuss/80720/Easy-to-understand-C%2B%2B-with-explanation
 */
const integerBreak_DP2 = (n) => {
    let dp = [0, 0, 1, 2, 4, 6, 9];
    for (let i = 7; i <= n; i++) {
        dp.push(3 * dp[i - 3]);
    }
    return dp[n];
};

const integerBreak = (n) => {
    return dfs(n);
};

const dfs = (n) => {
    if (n == 2) return 1;
    if (n == 3) return 2;
    if (n == 4) return 4;
    if (n == 5) return 6;
    if (n == 6) return 9;
    return 3 * dfs(n - 3);
};

const main = () => {
    let n = 2;
    let n2 = 10;
    console.log(integerBreak(n));
    console.log(integerBreak(n2));
};

main()