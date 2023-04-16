/*
09/17/22 night
example problem:
https://leetcode.com/problems/sum-of-prefix-scores-of-strings/
*/

class Trie {
    constructor() {
        this.next = Array(26).fill(null);
        this.cnt = 0;
    }
    insert(s) {
        let cur = this;
        for (const c of s) {
            let idx = ord(c) - 97;
            if (cur.next[idx] == null) cur.next[idx] = new Trie();
            cur = cur.next[idx];
            cur.cnt++;
        }
    }
    query(s) {
        let cur = this, res = 0;
        for (const c of s) {
            let idx = ord(c) - 97;
            cur = cur.next[idx];
            res += cur.cnt;
        }
        return res;
    }
}