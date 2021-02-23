/**
 * 02/20/21 evening
 * https://leetcode.com/contest/weekly-contest-229/problems/merge-strings-alternately/
 */

const pr = console.log;

// Accepted --- 352ms
const mx = Math.max;
let s, memo;
const longestPalindrome = (word1, word2) => {
    s = word1 + word2;
    let n = s.length;
    memo = initialize2DArrayNew(n, n);
    ni = word1.length;
    nj = word2.length;
    let res = 0;
    for (let i = 0; i < ni; i++) {
        for (let j = 0; j < nj; j++) {
            if (word1[i] == word2[j]) {
                res = mx(res, dfs(i + 1, ni + j - 1) + 2);
            }
        }
    }
    return res;
};

const dfs = (i, j) => {
    if (i > j) return 0;
    if (i == j) return 1;
    if (memo[i][j]) return memo[i][j];
    if (s[i] == s[j]) return memo[i][j] = dfs(i + 1, j - 1) + 2;
    return memo[i][j] = mx(dfs(i + 1, j), dfs(i, j - 1));
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let word1 = "cacb", word2 = "cbba";
    let word1_2 = "ab", word2_2 = "ab";
    let word1_3 = "aa", word2_3 = "bb";
    let word1_debug1 = "aa", word2_debug1 = "ba";
    pr(longestPalindrome(word1, word2));  // 5
    pr(longestPalindrome(word1_2, word2_2)); // 3
    pr(longestPalindrome(word1_3, word2_3)); // 0
    pr(longestPalindrome(word1_debug1, word2_debug1)); // 3
};

main()