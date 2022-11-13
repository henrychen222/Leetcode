/*
* 09/17/22 evening
* https://leetcode.com/contest/weekly-contest-311/problems/sum-of-prefix-scores-of-strings/
*/

const pr = console.log;

const ord = (c) => c.charCodeAt();

// memory out
function Trie3() {
    this.next = Array(26).fill(null);
    this.cnt = 0;
    this.insert = insert;
    this.query = query;
    function insert(s) {
        let cur = this;
        for (const c of s) {
            let idx = ord(c) - 97;
            if (cur.next[idx] == null) cur.next[idx] = new Trie();
            cur = cur.next[idx];
            cur.cnt++;
        }
    }
    function query(s) {
        let cur = this, res = 0;
        for (const c of s) {
            let idx = ord(c) - 97;
            cur = cur.next[idx];
            res += cur.cnt;
        }
        return res;
    }
}

// Accepted --- 2387ms
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

// memory out AC in Java
// reference: tanmay_raj_29 zokumyoin raincoat911
function Trie1() {
    let root = new TrieNode();
    function TrieNode() {
        this.next = [];
        this.cnt = 0;
    }
    return { insert, query }
    function insert(s) {
        let cur = root;
        for (const c of s) {
            let idx = ord(c) - 97;
            if (cur.next[idx] == null) cur.next[idx] = new TrieNode();
            cur = cur.next[idx];
            cur.cnt++;
        }
    }
    function query(s) {
        let cur = root, res = 0;
        for (const c of s) {
            let idx = ord(c) - 97;
            cur = cur.next[idx];
            res += cur.cnt;
        }
        return res;
    }
}

const sumPrefixScores = (a) => {
    let trie = new Trie(), res = [];
    for (const s of a) trie.insert(s);
    for (const s of a) res.push(trie.query(s));
    return res;
};

////////////////////////////////////////////////////////////////////////////
// TLE
let m;
const sumPrefixScores1 = (a) => {
    m = new Map();
    for (const s of a) {
        if (!m.has(s)) {
            let se = new Set(), p = '';
            for (const c of s) {
                p += c;
                se.add(p);
            }
            m.set(s, se);
        }
    }
    // pr(m);
    let res = [], memoS = new Map(), memoP = new Map();
    for (const s of a) {
        if (memoS.has(s)) {
            let sum = memoS.get(s);
            res.push(sum);
        } else {
            let p = '', sum = 0;
            for (const c of s) {
                p += c;
                if (memoP.has(p)) {
                    sum += memoP.get(p);
                } else {
                    let v = cal(p, a);
                    sum += v
                    memoP.set(p, v);
                    if (v == 0) break;
                }
            }
            // pr(s, sum)
            res.push(sum)
            memoS.set(s, sum);
        }
    }
    return res;
};

const cal = (p, a) => {
    let res = 0;
    for (const s of a) {
        let se = m.get(s);
        if (se.has(p)) {
            // pr('prefix', p, s)
            res++;
        }
    }
    return res;
};

const main = () => {
    let a = ["abc", "ab", "bc", "b"];
    let a2 = ["abcd"];
    pr(sumPrefixScores(a))
    pr(sumPrefixScores(a2))
};

main()