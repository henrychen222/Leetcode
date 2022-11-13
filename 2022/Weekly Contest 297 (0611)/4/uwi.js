/**
 * 06/11/22 evening
 * https://leetcode.com/contest/weekly-contest-297/problems/minimum-path-cost-in-a-grid/
 */

const pr = console.log;

const ord = (c) => c.charCodeAt();
const charIthBitValue = (c) => 1 << ord(c) - 97;
const checkIthBit = (x, i) => x & (1 << i);

// Accepted
const distinctNames = (ideas) => {
    let m = new Map(), res = 0;
    for (const s of ideas) {
        let r = s.slice(1);
        m.set(r, (m.get(r) || 0) + charIthBitValue(s[0]));
    };
    // pr(m);
    for (let i = 0; i < 26; i++) {
        for (let j = i + 1; j < 26; j++) {
            let a = 0, b = 0;
            for (const [, x] of m) {
                if (checkIthBit(x, i) && !checkIthBit(x, j)) a++;
                if (checkIthBit(x, j) && !checkIthBit(x, i)) b++;
            }
            res += a * b;
        }
    }
    return res * 2;
};

// TLE
const distinctNames1 = (ideas) => {
    let se = new Set(ideas), n = ideas.length, res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let a = ideas[i], b = ideas[j];
            res += cal(a, b, se);
            res += cal(b, a, se);
        }
    }
    return res;
};

const cal = (a, b, se) => {
    let ta = b[0] + a.slice(1), tb = a[0] + b.slice(1), res = 0;
    if (!se.has(ta) && !se.has(tb)) res++;
    return res;
};

const main = () => {
    let ideas = ["coffee", "donuts", "time", "toffee"];
    let ideas2 = ["lack", "back"]
    pr(distinctNames(ideas))
    pr(distinctNames(ideas2))
};

main()