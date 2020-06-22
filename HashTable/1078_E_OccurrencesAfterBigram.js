/**
 * 6.21 evening
 * https://leetcode.com/problems/occurrences-after-bigram/
 */

// Accepted --- 68ms 33MB 31.85%
const findOcurrences = (text, first, second) => {
    let res = [];
    let arr = text.split(" ");
    for (let i = 2; i < arr.length; i++) {
        if (arr[i - 2] == first && arr[i - 1] == second) {
            res.push(arr[i]);
        }
    }
    return res;
};

const main = () => {
    let text = "alice is a good girl she is a good student",
        first = "a",
        second = "good";
    let text2 = "we will we will rock you",
        first2 = "we",
        second2 = "will";
    let text_debug1 = "ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk",
        first_debug1 = "lnlqhmaohv",
        second_debug1 = "ypkk";
    console.log(findOcurrences(text, first, second));
    console.log(findOcurrences(text2, first2, second2));
    console.log(findOcurrences(text_debug1, first_debug1, second_debug1));
};


main()