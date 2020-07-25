/**
 * 7.24 evening
 * reference:
 * https://github.com/henrychen222/Books/blob/master/Data%20Structures%20and%20Algorithms/JavaScript%20Data%20Structures%20and%20Algorithms.pdf (Page 311)
 * https://gist.github.com/blasten/d42bd0d814b7df1addea
 * https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/
 * http://benwendt.ca/articles/the-knuth-morris-pratt-algorithm-implemented-in-javascript/
 * https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/knuth-morris-pratt/knuthMorrisPratt.js
 */
const longestPrefix = (s) => {
    let prefixTable = new Array(s.length);
    let maxPrefix = 0;
    prefixTable[0] = 0; // start the prefix at 0
    for (let i = 1; i < s.length; i++) {
        // decrement the prefix value as long as there are mismatches
        while (s[i] != s[maxPrefix] && maxPrefix > 0) {
            maxPrefix = prefixTable[maxPrefix - 1];
        }
        if (s[maxPrefix] == s[i]) maxPrefix++; // strings match, can update it
        prefixTable[i] = maxPrefix; // set the prefix
    }
    return prefixTable;
};

const KMP = (s, pattern) => {
    let prefixTable = longestPrefix(s); // build the prefix table
    let patternIdx = 0;
    let sIdx = 0;
    while (sIdx < s.length) {
        if (s[sIdx] != pattern[patternIdx]) { // Case 1: the characters are different
            if (patternIdx != 0) {
                patternIdx = prefixTable[patternIdx - 1]; // use the prefix table if possible
            } else {
                sIdx++; // increment the str index to next character
            }
        } else { // Case 2: the characters are same
            sIdx++;
            patternIdx++;
        }
        if (patternIdx == pattern.length) return true; // found the pattern
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