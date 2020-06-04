/**
 * 6.2 evening
 * https://leetcode.com/problems/string-compression/
 */

// need to fix, don't why lc is [] of res
const compress = (chars) => {
    let res = [];
    let allChars = removeDuplicate(chars);
    let map = new Map();
    for (const i of allChars) {
        map.set(i, count(chars, i));
    }
    // console.log(map);
    for (const k of map.keys()) {
        res.push(k);
        if (map.get(k) != 1) {
            res.push(map.get(k).toString());
        }
    }
    // console.log(res);
    for (let i = 0; i < res.length; i++) {
        if (res[i].length > 1) {
            for (const j of res[i].split('')) {
                res.push(j);
            }
            res.splice(i, 1);
        }
    }
    return res;
};

const count = (arr, target) => {
    let count = 0;
    for (const i of arr) {
        if (i == target) {
            count++;
        }
    }
    return count;
};

const removeDuplicate = (arr) => {
    return [...new Set(arr)];
};

const main = () => {
    let chars = ["a", "a", "b", "b", "c", "c", "c"];
    let chars2 = ["a"];
    let chars3 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
    console.log(compress(chars));
    console.log(compress(chars2));
    console.log(compress(chars3));
};

main()