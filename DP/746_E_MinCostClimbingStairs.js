/**
 * 8.11 night
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 */

// don't know
const minCostClimbingStairs = (cost) => {
    let climb = [];
    for (let i = 2; i < cost.length; i++) {
        let r = cost[i - 1];
        let l = cost[i - 2];
        if (r < l) {
            climb.push(r);
        } else if (l < r) {
            climb.push(l);
        } else {
            next = cost[i];
            if (r < next) {
                climb.push(r);
            } else {
                climb.push(l);
            }
        }
    }
    console.log(climb);
};

const main = () => {
    let cost = [10, 15, 20];
    let cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
    console.log(minCostClimbingStairs(cost));
    console.log(minCostClimbingStairs(cost2));
};

main()