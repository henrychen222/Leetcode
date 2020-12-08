/**
 * 12.7 morning
 * https://leetcode.com/problems/longest-string-chain/
 */

// Accepted --- 120ms 73.04%
/**
 * reference:
 * https://leetcode.com/problems/longest-string-chain/discuss/294890/C%2B%2BJavaPython-DP-Solution
 * https://xingxingpark.com/Leetcode-1048-Longest-String-Chain/
 */
const longestStrChain = (words) => {
    let dp = new Map();
    words.sort((a, b) => a.length - b.length);
    let res = 0;
    for (const w of words) {
        let best = 0;
        for (let i = 0; i < w.length; i++) {
            let prev = w.slice(0, i) + w.slice(i + 1);
            best = Math.max(best, (dp.get(prev) || 0) + 1);
            // console.log(prev, best)
        }
        dp.set(w, best);
        res = Math.max(res, best);
    }
    return res;
};

// Accepted --- 104ms 98.26%
const longestStrChain_modify = (words) => {
    let dp = new Map();
    words.sort((a, b) => a.length - b.length);
    let res = 0;
    for (const w of words) {
        let best = 0;
        for (let i = 0; i < w.length; i++) {
            let prev = w.slice(0, i) + w.slice(i + 1);
            best = Math.max(best, (dp.get(prev) + 1) || 1);  // difference
        }
        dp.set(w, best);
        res = Math.max(res, best);
    }
    return res;
};

const main = () => {
    let words = ["a", "b", "ba", "bca", "bda", "bdca"];
    let words2 = ["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"];
    console.log(longestStrChain(words));
    console.log(longestStrChain(words2));
};

main()