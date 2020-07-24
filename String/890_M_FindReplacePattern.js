/**
 * 7.23 night
 * https://leetcode.com/problems/find-and-replace-pattern/
 */

// Accepted --- 80ms 40.4MB 54.31%
const findAndReplacePattern = (words, pattern) => {
    let patternRec = getRecord(pattern);
    // console.log(patternRec);
    // console.log("")
    let resoppo = [];
    for (const w of words) {
        let wRec = getRecord(w);
        // console.log(wRec);
        if (wRec.length != patternRec.length) {
            resoppo.push(w);
        } else {
            for (let i = 0; i < patternRec.length; i++) {
                if ((wRec[i][1] != patternRec[i][1]) || (wRec[i][2] != patternRec[i][2])) {
                    if (resoppo.indexOf(w) == -1) {
                        resoppo.push(w);
                    }
                }
            }
        }
    }
    return words.filter(x => resoppo.indexOf(x) == -1);
};

const getRecord = (str) => {
    let record = [];
    let element = [...new Set(str.split(""))];
    for (const e of element) {
        record.push([e, getFrequencyString(str, e), str.indexOf(e)]);
    }
    record.sort((a, b) => b[1] - a[1]);
    return record;
};

const getFrequencyString = (str, item) => {
    return str.split("").filter(x => x === item).length;
};

const main = () => {
    let words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"],
        pattern = "abb";
    let words_debug1 = ["badc", "abab", "dddd", "dede", "yyxx"],
        pattern_debug1 = "baba";
    console.log(findAndReplacePattern(words, pattern));
    console.log(findAndReplacePattern(words_debug1, pattern_debug1)); // ["abab","dede"]
};

main()