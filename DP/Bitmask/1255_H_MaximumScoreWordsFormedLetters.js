/**
 * 10/14/21 morning
 * https://leetcode.com/problems/maximum-score-words-formed-by-letters/
 */

// Accepted --- 108ms 12.50%
// https://leetcode.com/contest/weekly-contest-162/ranking uwi
const maxScoreWords1 = (words, letters, score) => {
    let cnt = Array(26).fill(0), n = words.length, res = 0;
    for (const c of letters) cnt[c.charCodeAt() - 97]++;
    outer:
    for (let i = 0; i < 1 << n; i++) {
        let ncnt = Array(26).fill(0), sum = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                for (const c of words[j]) ncnt[c.charCodeAt() - 97]++;
            }
        }
        for (let j = 0; j < 26; j++) {
            if (ncnt[j] > cnt[j]) continue outer;
            sum += ncnt[j] * score[j];
        }
        res = Math.max(res, sum);
    }
    return res;
};

// Why not work ? probably issue with goto
// https://leetcode.com/contest/weekly-contest-162/ranking 	ecnerwala  
const maxScoreWords = (words, letters, score) => {
    let cnt = Array(26).fill(0), n = words.length, res = 0;
    for (const c of letters) cnt[c.charCodeAt() - 97]++;
    pr(cnt)
    outer:
    for (let i = 0; i < 1 << n; i++) {
        let ncnt = cnt; sum = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                // pr(i, j);
                for (const c of words[j]) {
                    let ac = c.charCodeAt();
                    if ((ncnt[ac - 97]--) == 0) {
                        pr(ncnt[ac - 97])
                        continue outer;
                    }
                    sum += score[ac - 97]; 
                }
            }
        }
        // pr(sum)
        res = Math.max(res, sum);
    }
    return res;
};

const pr = console.log;
const main = () => {
    let words = ["dog", "cat", "dad", "good"],
        letters = ["a", "a", "c", "d", "d", "d", "g", "o", "o"],
        score = [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let words2 = ["xxxz", "ax", "bx", "cx"],
        letters2 = ["z", "a", "b", "c", "x", "x", "x"],
        score2 = [4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10];
    let words3 = ["leetcode"],
        letters3 = ["l", "e", "t", "c", "o", "d"],
        score3 = [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
    pr(maxScoreWords(words, letters, score))
    // pr(maxScoreWords(words2, letters2, score2))
    // pr(maxScoreWords(words3, letters3, score3))
};

main()