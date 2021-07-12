/**
 * 07/10/21 afternoon
 * https://leetcode.com/problems/sum-game/
 */

// Accepted --- 84ms https://leetcode.com/contest/biweekly-contest-56/ranking uwi
const sumGame = (s) => {
    let n = s.length;
    let lcnt = rcnt = diff = 0;
    for (let i = 0; i < n >> 1; i++) s[i] == '?' ? lcnt++ : diff -= s[i] - '0';
    for (let i = n >> 1; i < n; i++) s[i] == '?' ? rcnt++ : diff += s[i] - '0';
    // pr(lcnt, rcnt, diff)
    return (lcnt + rcnt) & 1 ? true : diff != 9 * (lcnt - rcnt) / 2;
};

const pr = console.log;
const main = () => {
    let num = "5023";
    let num2 = "25??";
    let num3 = "?3295???";
    pr(sumGame(num));
    pr(sumGame(num2));
    pr(sumGame(num3));
};

main()