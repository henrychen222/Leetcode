/**
 * 7.20 night
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

// need to fix
const lengthOfLongestSubstring = (s) => {
    if (s.length == 0) return 0;
    if (s.length == 1) return 1;
    if ([...new Set(s.split(""))].join("") == s) return s.length;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let tmp = 0;
        for (let j = i; j < s.length; j++) {
            if (s[i] == s[j] && i != j) {
                let right = j - 1;
                tmp = right - i + 1;
                // tmp = s.slice(i, j);
                // console.log(tmp)
                break;
            }
        }
        max = Math.max(max, tmp);
        let currentTillEndSub = s.slice(i, s.length);
        if ([...new Set(currentTillEndSub.split(""))].join("") == currentTillEndSub) {
            max = Math.max(max, currentTillEndSub.length);
        }
    }
    return max;
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