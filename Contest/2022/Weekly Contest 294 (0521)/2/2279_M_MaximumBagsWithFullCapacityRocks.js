/**
 * 05/21/22 evening
 * https://leetcode.com/contest/weekly-contest-294/problems/maximum-bags-with-full-capacity-of-rocks/
 */

const pr = console.log;

// Accepted
const maximumBags = (capacity, rocks, k) => {
    let n = rocks.length, d = [], res = 0;
    for (let i = 0; i < n; i++) d.push([rocks[i], capacity[i], capacity[i] - rocks[i]]);
    d.sort((x, y) => x[2] - y[2]);
    // pr(d);
    for (const [x, y, need] of d) {
        // pr("k", k, "need", need, "res", res);
        if (need == 0) {
            res++;
        } else {
            if (k >= need) {
                k -= need;
                res++;
            } else {
                break;
            }
        }
    }
    // pr(d);
    return res;
};

const main = () => {
    let capacity = [2, 3, 4, 5], rocks = [1, 2, 4, 4], additionalRocks = 2;
    let capacity2 = [10, 2, 2], rocks2 = [2, 2, 0], additionalRocks2 = 100;
    pr(maximumBags(capacity, rocks, additionalRocks));
    pr(maximumBags(capacity2, rocks2, additionalRocks2));
};

main()