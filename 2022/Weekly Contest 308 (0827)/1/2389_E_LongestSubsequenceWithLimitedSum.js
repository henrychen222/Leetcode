/*
* 08/27/22 evening
* https://leetcode.com/contest/weekly-contest-308/problems/longest-subsequence-with-limited-sum/
*/

const pr = console.log;

// Accepted
const answerQueries = (a, b) => {
    let res = [];
    a.sort((x, y) => x - y);
    for (const q of b) {
        let cur = 0, pick = 0;
        for (const x of a) {
            if (cur + x <= q) {
                cur += x;
                pick++;
            } else {
                break;
            }
        }
        res.push(pick);
    }
    return res;
};

const main = () => {
    let a = [4, 5, 2, 1], b = [3, 10, 21];
    let a2 = [2, 3, 4, 5], b2 = [1]
    pr(answerQueries(a, b))
    pr(answerQueries(a2, b2))
};

main()