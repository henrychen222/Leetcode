/**
 * 9.19 evening
 * https://leetcode.com/contest/weekly-contest-207/problems/split-a-string-into-the-max-number-of-unique-substrings/
 */

// wrong 76/94
const maxUniqueSplit = (s) => {
    let trie = {};
    let p = trie;
    let output = 0;
    for (const c of s) {
        if (!p.hasOwnProperty(c)) {
            output++;
            p[c] = {};
            p = trie;
        } else {
            p = p[c];
        }
        console.log(p, trie);
    }
    return output;
};

const main = () => {
    let s = "ababccc";
    let s2 = "aba";
    let s3 = "aa";
    let debug1 = "addbsd";
    console.log(maxUniqueSplit(s));
    console.log(maxUniqueSplit(s2));
    console.log(maxUniqueSplit(s3));
    console.log(maxUniqueSplit(debug1)); // 5
};

main()