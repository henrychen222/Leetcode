/**
 * 10.31 evening
 * https://leetcode.com/contest/weekly-contest-213/problems/count-sorted-vowel-strings/
 */

// Accepted --- 176ms
// https://leetcode.com/contest/weekly-contest-213/ranking/148/
const countVowelStrings = (n) => {
    return dfs(5, n);
};

const dfs = (cnt, n) => {
    if (n == 0) return 1;
    let res = 0;
    while (cnt > 0) {
        res += dfs(cnt, n - 1);
        cnt--;
    }
    return res;
};


const main = () => {
    let n = 1;
    let n2 = 2;
    let n3 = 33;
    let n4 = 50;
    console.log(countVowelStrings(n));
    console.log(countVowelStrings(n2));
    console.log(countVowelStrings(n3));
    console.log(countVowelStrings(n4));
};

main()