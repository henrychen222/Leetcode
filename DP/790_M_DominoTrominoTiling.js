/**
 * 11.13 evening
 * https://leetcode.com/problems/domino-and-tromino-tiling/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/9179556.html
 * https://leetcode.com/problems/domino-and-tromino-tiling/discuss/116513/Java-solution-DP
 * https://leetcode.com/problems/domino-and-tromino-tiling/discuss/116581/Detail-and-explanation-of-O(n)-solution-why-dpn2*dn-1+dpn-3
 */

// Accepted --- 88ms 72.73%
const mod = 1e9 + 7;
const numTilings = (N) => {
    let dp = new Array(N).fill(0);
    dp[0] = dp[1] = 1;
    dp[2] = 2;
    for (i = 3; i <= N; i++) {
        dp[i] = (dp[i - 1] * 2 + dp[i - 3]) % mod;
    }
    // console.log(dp);
    return dp[N];
};

const main = () => {
    let N = 3;
    let N2 = 4;
    let debug1 = 50;
    console.log(numTilings(N));
    console.log(numTilings(N2));
    console.log(numTilings(debug1)); // 451995198
};

main()