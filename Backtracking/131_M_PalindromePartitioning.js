/**
 * 12.11 evening
 * https://leetcode.com/problems/palindrome-partitioning/
 */

// Accepted --- 244ms 5.32%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/4270008.html
 * https://leetcode.com/problems/palindrome-partitioning/discuss/41963/Java%3A-Backtracking-solution.
 */
let res;
const partition = (s) => {
    res = [];
    dfs(s, 0, []);
    return res;
};

const dfs = (s, pos, list) => {
    if (pos == s.length) {
        res.push([...list]);
        return;
    }
    for (let i = pos; i < s.length; i++) {
        if (!isPalindrome(s, pos, i)) continue;
        list.push(s.slice(pos, i + 1));
        dfs(s, i + 1, list);
        list.pop();
    }
};

// const dfs = (s, pos, list) => {  // Accepted --- 244ms
//     if (pos == s.length) {
//         res.push([...list]);
//         return;
//     }
//     for (let i = pos; i < s.length; i++) {
//         if (!isPalindrome(s, pos, i)) continue;
//         list.push(s.substr(pos, i - pos + 1)); // difference, work same as c++ substr()
//         dfs(s, i + 1, list);
//         list.pop();
//     }
// };

const isPalindrome = (s, l, r) => {
    while (l < r) {
        if (s[l] != s[r]) return false;
        l++;
        r--;
    }
    return true;
};

const main = () => {
    let s = "aab";
    let s2 = "a";
    console.log(partition(s));
    // console.log(partition(s2));
};

main()


// https://zxi.mytechroad.com/blog/searching/leetcode-131-palindrome-partitioning/  issue
// const partition = (s) => {
//     let n = s.length;
//     let dp = new Array(n + 1).fill([]);
//     for (let i = 1; i <= n; i++) {
//         for (let j = 0; j < i; j++) {
//             let r = s.substr(j, i - j);
//             console.log(r);
//             if (!isPalindrome2(r)) continue;
//             if (j == 0) {
//                 console.log("111", dp, i, r)
//                 dp[i].push(r);
//             }
//             console.log(dp)
//             for (const p of dp[j]) {
//                 dp[i].push(p);
//                 let len = dp[i].length;
//                 console.log(dp[i]);
//                 dp[i][len - 1].push(r);
//             }
//         }
//     }
//     return dp[n];
// };

// const isPalindrome2 = (s) => {
//     let n = s.length;
//     for (let i = 0; i < n >> 1; i++) {
//         if (s[i] != s[n - 1 - i]) return false;
//     }
//     return true;
// }