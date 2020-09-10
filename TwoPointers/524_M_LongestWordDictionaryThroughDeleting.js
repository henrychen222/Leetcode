/**
 * 9.10 morning
 * https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/
 */

// issue need to to fix
let map = new Map();
const findLongestWord = (s, d) => {
    let sArr = s.split("");
    let uniqueS = [...new Set(sArr)];
    for (const e of uniqueS) {
        map.set(e, getFrequency(sArr, e));
    }
    let res = [];
    for (const w of d) {
        let arrW = w.split("");
        let uniqueW = [...new Set(arrW)];
        if (checkElements(uniqueS, uniqueW)) {
            if (checkFreq(uniqueW, arrW)) {
                res.push(w);
            }
        }
    }
    console.log(res);
    res.sort((a, b) => {
        if (a.length == b.length) return a.localeCompare(b);
        return b.length - a.length;
    })
    console.log(res);
    return res[0];
};

const checkElements = (store, target) => {
    for (const c of target) {
        if (store.indexOf(c) == -1) return false;
    }
    return true;
};

const checkFreq = (unique, arr) => {
    for (const c of unique) {
        if (getFrequency(arr, c) > map.get(c)) return false;
    }
    return true;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let s = "abpcplea",
        d = ["ale", "apple", "monkey", "plea"];
    let s2 = "abpcplea",
        d2 = ["a", "b", "c"];
    let s_debug1 = "aewfafwafjlwajflwajflwafj",
        d_debug1 = ["apple", "ewaf", "awefawfwaf", "awef", "awefe", "ewafeffewafewf"];
    // console.log(findLongestWord(s, d));
    // console.log(findLongestWord(s2, d2));
    console.log(findLongestWord(s_debug1, d_debug1)); // "ewaf"  "awefawfwaf" don't meet requirment "we" cannot find


    // console.log(checkIndex(s_debug1, 'ewaf'));
    // console.log(checkIndex(s_debug1, 'awefawfwaf'));
};

main()