/**
 * 7.24 evening
 * reference:
 * https://github.com/henrychen222/Books/blob/master/Data%20Structures%20and%20Algorithms/JavaScript%20Data%20Structures%20and%20Algorithms.pdf (Page 311)
 * https://gist.github.com/blasten/d42bd0d814b7df1addea
 * https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/
 * http://benwendt.ca/articles/the-knuth-morris-pratt-algorithm-implemented-in-javascript/
 * https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/knuth-morris-pratt/knuthMorrisPratt.js
 * 
 * example problem:
 * https://leetcode.com/problems/longest-happy-prefix/
 */
const buildKMPTable = (s) => { // longest prefix which is also the suffix of each substring (0, i)
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

const KMP = (s, pattern) => {
    let pre = buildKMPTable(s), i = 0, j = 0, n = s.length;
    while (i < n) {
        if (s[i] != pattern[j]) {
            if (j != 0) {
                j = pre[j - 1];
            } else {
                i++;
            }
        } else {
            i++;
            j++;
        }
        if (j == pattern.length) return true;
    }
    return false;
};

const main = () => {
    console.log(longestPrefix('ababaca')); // [0, 0, 1, 2, 3, 0, 1]
    console.log(KMP('ababacaababacaababacaababaca', 'ababaca')); //  true
    console.log(KMP('sammiebae', 'bae')); //  true
    console.log(KMP('sammiebae', 'sammie')); //  true
    console.log(KMP('sammiebae', 'sammiebaee')); // false
}

main()