// 01/08/21 night

const pr = console.log;

// Accepted --- 339ms
const wordCount = (startWords, targetWords) => {
    let setS = new Set(), res = 0;
    for (let s of startWords) setS.add(process(s));
    // pr(setS);
    for (let t of targetWords) {
        let mask = process(t);
        // pr("tmask", mask);
        for (let i = 0; i < 26; i++) {
            if (mask & (1 << i)) {
                if (setS.has(mask ^ (1 << i))) {
                    res++;
                    break;
                }
            }
        }
    }
    return res;
};

const process = (s) => {
    let mask = 0;
    for (const c of s) mask |= 1 << (c.charCodeAt() - 97);
    return mask;
};

const main = () => {
    let startWords = ["ant", "act", "tack"], targetWords = ["tack", "act", "acti"];
    let startWords2 = ["ab", "a"], targetWords2 = ["abc", "abcd"];
    let startWords_debug1 = ["uh"], targetWords_debug1 = ["u", "hur", "k", "b", "u", "yse", "giqoy", "lni", "olqb", "nemc"]
    let startWords_debug2 = ["mox", "bj", "rsy", "jqsh"], targetWords_debug2 = ["trk", "vjb", "jkr"];
    pr(wordCount(startWords, targetWords))
    pr(wordCount(startWords2, targetWords2))
    pr(wordCount(startWords_debug1, targetWords_debug1)) // 1
    pr(wordCount(startWords_debug2, targetWords_debug2)) // 1
};

main()
