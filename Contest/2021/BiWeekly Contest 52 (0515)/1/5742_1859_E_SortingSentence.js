/**
 * 05/15/21 morning
 * https://leetcode.com/contest/biweekly-contest-52/problems/sorting-the-sentence/
 */

const pr = console.log;

// Accepted
const sortSentence = (s) => {
    let a = s.split(" ");
    let res = [];
    for (const e of a) {
        let n = e.length;
        for (let i = n - 1; ~i; i--) {
            if (isLetter(e[i])) {
                res.push([e.slice(0, i + 1), Number(e.slice(i + 1))]);
                break;
            }
        }
    }
    res.sort((x, y) => x[1] - y[1]);
    res = res.map(x => x[0]);
    return res.join(" ");
};

const isLetter = (c) => {
    return (c.charCodeAt() >= 65 && c.charCodeAt() <= 90) || (c.charCodeAt() >= 97 && c.charCodeAt() <= 122);
};

const main = () => {
    let s = "is2 sentence4 This1 a3";
    let s2 = "Myself2 Me1 I4 and3";
    pr(sortSentence(s));
    pr(sortSentence(s2));
};

main()

