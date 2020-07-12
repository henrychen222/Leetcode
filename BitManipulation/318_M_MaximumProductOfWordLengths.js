/**
 * 7.11 afternoon 7.11 evening
 * https://leetcode.com/problems/maximum-product-of-word-lengths/
 */

// Accepted --- 552ms 51.7MB 39.09%
const maxProduct = (words) => {
    words.sort((a, b) => a.length - b.length);
    let res = [];
    let max = Number.MIN_VALUE;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (!checkTwoStringHasDuplicatedChar(words[i], words[j])) {
                res.push([words[i], words[j]]);
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    if (res.length == 0) return 0;
    return max;
};

const checkTwoStringHasDuplicatedChar = (short, long) => {
    for (const i of short) {
        if (long.indexOf(i) != -1) {
            return true;
        }
    }
    return false;
};

const main = () => {
    let words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
    let words2 = ["a", "ab", "abc", "d", "cd", "bcd", "abcd"];
    let words3 = ["a", "aa", "aaa", "aaaa"];
    console.log(maxProduct(words));
    console.log(maxProduct(words2));
    console.log(maxProduct(words3));
};

main()