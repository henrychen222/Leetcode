/**
 * 03/24/22 night   05/05/22 night redo
 * https://leetcode.com/problems/minimum-moves-to-make-array-complementary/
 * 
 * https://leetcode.com/contest/weekly-contest-217/ranking/
 */

const pr = console.log;

// Accepted --- 135ms 84.62%
// reference: https://leetcode.com/problems/minimum-moves-to-make-array-complementary/discuss/953078/Prefix-sum-O(n-%2B-limit)-with-detailed-examples-and-pseudocode

const minMoves = (a, limit) => {
    let n = a.length, delta = Array(2 * limit + 2).fill(0), res = n, cur = n;
    for (let i = 0; i < n / 2; i++) {
        let L = a[i], R = a[n - i - 1], min = Math.min(L, R), max = Math.max(L, R);
        /*
            The minimum sum we can get is (min(l, r) + 1) (oneMoveMin)
            The maximum sum we can get is (max(l, r) + limit) (oneMoveMax)
            We need no move to get (l + r) (justGood)

            [~, oneMoveMin - 1]         -2 moves
            [oneMoveMin, justGood-1]    -1 move
            [justGood]                   0 move
            [justGood + 1, oneMoveMax]  -1 move
            [oneMoveMax + 1, ~]         -2 moves
        */
        // for each pair
        delta[min + 1]--; // oneMoveMin               need 1 less move
        delta[max + limit + 1]++; // oneMoveMax + 1   need another 1 more move
        delta[L + R]--; // justGood                   need another 1 less move
        delta[L + R + 1]++; // justGood + 1           need 1 more move
    }
    // pr(delta);
    for (let i = 2; i <= limit * 2; i++) {
        cur += delta[i];
        res = Math.min(res, cur);
    }
    return res;
}

// Accepted --- 139ms 84.62%
// reference: uwi
// https://leetcode.com/contest/weekly-contest-217/ranking/
const minMoves2 = (a, limit) => {
    let n = a.length, delta = Array(2 * limit + 2).fill(0), res = n;
    for (let i = 0; i < n / 2; i++) {
        let L = a[i], R = a[n - i - 1], min = Math.min(L, R), max = Math.max(L, R);
        delta[2] += 2;
        delta[min + 1]--;
        delta[max + limit + 1]++;
        delta[L + R]--;
        delta[L + R + 1]++;
    }
    // pr(delta, delta.length)
    for (let i = 1; i < delta.length; i++) delta[i] += delta[i - 1];
    for (let i = 2; i <= limit * 2; i++) res = Math.min(res, delta[i]);
    return res;
}


/////////////////////////////////////////////////////////////////////////////////////
// TLE 107/113
const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);
const minMoves1 = (a, limit) => {
    let n = a.length,
        res = n,
        m = new Map(),
        min = Number.MAX_SAFE_INTEGER,
        max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n / 2; i++) {
        let j = n - i - 1;
        addOneOrManyMap(m, a[i] + a[j]);
    }
    // pr(m);
    if (m.size == 1) return 0;
    for (const [v, ] of m) {
        min = Math.min(min, v);
        max = Math.max(max, v);
    }
    // pr(min, max);
    for (let v = min; v <= max; v++) { // issue
        // for (let v = 2; v <= limit * 2; v++) {
        let t = cal(v, n, a, limit);
        if (t == 3) pr(v);
        // pr(v, t, '\n');
        res = Math.min(res, t);
    }
    return res;
};

const cal = (v, n, a, limit) => {
    let res = 0;
    for (let i = 0; i < n / 2; i++) {
        if (a[i] + a[n - i - 1] != v) {
            let needL = v - a[n - i - 1],
                needR = v - a[i];
            let step = valid(needL, limit) || valid(needR, limit) ? 1 : 2;
            res += step;
            // pr(v, "i", i, a[i], a[n - 1 - i], "needL", needL, "needR", needR, "limit", limit, "step", step)
        }
    }
    return res;
};

const valid = (x, limit) => x >= 1 && x <= limit;


const main = () => {
    let a = [1, 2, 4, 3],
        limit = 4;
    let a2 = [1, 2, 2, 1],
        limit2 = 2;
    let a3 = [1, 2, 1, 2],
        limit3 = 2;
    let a_debug1 = [20744, 7642, 19090, 9992, 2457, 16848, 3458, 15721],
        limit_debug1 = 22891;
    let a_debug2 = [37, 2, 9, 49, 58, 57, 48, 17],
        limit_debug2 = 58;
    let a_debug3 = [28, 50, 76, 80, 64, 30, 32, 84, 53, 8],
        limit_debug3 = 84
    pr(minMoves(a, limit))
    pr(minMoves(a2, limit2))
    pr(minMoves(a3, limit3))
    pr(minMoves(a_debug1, limit_debug1)) // 4
    pr(minMoves(a_debug2, limit_debug2)) // 3
    pr(minMoves(a_debug3, limit_debug3)) // 4
};

main()