/**
 * 10.31 evening
 * https://leetcode.com/contest/weekly-contest-213/problems/count-sorted-vowel-strings/
 */

// Accepted --- 80ms
const countVowelStrings = (n) => {
    let res = 1;
    for (let i = 0; i < 4; i++) { // (n + 4) * (n + 3) * (n + 2) * (n + 1)
        res *= n + 4 - i;
    }
    for (let i = 0; i < 4; i++) { // 4! = 24
        res /= i + 1;
    }
    return res;
};

// Accepted --- 80ms
const countVowelStrings_natsugiri = (n) => {
    let res = 1;
    for (let i = 0; i < 4; i++) {
        res *= n + 4 - i;
        res /= i + 1;
    }
    return res;
};

const main = () => {
    let n = 1;
    let n2 = 2;
    let n3 = 33;
    let n4 = 50;
    console.log(countVowelStrings(n));
    // console.log(countVowelStrings(n2));
    // console.log(countVowelStrings(n3));
    // console.log(countVowelStrings(n4));
};

main()