/**
 * 04/05/21 night
 * https://leetcode.com/problems/implement-magic-dictionary/
 */


const pr = console.log;

// Accepted --- 104ms 68.25%
function MagicDictionary() {
    let se = new Set();
    return {
        buildDict,
        search
    }

    function buildDict(dict) {
        for (const e of dict) se.add(e);
    }

    function search(word) {
        for (const e of se) {
            if (ok(word, e)) return 1;
        }
        return 0;
    }

    function ok(s, t) {
        if (s == t) return 0;
        let n = s.length;
        if (n != t.length) return 0;
        let diff = 0;
        for (let i = 0; i < n; i++) {
            if (s[i] != t[i]) diff++;
            if (diff > 1) return 0;
        }
        return 1;
    }
};

const main = () => {
    let magicDictionary = new MagicDictionary();
    magicDictionary.buildDict(["hello", "leetcode"]);
    pr(magicDictionary.search("hello")); // false
    pr(magicDictionary.search("hhllo")); // true
    pr(magicDictionary.search("hell")); // false
    pr(magicDictionary.search("leetcoded")); // false
};

main()