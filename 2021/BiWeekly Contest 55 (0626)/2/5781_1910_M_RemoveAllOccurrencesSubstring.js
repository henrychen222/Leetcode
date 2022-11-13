/**
 * 06/26/21 morning
 * https://leetcode.com/contest/biweekly-contest-55/problems/remove-all-occurrences-of-a-substring/https://leetcode.com/contest/biweekly-contest-55/problems/remove-all-occurrences-of-a-substring/
 */

const pr = console.log;

// Accepted
const removeOccurrences = (s, p) => {
    while (1) {
        let idx = s.indexOf(p);
        let end = idx + p.length - 1;
        if (idx == -1) {
            break;
        } else {
            s = s.slice(0, idx) + s.slice(end + 1);
        }
    }
    return s;
};

const main = () => {
    let s = "daabcbaabcbc", part = "abc"
    let s2 = "axxxxyyyyb", part2 = "xy";
    pr(removeOccurrences(s, part))
    pr(removeOccurrences(s2, part2))
};

main()