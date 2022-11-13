/*
 * 09/22/22 night
 * https://leetcode.com/problems/shortest-palindrome/
 */

const pr = console.log;

const reverse = (s) => { let res = ""; for (let i = s.length - 1; ~i; i--) { res += s[i]; } return res; };

// Accepted --- 280ms 13.33%
// reference: https://leetcode.com/problems/shortest-palindrome/discuss/60099/AC-in-288-ms-simple-brute-force
const shortestPalindrome1 = (s) => {
    let t = reverse(s), n = s.length;
    // pr(s, t);
    for (let i = 0; i < n; i++) {
        let L = t.slice(0, i), R = t.slice(i);
        if (s.startsWith(R)) return L + s;
    }
    return "";
};

const shortestPalindrome = (s) => {
    let rev = reverse(s), t = s + '#' + rev, table = buildKMPTable(t);
    // pr(t, table)
    let L = rev.slice(0, s.length - table.pop());
    // pr(L)
    return L + s;
};

const buildKMPTable = (s) => {
    let n = s.length, pre = Array(n), l = 0;
    pre[0] = 0;
    for (let i = 1; i < n; i++) {
        while (s[i] != s[l] && l > 0) {
            l = pre[l - 1];
        }
        if (s[l] == s[i]) l++;
        pre[i] = l;
    }
    return pre;
};

const main = () => {
    let s = "aacecaaa";
    let s2 = "abcd";
    let debug1 = "";
    pr(shortestPalindrome(s))
    pr(shortestPalindrome(s2))
    pr(shortestPalindrome(debug1))
};

main()