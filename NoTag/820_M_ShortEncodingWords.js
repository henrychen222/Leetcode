/**
 * 03/06/21 afternoon
 * https://leetcode.com/problems/short-encoding-of-words/
 */

const pr = console.log;

// Accepted --- 2596ms 7.41%
const minimumLengthEncoding = (w) => {
    let n = w.length;
    w.sort((a, b) => a.length - b.length);
    let se = new Set();
    let re = [];
    let round = 0;
    // pr(w);
    // for (let i = 0; i <= 10; i++) {
    while (1) {
        if (se.size == re[0] || (round >= 2 && re.length == 0)) break;
        for (let i = 0; i < n; i++) {
            if (se.has(i)) continue;
            for (let j = i + 1; j < n; j++) {
                if (se.has(j)) continue;
                if (isSub(w[i], w[j])) {
                    se.add(i);
                    re.unshift(se.size);
                }
            }
        }
        round++;
        // pr(w, re, se);
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (se.has(i)) continue;
        res += w[i].length;
        res++;
    }
    return res;
};

const isSub1 = (s, p) => {
    let idx = p.lastIndexOf(s);
    if (idx != -1) {
        // pr(idx, p.slice(idx), s)
        if (p.slice(idx) == s) return 1;
    }
    return 0;
};

// Accepted --- 2612ms 7.41%
const isSub = (s, p) => {
    let sn = s.length;
    let pn = p.length;
    let idx = p.lastIndexOf(s);
    if (idx != -1) {
        if (pn - idx == sn) return 1;
    }
    return 0;
};

const main = () => {
    let words = ["time", "me", "bell"];
    let words2 = ["t"];
    let words3 = ["t", "s"];
    let word_debug1 = ["feipyxx", "e"];
    let word_debug2 = ["ctxdic", "c"];
    pr(minimumLengthEncoding(words));
    pr(minimumLengthEncoding(words2));
    pr(minimumLengthEncoding(words3));
    pr(minimumLengthEncoding(word_debug1)); // 10
    pr(minimumLengthEncoding(word_debug2)); // 7
};

main()