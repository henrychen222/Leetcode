/**
 * 06/06/21 night
 * https://leetcode.com/problems/minimum-space-wasted-from-packaging/
 */

function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = lo + hi >> 1;
            x < a[mid] ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) { // >= lower_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = lo + hi >> 1;
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

// Accepted --- 524ms
// uwi https://leetcode.com/contest/weekly-contest-244/ranking
const sm = (a) => a.reduce(((x, y) => x + y), 0);
const stin = (a) => a.sort((x, y) => x - y);
const mi = Math.min;
const MAX = Number.MAX_SAFE_INTEGER;
const MOD = 1e9 + 7;
const minWastedSpace = (pks, boxes) => {
    stin(pks);
    let sump = sm(pks);
    let res = MAX;
    let bisect = new Bisect();
    for (const box of boxes) {
        stin(box);
        if (box[box.length - 1] < pks[pks.length - 1]) continue;
        let tmp = 0;
        let pos = 0;
        for (const b of box) {
            let find = bisect.bisect_left(pks, b + 1);
            tmp += (find - pos) * b;
            // pr(find, pks, b + 1, "waste", (find - pos) * b, tmp);
            pos = find;
        }
        // pr(tmp, sump)
        tmp -= sump;
        res = mi(res, tmp);
    }
    return res == MAX ? -1 : res % MOD;
};

const pr = console.log;

const main = () => {
    let packages = [2, 3, 5],
        boxes = [
            [4, 8],
            [2, 8]
        ];
    let packages2 = [2, 3, 5],
        boxes2 = [
            [1, 4],
            [2, 3],
            [3, 4]
        ];
    let packages3 = [3, 5, 8, 10, 11, 12],
        boxes3 = [
            [12],
            [11, 9],
            [10, 5, 14]
        ];
    pr(minWastedSpace(packages, boxes));
    pr(minWastedSpace(packages2, boxes2));
    pr(minWastedSpace(packages3, boxes3));
};

main();