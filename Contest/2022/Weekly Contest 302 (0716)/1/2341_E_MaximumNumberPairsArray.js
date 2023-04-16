/**
 * 07/16/22 evening
 * https://leetcode.com/contest/weekly-contest-302/problems/maximum-number-of-pairs-in-array/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };
const removeOneOrManyMap = (m, x, cnt = 1) => { let occ = m.get(x); occ > cnt ? m.set(x, occ - cnt) : m.delete(x); };

// Accepted
const numberOfPairs = (a) => {
    let m = counter(a), op = 0, rest = 0;
    while (1) {
        let remove = false;
        for (const [x, occ] of m) {
            if (occ > 1) {
                removeOneOrManyMap(m, x, 2);
                remove = true;
                op++;
                break;
            }
        }
        if (!remove) break;
    }
    for (const [, occ] of m) rest += occ;
    return [op, rest];
};


const main = () => {
    let a = [1, 3, 2, 1, 3, 2, 2];
    let a2 = [1, 1];
    let a3 = [0];
    pr(numberOfPairs(a))
    pr(numberOfPairs(a2))
    pr(numberOfPairs(a3))
};

main()