/*
 * 10/14/23 evening
 * https://leetcode.com/contest/biweekly-contest-115/problems/last-visited-integers/
 */

const pr = console.log;

// Accepted
const lastVisitedIntegers = (a) => {
    let k = 0, val = [], n = a.length, res = [];
    for (let i = 0; i < n; i++) {
        if (a[i] == 'prev') {
            k++;
            let idx = val.length - k;
            // pr(k, val, idx)
            res.push(val[idx] || -1);
        } else {
            val.push(Number(a[i]));
            k = 0;
        }
    }
    return res
};

const main = () => {
    let words = ["1", "2", "prev", "prev", "prev"];
    let words2 = ["1", "prev", "2", "prev", "prev"];
    pr(lastVisitedIntegers(words))
    pr(lastVisitedIntegers(words2))
};

main()