/**
 * 6.19 evening
 * https://leetcode.com/problems/verifying-an-alien-dictionary/
 */

// need to fix
const isAlienSorted = (words, order) => {
    for (let i = 1; i < words.length; i++) {
        // console.log(words[i - 1].length);
        // console.log(words[i].length);
        if (words[i - 1].length <= words[i].length) {
            return isLexicographical(words[i - 1], words[i], order, words);
        } else {
            return isLexicographical(words[i], words[i - 1], order, words);
        }
    }
};

const isLexicographical = (short, long, order, words) => {
    let flag = true;
    if (long.includes(short) && words.indexOf(long) < words.indexOf(short)) {
        flag = false;
    }
    for (let i = 0; i < short.length; i++) {
        if (short[i] != long[i]) {
            if (order.indexOf(short[i]) < order.indexOf(long[i])) {
                flag = false;
                break;
            }
        }
    }
    return flag;
};

const main = () => {
    let words = ["hello", "leetcode"],
        order = "hlabcdefgijkmnopqrstuvwxyz";
    let words2 = ["word", "world", "row"],
        order2 = "worldabcefghijkmnpqstuvxyz";
    let words3 = ["apple", "app"],
        order3 = "abcdefghijklmnopqrstuvwxyz";
    let words_debu1 = ["fxasxpc", "dfbdrifhp", "nwzgs", "cmwqriv", "ebulyfyve", "miracx", "sxckdwzv", "dtijzluhts", "wwbmnge", "qmjwymmyox"],
        order_debug1 = "zkgwaverfimqxbnctdplsjyohu";
    console.log(isAlienSorted(words, order)); // true
    console.log(isAlienSorted(words2, order2)); // false
    console.log(isAlienSorted(words3, order3)); // false
    console.log(isAlienSorted(words_debu1, order_debug1)); // false
};

main()