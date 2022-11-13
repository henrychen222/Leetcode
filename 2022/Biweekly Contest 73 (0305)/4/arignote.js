/**
 * 03/05/22 afternoon
 * https://leetcode.com/contest/biweekly-contest-73/problems/minimum-number-of-moves-to-make-palindrome/
 */

const pr = console.log;

const minMovesToMakePalindrome = (s) => dfs(s);

// Accepted
const dfs = (s) => {
    // pr(s)
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let removed;
        if (s[i] == s[n - 1]) { // remove rightmost
            removed = s.slice(0, i) + s.slice(i + 1, -1);
            // pr("removed", i, s[i], n - 1, s[n - 1])
            return i + dfs(removed);
        } else if (s[0] == s[n - 1 - i]) { // remove leftmost
            removed = s.slice(1, n - 1 - i) + s.slice(n - i);
            // pr("removed", 0, s[0], n - 1 - i, s[n - 1 - i])
            return i + dfs(removed);
        }
    }
    return 0;
};

const main = () => {
    let s = "aabb";
    let s2 = "letelt";
    let s3 = "geeksfgeeks";
    let debug1 = "skwhhaaunskegmdtutlgtteunmuuludii"
    pr(minMovesToMakePalindrome(s))
    pr(minMovesToMakePalindrome(s2))
    pr(minMovesToMakePalindrome(s3))
    pr(minMovesToMakePalindrome(debug1)) // 163
};

main()