/**
 * 06/11/22 evening
 * https://leetcode.com/contest/weekly-contest-297/problems/minimum-path-cost-in-a-grid/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };
const char = (ascii) => String.fromCharCode(ascii);
const ord = (c) => c.charCodeAt();

// Accepted
const distinctNames = (ideas) => {
    let se = new Set(ideas), cnt = initialize2DArray(26, 26), res = 0;
    for (const s of ideas) {
        for (let i = 97; i <= 122; i++) {
            let c = char(i), t = c + s.slice(1);
            if (!se.has(t)) cnt[ord(s[0]) - 97][i - 97]++;
        }
    }
    // pr(cnt);
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) res += cnt[i][j] * cnt[j][i];
    }
    return res;
};

const main = () => {
    let ideas = ["coffee", "donuts", "time", "toffee"];
    let ideas2 = ["lack", "back"]
    let debug1 = ["phhrrjjcm", "zjfkpps", "pm", "fnpduelfe", "mxtvjnq"];
    pr(distinctNames(ideas))
    pr(distinctNames(ideas2))
    pr(distinctNames(debug1)) // 18
};

main()