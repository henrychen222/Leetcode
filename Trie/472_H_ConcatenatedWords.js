/**
 * 05/20/21 morning
 * https://leetcode.com/problems/concatenated-words/
 */

// Accepted --- 304ms 71.24%
let se;
const findAllConcatenatedWordsInADict = (w) => {
    n = w.length;
    se = new Set(w);
    let res = [];
    for (const e of w) {
        if (dfs(e)) res.push(e);
    }
    return res;
}

const dfs = (s) => {
    for (let i = 1; i < s.length; i++) {
        let prefix = s.slice(0, i);
        let suffix = s.slice(i);
        // pr(prefix, suffix);
        if (se.has(prefix) && se.has(suffix)) {
            return 1;
        }
        if (se.has(prefix) && dfs(suffix)) {
            return 1;
        }
        if (se.has(suffix) && dfs(prefix)) {
            return 1;
        }
    }
    return 0;
};

const ok = (ss, a) => {
    let s = ss;
    let se = new Set(a);
    let pre = s.length;
    pr(111, "start", s);
    while (s.length) {
        for (let i = 0; i < s.length; i++) {
            let start = s.slice(0, i);
            if (se.has(start)) {
                s = s.slice(i); // wrong, not only this startWith. Many conditions, is DFS
                break;
            }
        }
        if (s.length == pre) break;
        pre = s.length;
        pr(s)
    }
    pr(222, "end", s);
    return s.length == 0;
};

const pr = console.log;
const main = () => {
    let words = ["cat", "cats", "catsdogcats", "dog", "dogcatsdog", "hippopotamuses", "rat", "ratcatdogcat"];
    let words2 = ["cat", "dog", "catdog"];
    // pr(findAllConcatenatedWordsInADict(words));
    pr(findAllConcatenatedWordsInADict(words2));
};

main()