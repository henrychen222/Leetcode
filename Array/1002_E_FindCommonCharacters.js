/**
 * 6.3 night
 * https://leetcode.com/problems/find-common-characters/
 */

// need to fix
const commonChars = (A) => {
    let res = [];
    let ans = "";
    let wholeStr = "";
    for (const item of A) {
        wholeStr += item;
    }
    let eachChar = [...new Set(wholeStr.split(""))];
    let map = new Map();
    for (const i of eachChar) {
        map.set(i, countOccurrence(wholeStr.split(""), i))
    }
    console.log(map);
    console.log(A.length);
    for (const k of map.keys()) {
        if (map.get(k) % A.length == 0) {
            let times = map.get(k) / A.length;
            while (times != 0) {
                res.push(k);
                times--;
            }
        }
    }
    return res;
};

const countOccurrence = (arr, target) => {
    let cnt = 0;
    arr.forEach(x => {
        if (x == target) {
            cnt++;
        }
    });
    return cnt;
};

const main = () => {
    let A = ["bella", "label", "roller"];
    let A2 = ["cool", "lock", "cook"];
    // console.log(commonChars(A));
    console.log(commonChars(A2)); // fix
};

main()