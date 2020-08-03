/**
 * 8.1 night
 * https://leetcode.com/problems/sort-characters-by-frequency/
 */

// Accepted --- 212ms 48.8MB 5.08%
const frequencySort = (s) => {
    let arr = s.split("");
    let element = [...new Set(arr)];
    let map = new Map();
    for (const e of element) {
        map.set(e, getFrequency(arr, e));
    }
    arr.sort((a, b) => {
        if (map.get(a) == map.get(b)) return a.localeCompare(b);
        return map.get(b) - map.get(a);
    });
    return arr.join("");
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let s = "tree";
    let s2 = "cccaaa";
    let s_debug1 = "loveleetcode";
    console.log(frequencySort(s));
    console.log(frequencySort(s2));
    console.log(frequencySort(s_debug1));
};

main()