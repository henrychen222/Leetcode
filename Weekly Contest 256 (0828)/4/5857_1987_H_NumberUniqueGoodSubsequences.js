/**
 * 08/28/21 evening
 * https://leetcode.com/contest/weekly-contest-256/problems/number-of-unique-good-subsequences/
 */

const pr = console.log;

// https://www.geeksforgeeks.org/count-distinct-subsequences/
// don't know
const numberOfUniqueGoodSubsequences = (s) => {
    let last = Array(256).fill(-1);
    let n = s.length;
    let dp = Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
        dp[i] = 2 * dp[i - 1];
        if (last[s[i - 1]] != -1) dp[i] = dp[i] - dp[last[s[i - 1]]];
        last[s[i - 1]] = (i - 1);
    }
    return dp[n];
};

// TLE
// https://www.geeksforgeeks.org/print-subsequences-string/
let all;
const numberOfUniqueGoodSubsequences1 = (s) => {
    all = new Set();
    getAllSubsequence(s, '');
    // pr(all);
    return all.size;
};

const getAllSubsequence = (s, cur) => {
    if (s.length == 0) {
        if (cur[0] == '0' && cur.length == 1) all.add(cur);
        if (cur[0] != '0' && cur.length > 0) all.add(cur);
        return;
    }
    let next = s.slice(1);
    getAllSubsequence(next, cur + s[0]);
    getAllSubsequence(next, cur);
};

const main = () => {
    let binary = "001"
    let binary2 = "11";
    let binary3 = "101";
    let debug1 = "111001101100000001001110110101110001100";
    pr(numberOfUniqueGoodSubsequences(binary))
    pr(numberOfUniqueGoodSubsequences(binary2))
    pr(numberOfUniqueGoodSubsequences(binary3))
    pr(numberOfUniqueGoodSubsequences(debug1))
};

main()