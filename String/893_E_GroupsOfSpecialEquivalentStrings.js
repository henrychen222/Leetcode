/**
 * 6.1 night
 * https://leetcode.com/problems/groups-of-special-equivalent-strings/
 */

// need to fix
const numSpecialEquivGroups = (A) => {
    let res = []
    for (let i = 0; i < A.length; i++) {
        if (check(A[i], A[i + 1])) {
            res.push(A[i]);
            res.push(A[i + 1]);
        }
    }
    console.log(res);
};

const check = (s, t) => {
    for (let i = 0; i < s.length; i = i + 2) { // Even
        for (let j = 2; j < j.length; j = j + 2) {
            let temp = s[i];
            s = s.replace(s[i], s[j]);
            s = s.replace(s[j], temp);
        }
    }
    for (let i = 1; i < s.length; i = i + 2) { // Odd
        for (let j = 3; j < j.length; j = j + 2) {
            let temp = s[i];
            s = s.replace(s[i], s[j]);
            s = s.replace(s[j], temp);
        }
    }
    if (s == t) {
        return true;
    }
    return false;
};

const main = () => {
    let A = ["abcd", "cdab", "cbad", "xyzz", "zzxy", "zzyx"];
    let A2 = ["abc", "acb", "bac", "bca", "cab", "cba"];
    console.log(numSpecialEquivGroups(A));
};

main()