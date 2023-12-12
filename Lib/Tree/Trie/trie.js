/*
09/17/22 night
example problem:
https://leetcode.com/problems/implement-trie-prefix-tree/
https://leetcode.com/problems/sum-of-prefix-scores-of-strings/
https://leetcode.com/problems/length-of-the-longest-valid-substring/
https://leetcode.com/contest/weekly-contest-370/problems/maximum-balanced-subsequence-sum/
*/

class TrieArray {
    constructor() {
        this.next = Array(26).fill(null);
        this.cnt = 0;
        this.end = false; // represent if it is end of a word
    }
    insert(s) {
        let cur = this;
        for (let i = s.length - 1; i >= 0; i--) { // reverse insert
            let c = s[i];
            // for (const c of s) {
            let idx = ord(c) - 97;
            if (cur.next[idx] == null) cur.next[idx] = new Trie();
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
    // query(s) {
    //     let cur = this, res = 0;
    //     for (const c of s) {
    //         let idx = ord(c) - 97;
    //         cur = cur.next[idx];
    //         res += cur.cnt;
    //     }
    //     return res;
    // }
    // isValid(s, l, r) {
    //     let cur = this;
    //     for (let i = r; i >= l; i--) {
    //         let idx = ord(s[i]) - 97;
    //         if (cur.next[idx] == null) return false;
    //         cur = cur.next[idx];
    //         if (cur.end) return true;
    //     }
    //     return false;
    // }
}


class TrieBinary {
    
}