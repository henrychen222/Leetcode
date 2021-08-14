/**
 * 08/07/21 evening
 */

const pr = console.log;
const mi = Math.min;
const mx = Math.max;

// const isPrefixString = (s, w) => {
//     if (s.length < w[0].length) return false;
//     let ws = w.join("");
//     // pr(s, ws)
//     return ws.startsWith(s);
// };

// Accepted
const isPrefixString = (s, w) => {
    let tmp = '';
    for (const e of w) {
        tmp += e;
        if (tmp == s) return true; 
    }
    return false;
};

const main = () => {
    let s = "iloveleetcode", words = ["i", "love", "leetcode", "apples"];
    let s2 = "iloveleetcode", words2 = ["apples", "i", "love", "leetcode"];
    let s_debug1 = "a", words_debug1 = ["aa","aaaa","banana"];
    let s_debug2 = "aaa", words_debug2 = ["aa","aaa","fjaklfj"];
    pr(isPrefixString(s, words));
    pr(isPrefixString(s2, words2));
    pr(isPrefixString(s_debug1, words_debug1));
    pr(isPrefixString(s_debug2, words_debug2));
};

main()