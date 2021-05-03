/**
 * 04/17/21 evening
 * https://leetcode.com/contest/weekly-contest-237/problems/maximum-ice-cream-bars/
 */

const pr = console.log;

// Accepted
const maxIceCream = (costs, coins) => {
    costs.sort((x, y) => x - y);
    // pr(costs)
    let sum = res = 0;
    for (const e of costs) {
        if (sum >= coins) {
            break;
        } else {
            sum += e;
            res++;
        }
    }
    // pr(sum, res)
    return sum > coins ? res - 1 : res;
};

// WA
const maxIceCream1 = (costs, coins) => {
    costs.sort((x, y) => x - y);
    pr(costs)
    let sum = res = 0;
    for (const e of costs) {
        if (sum > coins) {
            res--;
            break;
        } else if (sum == coins) {
            break;
        } else {
            sum += e;
            res++;
        }
        pr(sum, res)
    }
    pr(sum, res)
    return res;
};

const main = () => {
    let costs = [1, 3, 2, 4, 1], coins = 7;
    let costs2 = [10, 6, 8, 7, 7, 8], coins2 = 5;
    let costs3 = [1, 6, 3, 1, 2, 5], coins3 = 20;
    let cost_debug1 = [7, 3, 3, 6, 6, 6, 10, 5, 9, 2], coins_debug1 = 56;
    pr(maxIceCream(costs, coins));
    pr(maxIceCream(costs2, coins2));
    pr(maxIceCream(costs3, coins3));
    pr(maxIceCream(cost_debug1, coins_debug1));

};

main()
