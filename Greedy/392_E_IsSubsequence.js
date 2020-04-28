/**
 * 4.27 evening
 * https://leetcode.com/problems/is-subsequence/
 */

/**
 * Accepted --- 72ms 38.6 MB 50.30%
 * https://www.acwing.com/solution/LeetCode/content/6095/
 */
const isSubsequence_acwing = (s, t) => {
    // Greedy + double pointer: i -> t, j -> s
    let j = 0;
    for (let i = 0; i < t.length; i++) {
        if (j < s.length && s[j] == t[i]) {
            j++;
        }
    }
    return j == s.length;
};

/**
 * Accepted --- 60ms 38.8MB 92.53%
 * https://www.cnblogs.com/grandyang/p/5842033.html
 */
const isSubsequence_cnblog = (s, t) => {
    // Greedy + double pointer: i -> t, j -> s
    let j = 0;
    for (let i = 0; i < t.length && j < s.length; i++) {
        if (s[j] == t[i]) { // 然后如果字符相等，则i和j自增1，反之只有i自增1
            j++;
        }
    }
    return j == s.length; // 最后看j是否等于s的长度，等于说明s已经遍历完了，而且字符都有在t中出现过
};

// Wrong
const isSubsequence = (s, t) => {
    // check if s is subsequence of t
    let sub = "";
    for (const parent of t) {
        for (const child of s) {
            if (child == parent) {
                sub = sub.concat(child);
            }
        }
    }
    // console.log(sub);
    if (sub == s) {
        return true;
    }
    return false;
};

const main = () => {
    let s = "abc",
        t = "ahbgdc";
    let s2 = "axc",
        t2 = "ahbgdc";
    console.log(isSubsequence(s, t)); // true 
    console.log(isSubsequence(s2, t2)); // false

    let s_debug1 = "leeeeetcode",
        t_debug1 = "yyylyyyyeyyeyyyeyyyyeyyyeyyytyyycyyyyoyyydyyyeyyy";
    console.log(isSubsequence(s_debug1, t_debug1)); // true

    /*******************************************************/
    console.log("");
    console.log(isSubsequence_acwing(s, t));
    console.log(isSubsequence_acwing(s2, t2));
    console.log(isSubsequence_acwing(s_debug1, t_debug1));

    console.log("");
    console.log(isSubsequence_cnblog(s, t));
    console.log(isSubsequence_cnblog(s2, t2));
    console.log(isSubsequence_cnblog(s_debug1, t_debug1));
};

main()