/**
 * 10.31 evening
 * https://leetcode.com/contest/weekly-contest-213/problems/count-sorted-vowel-strings/
 */



const countVowelStrings = (n) => {
    round = n - 1;
    res = 0;
    dfs(5, 0);
    return res;
};

let res = 0;
let round;
const countVowelStrings = (n) => {
    round = n - 1;
    res = 0;
    dfs(5, 0);
    return res;
};

const dfs = (each, t) => {
    console.log(res, t);
    if (t == round) return;
    for (let i = each; i >= 1; i--) {
        res += i;
    }
    t++;
    // dfs(i, t);
};

const main = () => {
    let n = 1;
    let n2 = 2;
    let n3 = 33;
    let n4 = 50;
    // console.log(countVowelStrings(n));  // 5
    // console.log(countVowelStrings(n2)); // (5 + 4 + 3 + 2 + 1)
    console.log(countVowelStrings(n3)); // (5 + 4 + 3 + 2 + 1) + (4 + 3 + 2 + 1) + (3 + 2 + 1) + (2 + 1) + 1
    // console.log(countVowelStrings(n4));
};

main()