/**
 * 04/30/22 evening
 * https://leetcode.com/contest/weekly-contest-291/problems/minimum-consecutive-cards-to-pick-up/
 */

const pr = console.log;

const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };

// Accepted
const minimumCardPickup = (cards) => {
    let m = counter_value_in_indexA_in(cards), res = Number.MAX_SAFE_INTEGER;
    for (const [, a] of m) {
        let n = a.length;
        if (n >= 2) {
            for (let i = 1; i < n; i++) {
                let diff = a[i] - a[i - 1] + 1;
                res = Math.min(res, diff);
            }
        }
    }
    return res == Number.MAX_SAFE_INTEGER ? -1 : res;
};

const main = () => {
    let cards = [3, 4, 2, 3, 4, 7];
    let cards2 = [1, 0, 5, 3];
    pr(minimumCardPickup(cards))
    pr(minimumCardPickup(cards2))
};

main()