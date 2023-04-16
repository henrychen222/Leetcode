/**
 * 10/02/21 evening
 * https://leetcode.com/contest/weekly-contest-261/problems/find-missing-observations/
 */

const pr = console.log;

const sm = (a) => a.reduce(((x, y) => x + y), 0);

/**
 * x * start + y * end = rsum
 * x + y = n;
 * 
 * 
 * x * start + y * start = n * start
 *     y = rsum - (n * start)
 * 
 * x * start + (n - x) * end = rsum;
 *     x * start + n * end - x * end = rsum;
 *     x * (start - end) = rsum - n * end;
 *     
 */
// Accepted
const missingRolls = (rolls, mean, n) => {
    let m = rolls.length, tot = m + n, tsum = tot * mean;
    let rsum = tsum - sm(rolls);
    // pr(rsum, n)
    let min = n, max = n * 6;
    if (rsum < min || rsum > max) return [];
    let avg = rsum / n;
    // pr(avg)
    if (avg == parseInt(avg)) return Array(n).fill(avg);
    let start = parseInt(avg), end = Math.ceil(avg);
    // pr(start, end)
    let x = (rsum - n * end) / (start - end);
    let y = n - x;
    // pr("x", x, "y", y);
    if (x == parseInt(x) && y == parseInt(y) && x >= 0 && y >= 0) return Array(x).fill(start).concat(Array(y).fill(end));
    return [];
    // return dfs(0, rsum, [], n, start, end);
};

// const dfs = (cur, sum, res, n, start, end) => {
//     pr(cur, res)
//     if (cur == sum && res.length == n) {
//         return res;
//     }
//     if (res.length > n || cur > sum) {
//         return;
//     }
//     for (let x = start; x <= end; x++) {
//         let next = [...res];
//         next.push(x);
//         let tmp = dfs(cur + x, sum, next, n, start, end);
//         // if (tmp) pr(tmp)
//         if (tmp) return tmp;
//     }
// };

const main = () => {
    let rolls = [3, 2, 4, 3], mean = 4, n = 2;
    let rolls2 = [1, 5, 6], mean2 = 3, n2 = 4;
    let rolls3 = [1, 2, 3, 4], mean3 = 6, n3 = 4;
    let rolls4 = [1], mean4 = 3, n4 = 1;
    let rolls_debug1 = [4, 5, 6, 2, 3, 6, 5, 4, 6, 4, 5, 1, 6, 3, 1, 4, 5, 5, 3, 2, 3, 5, 3, 2, 1, 5, 4, 3, 5, 1, 5], mean_debug1 = 4, n_debug1 = 40
    let rolls_debug2 = [4, 1, 4, 3, 3, 5, 3, 5, 4, 2, 3, 1, 2, 6, 2, 4, 2, 5, 5, 5, 2, 2, 4, 6, 6, 5, 3, 1, 5, 1, 1, 1, 3, 1, 2, 1, 3, 2, 2, 5, 2, 1, 6, 5, 2, 2, 5, 2, 5, 3, 1, 2, 6, 3, 6, 1, 1, 6, 1, 3, 5, 5, 3, 5, 5, 3, 1, 6, 5, 1, 6, 4, 1, 3, 3, 6, 3, 3, 3, 6, 1, 3, 2, 4, 4, 5, 6, 6, 3, 4, 3, 2, 5, 6, 2, 6, 5, 1, 4, 4, 5, 2, 2, 6, 4, 2, 3, 5, 3, 3, 4, 6, 3, 6, 2, 3, 1, 2, 2, 5, 2, 3, 5, 5, 3, 4, 1, 4, 4, 3, 4, 5, 4, 3, 4, 1, 3, 2, 5, 1, 5, 4, 3, 6, 5, 2, 1, 1, 2, 2, 6, 5, 6, 4, 1, 6, 5, 5, 6, 3, 5, 3, 2, 6, 2, 3, 5, 6, 6, 3, 4, 5, 6, 6, 3, 1, 5, 4, 6, 6, 3, 3, 2, 5, 6, 3, 2, 1, 3, 1, 6, 6, 5, 4, 2, 5, 5, 1, 4, 5, 3, 5, 1, 3, 4, 3, 5, 3, 5, 3, 6, 3, 6, 4, 2, 3, 2, 4, 1, 1, 1, 6, 1, 3, 5, 3, 4, 4, 3, 6, 1, 6, 2, 1, 4, 1, 2, 6, 4, 3, 4, 2, 5, 2, 6, 1, 4, 1, 1, 5, 5, 4, 2, 3, 4, 5, 1, 5, 1, 4, 6, 6, 3, 6, 6, 1, 6, 2, 5, 3, 6, 2, 5, 3, 3, 3, 6, 4, 5, 3, 3, 3, 6, 3, 2, 6, 3, 2, 3, 3, 5, 5, 5, 3, 6, 5, 1, 6, 4, 5, 1, 4, 1, 5, 1, 3, 3, 1, 5, 5, 6, 4, 6, 2, 5, 2, 1, 3, 5, 6, 5, 4, 5, 2, 1, 6, 6, 6, 5, 5, 5, 6, 1, 4, 6, 4, 4, 5, 5, 3],
        mean_debug2 = 5, n_debug2 = 10240
    pr(missingRolls(rolls, mean, n))
    pr(missingRolls(rolls2, mean2, n2))
    pr(missingRolls(rolls3, mean3, n3))
    pr(missingRolls(rolls4, mean4, n4))
    pr(missingRolls(rolls_debug1, mean_debug1, n_debug1))
    pr(missingRolls(rolls_debug2, mean_debug2, n_debug2))
};

main()


// for (let x = 0; x < n; x++) {
//     for (let y = 0; x + y <= n; y++) {
//         let sum = x * start + y * end;
//         pr(x, y, sum, rsum)
//         if (sum == rsum && x + y == n) {
//             pr(x, y)
//             return Array(x).fill(start).concat(Array(y).fill(end));
//         } else if (sum > n) {
//             break;
//         }
//     }
// }