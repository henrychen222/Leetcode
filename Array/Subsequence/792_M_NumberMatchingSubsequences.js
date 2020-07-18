/**
 * 7.17 afternoon
 * https://leetcode.com/problems/number-of-matching-subsequences/
 */

// Time Limit
const numMatchingSubseq2 = (S, words) => {
    let res = [];
    let n = S.length;
    let N = 2 ** n;
    for (let i = 0; i < N; i++) {
        let data = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                data.push(S[j]);
            }
        }
        // console.log(data.join(""));
        for (const w of words) {
            if (data.join("") == w && res.indexOf(w) == -1) {
                res.push(w);
            }
        }
    }
    // console.log(res);
    let sum = 0;
    for (const r of res) {
        let freq = getFrequency(words, r);
        sum += freq;
    }
    return sum;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

// Memory out
const numMatchingSubseq = (S, words) => {
    let data = getAllSubsequences(S);
    data = removeDuplicatesMultiArray(data).map(x => x.join(""));
    // console.log(data)
    let cnt = 0;
    for (const w of words) {
        if (data.indexOf(w) != -1) {
            cnt++;
        }
    }
    return cnt;
};

const getAllSubsequences = (arr) => {
    let res = [];
    let n = arr.length;
    let N = 2 ** n;
    for (let i = 0; i < N; i++) {
        let data = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                data.push(arr[j]);
            }
        }
        res.push(data);
    }
    return res;
};

const removeDuplicatesMultiArray = (arr) => {
    return arr.map(JSON.stringify).reverse().filter((item, index, arr) => {
        return arr.indexOf(item, index + 1) === -1;
    }).reverse().map(JSON.parse);
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