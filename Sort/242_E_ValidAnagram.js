/**
 * 5.31 evening
 * https://leetcode.com/problems/valid-anagram/
 */

// Accepted --- 116ms 44MB 17.14%
const isAnagram = (s, t) => {
    sArr = s.split("");
    tArr = t.split("");
    sArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    tArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    // console.log(sArr.join(""));
    // console.log(tArr.join(""));
    return sArr.join("") == tArr.join("");
};

// Accepted --- 212ms 43.3MB 6.21%    07/31 night
const isAnagram = (s, t) => {
    return s.split("").sort().join("") == t.split("").sort().join("");
};

const main = () => {
    let s = "anagram",
        t = "nagaram";
    let s2 = "rat",
        t2 = "car";
    console.log(isAnagram(s, t))
    console.log(isAnagram(s2, t2))
};

main()