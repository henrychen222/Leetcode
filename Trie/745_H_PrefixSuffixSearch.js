/**
 * 05/04/21 afternoon
 * https://leetcode.com/problems/prefix-and-suffix-search/
 */

// Accepted --- 1188ms 15.33%
function WordFilter(words) {
    let m = new Map();
    let n = words.length;
    for (let i = n - 1; ~i; i--) {
        if (!m.has(words[i])) m.set(words[i], []);
        m.get(words[i]).push(i);
    }
    m = new Map([...m].sort((x, y) => y[1][0] - x[1][0]));
    // pr(m);
    return {f};

    function f(prefix, suffix) {
        for (const [word, a] of m) {
            if (ok(word, prefix, suffix)) {
                return a[0];
            }
        }
        return -1;
    }

    function ok(w, pre, suf) {
        if (w.startsWith(pre) && w.endsWith(suf)) return 1;
        return 0;
    }
}

// Accepted --- 2044ms 8.97%
function WordFilter1(words) {
    let m = new Map();
    let n = words.length;
    for (let i = 0; i < n; i++) {
        if (!m.has(words[i])) m.set(words[i], []);
        m.get(words[i]).push(i);
    }
    // pr(m);
    return {f};

    function f(prefix, suffix) {
        let res = -1;
        for (const [word, a] of m) {
            if (ok(word, prefix, suffix)) {
                res = Math.max(res, a[a.length - 1]);
            }
        }
        return res;
    }

    function ok(w, pre, suf) {
        if (w.startsWith(pre) && w.endsWith(suf)) return 1;
        return 0;
    }
}

const pr = console.log;
const main = () => {
    let wordFilter = new WordFilter(["apple"]);
    pr(wordFilter.f("a", "e")); // 0

    pr();
    let wf_dedug1 = new WordFilter(["cabaabaaaa", "ccbcababac", "bacaabccba", "bcbbcbacaa", "abcaccbcaa", "accabaccaa", "cabcbbbcca", "ababccabcb", "caccbbcbab", "bccbacbcba"]);
    pr(wf_dedug1.f("bccbacbcba", "a")); // 9
    pr(wf_dedug1.f("ab", "abcaccbcaa")); // 4
    pr(wf_dedug1.f("a", "aa")); // 5
    pr(wf_dedug1.f("cabaaba", "abaaaa")); // 0
    pr(wf_dedug1.f("cacc", "accbbcbab")); // 8
    pr(wf_dedug1.f("ccbcab", "bac")); // 1
    pr(wf_dedug1.f("bac", "cba")); // 2
    pr(wf_dedug1.f("ac", "accabaccaa")); // 5
    pr(wf_dedug1.f("bcbb", "aa")); // 3
    pr(wf_dedug1.f("ccbca", "cbcababac")); // 1
};

main()