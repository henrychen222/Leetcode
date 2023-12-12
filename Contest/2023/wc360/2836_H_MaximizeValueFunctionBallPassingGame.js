/*
 * 08/26/23 night
 * https://leetcode.com/contest/weekly-contest-360/problems/maximize-value-of-function-in-a-ball-passing-game/
 */

const pr = console.log;

const N = 34;
const checkIthBit64 = (x, i) => { let s = x.toString(2), n = s.length; for (let j = 0; j < n; j++) { if (n - j - 1 == i && s[j] == '1') return 1; } return 0; }

// Accepted
// reference: https://leetcode.cn/circle/discuss/VghzJ4/ 小羊肖恩
const getMaxFunctionValue = (a, k) => {
    let n = a.length, ia = [], res = [], iaP = [...a], resP = [...a];
    for (let i = 0; i < n; i++) {
        ia.push(i);
        res.push(i);
    }
    for (let i = 0; i < N; i++) {
        // pr("\n", i, resP)
        if (checkIthBit64(k, i)) {
            [res, ia] = update(res, resP, ia, iaP);
            // pr("ok", i)
        }
        // pr("111", res, resP, ia, iaP)
        resP = updateResP(res, resP, iaP);
        // pr("222", res, resP, ia, iaP)
        iaP = updateIaP(iaP);
        // pr("333", res, resP, ia, iaP)
    }
    return Math.max(...res);
};

const update = (cur, curP, ia, iaP) => {
    let n = cur.length, nextRes = [], nextPos = [];
    for (let i = 0; i < n; i++) {
        nextRes.push(cur[i] + curP[ia[i]]);
        nextPos.push(ia[iaP[i]]);
    }
    return [nextRes, nextPos];
};

const updateResP = (cur, curP, iaP) => {
    let n = cur.length, next = [];
    for (let i = 0; i < n; i++) next.push(curP[i] + curP[iaP[i]]);
    return next;
};

const updateIaP = (iaP) => {
    let n = iaP.length, next = [];
    for (let i = 0; i < n; i++) next.push(iaP[iaP[i]]);
    return next;
};

const main = () => {
    let a = [2, 0, 1], k = 4;
    let a2 = [1, 1, 1, 2, 3], k2 = 3;
    let a_debug1 = [1, 0], k_debug1 = 10000000000;
    pr(getMaxFunctionValue(a, k))
    pr(getMaxFunctionValue(a2, k2))
    pr(getMaxFunctionValue(a_debug1, k_debug1)) // 5000000001
};

main()

// pr(1<<30, 2 ** 30)
// pr(1<<31, 2 ** 31)