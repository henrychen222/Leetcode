/**
 * 02/08/22 afternoon
 * https://leetcode.com/problems/card-flipping-game/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/10163255.html
 * https://leetcode.com/problems/card-flipping-game/discuss/127908/Problem-statement-is-so-confusing!
 * https://leetcode.com/problems/card-flipping-game/discuss/162216/For-God's-Sake-let-me-try-to-rephrase-the-problem.
 * 
 * stupid/trash problem statement
 */

const pr = console.log;

/*
 */
// reference: 

const flipgame = (a, b) => {
    let same = new Set(), n = a.length, res = [];
    for (let i = 0; i < n; i++) {
        if (a[i] == b[i]) same.add(a[i]);
    }
    for (const e of new Set([...a, ...b])) {
        if (!same.has(e)) res.push(e);
    }
    // pr(res);
    return res.length ? Math.min(...res) : 0;
};

// WA
const flipgame2 = (a, b) => {
    let n = a.length, res = [];
    for (let i = 0; i < n; i++) {
        let x = a[i], y = b[i];
        [a[i], b[i]] = [b[i], a[i]];
        let sa = new Set(a), sb = new Set(b);
        // pr("swap", a, b, x, y, sa, sb);
        if (!sa.has(x)) res.push(x);
        if (!sb.has(y)) res.push(y);
        [a[i], b[i]] = [b[i], a[i]];
        // pr("recover", a, b);
    }
    pr(res);
    return res.length ? Math.min(...res) : 0;
};

// WA
const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };
const addOneMap = (m, x) => m.set(x, m.get(x) + 1 || 1);
const removeOneMap = (m, x) => { let occ = m.get(x); occ > 1 ? m.set(x, occ - 1) : m.delete(x); };
const flipgame1 = (a, b) => {
    let ma = counter(a), mb = counter(b), n = a.length, res = [];
    for (let i = 0; i < n; i++) {
        removeOneMap(ma, a[i])
        removeOneMap(mb, b[i]);
        addOneMap(ma, b[i]);
        addOneMap(mb, a[i]);
        pr(a[i], b[i], ma, mb);
        if (!ma.has(a[i])) res.push(a[i]);
        if (!mb.has(b[i])) res.push(b[i]);
    }
    return res.length ? Math.min(...res) : 0;
};

const main = () => {
    let fronts = [1, 2, 4, 4, 7],
        backs = [1, 3, 4, 1, 3];
    let fronts2 = [1],
        backs2 = [1];
    let fronts_debug1 = [1,1], back_debug1 = [1,2];
    let fronts_debug2 =  [2,2,5,1,2], back_debug2 = [4,1,2,1,1];
    let fronts_debug3 = [1,1], back_debug3 = [2,2];
    pr(flipgame(fronts, backs))
    pr(flipgame(fronts2, backs2))
    pr(flipgame(fronts_debug1, back_debug1)) // 2
    pr(flipgame(fronts_debug2, back_debug2)) // 2
    pr(flipgame(fronts_debug3, back_debug3)) // 1
};

main()