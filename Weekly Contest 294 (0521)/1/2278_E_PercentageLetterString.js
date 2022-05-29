/**
 * 05/21/22 evening
 * https://leetcode.com/contest/weekly-contest-294/problems/percentage-of-letter-in-string/
 */

const pr = console.log;

// Accepted
const percentageLetter = (s, letter) => {
    let n = s.length, cnt = 0;
    for (const c of s) {
        if (c == letter) cnt++;
    }
    let res = cnt / n * 100;
    // pr(cnt, n, res, rem);
    return parseInt(res);
};

const main = () => {
    let s = "foobar", letter = "o";
    let s2 = "jjjj", letter2 = "k";
    let s_debug1 = "sgawtb", letter_debug1 = "s";
    pr(percentageLetter(s, letter))
    pr(percentageLetter(s2, letter2))
    pr(percentageLetter(s_debug1, letter_debug1)) // 16
};

main()