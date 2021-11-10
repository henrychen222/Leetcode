/**
 * 11/09/21 night
 * https://leetcode.com/problems/rle-iterator/
 */

// Accepted --- 80ms 68.87% (trick, item cannot be sum up, it is based on index/time)
function RLEIterator(a) {
    let m = new Map();
    // let flag = false;
    for (let i = 0; i < a.length; i += 2) {
        let occ = a[i], x = a[i + 1];
        if (occ == 0) continue;
        // if (m.has(x)) {
        //     flag = true;
        //     pr("repeat", x);
        // }
        m.set(i, [occ, x]);
    }
    // pr(m);
    return { next }
    function next(n) {
        let cur = 0, res = -1;
        for (const [i, a] of m) {
            let [occ, x] = a;
            if (cur + occ == n) {
                m.delete(i);
                cur += occ;
                res = x;
                break;
            } else if (cur + occ > n) {
                let remove = n - cur;
                let rest = occ - remove;
                m.set(i, [rest, x]);
                cur += remove;
                res = x;
                break;
            }
            m.delete(i);
            cur += occ;
        }
        // pr("after", m);
        return res;
    }
}

const pr = console.log;
const main = () => {
    let rLEIterator = new RLEIterator([3, 8, 0, 9, 2, 5]);
    pr(rLEIterator.next(2)); // 8
    pr(rLEIterator.next(1)); // 8
    pr(rLEIterator.next(1)); // 5
    pr(rLEIterator.next(2)); // -1

    pr("")
    let rLEIterator2 = new RLEIterator([3, 8, 0, 9, 2, 5, 3, 8]);
    pr(rLEIterator2.next(2)); // 8
    pr(rLEIterator2.next(1)); // 8
    pr(rLEIterator2.next(1)); // 5
    pr(rLEIterator2.next(2)); // 8
    pr(rLEIterator2.next(1)); // 8
};

main()