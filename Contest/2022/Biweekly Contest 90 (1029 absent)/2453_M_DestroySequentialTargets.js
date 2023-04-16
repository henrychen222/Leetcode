/*
 * 10/30/22 night   11/01/22 night complete
 * https://leetcode.com/contest/biweekly-contest-90/problems/destroy-sequential-targets/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };
const stmvalue_de = (m) => new Map([...m].sort((x, y) => y[1] - x[1]));

// Accepted
// reference: liouzhou_101
const destroyTargets = (a, space) => {
    let m = new Map(), res = 0, max = 0;
    for (const x of a) {
        let rem = x % space;
        if (!m.has(rem)) m.set(rem, []);
        m.get(rem).push(x);
    }
    for (const [, d] of m) {
        if (d.length > max) {
            max = d.length;
            res = Math.min(...d);
        } else if (d.length == max) {
            res = Math.min(res, Math.min(...d));
        }
    }
    return res;
};

// WA
let a, sp, max, b, u;
const destroyTargets1 = (A, space) => {
    a = A, sp = space, max = 0;
    a.sort((x, y) => x - y);
    // test(a);
    if (space >= a[a.length - 1]) return spaceIsMax(a);
    let idx = BinarySearch(0, a.length - 1);
    return a[idx];
};

const spaceIsMax = () => {
    let m = counter(a);
    m = stmvalue_de(m);
    let maxF = m.values().next().value, d = [];
    for (const [x, occ] of m) {
        if (occ == maxF) {
            d.push(x);
        } else {
            break;
        }
    }
    return Math.min(...d);
};

const BinarySearch = (low, high) => {
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (possible(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    // pr(a, "low", low, "high", high)
    return low;
};

const compute = (idx) => {
    let destroy = 0, v = a[idx];
    for (const x of a) {
        if (x >= v && (x - v) % sp == 0) {
            // pr("x", x, "v", v, "c", c)
            destroy++;
        }
    }
    // pr("idx", idx, 'v', v, "destory", destroy)
    return destroy;
};

const possible = (idx) => {
    let destroy = compute(idx);
    if (destroy > max) {
        max = destroy;
        return false;
    } else {
        return true;
    }
};

const test = () => {
    let d = [];
    for (let i = 0; i < a.length; i++) d.push([a[i], compute(i)]);
    d.sort((x, y) => y[1] - x[1]);
    pr("test", d)
};


const main = () => {
    let a = [3, 7, 8, 1, 1, 5], space = 2;
    let a2 = [1, 3, 5, 2, 4, 6], space2 = 2;
    let a3 = [6, 2, 5], space3 = 100
    let a_debug1 = [691], space_debug1 = 4;
    let a_debug2 = [1, 5, 3, 2, 2], space_debug2 = 10000;
    let a_debug3 = [2, 3, 4, 1, 4, 5, 3, 4, 5, 2], space_debug3 = 10000;
    let a_debug4 = [88, 543, 358, 635, 670, 454, 58, 326, 565, 72], space_debug4 = 4;
    let a_debug5 = [625879766, 235326233, 250224393, 501422042, 683823101, 948619719, 680305710, 733191937, 182186779, 353350082], space_debug5 = 4;
    pr(destroyTargets(a, space))
    pr(destroyTargets(a2, space2))
    pr(destroyTargets(a3, space3))
    pr(destroyTargets(a_debug1, space_debug1)) // 691
    pr(destroyTargets(a_debug2, space_debug2)) // 2
    pr(destroyTargets(a_debug3, space_debug3)) // 4
    pr(destroyTargets(a_debug4, space_debug4)) // 58
    pr(destroyTargets(a_debug5, space_debug5)) // 235326233
};

main()