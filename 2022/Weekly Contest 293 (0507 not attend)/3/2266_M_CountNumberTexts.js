/**
 * 05/08//22 night
 * https://leetcode.com/contest/weekly-contest-292/problems/count-number-of-texts/
 */

const pr = console.log;

const ord = (c) => c.charCodeAt();
const char = (ascii) => String.fromCharCode(ascii);
const mod = 1e9 + 7;

// TLE
let m, build, need, source, res;
const countTexts = (pressedKeys) => {
    need = pressedKeys;
    source = new Set();
    res = 0;
    [m, build] = mapping();
    // pr(m);
    // pr(build);
    // pr(make("aaadd"), make('abdd'), make('badd'), make('cdd'), make('aaae'), make('abe'), make('bae'), make('ce'))
    for (const c of need) {
        for (const e of build.get(c)) source.add(e);
    }
    // pr(source)
    dfs([], 0, true);
    return res % mod;
};


const dfs = (msg, len, match) => {
    // pr(msg, make(msg), len, match, need.length);
    if (match) {
        let cur = make(msg);
        if (cur == need) {
            // pr('ok', msg, len, cur)
            res++;
        }
    } else {
        return;
    }
    for (const c of source) {
        msg.push(c);
        if (len > need.length) break;
        len += m.get(c)[1];
        // pr(msg, make(msg), len)
        match = ok(msg);
        dfs(msg, len, match);
        let last = msg.pop();
        len -= m.get(last)[1];
        match = ok(msg);
    }
};

const ok = (msg) => {
    let s = make(msg);
    for (let i = 0; i < s.length; i++) {
        if (s[i] != need[i]) return false;
    }
    return true;
};

const make = (s) => {
    let res = '';
    for (const c of s) {
        let [v, t] = m.get(c);
        let cur = (v + '').repeat(t);
        res += cur;
    }
    return res;
};

const mapping = () => {
    let m = new Map(), build = new Map();
    for (let i = 97, v = 1, idx = 1; i <= 122; i++) {
        let c = char(i);
        if (inc(c)) {
            v++;
            idx = 1;
        } else {
            idx++;
        }
        // pr(c, t);
        m.set(c, [v, idx]);
        if (!build.has(v + '')) build.set(v + '', []);
        build.get(v + '').push(c);
    }
    return [m, build];
}

const inc = (c) => 'adgjmptw'.indexOf(c) != -1;

const main = () => {
    let pressedKeys = "22233";
    let pressedKeys2 = "222222222222222222222222222222222222";
    let test = "22222222222222222222"
    pr(countTexts(pressedKeys))
    pr(countTexts(test))
};

main()