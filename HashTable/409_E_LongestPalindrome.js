/**
 * 6.19 evening
 * https://leetcode.com/problems/longest-palindrome/
 */

// Accepted --- 92ms 39.1MB 15.19%
const longestPalindrome = (s) => {
    let map_even = new Map();
    let map_odd = new Map();
    let item = [...new Set(s.split(""))];
    for (const i of item) {
        let freq = getFrequency(s.split(""), i);
        if (freq % 2 == 0) {
            map_even.set(i, freq);
        } else {
            map_odd.set(i, freq);
        }
    }
    // console.log(map_even);
    // console.log(map_odd);
    let sum = 0;
    for (const k of map_even.keys()) {
        sum += map_even.get(k);
    }
    for (const k of map_odd.keys()) {
        sum += (map_odd.get(k) >> 1) * 2;
    }
    if (map_odd.size == 0 && map_even.size != 0) {
        return sum;
    } else if (map_odd.size != 0 && map_even.size == 0) {
        return sum + 1;
    } else if (map_odd.size == 0 && map_even.size == 0) {
        return 0;
    } else {
        return sum + 1;
    }
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let s = "abccccdd";
    let debug1 = "bb";
    let debug2 = "ccc";
    console.log(longestPalindrome(s));
    console.log(longestPalindrome(debug1));
    console.log(longestPalindrome(debug2));
};

main()