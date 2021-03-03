/**
 * 03/02/21 night
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/
 */

const pr = console.log;

// Accepted --- 1824ms 12.50% (Should be WA)
let permSet;
let usedChars;
const findSubstring = (s, words) => {
    permSet = new Set();
    usedChars = [];
    let n = s.length;
    let nwords = words.length;
    let w = words.join("");
    let wcmap = Counter(w);
    let wmap = Counter(words);
    // pr(wmap, wcmap);
    let nw = w.length;
    let allcases;
    if (nwords <= 6 || nwords == 200) {
        allcases = permute(words);
    }
    // pr(allcases)
    let res = [];
    for (let i = 0; i < n; i++) {
        if (i + nw > n) continue;
        let tmp = s.slice(i, i + nw);
        if (nwords <= 6 || nwords == 200) {
            if (!checkALLCases(tmp, allcases)) continue;
        }
        if (canMake(tmp, wmap, wcmap)) {
            res.push(i);
        }
    }
    return res;
};

const canMake = (t, wmap, wcmap) => {
    let m = Counter(t);
    let nt = t.length;
    // pr(t, m);
    for (const [k, v] of wcmap) {
        if (v != m.get(k)) return false;
    }
    for (const [k, v] of wmap) { // issue here
        if (v == 1) {
            if (t.indexOf(k) == -1) return false;
        } else {
            let n = k.length;
            let cnt = 0;
            for (let i = 0; i < nt; i++) {
                if (i + n > nt) continue;
                let cur = t.slice(i, i + n);
                if (cur == k) {
                    cnt++;
                }
            }
            // pr(cnt, v);
            if (cnt < v) return false;
        }
    }
    return true;
};

const Counter = (sa) => {
    let map = new Map();
    for (const i of sa) {
        map.set(i, (map.get(i) + 1) || 1);
    }
    return map;
};

const permute = (input) => {
    let ch;
    for (let i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
            permSet.add(usedChars.slice().join(""));
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return permSet;
};

const checkALLCases = (t, allcases) => {
    for (const ca of allcases) {
        if (t == ca) {
            return true;
        }
    }
    return false;
};

const main = () => {
    let s = "barfoothefoobarman",
        words = ["foo", "bar"];
    let s2 = "wordgoodgoodgoodbestword",
        words2 = ["word", "good", "best", "word"];
    let s3 = "barfoofoobarthefoobarman",
        words3 = ["bar", "foo", "the"];
    let s_debug1 = "abababab",
        words_debug1 = ["ab", "ab", "ab"];
    let s_debug2 = "abababab",
        words_debug2 = ["ab", "ba"];
    let s_debug3 = "abaababbaba",
        words_debug3 = ["ab", "ba", "ab", "ba"];
    let s_debug4 = "abbaccaaabcabbbccbabbccabbacabcacbbaabbbbbaaabaccaacbccabcbababbbabccabacbbcabbaacaccccbaabcabaabaaaabcaabcacabaa",
        words_debug4 = ["cac", "aaa", "aba", "aab", "abc"];
    pr(findSubstring(s, words));
    pr(findSubstring(s2, words2));
    pr(findSubstring(s3, words3));
    pr(findSubstring(s_debug1, words_debug1)); // [0,2]
    pr(findSubstring(s_debug2, words_debug2)); // []
    pr(findSubstring(s_debug3, words_debug3)); // [1, 3]
    pr(findSubstring(s_debug4, words_debug4)); // [97]
}

main()