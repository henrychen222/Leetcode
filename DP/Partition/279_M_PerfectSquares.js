/**
 * 11.25 night  11.26 evening
 * https://leetcode.com/problems/perfect-squares/
 */

// Accepted --- 100ms 96.69%  Number theory (数论)
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/4800552.html
 * http://bookshadow.com/weblog/2015/09/09/leetcode-perfect-squares/
 */
const numSquares = (n) => {
    while (n % 4 == 0) {
        n /= 4;
    }
    if (n % 8 == 7) return 4;
    for (let a = 0; a * a <= n; a++) {
        let b = Math.floor(Math.sqrt(n - a * a));
        if (a * a + b * b == n) return !!a + !!b;
    }
    return 3;
};

// Accepted --- 188ms 45.95%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/4800552.html
 * https://leetcode.com/problems/perfect-squares/discuss/71512/Static-DP-C%2B%2B-12-ms-Python-172-ms-Ruby-384-ms
 */
const numSquares3 = (n) => {
    let dp = [0];
    while (dp.length <= n) {
        let m = dp.length;
        let square = Number.MAX_VALUE;
        for (let i = 1; i * i <= m; i++) {
            square = Math.min(square, dp[m - i * i] + 1);
        }
        dp.push(square);
        // console.log(dp);
    }
    return dp[n];
};

// Accepted --- 164ms 76.53%
// reference: https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-279-perfect-squares/
const numSquares2 = (n) => {
    let num = Number.MAX_VALUE / 2;
    let dp = new Array(n + 1).fill(num);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
            // console.log(dp);
        }
    }
    return dp[n];
};

// Accepted --- 200ms 40.00%
/**
 * reference: 
 * https://www.cnblogs.com/grandyang/p/4800552.html
 * https://leetcode.com/problems/perfect-squares/discuss/71505/Simple-Java-DP-Solution
 */
const numSquares1 = (n) => {
    let dp = new Array(n + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 1; i + j * j <= n; j++) {
            dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1);
            // console.log(dp);
        }
    }
    return dp[n];
};

const main = () => {
    let n = 12;
    let n2 = 13;
    let debug1 = 6;
    console.log(numSquares(n));
    console.log(numSquares(n2));
    console.log(numSquares(debug1)); // 3
};

main()