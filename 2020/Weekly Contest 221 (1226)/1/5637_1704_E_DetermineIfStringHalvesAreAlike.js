/**
 * 12.26 evening
 * https://leetcode.com/contest/weekly-contest-221
 */

// Accepted
const halvesAreAlike = (s) => {
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let left = s.slice(0, i);
        let right = s.slice(i);
        if (left.length == right.length) {
            if (ok(left, right)) return true;
        }
    }
    return false;
};

const ok = (s1, s2) => {
    let n = s1.length;
    let cnt1 = cnt2 = 0;
    for (let i = 0; i < n; i++) {
        if (isvowel(s1[i])) cnt1++;
        if (isvowel(s2[i])) cnt2++;
    }
    return cnt1 == cnt2;
};

const isvowel = (c) => {
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') return true;
    return false;
};

const main = () => {
    let s = "book";
    let s2 = "textbook";
    let s3 = "MerryChristmas";
    let s4 = "AbCdEfGh";
    console.log(halvesAreAlike(s));
    console.log(halvesAreAlike(s2));
    console.log(halvesAreAlike(s3));
    console.log(halvesAreAlike(s4));
};

main()