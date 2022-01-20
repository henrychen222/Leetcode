/**
 * 01/16/22 night
 * https://leetcode.com/problems/longest-chunked-palindrome-decomposition/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/14968169.html
 * https://zxi.mytechroad.com/blog/string/leetcode-1147-longest-chunked-palindrome-decomposition/
 * https://leetcode.com/contest/weekly-contest-148/ranking
 */

const pr = console.log;

// Accepted --- 115ms 36.36%
const longestDecomposition = (s) => {
    // pr(s);
    let n = s.length;
    if (n == 0) return 0;
    for (let i = 0; i * 2 <= n; i++) {
        let lstart = s[0], lend = s[i - 1], rstart = s[n - i], rend = s[n - 1];
        if (lstart == rstart && lend == rend) {
            let ls = s.slice(0, i), rs = s.slice(n - i);
            // pr("check", ls, rs)
            if (ls == rs) {
                return 2 + longestDecomposition(s.substr(i, n - 2 * i));
            }
        }
    }
    return 1;
};

const main = () => {
    let text = "ghiabcdefhelloadamhelloabcdefghi";
    let text2 = "merchant";
    let text3 = "antaprezatepzapreanta";
    let debug1 = "elvtoelvto";
    pr(longestDecomposition(text))
    pr(longestDecomposition(text2))
    pr(longestDecomposition(text3))
    pr(longestDecomposition(debug1))

};

main()