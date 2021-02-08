/**
 * 7.20 night  02/07/21 afternoon fixed
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

// Accepted --- 108ms 84.44%
// reference: https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/1729/11-line-simple-Java-solution-O(n)-with-explanation
const lengthOfLongestSubstring = (s) => {
    let n = s.length;
    let res = 0;
    let m = new Map();
    let left = 0;
    for (let r = 0; r < n; r++) { // scan s with right pointer, save in map with value and index
        if (m.has(s[r])) { // If find s[r] in map, move left pointer to the right of the same char last found
            left = Math.max(left, m.get(s[r]) + 1);
        }
        // console.log(left, r);
        m.set(s[r], r);
        res = Math.max(res, r - left + 1);
    }
    return res;
};

// Accepted --- 316ms 23.37%
const lengthOfLongestSubstring1 = (s) => {
    let n = s.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let len = n - i;
        let se = new Set();
        for (let j = i; j < n; j++) {
            if (se.has(s[j])) {
                len = j - i;
                // console.log(s.slice(i, j));
                break;
            } else {
                se.add(s[j])
            }
        }
        res = Math.max(res, len);
    }
    return res;
};

const main = () => {
    let s = "abcabcbb";
    let s2 = "bbbbb";
    let s3 = "pwwkew";
    let debug1 = " ";
    let debug2 = "";
    let debug3 = "au";
    let debug4 = "aab";
    let debug5 = "cdd";
    console.log(lengthOfLongestSubstring(s)); // 3
    console.log(lengthOfLongestSubstring(s2)); // 1
    console.log(lengthOfLongestSubstring(s3)); // 3
    console.log(lengthOfLongestSubstring(debug1)); // 1
    console.log(lengthOfLongestSubstring(debug2)); // 0
    console.log(lengthOfLongestSubstring(debug3)); // 2
    console.log(lengthOfLongestSubstring(debug4)); // 2
    console.log(lengthOfLongestSubstring(debug5)); // 2
};

main()


// need to fix
// const lengthOfLongestSubstring = (s) => {
//     if (s.length == 0) return 0;
//     if (s.length == 1) return 1;
//     if ([...new Set(s.split(""))].join("") == s) return s.length;
//     let max = 0;
//     for (let i = 0; i < s.length; i++) {
//         let tmp = 0;
//         for (let j = i; j < s.length; j++) {
//             if (s[i] == s[j] && i != j) {
//                 let right = j - 1;
//                 tmp = right - i + 1;
//                 // tmp = s.slice(i, j);
//                 // console.log(tmp)
//                 break;
//             }
//         }
//         max = Math.max(max, tmp);
//         let currentTillEndSub = s.slice(i, s.length);
//         if ([...new Set(currentTillEndSub.split(""))].join("") == currentTillEndSub) {
//             max = Math.max(max, currentTillEndSub.length);
//         }
//     }
//     return max;
// };