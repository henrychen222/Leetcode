/**
 * 7.20 night
 * https://leetcode.com/problems/reverse-words-in-a-string/
 */

// Accepted --- 80ms 37.5MB 41.66%
const reverseWords = (s) => {
    s = s.trim();
    let arr = [];
    for (const i of s.split(" ")) {
        if (i != '') {
            arr.push(i);
        }
    }
    return arr.reverse().join(" ");
};

// Accepted --- 108ms 37.4MB 10.91%
const reverseWords2 = (s) => {
    let arr = s.trim().split(" ");
    let res = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] != '') {
            res += arr[i] + ' ';
        }
    }
    return res.trim();
};

// Accepted --- 112ms 37.3MB 8.71%
const reverseWords3 = (s) => {
    let arr = s.trim().split(" ");
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] != '') {
            res.push(arr[i]);
        }
    }
    return res.join(" ");
};

const main = () => {
    let s = "the sky is blue";
    let s2 = "  hello world!  ";
    let s3 = "a good   example";
    console.log(reverseWords(s));
    console.log(reverseWords(s2));
    console.log(reverseWords(s3));

    console.log("");
    console.log(reverseWords2(s));
    console.log(reverseWords2(s2));
    console.log(reverseWords2(s3));

    console.log("");
    console.log(reverseWords3(s));
    console.log(reverseWords3(s2));
    console.log(reverseWords3(s3));
};

main()