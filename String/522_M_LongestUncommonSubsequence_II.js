/**
 * 4.8 evening
 * https://leetcode.com/problems/longest-uncommon-subsequence-ii/
 */

// let ucs = [];
// // let twoStringArr = [];

// const find = (target, check) => {
//     if (!check.includes(target)) {
//         ucs.push(target);
//     }
//     for (let i = 0; i < target.length; i++) {
//         for (let j = i + 1; j < target.length; j++) {
//             if (!check.includes(target.substring(i, j))) {
//                 ucs.push(target.substring(i, j));
//             }
//         }
//     }
// };

// const longest = (ucs) => {
//     let max = 0;
//     if (ucs.length == 0) {
//         return -1;
//     }
//     ucs.forEach(x => {
//         if (x.length > max) {
//             max = x.length;
//         }
//     });
//     return max;
// };

// const find2 = (strs) => {
//     for (let item = 0; item < strs.length; item++) {
//         if (!(strs[item + 1].toString().includes(item))) {
//             ucs.push(item);
//         }

//         // find subsequence from a string, compare to all other strings
//         for (let i = 0; i < item.length; i++) {
//             for (let j = i + 1; j < item.length; j++) {
//                 if (!(strs[item + 1].toString().includes(item.substring(i, j)))) {
//                     ucs.push(item.substring(i, j));
//                 }
//             }
//         }
//     }
// };

// const findLUSlength = (strs) => {
//     ucs = [];  // clear

//     // difference to 521, select any two of them from an array
//     for (let i = 0; i < strs.length; i++) {
//         twoStringArr = strs.slice(i, i + 2);
//         console.log(twoStringArr)
//         let a = twoStringArr[0].toString();
//         let b = twoStringArr[1].toString();
//         find(a, b);
//         find(b, a);
//         twoStringArr = [];

//         console.log(ucs);
//         return longest(ucs)
//     }

//     // find2(strs);
// };

/**
 * https://www.cnblogs.com/grandyang/p/6680548.html
 * https://xiaoguan.gitbooks.io/leetcode/content/LeetCode/522-longest-uncommon-subsequence-ii-medium.html (Approach 2)
 * 暴力解 Accepted ---  64ms 35.9 MB 47.06%
 */
const findLUSlength2 = (strs) => {
    let result = -1;
    for (let i = 0; i < strs.length; i++) { // 遍历所有的字符串
        for (j = 0; j < strs.length; j++) {
            // 对于每个遍历到的字符串，再和所有的其他的字符串比较，看是不是某一个字符串的子序列(subsequence)
            if (i == j) {
                continue;
            }
            if (checkIsSub(strs[i], strs[j])) {
                break;
            }
        }
        // 如果都不是的话，那么当前字符串就是一个UCS，用其长度来更新结果result
        if (j == strs.length) {
            result = Math.max(result, Number(strs[i].length));
        }
    }
    return result;
};

const checkIsSub = (target, check) => {
    let i = 0;
    for (const x of check) {
        if (x == target[i]) {
            i++;
        }
        if (i == target.length) {
            break;
        }
    }
    return i == target.length;
};

/**
 * Wrong Answer
 * https://www.cnblogs.com/grandyang/p/6680548.html
 */
const findLUSlength3 = (strs) => {
    const n = strs.length;
    let set = new Set();

    // strs.sort(strs, (a, b) => {
    //     return b.length - a.length;
    // });

    strs.sort((a, b) => {
        // if (a.length == b.length) {
        //     return a > b;
        // }
        // // return a.length > b.length;
        // return b.length - a.length;  // ASC  -> a.length - b.length, DESC -> b.length - a.length
        if (a > b)
            return -1;
        if (a < b)
            return 1;
        if (a = b)
            return 0;
    });

    for (let i = 0; i < n; ++i) {
        if (i == n - 1 || strs[i] != strs[i + 1]) {
            let found = true;
            for (const item of set) {
                let j = 0;
                for (const c of item) {
                    if (c == strs[i][j]) ++j;
                    if (j == strs[i].length) break;
                }
                if (j == strs[i].length) {
                    found = false;
                    break;
                }
            }
            if (found) return strs[i].length;
        }
        set.add(strs[i]);
    }
    return -1;
};

const main = () => {
    const strs = ["aba", "cdc", "eae"];
    const strs2 = ["aabbcc", "aabbcc", "cb"];
    const strs3 = ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"];
    const strs4 = ["aaa", "aaa", "aa"];
    const strs5 = ["mibqsxxnne", "mibqsxxnne", "mibqsxxnne", "mibqsxxnne", "mibqsxxnne", "qxfwgjpyuk", "qxfwgjpyuk", "qxfwgjpyuk", "qxfwgjpyuk", "qxfwgjpyuk", "mdobdmiamk", "mdobdmiamk", "mdobdmiamk", "mdobdmiamk", "mdobdmiamk", "suvrrybhfz", "suvrrybhfz", "suvrrybhfz", "suvrrybhfz", "suvrrybhfz", "wmughoitpp", "wmughoitpp", "wmughoitpp", "wmughoitpp", "wmughoitpp", "mgjsizloja", "mgjsizloja", "mgjsizloja", "mgjsizloja", "mgjsizloja", "hhlefbuuwk", "hhlefbuuwk", "hhlefbuuwk", "hhlefbuuwk", "hhlefbuuwk", "uheyrvakww", "uheyrvakww", "uheyrvakww", "uheyrvakww", "uheyrvakww", "yfrugcirau", "yfrugcirau", "yfrugcirau", "yfrugcirau", "yfrugcirau", "dnapgcaipk", "dnapgcaipk", "dnapgcaipk", "dnapgcaipk", "dnapgcaipk"]
    const strs6 = ["aabbcc", "aabbcc","c"];

    // console.log(findLUSlength(strs));
    // console.log(findLUSlength(strs2));

    console.log(findLUSlength2(strs));
    console.log(findLUSlength2(strs2));
    console.log(findLUSlength2(strs3));
    console.log(findLUSlength2(strs4));
    console.log(findLUSlength2(strs5));
    console.log(findLUSlength2(strs6));

    console.log();
    console.log(findLUSlength3(strs));
    console.log(findLUSlength3(strs2));
    console.log(findLUSlength3(strs3)); // debug
    console.log(findLUSlength3(strs4)); // debug
    console.log(findLUSlength3(strs5)); // debug
    console.log(findLUSlength3(strs6)); // debug


};

main()