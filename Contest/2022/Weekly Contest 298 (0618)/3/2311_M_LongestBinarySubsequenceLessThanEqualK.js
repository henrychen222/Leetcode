/**
 * 06/18/22 evening
 * https://leetcode.com/contest/weekly-contest-298/problems/longest-binary-subsequence-less-than-or-equal-to-k/
 */

const pr = console.log;

// Accepted
// reference: https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/discuss/2168423/O(n)
const longestSubsequence = (s, k) => {
    let n = s.length, cnt = 0, zero = 0, v = 0;
    for (const c of s) {
        if (c == '0') zero++;
    }
    for (let i = n - 1, bit = 0; ~i; i--, bit++) {
        let mask = 1 << bit;
        // pr("mask", mask, "v", v + mask)
        if (v + mask <= k) {
            if (s[i] == '1') {
                cnt++;
                v += mask;
            }
        } else {
            break;
        }
    }
    // pr(zero, cnt);
    return zero + cnt;
};

// Accepted
// reference: uwi
const longestSubsequence1 = (s, k) => {
    let t = k.toString(2), m = t.length, n = s.length, pre = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + (s[i] ^ 1); // calulate prefix 0's
    let res = pre[n];
    pr(t, pre);
    for (let i = 0; i < n; i++) {
        if (s[i] == '1') {
            // pr("11", res)
            res = Math.max(res, pre[i] + Math.min(m - 1, n - i));
            // pr("22", res)
            let p = 0;
            for (let j = i; j < n && p < m; j++) {
                if (t[p] == '1' && s[j] == '0') {
                    p = Math.min(m, p + (n - j));
                    break;
                }
                if (t[p] == '0' && s[j] == '1') {
                } else {
                    p++;
                }
            }
            // pr("33", res, i, p, s.slice(i, p + 1), pre[i] + p)
            res = Math.max(res, pre[i] + p); // subsequence (all 0's before i) + s[i, j] + s[j, p]
            // pr("44", res)
        }
    }
    return res;
};

const main = () => {
    let s = "1001010", k = 5;
    let s2 = "00101001", k2 = 1;
    let s_debug1 = "0", k_debug1 = 583196182;
    let s_debug2 = "0111101", k_debug2 = 518459120;
    let s_debug3 = "111100010000011101001110001111000000001011101111111110111000011111011000010101110100110110001111001001011001010011010000011111101001101000000101101001110110000111101011000101"
    k_debug3 = 11713332
    pr(longestSubsequence(s, k))
    pr(longestSubsequence(s2, k2))
    pr(longestSubsequence(s_debug1, k_debug1)) // 1
    pr(longestSubsequence(s_debug2, k_debug2)) // 7
    pr(longestSubsequence(s_debug3, k_debug3)) // 96
};

main()