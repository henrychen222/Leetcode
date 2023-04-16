/**
 * 08/21/21 morning
 * https://leetcode.com/contest/biweekly-contest-59/problems/minimum-time-to-type-word-using-special-typewriter/
 */

const pr = console.log;

// Accepted
const minTimeToType = (s) => {
    let a = [];
    for (let i = 0; i < 26; i++) a.push(String.fromCharCode(i + 97));
    // pr(a)
    let n = s.length;
    let idx = a.indexOf(s[0]);
    let move = Math.min(idx, 26 - idx);
    // r(move);
    for (let i = 1; i < n; i++) {
        let cur = s[i], pre = s[i - 1];
        let curI = a.indexOf(cur), preI = a.indexOf(pre);
        let min = Math.min(curI, preI), max = Math.max(curI, preI);
        let cw = max - min;
        let ccw = (min - 0) + (26 - max);
        move += Math.min(cw, ccw);
        // pr(pre, cur, cw, ccw);
    }
    // pr(move);
    return move + n;
};


const main = () => {
    let word = "abc";
    let word2 = "bza"
    let word3 = "zjpc";
    pr(minTimeToType(word))
    pr(minTimeToType(word2))
    pr(minTimeToType(word3))
};

main()