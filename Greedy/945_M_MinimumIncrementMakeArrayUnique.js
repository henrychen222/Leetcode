/**
 * 02/09/22 afternoon
 * https://leetcode.com/problems/minimum-increment-to-make-array-unique/
 */

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };
const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);
const removeOneOrManyMap = (m, x, cnt = 1) => { let occ = m.get(x); occ > cnt ? m.set(x, occ - cnt) : m.delete(x); };

const sumOfRange = (l, r) => {
   let cnt = r - l + 1;
   return (l + r) * cnt / 2;
};

// Accepted --- 3409ms 15.94%
// Accepted --- 2976ms 17.39%
const minIncrementForUnique = (a) => {
    a.sort((x, y) => x - y);
    let m = counter(a), gapMove = 0, max = a[a.length - 1], gap = true, upper = new Map();
    for (const [x, occ] of m) {
        if (occ == 1) continue;
        let op = occ - 1;
        if (gap) {
            for (let t = 0; t < op; t++) {
                let p = x + t;
                while (m.has(p)) p++;
                if (p > max) {
                    gap = false;
                    addOneOrManyMap(upper, x, op - t);
                    break;
                }
                addOneOrManyMap(m, p);
                removeOneOrManyMap(m, x);
                // pr('move', p - x)
                gapMove += p - x;
            }
        } else {
            addOneOrManyMap(upper, x, occ - 1);
        }
    }
    let upperMove = 0, start = max + 1;
    // pr(m, gapMove, upper, start)
    for (const [x, occ] of upper) {
        if (occ == 1) {
            let firstMove = start - x;
            // pr(firstMove, start)
            upperMove += firstMove;
        } else {
            let firstMove = start - x, lastMove = firstMove + occ - 1;
            // pr(firstMove, lastMove, "sum", plus)
            let plus = sumOfRange(firstMove, lastMove);
            upperMove += plus;
        }
        start += occ;
    }
    return gapMove + upperMove;
};

/////////////////////////////////////////////////////////////
// TLE 57/63
const minIncrementForUnique2 = (a) => {
    a.sort((x, y) => x - y);
    let m = counter(a), res = 0;
    for (const [x, occ] of m) {
        if (occ == 1) continue;
        for (let t = 0; t < occ - 1; t++) {
            let p = x + t;
            while (m.has(p)) p++;
            addOneOrManyMap(m, p);
            removeOneOrManyMap(m, x);
            res += p - x;
        }
    }
    return res;
};

// Wrong
const cal = (n) => n * (n + 1) / 2;
const minIncrementForUnique1 = (a) => {
    a.sort((x, y) => y - x);
    let m = counter(a), gapMove = 0, upperCnt = 0;
    let pre;
    for (const [x, occ] of m) {
        let ops = Math.max(0, occ - 1);
        if (pre) {
            let gapCnt = pre - x - 1;
            if (ops <= gapCnt) {
                gapMove += cal(ops);
            } else {
                gapMove += cal(gapCnt);
                upperCnt += ops - gapCnt; // wrong top gap not enough, can still go level + 1 gap, not highest(upper)
            }
            // pr("ops", ops, "gapCnt", gapCnt)
        } else {
            upperCnt += ops;
        }
        pre = x;
    }
    let upperMove = cal(upperCnt);
    return gapMove + upperMove;
};

const pr = console.log;
const main = () => {
    let nums = [1, 2, 2];
    let nums2 = [3, 2, 1, 2, 1, 7];
    let debug1 = [0,2,2];
    let debug2 = [2,2,2,1];
    let debug3 = [1,1,2,0];
    let debug4 = [1,2,0,1,0];
    pr(minIncrementForUnique(nums))
    pr(minIncrementForUnique(nums2))
    pr(minIncrementForUnique(debug1)) // 1
    pr(minIncrementForUnique(debug2)) // 3
    pr(minIncrementForUnique(debug3)) // 2
    pr(minIncrementForUnique(debug4)) // 6
};

main()