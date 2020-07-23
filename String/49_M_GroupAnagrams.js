/**
 * 7.22 night
 * https://leetcode.com/problems/group-anagrams/
 */

// Accepted --- 1348ms 49.9MB 5.04%
const groupAnagrams3 = (strs) => {
    let kinds = [];
    let data = [];
    for (const item of strs) {
        let tmp = item.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
        data.push([tmp, item]);
        if (kinds.find(x => x == tmp) == undefined) kinds.push(tmp);
    }
    let res = [];
    for (const k of kinds) {
        let group = [];
        for (const d of data) {
            if (d[0] == k) {
                group.push(d[1]);
            }
        }
        res.push(group);
    }
    return res;
};

// Accepted --- 1216ms 49.5MB 5.04%
const groupAnagrams2 = (strs) => {
    let kinds = [];
    let data = [];
    for (const item of strs) {
        let arr = item.split("");
        let tmp = arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
        data.push([tmp, item]);
        if (kinds.indexOf(tmp) == -1) kinds.push(tmp);
    }
    let res = [];
    for (const k of kinds) {
        let group = [];
        for (const d of data) {
            if (d[0] == k) {
                group.push(d[1]);
            }
        }
        res.push(group);
    }
    return res;
};

// Time Limit 100/101
const groupAnagrams = (strs) => {
    let kinds = [];
    for (const item of strs) {
        let arr = item.split("");
        let tmp = arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
        if (kinds.indexOf(tmp) == -1) kinds.push(tmp);
    }
    // console.log(kinds);
    let res = [];
    for (const k of kinds) {
        let group = [];
        for (const item of strs) {
            let tmp = item.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
            if (tmp == k) {
                group.push(item);
            }
        }
        res.push(group);
    }
    return res;
};

const main = () => {
    let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    console.log(groupAnagrams(strs));
    console.log(groupAnagrams2(strs));
    console.log(groupAnagrams3(strs));
};

main()