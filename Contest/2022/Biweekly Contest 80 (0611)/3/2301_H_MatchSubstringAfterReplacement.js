/**
 * 06/11/22 morning
 * https://leetcode.com/contest/biweekly-contest-80/problems/match-substring-after-replacement/
 */

const pr = console.log;

// Accepted 3366ms using array inside map
// Accepted 1742ms using set inside map
let ma;
const matchReplacement = (ss, s, mappings) => {
    let n = ss.length, se = new Set();
    // ma = build(mappings);
    ma = Build(mappings);
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let e = ss.slice(i, j + 1);
            if (e.length == s.length) se.add(e);
        }
    }
    for (const t of se) {
        if (canMake(s, t)) return true;
    }
    return false;
};

// fuck first time thinking is correct, but don't know how to write this
// reference uwi
const canMake = (s, t) => { // s -> t
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] == t[i]) continue;
        if (!ma.has(s[i])) return false;
        // let a = ma.get(s[i]);
        // if (a.indexOf(t[i]) == -1) return false;
        let se = ma.get(s[i]);
        if (!se.has(t[i])) return false;
    }
    return true;
};

const Build = (mappings) => {
    let m = new Map();
    for (const [x, y] of mappings) {
        if (!m.has(x)) m.set(x, new Set());
        m.get(x).add(y);
    }
    return m;
};
/////////////////////////////////////////////////////////////////////
// TLE
const matchReplacement2 = (ss, s, mappings) => {
    let n = ss.length, se = new Set(), q = [s], ma = build(mappings), used = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let e = ss.slice(i, j + 1);
            if (e.length == s.length) se.add(e);
        }
    }
    // pr(se);
    let visit = Array(s.length).fill(false);
    while (q.length) {
        let cur = q.shift();
        if (used.has(cur)) continue;
        used.add(cur);
        // pr("cur", cur);
        if (se.has(cur)) return true;
        for (let i = 0; i < cur.length; i++) {
            let c = cur[i];
            if (!ma.has(c) || visit[i]) continue;
            let a = ma.get(c);
            for (const rep of a) {
                let next = cur.slice(0, i) + rep + cur.slice(i + 1);
                q.push(next);
            }
        }
    }
    return false;
};

const build = (mappings) => {
    let m = new Map();
    for (const [x, y] of mappings) {
        if (!m.has(x)) m.set(x, []);
        m.get(x).push(y);
    }
    return m;
};

const main = () => {
    let s = "fool3e7bar", sub = "leet", mappings = [["e", "3"], ["t", "7"], ["t", "8"]];
    let s2 = "fooleetbar", sub2 = "f00l", mappings2 = [["o", "0"]];
    let s3 = "Fool33tbaR", sub3 = "leetd", mappings3 = [["e", "3"], ["t", "7"], ["t", "8"], ["d", "b"], ["p", "b"]];
    let s_debug1 = "gfos3tks9q9f1w30t38ga9vbwlm", sub_debug1 = "juzq2kcvo22pgo81c0", mapping_debug1 = [["3", "e"], ["b", "8"], ["e", "3"], ["0", "o"], ["8", "b"], ["s", "5"], ["l", "1"], ["o", "0"]];
    let s_debug2 = "eeeegeeeegeeeegeeeegeeeegeeeegeeeeg", sub_debug2 = "eeeee", mapping_debug2 = [["e", "a"], ["e", "b"], ["e", "c"], ["e", "d"], ["e", "f"], ["e", "h"], ["e", "i"], ["e", "j"], ["e", "k"], ["e", "l"], ["e", "m"], ["e", "n"], ["e", "o"], ["e", "p"], ["e", "q"], ["e", "r"], ["e", "s"], ["e", "t"], ["e", "u"], ["e", "v"], ["e", "w"], ["e", "x"], ["e", "y"], ["e", "z"], ["e", "0"], ["e", "1"], ["e", "2"], ["e", "3"], ["e", "4"], ["e", "5"], ["e", "6"], ["e", "7"], ["e", "8"], ["e", "9"], ["g", "a"], ["g", "b"], ["g", "c"], ["g", "d"], ["g", "f"], ["g", "h"], ["g", "i"], ["g", "j"], ["g", "k"], ["g", "l"], ["g", "m"], ["g", "n"], ["g", "o"], ["g", "p"], ["g", "q"], ["g", "r"], ["g", "s"], ["g", "t"], ["g", "u"], ["g", "v"], ["g", "w"], ["g", "x"], ["g", "y"], ["g", "z"], ["g", "0"], ["g", "1"], ["g", "2"], ["g", "3"], ["g", "4"], ["g", "5"], ["g", "6"], ["g", "7"], ["g", "8"], ["g", "9"]];
    pr(matchReplacement(s, sub, mappings))
    pr(matchReplacement(s2, sub2, mappings2))
    pr(matchReplacement(s3, sub3, mappings3))
    pr(matchReplacement(s_debug1, sub_debug1, mapping_debug1))
    pr(matchReplacement(s_debug2, sub_debug2, mapping_debug2))
};

main()