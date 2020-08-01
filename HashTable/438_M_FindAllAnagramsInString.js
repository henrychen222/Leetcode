/**
 * 7.31 night
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 */

// still Time limit
const findAnagrams = (s, p) => {
    let data = [];
    for (let i = 0; i < s.length; i++) {
        if (p.indexOf(s[i]) == -1) continue;
        let tmp = s.slice(i, i + p.length);
        if (tmp.length == p.length) {
            data.push([tmp, i]);
        }
    }
    let res = [];
    for (const d of data) {
        if (isAnagram(d[0], p)) {
            res.push(d[1]);
        }
    }
    return res;
};

// Time Limit 35/36
const findAnagrams1 = (s, p) => {
    let res = [];
    for (let i = 0; i < s.length; i++) {
        let tmp = s.slice(i, i + p.length);
        if (tmp.length == p.length) {
            if (isAnagram(tmp, p)) {
                res.push(i);
            }
        }
    }
    return res;
};

const isAnagram = (s, t) => {
    sArr = s.split("");
    tArr = t.split("");
    sArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    tArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    return sArr.join("") == tArr.join("");
};

const main = () => {
    let s = "cbaebabacd",
        p = "abc";
    let s2 = "abab",
        p2 = "ab";
    console.log(findAnagrams(s, p));
    console.log(findAnagrams(s2, p2));
};

main()