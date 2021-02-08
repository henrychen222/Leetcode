/**
 * 7.22 night  02/07/21 copy
 * https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
 */

// Accepted --- 92ms 91.18%
// reference: https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/discuss/516977/JavaC%2B%2BPython-Easy-and-Concise
const AASCII = 'a'.charCodeAt();
const numberOfSubstrings = (s) => {
    let res = 0;
    let n = s.length;
    let cnt = [0, 0, 0];
    let left = 0;
    for (let r = 0; r < n; r++) {
        cnt[s[r].charCodeAt() - AASCII]++;
        while (cnt[0] > 0 && cnt[1] > 0 && cnt[2] > 0) {
            cnt[s[left++].charCodeAt() - AASCII]--;
        }
        res += left;
    }
    return res;
};

// TLE  53/54
const numberOfSubstrings1 = (s) => {
    let res = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let se = new Set();
        for (let j = i; j < n; j++) {
            se.add(s[j]);
            if (se.size >= 3) {
                res += n - j;
                break;
            }
        }
    }
    return res;
};

const main = () => {
    let s = "abcabc";
    let s2 = "aaacb";
    let s3 = "abc";
    console.log(numberOfSubstrings(s));
    console.log(numberOfSubstrings(s2));
    console.log(numberOfSubstrings(s3));
};

main()


////////////////////////// 7.22 night ///////////////////////
// need to fix
// const numberOfSubstrings = (s) => {
//     let cnt = 0;
//     let start = 0;
//     let end = 0;
//     let window = "";
//     while (start < s.length && end < s.length) {
//         if ([...new Set(window.split(""))].length == 3) {
//             cnt += start - end + 1;
//             // window-=s[start];
//             start++;
//         } else if (s[end]) {
//             window+=s[end];
//             end++;
//         } else {
//             break;
//         }
//     }
//     return cnt;
// };

// Time Limit
// const numberOfSubstrings1 = (s) => {
//     let cnt = 0;
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i; j < s.length; j++) {
//             let substr = s.slice(i, j + 1);
//             // console.log(substr);
//             // console.log([...new Set(substr.split(""))]);
//             if ([...new Set(substr.split(""))].length == 3) {
//                 cnt++;
//             }
//         }
//     }
//     return cnt;
// };