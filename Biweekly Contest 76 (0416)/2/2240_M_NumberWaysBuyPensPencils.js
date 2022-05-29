/**
 * 04/16/22 morning
 * https://leetcode.com/contest/biweekly-contest-76/problems/number-of-ways-to-buy-pens-and-pencils/
 */

const pr = console.log;

// Accepted
const waysToBuyPensPencils = (total, pen, pencil) => {
    let res = 0;
    for (let x = 0; x * pen <= total; x++) {
        let sum = total - x * pen;
        let add = parseInt(sum / pencil);
        res += add + 1;
        // pr(x, sum, add)
    }
    return res;
};

const main = () => {
    let total = 20, cost1 = 10, cost2 = 5;
    let total2 = 5, cost1_2 = 10, cost2_2 = 10;
    let total3 = 1000000, cost1_3 = 1000000, cost2_3 = 1000000;
    let total_debug1 = 1000000, cost1_debug1 = 1, cost2_debug1 = 1;
    pr(waysToBuyPensPencils(total, cost1, cost2))
    pr(waysToBuyPensPencils(total2, cost1_2, cost2_2))
    pr(waysToBuyPensPencils(total3, cost1_3, cost2_3))
    pr(waysToBuyPensPencils(total_debug1, cost1_debug1, cost2_debug1))

};

main()

// for (let y = 0; x * pen + y * pencil <= total; y++) {
//     if (x * pen + y * pencil <= total) res++;
// }