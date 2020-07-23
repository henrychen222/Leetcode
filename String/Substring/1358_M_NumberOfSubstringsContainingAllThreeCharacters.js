/**
 * 7.22 night
 * https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
 */

// need to fix
const numberOfSubstrings = (s) => {
    let cnt = 0;
    let start = 0;
    let end = 0;
    let window = "";
    while (start < s.length && end < s.length) {
        if ([...new Set(window.split(""))].length == 3) {
            cnt += start - end + 1;
            // window-=s[start];
            start++;
        } else if (s[end]) {
            window+=s[end];
            end++;
        } else {
            break;
        }
    }
    return cnt;
};

// Time Limit
const numberOfSubstrings1 = (s) => {
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substr = s.slice(i, j + 1);
            // console.log(substr);
            // console.log([...new Set(substr.split(""))]);
            if ([...new Set(substr.split(""))].length == 3) {
                cnt++;
            }
        }
    }
    return cnt;
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