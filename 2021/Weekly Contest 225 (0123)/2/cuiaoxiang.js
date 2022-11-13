/**
 * 1.23 evening
 * https://leetcode.com/contest/weekly-contest-225/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/
 */

// Accepted --- 1112ms
const mi = Math.min;
let res;
const minCharacters = (a, b) => {
    res = Number.MAX_SAFE_INTEGER;
    for (let k = 0; k < 26; k++) {
        let cnt = 0;
        for (const ac of a) if (ac.charCodeAt() - 'a'.charCodeAt() != k) cnt++;
        for (const bc of b) if (bc.charCodeAt() - 'a'.charCodeAt() != k) cnt++;
        res = mi(res, cnt);
    }
    operate(a, b); // a <= k < b
    operate(b, a); // b <= k < a
    return res;
};

const operate = (a, b) => {
    for (let k = 0; k < 25; k++) {
        let cnt = 0;
        for (const ac of a) if (ac.charCodeAt() - 'a'.charCodeAt() > k) cnt++;
        for (const bc of b) if (bc.charCodeAt() - 'a'.charCodeAt() <= k) cnt++;
        res = mi(res, cnt);
    }
};

const main = () => {
    let a = "aba", b = "caa";
    let a2 = "dabadd", b2 = "cda";
    let a_debug1 = "da", b_debug1 = "cced";  // aa   cced
    let a_debug2 = "dcced", b_debug2 = "d";
    let a_debug3 = "acac", b_debug3 = "bd";
    let a_debug4 = "ba", b_debug4 = "ae";
    let a_debug5 = "ace", b_debug5 = "abe";
    console.log(minCharacters(a, b));
    console.log(minCharacters(a2, b2));
    console.log(minCharacters(a_debug1, b_debug1)); // 1
    console.log(minCharacters(a_debug2, b_debug2)); // 1
    console.log(minCharacters(a_debug3, b_debug3)); // 1
    console.log(minCharacters(a_debug4, b_debug4)); // 1
    console.log(minCharacters(a_debug5, b_debug5)); // 2
};

main()