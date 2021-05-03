
/**
 * 04/24/21 evening
 * https://leetcode.com/contest/weekly-contest-238/problems/longest-substring-of-all-vowels-in-order/
 */

const pr = console.log;

// TLE
const mx = Math.max;
const longestBeautifulSubstring = (s) => {
    let n = s.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let has = Array(5).fill(0);
        for (let j = i; j < n; j++) {
            let len = j - i + 1;
            if (s[j] == 'a') {
                if (has[1] || has[2] || has[3] || has[4]) {
                    if (ok(has)) res = mx(res, len - 1);
                    break;
                }
                has[0]++;
                if (ok(has)) res = mx(res, len);
            } else if (s[j] == 'e') {
                if (has[2] || has[3] || has[4]) {
                    if (ok(has)) res = mx(res, len - 1);
                    break;
                }
                has[1]++;
                if (ok(has)) res = mx(res, len);
            } else if (s[j] == 'i') {
                if (has[3] || has[4]) {
                    if (ok(has)) res = mx(res, len - 1);
                    break;
                }
                has[2]++;
                if (ok(has)) res = mx(res, len);
            } else if (s[j] == 'o') {
                if (has[4]) {
                    if (ok(has)) res = mx(res, len - 1);
                    break;
                }
                has[3]++;
                if (ok(has)) res = mx(res, len);
            } else if (s[j] == 'u') {
                has[4]++;
                if (ok(has)) res = mx(res, len);
            } else {
                if (ok(has)) res = mx(res, len);
            }
        }
    }
    return res;
};

const ok = (a) => {
    for (const e of a) {
        if (e == 0) return 0;
    }
    return 1;
};

const main = () => {
    let word = "aeiaaioaaaaeiiiiouuuooaauuaeiu";
    let word2 = "aeeeiiiioooauuuaeiou";
    let word3 = "a";
    pr(longestBeautifulSubstring(word));
    pr(longestBeautifulSubstring(word2));
    pr(longestBeautifulSubstring(word3));
};

main()