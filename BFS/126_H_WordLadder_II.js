/**
 * 07/24/21 afternoon
 * https://leetcode.com/problems/word-ladder-ii/
 */

// Accepted --- 112ms 68.94%
// reference: https://zxi.mytechroad.com/blog/searching/leetcode-126-word-ladder-ii/
const findLadders = (beginWord, endWord, wordList) => {
    let dic = new Set(wordList);
    if (!dic.has(endWord)) return [];
    dic.delete(beginWord);
    dic.delete(endWord);
    let steps = new Map([
        [beginWord, 1]
    ]);
    let parents = new Map();
    let q = [beginWord];
    let bn = beginWord.length;
    let step = 0;
    let found = false;
    while (q.length && !found) {
        step++;
        let t = q.length;
        while (t--) {
            let p = q.shift();
            let w = p;
            // pr(w);
            for (let i = 0; i < bn; i++) {
                let ch = w[i];
                for (let j = 0; j < 26; j++) {
                    let c = String.fromCharCode(j + 97);
                    // pr(c);
                    if (c == ch) continue;
                    w = ups(w, i, c);
                    // pr(parents)
                    if (w == endWord) {
                        operate(parents, w, p);
                        found = true;
                    } else {
                        if (steps.has(w) && step < steps.get(w)) {
                            operate(parents, w, p);
                        }
                    }
                    // pr(dic, w);
                    if (!dic.has(w)) continue;
                    dic.delete(w);
                    q.push(w);
                    steps.set(w, steps.get(p) + 1 || 1);
                    operate(parents, w, p);
                }
                w = ups(w, i, ch);
            }
        }
    }
    // pr(parents)
    let res = [];
    if (found) {
       let path = [endWord];
       dfs(endWord, beginWord, parents, path, res);
    }
    return res;
};

const ups = (s, i, c) => s.slice(0, i) + c + s.slice(i + 1);

const dfs = (target, cur, parents, path, res) => {
    
    if (target == cur) return res.push([...path].reverse());
    for (const p of (parents.get(target) || [])) {
        path.push(p);
        // pr('path', path)
        dfs(p, cur, parents, path, res);
        // pr('path2', path)
        path.pop();
    }
};

const operate = (parents, w, p) => {
    if (!parents.has(w)) parents.set(w, []);
    parents.get(w).push(p);
};

const pr = console.log;
const main = () => {
    let beginWord = "hit",
        endWord = "cog",
        wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
    let beginWord2 = "hit",
        endWord2 = "cog",
        wordList2 = ["hot", "dot", "dog", "lot", "log"];
    pr(findLadders(beginWord, endWord, wordList))
    pr(findLadders(beginWord2, endWord2, wordList2))
};

main()



// let se, bw, target, used, originSet, path;
// const findLadders = (beginWord, endWord, wordList) => {
//     bw = beginWord;
//     target = endWord;
//     se = new Set(wordList);
//     used = new Set([bw]);
//     originSet = used;
//     path = [];
//     // pr(se);
//     dfs(bw);
//     return path;
// };

// const dfs = (cur) => {
//     // pr(cur, used, path);
//     if (used.has(cur) && path.length > 0) {
//         path = [];
//         used = originSet;
//         // pr("1111")
//         return;
//     }
//     if (cur == target) {
//         // pr("2222")
//         return;
//     }
//     for (const s of se) {
//         if (isMatch(cur, s)) {
//             // pr("matched", s)
//             path.push(s);
//             // se.delete(s);
//             used.add(s)
//             dfs(s);
//         }
//     }
// };

// const isMatch = (s, t) => {
//     let n = s.length;
//     if (t.length != n) return false;
//     let diff = 0;
//     for (let i = 0; i < n; i++) {
//         if (s[i] != t[i]) diff++;
//         if (diff >= 2) return false;
//     }
//     return diff == 1;
// };