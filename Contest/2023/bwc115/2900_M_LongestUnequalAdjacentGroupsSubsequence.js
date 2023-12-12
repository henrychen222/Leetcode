/*
 * 10/14/23 evening
 * https://leetcode.com/contest/biweekly-contest-115/problems/longest-unequal-adjacent-groups-subsequence-i/
 */

const pr = console.log;

// Accepted
const getWordsInLongestSubsequence = (n, a, b) => {
    let d = [], res = [];
    for (let i = 0; i < n; i++) {
        let s = [b[i]]; indice = [i];
        for (let j = i + 1; j < n; j++) {
            let last = s[s.length - 1], expect = last ^ 1;
            // pr(s, last, expect)
            if (b[j] == expect) {
                s.push(b[j]);
                indice.push(j);
            }
        }
        d.push([s, indice])
    }
    // pr(d)
    d.sort((x, y) => y[1].length - x[1].length)
    for (const idx of d[0][1]) res.push(a[idx]);
    return res;
};

const main = () => {
    let n = 3, words = ["e", "a", "b"], groups = [0, 0, 1];
    let n2 = 4, words2 = ["a", "b", "c", "d"], groups2 = [1, 0, 1, 1]
    pr(getWordsInLongestSubsequence(n, words, groups))
    pr(getWordsInLongestSubsequence(n2, words2, groups2))
};

main()