/**
 * 01/22/22 evening
 * https://leetcode.com/contest/weekly-contest-277/problems/find-all-lonely-numbers-in-the-array/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };

// Accepted
const findLonely = (a) => {
    let m = counter(a), res = [];
    for (const x of a) {
        if (m.get(x) == 1 && !m.has(x - 1) && !m.has(x + 1)) res.push(x);
    }
    return res;
};

const main = () => {
    let nums = [10, 6, 5, 8];
    let nums2 = [1, 3, 5, 3];
    pr(findLonely(nums))
    pr(findLonely(nums2))
};

main()