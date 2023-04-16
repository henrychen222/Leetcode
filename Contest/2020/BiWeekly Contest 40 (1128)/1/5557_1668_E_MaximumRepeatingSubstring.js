/**
 * 11.28 morning
 * https://leetcode.com/contest/biweekly-contest-40/problems/maximum-repeating-substring/
 */

// Accepted
const maxRepeating = (sequence, word) => {
    let ns = sequence.length;
    let res = 0;
    for (let i = 1; ; i++) {
        let tmp = word.repeat(i);
        if (tmp.length > ns) break;
        if (ok(sequence, tmp)) {
            res = Math.max(res, i);
        }
    }
    return res;
};

const ok = (s, word) => {
    let ns = s.length;
    let nw = word.length;
    for (let i = 0; i < ns; i++) {
        for (let j = i; j < ns; j++) {
            if (j - i + 1 == nw) {
                let sub = s.slice(i, j + 1);
                if (sub == word) return true;
                // console.log(sub, j - i + 1);
            }
        }
    }
    return false;
};

const main = () => {
    let sequence = "ababc", word = "ab";
    let sequence2 = "ababc", word2 = "ba";
    let sequence3 = "ababc", word3 = "ac";
    console.log(maxRepeating(sequence, word));
    console.log(maxRepeating(sequence2, word2));
    console.log(maxRepeating(sequence3, word3));
};

main()