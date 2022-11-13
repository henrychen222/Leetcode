/**
 * 11.7 evening  11.7 night
 * https://leetcode.com/contest/weekly-contest-214/problems/minimum-deletions-to-make-character-frequencies-unique/
 */

// 164ms
const minDeletions2_modify4 = (s) => {
    let res = 0;
    let freq = [];
    let map = getRecord2(s);
    for (const e of map.keys()) {
        let cnt = map.get(e);
        while (cnt != 0 && freq.indexOf(cnt) != -1) {
            cnt--;
            res++;
        }
        freq.push(cnt);
    }
    return res;
};

// 164ms
const minDeletions2_modify3 = (s) => {
    let res = 0;
    let freq = new Set();
    let map = getRecord2(s);
    for (const e of map.keys()) {
        let cnt = map.get(e);
        while (cnt != 0 && freq.has(cnt)) {
            cnt--;
            res++;
        }
        freq.add(cnt);
    }
    return res;
};

// 212ms
const minDeletions2_modify = (s) => {
    let res = 0;
    let freq = new Set();
    let map = getRecord(s);
    for (const e of map.keys()) {
        let cnt = map.get(e);
        while (cnt != 0 && freq.has(cnt)) {
            cnt--;
            res++;
        }
        freq.add(cnt);
    }
    return res;
};

// 192ms
const minDeletions2 = (s) => {
    let res = 0;
    let freq = [];
    let map = getRecord(s);
    for (const e of map.keys()) {
        let cnt = map.get(e);
        while (cnt != 0 && freq.indexOf(cnt) != -1) {
            cnt--;
            res++;
        }
        freq.push(cnt);
    }
    return res;
};

const getRecord = (s) => {
    let map = new Map();
    for (const i of s) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    }
    return map;
};

const getRecord2 = (s) => {
    let map = new Map();
    for (const i of s) {
        map.set(i, (map.get(i) + 1) || 1);
    }
    return map;
};


// Original from C#: 1448ms
// reference: https://www.c-sharpcorner.com/blogs/minimum-deletions-to-get-a-unique-count-of-characters
const minDeletions = (s) => {
    let res = 0;
    let freq = [];
    let arr = s.split("")
    let element = [...new Set(arr)];
    for (const e of element) {
        let cnt = getFrequency(arr, e);
        while (cnt != 0 && freq.indexOf(cnt) != -1) {
            console.log(cnt, e, freq);
            cnt--;
            res++;
        }
        freq.push(cnt);
    }
    return res;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let s = "aab";
    let s2 = "aaabbbcc";
    let s3 = "ceabaacb"
    console.log(minDeletions(s));
    console.log(minDeletions(s2));
    console.log(minDeletions(s3));
};

main()