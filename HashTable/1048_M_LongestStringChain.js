/**
 * 8.3 night
 * https://leetcode.com/problems/longest-string-chain/
 */

// don't know
const longestStrChain = (words) => {
    let len = [...new Set(words.map(x => x.length))];
    len.sort((a, b) => a - b);
    console.log(len);
    let map = new Map();
    for (const l of len) {
        let tmp = [];
        for (const w of words) {
            if (w.length == l) {
                tmp.push(w);
            }
        }
        map.set(l, tmp);
    }
    console.log(map);
    // let res = [];
    for (const k of map.keys()) {
        let arr = map.get(k);
        console.log(arr);
    }
};

const isPredecessor = (short, long) => {
    if (long.length - short.length != 1) {
        return false;
    } else {
        for (let i = 0; i < short.length; i++) {
            if (short[i] != long[i]) {
                let tmp = long.replace(long[i], '');
                if (tmp != short) {
                    return false;
                }
            }
        }
    }
    return true;
};

const main = () => {
    let words = ["a", "b", "ba", "bca", "bda", "bdca"];
    console.log(longestStrChain(words));
    // console.log(isPredecessor("bda", "bdca"));
};

main()