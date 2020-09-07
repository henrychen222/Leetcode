/**
 * 7.29 evening 7.30 night
 * https://leetcode.com/problems/longest-word-in-dictionary/
 */

// Accepted --- 492ms 12.94%
const longestWord = (words) => {
    let n = words.length;
    words.sort((a, b) => b.length - a.length);
    let idx, len;
    let res = [];
    for (let i = 0; i < n; i++) {
        if (isBuilt(words[i], words)) {
            res.push(words[i]);
            len = words[i].length;
            idx = i;
            break;
        }
    }
    // console.log(res, idx, len);
    for (let i = idx + 1; i < n; i++) {
        if (words[i].length == len) {
            if (isBuilt(words[i], words)) {
                res.push(words[i]);
            }
        }
        if (words[i].length < len) break;
    }
    // console.log(res);
    res.sort((a, b) => a.localeCompare(b));
    return res[0];
};

const isBuilt = (w, words) => {
    for (let i = 1; i < w.length; i++) {
        let part = w.slice(0, i);
        if (words.indexOf(part) == -1) return false;
    }
    return true;
};

const main = () => {
    let words = ["w", "wo", "wor", "worl", "world"];
    let words2 = ["a", "banana", "app", "appl", "ap", "apply", "apple"];
    console.log(longestWord(words));
    console.log(longestWord(words2));
};

main()


// issue
// const longestWord = (words) => {
//     words.sort((a, b) => b.length - a.length);
//     console.log(words);
//     let resoppo = [];
//     let data  = [];
//     for (const w of words) {
//         let tmp = [];
//         for (let i = 1; i < w.length; i++) {
//             let each = w.slice(0, i);
//             tmp.push(each);
//         }
//         data.push([w, tmp]);
//     }
//     console.log(data);
//     for (const d of data) {
//         console.log(typeof d[1])
//         let k = d[0];
//         let val = Object.values(d[1]);
//         if (val.length > 0) {
//             for (const v of val) {
//                 if (!words.includes(v) && !resoppo.includes(k)) {
//                     resoppo.push(k);
//                 }
//             }
//         }
//     }
//     console.log(resoppo);
// };

// console.log('world'.includes('wor'));
// console.log(check('world', words));