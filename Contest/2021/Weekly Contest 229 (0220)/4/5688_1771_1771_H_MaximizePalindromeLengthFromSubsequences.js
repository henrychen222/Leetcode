/**
 * 02/20/21 evening
 * https://leetcode.com/contest/weekly-contest-229/problems/merge-strings-alternately/
 */

/////////////////////////////// pre-define /////////////////////////
const pr = console.log;
const mx = Math.max;
/////////////////////////////////////////////////////////////////////

// WA
let ni, nj
const longestPalindrome = (word1, word2) => {
    let s = word1 + word2;
    ni = word1.length;
    nj = word2.length;
    let n = s.length;
    // pr(ni, nj, n)
    return dfs(s, 0, n - 1);
};

// https://www.techiedelight.com/longest-palindromic-subsequence-using-dynamic-programming/
const dfs = (X, i, j) => {
    if (i > j) return 0;
    if (i == j) return 1;
    if (i >= ni || j < ni) return 0;
    if (X[i] == X[j]) return dfs(X, i + 1, j - 1) + 2;
    return mx(dfs(X, i, j - 1), dfs(X, i + 1, j));
};

const main = () => {
    let word1 = "cacb", word2 = "cbba";
    let word1_2 = "ab", word2_2 = "ab";
    let word1_3 = "aa", word2_3 = "bb";
    let word1_debug1 = "aa", word2_debug1 =  "ba";
    pr(longestPalindrome(word1, word2));  // 5
    pr(longestPalindrome(word1_2, word2_2)); // 3
    pr(longestPalindrome(word1_3, word2_3)); // 0
    pr(longestPalindrome(word1_debug1, word2_debug1)); // 3
};

main()