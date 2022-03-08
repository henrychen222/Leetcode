/**
 * 12/25/21 evening
 * https://leetcode.com/contest/weekly-contest-273/problems/recover-the-original-array/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };
const removeOneMap = (m, x) => { let occ = m.get(x); occ > 1 ? m.set(x, occ - 1) : m.delete(x); };
const deepCopyMap = (m) => new Map(m);

// Accepted --- 984ms
// Accepted --- 420ms
const recoverArray = (a) => {
    a.sort((x, y) => x - y)
    let n = a.length, res = [], cnt = counter(a);
    for (let i = 1; i < n; i++) {
        let k = a[i] - a[0], m = deepCopyMap(cnt);
        res = [];
        if (ok(k, a, m, res)) return res;
    }
    return [];
};

// greedy: check each possible k with lower[i]
const ok = (k, a, m, res) => {
    // pr(k, a, m, res);
    if (k == 0 || k & 1) return false;
    for (const low of a) {
        // pr(x, m, "res", res);
        if (m.has(low)) {
            let mid = low + (k >> 1), high = low + k; // assume the condition
            // pr(low, mid, high);
            res.push(mid);
            removeOneMap(m, low);
            if (m.has(high)) {
                removeOneMap(m, high);
            } else { // high not exist in original array
                return false;
            }
        }
    }
    return true;
};

const main = () => {
    let nums = [2, 10, 6, 4, 8, 12];
    let nums2 = [1, 1, 3, 3];
    let nums3 = [5, 435];
    let debug1 = [11, 6, 3, 4, 8, 7, 8, 7, 9, 8, 9, 10, 10, 2, 1, 9];
    let debug2 = [1, 50, 99, 101, 150, 199];
    pr(recoverArray(nums))
    pr(recoverArray(nums2))
    pr(recoverArray(nums3))
    pr(recoverArray(debug1)) // [2,3,7,8,8,9,9,10]
    pr(recoverArray(debug2)) // [51,100,149]
};

main()