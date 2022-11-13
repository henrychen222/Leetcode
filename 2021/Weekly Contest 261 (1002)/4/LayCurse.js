/**
 * 10/02/21 night
 * https://leetcode.com/contest/weekly-contest-261/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/
 */

const pr = console.log;

// Accepted --- 996ms
// Accepted --- 928ms
const smallestSubsequence = (s, k, letter, repetition) => {
    let n = s.length, st = '', rest = 0, letterCnt = 0;
    let visit = Array(n + 1).fill(0);
    for (const c of s) {
        if (c == letter) rest++;
    }
    for (let i = 0; i < n; i++) {
        while (1) {
            if (st.length == 0) break;
            if (st.length + (n - i) <= k) break;
            if (st[st.length - 1] <= s[i]) break;
            if (st[st.length - 1] == letter && letterCnt - 1 + rest < repetition) break;
            if (st[st.length - 1] == letter) letterCnt--;
            st = st.slice(0, st.length - 1);
        }
        st += s[i];
        if (s[i] == letter) { // fuck here s[i] not st[i]
            letterCnt++;
            rest--;
        }
        // pr(st, 'letterCnt', letterCnt, 'rest', rest);
    }
    let pos = letterCnt - repetition;
    letterCnt = st.length - k;
    for (let i = st.length - 1; ~i; i--) {
        if (letterCnt > 0 && pos > 0 && st[i] == letter) {
            visit[i] = 1;
            letterCnt--;
            pos--;
        }
        if (letterCnt > 0 && st[i] != letter) {
            visit[i] = 1;
            letterCnt--;
        }
    }
    let res = '';
    for (let i = 0; i < st.length; i++) {
        if (!visit[i]) res += st[i];
    }
    return res;
};

const main = () => {
    let s = "leet", k = 3, letter = "e", repetition = 1;
    let s2 = "leetcode", k2 = 4, letter2 = "e", repetition2 = 2;
    let s3 = "bb", k3 = 2, letter3 = "b", repetition3 = 2;
    let s_debug1 = "aaabbbcccddd", k_debug1 = 3, letter_debug1 = "b", repetition_debug1 = 2;
    let s_debug2 = "adffhjfmmmmorsfff", k_debug2 = 6, letter_debug2 = "f", repetition_debug2 = 5;
    pr(smallestSubsequence(s, k, letter, repetition))
    pr(smallestSubsequence(s2, k2, letter2, repetition2))
    pr(smallestSubsequence(s3, k3, letter3, repetition3))
    pr(smallestSubsequence(s_debug1, k_debug1, letter_debug1, repetition_debug1)) // abb
    pr(smallestSubsequence(s_debug2, k_debug2, letter_debug2, repetition_debug2)) // "afffff"
};


main()


// pr('a' < 'b', 'a' > 'b')