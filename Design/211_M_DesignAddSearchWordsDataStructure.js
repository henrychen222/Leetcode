/**
 * 9.5 afternoon   03/15/21 evening fixed
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 */

// Accepted --- 176ms 97.90%
function WordDictionary() {
    this.a = [];
    this.memoT = new Set();
    this.memoF = new Map();
};

WordDictionary.prototype.addWord = function (word) {
    this.a.push(word);
};

WordDictionary.prototype.search = function (word) {
    if (this.memoT.has(word)) return true;
    if (this.memoF.has(word)) {
        let idx = this.memoF.get(word);
        for (let i = idx; i < this.a.length; i++) {
            if (check(word, this.a[i])) {
                this.memoT.add(word);
                return true;
            }
        }
        this.memoF.set(word, this.a.length);
        return false;
    }
    for (const e of this.a) {
        if (check(word, e)) {
            this.memoT.add(word);
            return true;
        }
    }
    this.memoF.set(word, this.a.length);
    return false;
};

const check = (w1, w2) => {
    let n = w1.length;
    if (n != w2.length) return false;
    for (let i = 0; i < n; i++) {
        if (w1[i] == '.') continue;
        if (w1[i] != w2[i]) return false;
    }
    return true;
};

const main = () => {
    let wordDictionary = new WordDictionary();
    wordDictionary.addWord("bad");
    wordDictionary.addWord("dad");
    wordDictionary.addWord("mad");
    console.log(wordDictionary.search("pad")); // False
    console.log(wordDictionary.search("bad")); // True
    console.log(wordDictionary.search(".ad")); // True
    console.log(wordDictionary.search("b..")); // True

    console.log("\n")
    let debug1 = new WordDictionary();
    debug1.addWord("a");
    debug1.addWord("a");
    console.log(debug1.search(".")); // true
    console.log(debug1.search("a")); // true
    console.log(debug1.search("aa")); // false
    console.log(debug1.search("a")); // true
    console.log(debug1.search(".a")); // false
    console.log(debug1.search("a.")); // false
};

main()

/////////////////////////////////// 9.5 afternoon /////////////////////////////////////////
// // Time limit 12/13
// function WordDictionary() {
//     this.words = [];
// };

// WordDictionary.prototype.addWord = function (word) {
//     this.words.push([word]);
// };

// WordDictionary.prototype.search = function (word) {
//     let memo = new Map();
//     if (memo.has(word)) {
//         return memo.get(word);
//     } else {
//         for (const w of this.words) {
//             if (word == w[0]) {
//                 memo.set(word, true);
//                 return true;
//             }
//             if (check(word, w[0])) {
//                 memo.set(word, true);
//                 return true;
//             }
//         }
//         return false;
//     }
// };

// const check = (w1, w2) => {
//     if (w1.length != w2.length) return false;
//     for (let i = 0; i < w1.length; i++) {
//         if (w1[i] == '.') continue;
//         if (w1[i] != w2[i]) return false;
//     }
//     return true;
// };

////////////////////////////////////////////////////////////////////////////
// Time Limit 12/13
// function WordDictionary() {
//     this.words = [];
// };

// WordDictionary.prototype.addWord = function(word) {
//     this.words.push([word]);
// };

// WordDictionary.prototype.search = function(word) {
//     let n = this.words.length;
//     for (const w of this.words) {
//         if (word == w[0]) return true;
//         let idx = [];
//         for (let i = 0; i < word.length; i++) {
//             if (word[i] == '.') idx.push(i);
//         }
//         // console.log(word, w[0], idx);
//         if (idx.length != 0) {
//             if (check(word, w[0], idx)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };

// const check = (w1, w2, idx) => {
//     if (w1.length != w2.length) return false;
//     for (let i = 0; i < w1.length; i++) {
//         if (idx.indexOf(i) != -1) continue;
//         if (w1[i] != w2[i]) return false;
//     }
//     return true;
// };