/**
 * 10.5 night   03/12/21 fix failed, review solution
 * https://leetcode.com/problems/remove-duplicate-letters/
 * 
 * same question to 1038
 */

// Accepted --- 88ms 92.25%
// reference: https://blog.csdn.net/qq_24342739/article/details/93127015  https://www.twblogs.net/a/5d0bbf0dbd9eee1ede042413
const removeDuplicateLetters = (s) => {
    let n = s.length;
    let lastIdx = Array(26).fill(0);
    let visited = Array(26).fill(false);
    let st = [];
    for (let i = 0; i < n; i++) {
        lastIdx[s[i].charCodeAt() - 97] = i;
    }
    for (let i = 0; i < n; i++) {
        if (visited[s[i].charCodeAt() - 97] == false) {
            while (st.length != 0) {
                let tmp = st[st.length - 1];
                let tas = tmp.charCodeAt();
                if (lastIdx[tas - 97] > i && s[i] < tmp) {
                    st.pop();
                    visited[tas - 97] = false;
                } else {
                    break;
                }
            }
            st.push(s[i]);
            visited[s[i].charCodeAt() - 97] = true;
        }
    }
    return st.join("");
};

// WA 275/289 greedy not correct
const removeDuplicateLetters1 = (s) => {
    let n = s.length;
    let m = generateM(s);
    m = sortMapByKey(m);
    while (s.length != m.size) {
        for (let [k, v] of m) {
            let occ = v.length;
            if (occ == 1) continue;
            let g = [];
            for (const idx of v) {
                g.push(update(s, k, idx));
            }
            g.sort((a, b) => a.localeCompare(b));
            // console.log(k, s, g)
            s = g[0];
            m = sortMapByKey(generateM(s));
            break;
        }
    }
    return s;
};

const update = (s, remove, idxKeep) => {
    let n = s.length;
    let res = '';
    for (let i = 0; i < n; i++) {
        if (s[i] == remove) {
            if (i != idxKeep) continue;
            res += s[i];
        } else {
            res += s[i];
        }
    }
    return res;
};

const generateM = (s) => {
    let n = s.length;
    let m = new Map();
    for (let i = 0; i < n; i++) {
        if (!m.has(s[i])) m.set(s[i], []);
        m.get(s[i]).push(i);
    }
    return m;
};

const sortMapByKey = (map) => {
    return new Map([...map].sort((a, b) => b[0].localeCompare(a[0])));
};

const main = () => {
    let s = "bcabc"
    let s2 = "cbacdcbc";
    let debug1 = "caccabad";
    let debug2 = "ecbacba";
    let debug3 = "bddbccd";
    let debug4 = "leetcode";
    let debug6 = "mitnlruhznjfyzmtmfnstsxwktxlboxutbic";
    let debug7 = "abacb";

    console.log(removeDuplicateLetters(s)); //  "abc"
    console.log(removeDuplicateLetters(s2)); // "acdb"
    console.log(removeDuplicateLetters(debug1)); // "acbd"
    console.log(removeDuplicateLetters(debug2)); // "eacb"
    console.log(removeDuplicateLetters(debug3)); // "bcd"
    console.log(removeDuplicateLetters(debug4)); // "letcod"
    // console.log(removeDuplicateLetters(debug5)); // "abcdefghijklmnopqrstuvwxyz"
    console.log(removeDuplicateLetters(debug6)); // "ilrhjfyzmnstwkboxuc"
    console.log(removeDuplicateLetters(debug7)); // "abc"

    // console.log('a'.charCodeAt(), 'd'.charCodeAt());
};

main()

// console.log('a' < 'b', 'a'.charCodeAt() < 98)

/////////////////////////////// 10.5 night ///////////////////////
// // wrong
// let map = new Map();
// let mapR = new Map();
// const removeDuplicateLetters = (s) => {
//     let n = s.length;
//     let set = new Set();
//     map.clear();
//     mapR = getRecord(s);
//     console.log(mapR);
//     for (let i = 0; i < n; i++) {
//         if (set.has(i)) continue;
//         let lastIdx = s.lastIndexOf(s[i]);
//         if (set.has(lastIdx)) continue;
//         if (i != lastIdx) {
//             for (let j = i + 1; j <= lastIdx; j++) {
//                 if (set.has(j)) continue;
//                 if (s[i] == s[j]) {
//                     // console.log(s[i]);
//                     let flag = 0;
//                     for (let l = j - 1; l > i; l--) {
//                         if (set.has(l)) continue;
//                         if (s[l].charCodeAt() < s[i].charCodeAt()) {
//                             if (!hasElementWithLastIndex(s, i, l, set)) {
//                                 console.log(i, j, s[i]);
//                                 flag = 1;
//                                 break;
//                             }
//                         }
//                     }
//                     if (flag == 1) {
//                         console.log(i, s[i]);
//                         set.add(i);
//                     } else {
//                         set.add(j);
//                     }
//                 }
//             }
//         }
//         // console.log(set);
//     }
//     let res = '';
//     for (let i = 0; i < n; i++) {
//         if (!set.has(i)) res += s[i];
//     }
//     return res;
// };

// const hasElementWithLastIndex = (s, start, end, set) => {
//     let i;
//     for (i = start + 1; i < end; i++) {
//         if (set.has(i)) continue;
//         if (map.has(i)) return map.get(i);
//         // if (s.lastIndexOf(s[i]) == i) {
//         //     map.set(i, true);
//         //     return true;
//         // }
//         console.log("222", s[i], mapR.get(s[i]));
//         if (mapR.get(s[i]) == 1) {
//             map.set(i, true);
//             return true;
//         }
//     }
//     map.set(i, false);
//     return false;
// };

// const getRecord = (s) => {
//     let map = new Map();
//     for (const i of s) {
//         if (map.has(i)) {
//             map.set(i, map.get(i) + 1);
//         } else {
//             map.set(i, 1);
//         }
//     }
//     return map;
// };