/**
 * 7.31 night 11.17 night complete
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * 
 * Jennifer ask this question
 * https://github.com/jennhuynh02/Algorithms-Data-Structures/blob/master/leet_code/javascript/medium/allAnagrams.js
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/640132/SImple-Javascript-Solution
 */

// Accepted --- 8148ms 5.11%
const findAnagrams = (s, p) => {
    let res = [];
    let pMap = getRecord2(p);
    // console.log(pMap);
    let ns = s.length;
    let np = p.length;
    top:
        for (let i = 0; i < ns; i++) {
            if (!pMap.has(s[i])) continue;
            if (i + np > ns) continue;
            let tmp = s.slice(i, i + np);
            // console.log(tmp);
            let map = new Map();
            for (const c of tmp) {
                if (!pMap.has(c)) continue top;
                map.set(c, (map.get(c) + 1) || 1);
                if (map.get(c) > pMap.get(c)) continue top;
            }
            // console.log(map);
            res.push(i);
        }
    return res;
};

// Accepted --- 9128ms 5.11%
const findAnagrams_modify1 = (s, p) => {
    let res = [];
    let pMap = getRecord2(p);
    let ns = s.length;
    let np = p.length;
    top:
        for (let i = 0; i < ns; i++) {
            if (!pMap.has(s[i])) continue;
            if (i + np > ns) continue;
            let map = new Map();
            for (let j = i; j <= i + np - 1; j++) {
                if (!pMap.has(s[j])) continue top;
                map.set(s[j], (map.get(s[j]) + 1) || 1);
                if (map.get(s[j]) > pMap.get(s[j])) continue top;
            }
            res.push(i);
        }
    return res;
};

// Accepted --- 9364ms 5.11%
const findAnagrams_modify2 = (s, p) => {
    let res = [];
    let pMap = getRecord2(p);
    let ns = s.length;
    let np = p.length;
    top:
        for (let i = 0; i < ns; i++) {
            if (!pMap.has(s[i])) continue;
            if (i + np > ns) continue;
            let map = new Map();
            for (let j = i; j <= i + np - 1; j++) {
                if (j != i && !pMap.has(s[j])) continue top;
                map.set(s[j], (map.get(s[j]) + 1) || 1);
                if (map.get(s[j]) > pMap.get(s[j])) continue top;
            }
            res.push(i);
        }
    return res;
};

const getRecord2 = (s) => {
    let map = new Map();
    for (const i of s) {
        map.set(i, (map.get(i) + 1) || 1);
    }
    return map;
};

// TLE 35/36
const findAnagrams1 = (s, p) => {
    let data = [];
    for (let i = 0; i < s.length; i++) {
        if (p.indexOf(s[i]) == -1) continue;
        let tmp = s.slice(i, i + p.length);
        if (tmp.length == p.length) {
            data.push([tmp, i]);
        }
    }
    let res = [];
    let pSort = p.split("").sort((a, b) => a.localeCompare(b)).join("");
    for (const d of data) {
        let tmp = d[0].split("").sort((a, b) => a.localeCompare(b)).join("");
        if (tmp == pSort) {
            res.push(d[1]);
        }
    }
    return res;
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


//////////////////////////////// 7.31 night /////////////////////////////////////////
// still Time limit
// const findAnagrams = (s, p) => {
//     let data = [];
//     for (let i = 0; i < s.length; i++) {
//         if (p.indexOf(s[i]) == -1) continue;
//         let tmp = s.slice(i, i + p.length);
//         if (tmp.length == p.length) {
//             data.push([tmp, i]);
//         }
//     }
//     let res = [];
//     for (const d of data) {
//         if (isAnagram(d[0], p)) {
//             res.push(d[1]);
//         }
//     }
//     return res;
// };

// Time Limit 35/36
// const findAnagrams1 = (s, p) => {
//     let res = [];
//     for (let i = 0; i < s.length; i++) {
//         let tmp = s.slice(i, i + p.length);
//         if (tmp.length == p.length) {
//             if (isAnagram(tmp, p)) {
//                 res.push(i);
//             }
//         }
//     }
//     return res;
// };

// const isAnagram = (s, t) => {
//     sArr = s.split("");
//     tArr = t.split("");
//     sArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
//     tArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
//     return sArr.join("") == tArr.join("");
// };