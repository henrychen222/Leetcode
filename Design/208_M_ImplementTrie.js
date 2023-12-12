/**
 * 03/18/21 afternoon
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 */

const pr = console.log;

const ord = (c) => c.charCodeAt();
class TrieArray {
    constructor() {
        this.next = Array(26).fill(null);
        this.cnt = 0;
        this.end = false; // represent if it is end of a word
    }
    insert(s) {
        let cur = this;
        for (const c of s) {
            let idx = ord(c) - 97;
            pr(c, idx)
            if (cur.next[idx] == null) cur.next[idx] = new TrieArray();
            cur = cur.next[idx];
            cur.cnt++;
        }
        cur.end = true;
    }
    search(s, prefix = false) {
        let cur = this;
        for (const c of s) {
            let idx = ord(c) - 97;
            if (cur.next[idx] == null) return false;
            cur = cur.next[idx];
        }
        return prefix ? true : cur.end;
    }
}

// Accepted --- 167ms 11/13/23 evening
class Trie {
    constructor() {
        this.tree = new TrieArray();
    }

    insert(s) {
        this.tree.insert(s);
    }

    search(s) {
        return this.tree.search(s);
    }

    startsWith(s) {
        return this.tree.search(s, true)
    }
}

// Accepted --- 256ms 27.02%
class Trie1 {
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