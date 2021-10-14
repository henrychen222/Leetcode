/**
 * 10/08/21 morning  10/12/21 noon complete
 * https://leetcode.com/problems/verbal-arithmetic-puzzle/
 */

// Accepted --- 3013ms 100%
// reference: https://leetcode.com/problems/verbal-arithmetic-puzzle/discuss/463953/Java-Fast-Backtracking-Clean-Code-O(n!)-~-300ms
const pow10 = [1, 10, 100, 1000, 10000, 100000, 1000000];
let char, cnt, nonLeadingZero;
const isSolvable = (words, result) => {
    cnt = Array(91).fill(0);
    nonLeadingZero = Array(91).fill(false);
    let se = new Set();
    for (const w of words) {
        let wn = w.length;
        for (let i = 0; i < wn; i++) {
            let c = w[i], cidx = c.charCodeAt();
            if (i == 0 && wn > 1) nonLeadingZero[cidx] = true;
            se.add(c);
            cnt[cidx] += pow10[wn - i - 1];
        }
    }
    let rn = result.length;
    for (let i = 0; i < rn; i++) {
        let c = result[i], cidx = c.charCodeAt();
        if (i == 0 && rn > 1) nonLeadingZero[cidx] = true;
        se.add(c);
        cnt[cidx] -= pow10[rn - i - 1];
    }
    // pr(se);
    char = [...se];
    let used = Array(10).fill(0);
    // pr('charCount', cnt);
    // pr('nonLeadingZero', nonLeadingZero);
    return dfs(used, 0, 0);
};

const dfs = (used, step, diff) => {
    // pr(step, diff);
    if (step == char.length) return diff == 0;
    for (let d = 0; d <= 9; d++) {
        let cidx = char[step].charCodeAt();
        // pr('step', char[step], cidx)
        if (!used[d] && (d > 0 || !nonLeadingZero[cidx])) {
            used[d] = true;
            if (dfs(used, step + 1, diff + cnt[cidx] * d)) return true;
            used[d] = false;
        }
    }
    return false;
};

/////////////////////////////////////////////////////////////////////////////
// WA
// https://leetcode.com/contest/weekly-contest-169/ranking/1/  cuiaoxiang
// let w, used, digit, char;
// const isSolvable1 = (words, result) => {
//     w = words;
//     used = Array(10).fill(0);
//     digit = Array(10).fill(0);
//     char = Array(26).fill(-1);
//     w.push(result);
//     return dfs(0, 0, 0)
// };

// const AASCII = 'A'.charCodeAt();
// const dfs = (pos, idx, cur) => { // pos: index of word in words  idx: index of char in word
//     // pr(pos, idx, cur)
//     if (pos == w.length) {
//         let sum = 0;
//         for (let i = 0; i < pos - 1; i++) sum += digit[i];
//         sum -= digit[pos - 1];
//         return sum == 0;
//     }
//     if (idx == w[pos].length) {
//         digit[pos] = cur;
//         return dfs(pos + 1, 0, 0);
//     }
//     let k = w[pos][idx].charCodeAt() - AASCII;
//     // pr('char[k]', char[k])
//     if (char[k] >= 0) {
//         return dfs(pos, idx + 1, cur * 10 + char[k]);
//     } else {
//         for (let i = 0; i < 10; i++) {
//             if (idx == 0 && i == 0) continue;
//             if (used[i]) continue;
//             char[k] = i;
//             used[i] = true;
//             if (dfs(pos, idx + 1, cur * 10 + char[k])) return true;
//             used[i] = false;
//             char[k] = -1;
//         }
//     }
//     return false;
// };

const pr = console.log
const main = () => {
    let words = ["SEND", "MORE"],
        result = "MONEY";
    let words2 = ["SIX", "SEVEN", "SEVEN"],
        result2 = "TWENTY";
    let words3 = ["THIS", "IS", "TOO"],
        result3 = "FUNNY";
    let words4 = ["LEET", "CODE"],
        result4 = "POINT";
    let words_debug1 = ["A", "B"],
        result_debug1 = "A";
    let words_debug2 = ["CBA","CBA","CBA","CBA","CBA"],
        result_debug2 = "EDD";
    pr(isSolvable(words, result))
    pr(isSolvable(words2, result2))
    pr(isSolvable(words3, result3))
    pr(isSolvable(words4, result4))
    pr(isSolvable(words_debug1, result_debug1)) // true
    pr(isSolvable(words_debug2, result_debug2)) // false
};

main()




// 10/10/21 evening issue Wrong
// const isSolvable = (words, result) => {
//     let n = words.length,
//         dig = 0;
//     let cnt = Array(128).fill(-1);
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < words[i].length; j++) {
//             let c = words[i][j].charCodeAt();
//             if (cnt[c] == -1) {
//                 // pr(c)
//                 cnt[c] = dig++;
//             }
//         }
//     }
//     pr(cnt, dig)
//     for (let i = 0; i < result.length; i++) {
//         let c = result[i].charCodeAt();
//         if (cnt[c] == -1) {
//             cnt[c] = dig++;
//         }
//     }
//     pr(cnt, dig)
//     let digit = Array(dig).fill(0);
//     for (let i = 0; i < dig; i++) digit[i] = i;
//     pr(digit)
//     do {
//         do {
//             let sum = 0;
//             for (let i = 0; i < n; i++) {
//                 let c = words[i][words[i].length - 1];
//                 sum += digit[cnt[c.charCodeAt()]];
//                 pr('1111', digit[cnt[c.charCodeAt()]])
//             }
//             // pr('sum', sum)
//             if (sum % 10 != digit[cnt[result[result.length - 1].charCodeAt()]]) continue;
//             // pr('sum', sum)
//             let l = 0,
//                 r = 0;
//             for (let i = 0; i < n; i++) {
//                 let cur = 0;
//                 for (let j = 0; j < words[i].length; j++) {
//                     cur = cur * 10 + digit[cnt[words[i][j].charCodeAt()]];
//                 }
//                 l += cur;
//             }
//             for (let i = 0; i < result.length; i++) r = r * 10 + digit[cnt[result[i].charCodeAt()]];
//             // pr(l, r)
//             if (l == r) return true;
//         } while (next_permutation(digit));
//     } while (next_combination(digit));
//     return false;
// };

// const next_combination = (a) => {
//     let n = a.length,
//         i = n - 1,
//         digit = 9;
//     while (~i && a[i] == digit) {
//         i--;
//         digit--;
//     }
//     if (i == -1) return false;
//     a[i]++;
//     for (let j = i + 1; j < n; j++) a[j] = a[j - 1] + 1;
//     return true;
// };

// const next_permutation = (a) => {
//     let n = a.length;
//     let i, j;
//     for (i = n - 2; i >= 0 && a[i] >= a[i + 1]; i--);
//     if (i === -1) return false;
//     for (j = i + 1; j < n && a[i] < a[j]; j++);
//     [a[i], a[j - 1]] = [a[j - 1], a[i]];
//     for (let p = i + 1, q = n - 1; p < q; p++, q--)[a[p], a[q]] = [a[q], a[p]];
//     return true;
// };