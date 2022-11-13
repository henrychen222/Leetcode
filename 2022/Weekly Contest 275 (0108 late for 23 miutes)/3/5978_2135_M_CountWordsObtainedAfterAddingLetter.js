/**
 * 01/08/21 evening
 * https://leetcode.com/contest/weekly-contest-275/problems/count-words-obtained-after-adding-a-letter/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };

// TLE
const wordCount = (startWords, targetWords) => {
    let setS = new Set(startWords), res = 0;
    // pr(setS);
    for (const t of targetWords) {
        let ok = canMake(setS, t);
        if (ok) {
            // pr("ok", t)
            res++;
        }
    }
    return res;
};

const canMake = (se, t) => {
    // pr("\n", t);
    let mt = counter(t);
    for (const s of se) {
        let lenDiff = s.length - t.length;
        if (lenDiff != -1) continue;
        let ms = counter(s), diff = difference(ms, mt);
        pr(s, t, "diff", diff, "lenDiff", lenDiff, s.split("").sort((x, y) => x.localeCompare(y)).join(""), t.split("").sort((x, y) => x.localeCompare(y)).join(""));
        if (diff == -1) {
            // pr(ms, mt);
            return true;
        }
    }
    return false;
};

const difference = (ms, mt) => {
    let res = 0;
    for (const [c, tocc] of mt) {
        res += (ms.get(c) || 0) - tocc;
    }
    return res;
};


const main = () => {
    let startWords = ["ant", "act", "tack"], targetWords = ["tack", "act", "acti"];
    let startWords2 = ["ab", "a"], targetWords2 = ["abc", "abcd"];
    let startWords_debug1 = ["uh"], targetWords_debug1 = ["u","hur","k","b","u","yse","giqoy","lni","olqb","nemc"]
    let startWords_debug2 = ["mox","bj","rsy","jqsh"], targetWords_debug2 = ["trk","vjb","jkr"];
    pr(wordCount(startWords, targetWords))
    pr(wordCount(startWords2, targetWords2))
    pr(wordCount(startWords_debug1, targetWords_debug1)) // 1
    pr(wordCount(startWords_debug2, targetWords_debug2)) // 1
};

main()
