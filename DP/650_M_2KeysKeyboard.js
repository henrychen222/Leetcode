/**
 * 11.30 evening
 * https://leetcode.com/problems/2-keys-keyboard/
 */

// Accepted --- 76ms 93.59%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/7439616.html
 * https://leetcode.com/problems/2-keys-keyboard/discuss/105928/JavaC%2B%2B-Clean-Code-with-Explanation-4-lines-No-DP
 */
const minSteps1 = (n) => {
    return dfs(n);
};

const dfs = (n) => {
    if (n == 1) return 0;
    let res = n;
    for (let i = n - 1; i > 1; i--) {
        if (n % i == 0) {
            res = Math.min(res, dfs(n / i) + i);
        }
    }
    return res;
};


// Accepted --- 136ms 16.67%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/7439616.html
 * https://leetcode.com/problems/2-keys-keyboard/discuss/105899/Java-DP-Solution
 */
const minSteps_DP = (n) => {
    let dp = new Array(n + 1).fill(0);
    for (let i = 2; i <= n; i++) {
        dp[i] = i;
        for (let j = i - 1; j > 1; j--) {
            if (i % j == 0) {
                dp[i] = Math.min(dp[i], i / j + dp[j]);
            }
        }
    }
    return dp[n];
};

// Accepted --- 104ms 41.03%
const minSteps_refine = (n) => {
    let dp = new Array(n + 1).fill(0);
    for (let i = 2; i <= n; i++) {
        dp[i] = i;
        for (let j = i - 1; j > 1; j--) {
            if (i % j == 0) {
                dp[i] = Math.min(dp[i], i / j + dp[j]);
                break;
            }
        }
    }
    return dp[n];
};

// 80ms 79.49%
const minSteps = (n) => {
    let res = 0;
    for (let i = 2; i <= n; i++) {
        while (n % i == 0) {
            res += i;
            n /= i;
        }
    }
    return res;
};

const main = () => {
    let n = 1;
    let n2 = 2;
    let n3 = 3;
    let n4 = 4;
    let n5 = 5;
    let n6 = 6;
    let n7 = 7;
    let n8 = 8;
    let n9 = 9
    let n10 = 10
    console.log(minSteps(n)); // 0
    console.log(minSteps(n2)); // 2   A-> AA
    console.log(minSteps(n3)); // 3   A-> AA -> AAA
    console.log(minSteps(n4)); // 4   A-> AA -> AAA -> AAAA   A-> AA -> AA -> AAAA
    console.log(minSteps(n5)); // 5  
    console.log(minSteps(n6)); // 5
    console.log(minSteps(n7)); // 7
    console.log(minSteps(n8)); // 6
    console.log(minSteps(n9)); // 6
    console.log(minSteps(n10)); // 7
};

main()