// 01/08/21 night

const pr = console.log;

const sortstr = (s) => s.split("").sort((x, y) => x.localeCompare(y)).join("");
// Accepted
const wordCount = (startWords, targetWords) => {
    let setS = new Set(startWords), res = 0;
    for (let s of startWords) {
        let sortS = sortstr(s);
        setS.add(sortS);
    }
    // pr(setS);
    for (let t of targetWords) {
        let sortT = sortstr(t);
        for (let i = 0; i < t.length; i++) {
            let tmp = sortT.slice(0, i) + sortT.slice(i + 1); // remove one char
            // pr(tmp);
            if (setS.has(tmp)) {
                res++;
                break;
            }
        }
    }
    return res;
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
