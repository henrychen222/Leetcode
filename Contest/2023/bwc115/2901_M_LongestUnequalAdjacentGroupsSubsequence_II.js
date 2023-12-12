/*
 * 10/14/23 evening
 * https://leetcode.com/contest/biweekly-contest-115/problems/longest-unequal-adjacent-groups-subsequence-ii/
 */

const pr = console.log;

// Accepted
// reference: https://leetcode.cn/circle/discuss/maICM3/  uwi kmjp hank55663
const getWordsInLongestSubsequence = (n, a, b) => {
    let dp = Array(n).fill(0), from = Array(n).fill(-1), longest = 0, res = [];
    for (let i = 0; i < n; i++) {
        dp[i] = 1;
        // from[i] = -1;
        for (let j = 0; j < i; j++) {
            if (b[i] != b[j] && dp[j] + 1 > dp[i] && ok(a[i], a[j])) {
                dp[i] = dp[j] + 1;
                from[i] = j;
            }
        }
        longest = Math.max(longest, dp[i]);
    }
    // pr(longest, from, dp)
    for (let i = 0; i < n; i++) {
        if (dp[i] == longest) {
            let cur = i;
            while (cur >= 0) {
                // pr(cur)
                res.push(a[cur]);
                cur = from[cur];
            }
            break;
        }
    }
    return res.reverse();
};

const ok = (s, t) => s.length == t.length && ham(s, t) == 1

const ham = (s, t) => {
    let n = s.length, res = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] != t[i]) res++;
    }
    return res;
};

const main = () => {
    let n = 3, a = ["bab", "dab", "cab"], b = [1, 2, 2];
    let n2 = 4, a2 = ["a", "b", "c", "d"], b2 = [1, 2, 3, 4];
    let n_debug1 = 9, a_debug1 = ["bad", "dc", "bc", "ccd", "dd", "da", "cad", "dba", "aba"], b_debug1 = [9, 7, 1, 2, 6, 8, 3, 7, 2];
    pr(getWordsInLongestSubsequence(n, a, b))
    pr(getWordsInLongestSubsequence(n2, a2, b2))
    pr(getWordsInLongestSubsequence(n_debug1, a_debug1, b_debug1)) // ["dc","dd","da"]
};

main()