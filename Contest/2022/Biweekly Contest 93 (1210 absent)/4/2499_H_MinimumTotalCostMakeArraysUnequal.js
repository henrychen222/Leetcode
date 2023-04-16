/*
 * 12/10/22 afternoon
 * https://leetcode.com/contest/biweekly-contest-93/problems/minimum-total-cost-to-make-arrays-unequal/
 */

const pr = console.log;

// Accepted
// reference: uwi
const minimumTotalCost = (a, b) => {
    let n = a.length, f = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        f[a[i]]++;
        f[b[i]]++;
    }
    if (f.some(occ => occ >= n + 1)) return -1;
    let todo = Array(n).fill(false), todoCal = Array(n).fill(0), conflict = 0, res = 0, idx = -1;
    for (let i = 0; i < n; i++) {
        if (a[i] == b[i]) {
            todo[i] = true;
            todoCal[a[i]]++;
            conflict++;
            res += i;
        }
    }
    for (let i = 1; i <= n; i++) {
        if (todoCal[i] * 2 > conflict) {
            idx = i;
            break;
        }
    }
    // pr("res", res, idx);
    if (idx == -1) return res;
    for (let i = 0; i < n; i++) {
        if (!todo[i]) {
            if (todoCal[idx] * 2 > conflict) {
                if (a[i] != idx && b[i] != idx) {
                    conflict++;
                    res += i;
                }
            }
        }
    }
    return res;
};

const main = () => {
    let a = [1, 2, 3, 4, 5], b = [1, 2, 3, 4, 5];
    let a1 = [2, 2, 2, 1, 3], b1 = [1, 2, 2, 3, 3]
    let a2 = [1, 2, 2], b2 = [1, 2, 2];
    pr(minimumTotalCost(a, b))
    pr(minimumTotalCost(a1, b1))
    pr(minimumTotalCost(a2, b2))
};

main()