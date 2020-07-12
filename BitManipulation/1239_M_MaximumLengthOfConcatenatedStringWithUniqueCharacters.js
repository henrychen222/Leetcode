/**
 * 7.11 afternoon
 * https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
 */

// Accepted --- 4372ms 41.6MB 5.26%
const maxLength_refine = (arr) => {
    let n = arr.length;
    let N = 2 ** n;
    let max = 0;
    for (let i = 0; i < N; i++) {
        let data = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                data.push(arr[j]);
            }
        }
        let s = data.join("");
        if ([...new Set(s.split(""))].join("") == s) {
            max = Math.max(s.length, max);
        }
    }
    return max;
};

// Accepted --- 5548ms 145MB 5.26%
const maxLength = (arr) => {
    let data = getAllSubsequences(arr);
    let max = 0;
    for (const d of data) {
        let s = d.join("")
        if ([...new Set(s.split(""))].join("") == s) {
            max = Math.max(s.length, max);
        }
    }
    return max;
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

const main = () => {
    let arr = ["un", "iq", "ue"];
    let arr2 = ["cha", "r", "act", "ers"];
    let arr3 = ["abcdefghijklmnopqrstuvwxyz"];
    let debug1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"];
    console.log(maxLength(arr));
    console.log(maxLength(arr2));
    console.log(maxLength(arr3));
    console.log(maxLength(debug1));

    console.log("");
    console.log(maxLength_refine(arr));
    console.log(maxLength_refine(arr2));
    console.log(maxLength_refine(arr3));
    console.log(maxLength_refine(debug1));
};

main()