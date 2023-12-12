/*
 * 09/30/23 evening
 * https://leetcode.com/contest/biweekly-contest-114/problems/minimum-number-of-operations-to-make-array-empty/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };

// Accepted
const minOperations = (a) => {
    let m = counter(a), res = 0;
    // pr(m)
    for (const [, occ] of m) {
        if (occ == 1) return -1;
        let rem = occ % 3, cnt = parseInt(occ / 3);
        if (rem == 0) {
            res += occ / 3;
        } else if (rem == 1) {
            res += cnt - 1 + 4 / 2;
        } else {
            res += cnt + 1;
        }
    }
    return res;
};

const main = () => {
    let a = [2, 3, 3, 2, 2, 4, 2, 3, 4];
    let a2 = [2, 1, 2, 2, 3, 3];
    let debug1 = [14, 12, 14, 14, 12, 14, 14, 12, 12, 12, 12, 14, 14, 12, 14, 14, 14, 12, 12];
    let debug2 = [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19];
    pr(minOperations(a))
    pr(minOperations(a2))
    pr(minOperations(debug1)) // 7
    pr(minOperations(debug2)) // 5
};

main()



/*
rem = 1
19 = 3 * 6 + 1  = 3 * (6-1) + 4 = 

rem = 2

20 = 3 * 6 + 2
*/