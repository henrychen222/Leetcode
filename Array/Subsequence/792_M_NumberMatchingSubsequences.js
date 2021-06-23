/**
 * 07/17/20 afternoon  06/22/21 night complete
 * https://leetcode.com/problems/number-of-matching-subsequences/
 */

// reference: https://www.cnblogs.com/grandyang/p/9201323.html
// Accepted --- 164ms 89.37%
const numMatchingSubseq = (S, words) => {
    // yes, no is memo of is or not subsequence
    let [res, n, yes, no] = [0, S.length, new Set(), new Set()];
    for (const w of words) {
        if (yes.has(w) || no.has(w)) {
            if (yes.has(w)) res++;
            continue;
        }
        let [i, j, m] = [0, 0, w.length];
        while (i < n && j < m) {
            if (w[j] == S[i]) j++;
            i++;
        }
        if (j == m) {
            res++;
            yes.add(w);
        } else {
            no.add(w);
        }
    }
    return res;
};

// Accepted --- 144ms 91.79%
const numMatchingSubseq2 = (S, words) => {
    let res = 0;
    let yes = new Set(); // memo of isSubsequence
    let no = new Set(); // memo of notSubsequence
    for (const w of words) {
        if (yes.has(w) || no.has(w)) {
            if (yes.has(w)) res++;
            continue;
        }
        // if (isSubsequence1(S, w)) { // Accepted --- 232ms 53.62%
        if (isSubsequence(S, w)) {
            res++;
            yes.add(w);
        } else {
            no.add(w);
        }
    }
    return res;
};

const numMatchingSubseq1 = (S, words) => {
    let res = 0;
    for (const w of words) {
        if (isSubsequence(S, w)) res++;
    }
    return res;
};

// Accepted --- 6944ms 8.21%
// Accepted --- 7492ms 6.28%
const isSubsequence = (s, t) => {
    let sn = s.length;
    let tn = t.length;
    let i = j = 0;
    while (i < sn && j < tn) {
        if (s[i] == t[j]) {
            i++;
            j++;
        } else {
            i++;
        }
    }
    return j == tn;
};

// Accepted --- 6416ms 10.63%
// Accepted --- 6428ms 10.14%
const isSubsequence1 = (s, t) => {
    let st = [];
    let sn = s.length;
    let tn = t.length;
    for (let i = 0; i < tn; i++) st.push(t[i]);
    for (let i = sn - 1; ~i; i--) {
        if (st.length == 0) {
            return true;
        }
        if (s[i] == st[st.length - 1]) st.pop();
    }
    return st.length == 0;
};

const main = () => {
    let S = "abcde",
        words = ["a", "bb", "acd", "ace"];
    let S_debug1 = "dsahjpjauf",
        words_debug1 = ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"];
    let S_debug2 = "qlhxagxdqh",
        words_debug2 = ["qlhxagxdq", "qlhxagxdq", "lhyiftwtut", "yfzwraahab"];
    console.log(numMatchingSubseq(S, words)); // 3
    console.log(numMatchingSubseq(S_debug1, words_debug1)); // 2
    console.log(numMatchingSubseq(S_debug2, words_debug2)); // 2
};

main()


///////////////////////////////// 07/17/20 afternoon /////////////////////
// Time Limit
// const numMatchingSubseq2 = (S, words) => {
//     let res = [];
//     let n = S.length;
//     let N = 2 ** n;
//     for (let i = 0; i < N; i++) {
//         let data = [];
//         for (let j = 0; j < n; j++) {
//             if (i & (1 << j)) {
//                 data.push(S[j]);
//             }
//         }
//         // console.log(data.join(""));
//         for (const w of words) {
//             if (data.join("") == w && res.indexOf(w) == -1) {
//                 res.push(w);
//             }
//         }
//     }
//     // console.log(res);
//     let sum = 0;
//     for (const r of res) {
//         let freq = getFrequency(words, r);
//         sum += freq;
//     }
//     return sum;
// };

// const getFrequency = (arr, item) => {
//     return arr.filter(x => x === item).length;
// };

// // Memory out
// const numMatchingSubseq = (S, words) => {
//     let data = getAllSubsequences(S);
//     data = removeDuplicatesMultiArray(data).map(x => x.join(""));
//     // console.log(data)
//     let cnt = 0;
//     for (const w of words) {
//         if (data.indexOf(w) != -1) {
//             cnt++;
//         }
//     }
//     return cnt;
// };

// const getAllSubsequences = (arr) => {
//     let res = [];
//     let n = arr.length;
//     let N = 2 ** n;
//     for (let i = 0; i < N; i++) {
//         let data = [];
//         for (let j = 0; j < n; j++) {
//             if (i & (1 << j)) {
//                 data.push(arr[j]);
//             }
//         }
//         res.push(data);
//     }
//     return res;
// };

// const removeDuplicatesMultiArray = (arr) => {
//     return arr.map(JSON.stringify).reverse().filter((item, index, arr) => {
//         return arr.indexOf(item, index + 1) === -1;
//     }).reverse().map(JSON.parse);
// };