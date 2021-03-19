/**
 * 03/18/21 afternoon
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 */

const pr = console.log;

// Accepted --- 256ms 27.02%
class Trie {
    constructor() {
        this.se = new Set();
    }

    insert(word) {
        this.se.add(word);
    }

    search(word) {
        return this.se.has(word);
    }

    startsWith(prefix) {
        for (const s of this.se) {
            if (s.startsWith(prefix)) return 1;
        }
        return 0;
    }
}

const main = () => {
    let trie = new Trie();
    trie.insert("apple");
    pr(trie.search("apple")); // True
    pr(trie.search("app")); // False
    pr(trie.startsWith("app")); // True
    trie.insert("app");
    pr(trie.search("app")); // True
};

main()