/*
 * 07/15/23 night
 * https://leetcode.com/contest/weekly-contest-354/problems/length-of-the-longest-valid-substring/
 */

const pr = console.log;

class Trie {
    constructor() {
        this.next = new Map();
        this.cnt = 0;
        this.end = false;
    }
    insert(s) {
        let cur = this;
        for (let i = s.length - 1; i >= 0; i--) { // reverse insert
            let c = s[i];
            if (!cur.next.has(c)) cur.next.set(c, new Trie());
            cur = cur.next.get(c);
            cur.cnt++;
        }
        cur.end = true;
    }
    isValid(s, l, r) {
        let cur = this;
        for (let i = r; i >= l; i--) {
            if (!cur.next.has(s[i])) return false;
            cur = cur.next.get(s[i]);
            if (cur.end) return true;
        }
        return false;
    }
}

// reference: https://leetcode.cn/circle/discuss/CU92jW/ out of memory
// Java Accepted
const longestValidSubstring = (word, forbidden) => {
    let n = word.length, l = 0; res = 0, tree = new Trie();
    for (const s of forbidden) tree.insert(s);
    for (let i = 0; i < n; i++) {
        while (tree.isValid(word, l, i)) l++;
        res = Math.max(res, i - l + 1);
    }
    return res;
};

const main = () => {
    let word = "cbaaaabc", forbidden = ["aaa", "cb"]
    let word2 = "leetcode", forbidden2 = ["de", "le", "e"]
    pr(longestValidSubstring(word, forbidden))
    pr(longestValidSubstring(word2, forbidden2))
};

main()