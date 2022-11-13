/**
 * 12/18/21 evening
 * https://leetcode.com/contest/weekly-contest-272/problems/adding-spaces-to-a-string/
 */

const pr = console.log;

// Accepted
const addSpaces = (s, spaces) => {
    let res = '';
    let l = 0;
    for (const r of spaces) {
        let t = s.slice(l, r);
        l = r;
        // pr(t);
        res += t;
        res += ' ';
    }
    let last = s.slice(l);
    // pr(last);
    res += last;
    return res;
};

const main = () => {
    let s = "LeetcodeHelpsMeLearn", spaces = [8, 13, 15];
    let s2 = "icodeinpython", spaces2 = [1, 5, 7, 9];
    let s3 = "spacing", spaces3 = [0, 1, 2, 3, 4, 5, 6];
    pr(addSpaces(s, spaces))
    pr(addSpaces(s2, spaces2))
    pr(addSpaces(s3, spaces3))
};

main()