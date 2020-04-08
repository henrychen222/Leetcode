/**
 * 4.8 evening
 * https://leetcode.com/problems/longest-uncommon-subsequence-i/
 * 
 * The longest uncommon subsequence is defined as: 
 * the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other strings
 */

let ucs = [];

// find all uncommon sequence
const find = (target, check) => {
    if (!check.includes(target)) {
        ucs.push(target);
    }
    for (let i = 0; i < target.length; i++) {
        for (let j = i + 1; j < target.length; j++) {
            if (!check.includes(target.substring(i, j))) {
                ucs.push(target.substring(i, j));
            }
        }
    }
};

const longest = (ucs) => {
    let max = 0;
    if (ucs.length == 0) {
        return -1; // If the longest uncommon subsequence doesn't exist, return -1
    }
    ucs.forEach(x => {
        if (x.length > max) {
            max = x.length;
        }
    });
    return max;
};

// Accepted --- 60ms 37.5 MB 32.26%
const findLUSlength = (a, b) => {
    ucs = []; // clear
    find(a, b);
    find(b, a);
    console.log(ucs);
    return longest(ucs)
};

const main = () => {
    const a = "aba";
    const b = "cdc";

    const a2 = "aaa";
    const b2 = "aaa";
    console.log(findLUSlength(a, b));
    console.log(findLUSlength(a2, b2)); // debug
};

main()