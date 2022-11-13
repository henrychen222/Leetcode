/**
 * 11.21 evening
 * https://leetcode.com/contest/weekly-contest-216/problems/check-if-two-string-arrays-are-equivalent/
 */

// Accepted
const arrayStringsAreEqual = (word1, word2) => {
    let res1 = '';
    let res2 = '';
    for (const w of word1) {
        res1+=w;
    }
    for (const w of word2) {
        res2+=w;
    }
    // console.log(res1, res2);
    return res1 == res2;
};

const main = () => {
    let word1 = ["ab", "c"], word2 = ["a", "bc"];
    let  word1_2 = ["a", "cb"], word2_2 = ["ab", "c"];
    let word1_3  = ["abc", "d", "defg"], word2_3 = ["abcddefg"];
    console.log(arrayStringsAreEqual(word1, word2));
    console.log(arrayStringsAreEqual(word1_2, word2_2));
    console.log(arrayStringsAreEqual(word1_3, word2_3));
};

main()