/**
 * 10/16/21 morning
 * https://leetcode.com/contest/biweekly-contest-63/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/
 */

const pr = console.log;

const cutMaxConsecutive = (a_or_s) => { let d = [], start = 0, n = a_or_s.length; for (let i = 0; i + 1 < n; i++) { if (a_or_s[i + 1] != a_or_s[i]) { d.push(a_or_s.slice(start, i + 1)); start = i + 1; } } d.push(a_or_s.slice(start)); return d; };

// Accepted
const winnerOfGame = (ss) => {
    let a = cutMaxConsecutive(ss);
    // pr(a);
    let alice = 0, bob = 0;
    for (const s of a) {
        let can = s.length - 2;
        if (can < 0) continue;
        s[0] == 'A' ? alice += can : bob += can;
    }
    // pr(alice, bob);
    return alice > bob && alice != 0;
};

// TLE
const winnerOfGame1 = (s) => {
    let t;
    for (t = 1; ; t++) {
        // pr(s);
        let search = t & 1 ? 'A' : 'B';
        let n = s.length;
        let found = false;
        for (let i = 0; i < n; i++) {
            if (i - 1 >= 0 && i + 1 < n) {
                if (s[i - 1] == search && s[i] == search && s[i + 1] == search) {
                    s = s.slice(0, i) + s.slice(i + 1);
                    found = true;
                    break;
                }
            }
        }
        if (!found) break;
    }
    return t % 2 == 0;
};

const main = () => {
    let colors = "AAABABB"
    let colors2 = "AA";
    let colors3 = "ABBBBBBBAAA";
    let debug2 = "AAAABBBB"; // false
    pr(winnerOfGame(colors))
    pr(winnerOfGame(colors2))
    pr(winnerOfGame(colors3))
    pr(winnerOfGame(debug2))
};

main()