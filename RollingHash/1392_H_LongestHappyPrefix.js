/*
 * 09/22/22 morning
 * https://leetcode.com/problems/longest-happy-prefix/
 */

// Accepted --- 4946ms 5.26%
const longestPrefix1 = (s) => {
    let n = s.length, suf = '', pre = '', res = '';
    for (let i = 0; i < n - 1; i++) {
        suf = s[n - i - 1] + suf;
        pre += s[i];
        if (pre == suf) res = pre;
    }
    return res;
};

// Accepted --- 144ms 64.91%
const longestPrefix = (s) => {
    let pre = buildKMPTable(s), n = s.length;
    return s.slice(0, pre[n-1]);
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