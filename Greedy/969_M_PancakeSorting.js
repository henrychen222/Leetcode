/**
 * 06/16/22 morning
 * https://leetcode.com/problems/jump-game-iii/
 */

const pr = console.log;

// Accepted --- 122ms 25.71%
// Accepted --- 120ms 28.57% hand mistake resubmit
const pancakeSort = (a) => {
    let n = a.length, b = [...a], res = [];
    b.sort((x, y) => x - y);
    for (let i = n - 1; ~i; i--) {
        let max = b[i];
        // pr("\nmax", max, a);
        while (a[0] != max) {
            let idx = a.indexOf(max);
            // pr("idx", idx, a);
            res.push(idx + 1);
            let l = a.slice(0, idx + 1), r = a.slice(idx + 1);
            l.reverse();
            a = l.concat(r);
        }
        // pr("111", a, i);  // [0, i] flip
        a = a.slice(0, i + 1).reverse().concat(a.slice(i + 1));
        res.push(i + 1);
        // pr("222", a);
    }
    pr("final", a);
    return res;
};

const main = () => {
    let a = [3, 2, 4, 1];
    let a2 = [1, 2, 3];
    let debug1 = [1, 3, 2];
    pr(pancakeSort(a))
    pr(pancakeSort(a2))
    pr(pancakeSort(debug1)) // [1,3,1,2,1,1,3]
};

main()