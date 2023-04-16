/**
 * 02/20/21 evening
 * https://leetcode.com/contest/weekly-contest-229/problems/merge-strings-alternately/
 */

/////////////////////////////// pre-define /////////////////////////
const pr = console.log;
const mi = Math.min;
const mx = Math.max;
/////////////////////////////////////////////////////////////////////

// Accepted
const mergeAlternately = (word1, word2) => {
    let n1 = word1.length;
    let n2 = word2.length;
    let n = Math.max(n1, n2);
    let res = "";
    let i = 0;
    for (; i < n; i++) {
        if (word1[i] == undefined || word2[i] == undefined) break;
        res += word1[i];
        res += word2[i];
    }
    // console.log(i)
    let rest = "";
    if (i == n1) {
        rest = word2.slice(i);
    } else if (i == n2) {
        rest = word1.slice(i);
    }
    // console.log(rest)
    return res + rest;
};
const main = () => {
    let word1 = "abc", word2 = "pqr";
    let word1_2 = "ab", word2_2 = "pqrs";
    let word1_3 = "abcd", word2_3 = "pq";
    pr(mergeAlternately(word1, word2)); // "apbqcr"
    pr(mergeAlternately(word1_2, word2_2)); // "apbqrs"
    pr(mergeAlternately(word1_3, word2_3)); // "apbqcd"
};

main()