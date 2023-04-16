/**
 * 10/02/21 night
 * https://leetcode.com/contest/weekly-contest-261/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/
 */

const pr = console.log;


let s, k, rep, res, letter, se;
const smallestSubsequence = (S, K, Letter, repetition) => {
    let max = S.split("").sort((x, y) => y.localeCompare(x)).join("");
    s = S, k = K, res = '', rep = repetition, letter = Letter, se = new Set();
    pr(max, rep);
    dfs('');
    return res;
};

const dfs = (cur) => {
    if (!ok(cur)) return;
    pr("")
    pr("cur", cur, ok(cur));
    // se.add(cur)
    if (cur.length < res.length || (res.length == cur.length && cur < res)) res = cur;
    for (let i = 0; i < 26; i++) {
        dfs(cur + String.fromCharCode(97 + i)); // generate subsequence based from a-z
    }
};


// const ok = (cur) => {
//     pr("check", cur, s, letter, rep)
//     if (cur.length == 0) return true;
//     let i = 0, j = 0, cnt = 0;
//     while (i < s.length && j < cur.length) {
//         if (s[i] == cur[j]) {
//             if (cur[j] == letter) cnt++;
//             i++; 
//             j++;
//         }
//         else { i++; }
//     }
//     pr('cnt', cnt)
//     return j == cur.length && cnt >= rep;
// };

const ok = (cur) => { // check subsequence can be generated from s
    pr("check", cur, s, letter, rep)
    if (cur.length == 0) return true;
    let pos = 0, letterCnt = 0, cnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == cur[pos]) { // char match
            if (cur[pos] == letter) letterCnt++;
            pos++;
        }
        if (pos == cur.length) { // subsequence match
            if (letterCnt >= rep) cnt++;
            letterCnt = 0;
            pos = 0;
        }
    }
    return cnt >= rep;
};

const main = () => {
    let s = "leet", k = 3, letter = "e", repetition = 1;
    let s2 = "leetcode", k2 = 4, letter2 = "e", repetition2 = 2;
    let s3 = "bb", k3 = 2, letter3 = "b", repetition3 = 2;
    pr(smallestSubsequence(s, k, letter, repetition))
    // pr(smallestSubsequence(s2, k2, letter2, repetition2))
    // pr(smallestSubsequence(s3, k3, letter3, repetition3))
    // pr(smallestSubsequence(s4, k4, letter4, repetition4))
};

main()

// pr(ok('eet'));