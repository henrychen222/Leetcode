/*
 * 12/07/22 night
 * https://leetcode.com/problems/stream-of-characters/
 */

const pr = console.log;

// Accepted --- 2096ms 15.79%
function StreamChecker(words) {
    let cur = '';
    return { query }
    function query(letter) {
        cur += letter;
        for (const s of words) {
            if (cur.endsWith(s)) return true;
        }
        return false;
    }
}

const main = () => {
    let streamChecker = new StreamChecker(["cd", "f", "kl"]);
    pr(streamChecker.query("a")); // false
    pr(streamChecker.query("b")); // false
    pr(streamChecker.query("c")); // false
    pr(streamChecker.query("d")); // true
    pr(streamChecker.query("e")); // false
    pr(streamChecker.query("f")); // true
    pr(streamChecker.query("g")); // false
    pr(streamChecker.query("h")); // false
    pr(streamChecker.query("i")); // false
    pr(streamChecker.query("j")); // false
    pr(streamChecker.query("k")); // false
    pr(streamChecker.query("l")); // true
};

main()