/**
 * 03/20/21 evening
 * https://leetcode.com/contest/weekly-contest-233/problems/maximum-ascending-subarray-sum/
 */

const pr = console.log;

// TLE 65/69
const MOD = 1e9 + 7;
const getNumberOfBacklogOrders = (orders) => {
    let sell = new Map();
    let buy = new Map();
    outer:
    for (const e of orders) {
        let price = e[0];
        let amount = e[1];
        let type = e[2];
        // pr(buy, sell);
        if (type == 0) { // buy order
            // pr("buy", price)
            if (sell.size == 0) {
                buy.set(price, buy.get(price) + amount || amount);
                // buy.set(price, amount);
                continue;
            }
            sell = sortASC(sell);
            for (const [k, v] of sell) {
                if (k <= price) {
                    if (amount > v) {
                        sell.delete(k);
                        amount -= v;
                    } else if (amount < v) {
                        sell.set(k, v - amount);
                        continue outer;
                    } else {
                        sell.delete(k);
                        amount -= v;
                        continue outer;
                    }
                } else {
                    // if (amount > 0) buy.set(price, amount); issue
                    if (amount > 0) buy.set(price, buy.get(price) + amount || amount);
                    continue outer;
                }
            }
            if (amount > 0) buy.set(price, buy.get(price) + amount || amount);
        } else { // sell order
            // pr("sell", price)
            if (buy.size == 0) {
                sell.set(price, sell.get(price) + amount || amount);
                // sell.set(price, amount);
                continue;
            }
            buy = sortDEC(buy);
            for (const [k, v] of buy) {
                if (k >= price) {
                    if (amount > v) {
                        buy.delete(k);
                        amount -= v;
                    } else if (amount < v) {
                        buy.set(k, v - amount);
                        continue outer;
                    } else {
                        buy.delete(k);
                        amount -= v;
                        continue outer;
                    }
                } else {
                    // if (amount > 0) sell.set(price, amount); issue
                    if (amount > 0) sell.set(price, sell.get(price) + amount || amount);
                    continue outer;
                }
            }
            if (amount > 0) sell.set(price, sell.get(price) + amount || amount);
        }
    }
    // pr(buy, sell);
    let res = 0;
    for (const [, v] of buy) {
        res += v;
    }
    for (const [, v] of sell) {
        res += v;
    }
    // pr(res);
    return res % MOD;
};

const sortASC = (map) => {
    return new Map([...map].sort((a, b) => a[0] - b[0]));
};

const sortDEC = (map) => {
    return new Map([...map].sort((a, b) => b[0] - a[0]));
};

const main = () => {
    let orders = [[10, 5, 0], [15, 2, 1], [25, 1, 1], [30, 4, 0]];
    let orders2 = [[7, 1000000000, 1], [15, 3, 0], [5, 999999995, 0], [5, 1, 1]]
    let orders_debug1 = [[1, 29, 1], [22, 7, 1], [24, 1, 0], [25, 15, 1], [18, 8, 1], [8, 22, 0], [25, 15, 1], [30, 1, 1], [27, 30, 0]];
    let orders_debug2 = [[26, 5, 1], [14, 7, 1], [22, 4, 1], [30, 18, 1], [30, 29, 1], [25, 18, 0], [3, 24, 0], [3, 5, 0], [6, 30, 0], [9, 25, 1]];

    pr(getNumberOfBacklogOrders(orders));
    pr(getNumberOfBacklogOrders(orders2));
    pr(getNumberOfBacklogOrders(orders_debug1)); // 22
    pr(getNumberOfBacklogOrders(orders_debug2)); // 129

    /**
     *  debug1:       0   1
     *  [1, 29, 1]   {} { 1 => 29 }
     *  [22, 7, 1]   {} { 1 => 29, 22 => 7 }
     *  [24, 1, 0]   {} { 1 => 28, 22 => 7 }
     *  [25, 15, 1]  {} { 1 => 28, 22 => 7, 25 => 15}
     *  [18, 8, 1]   {} { 1 => 28, 18 => 8, 22 => 7, 25 => 15}
     *  [8, 22, 0]   {} { 1 => 6, 18 => 8, 22 => 7, 25 => 15}
     *  [25, 15, 1]  {} { 1 => 6, 18 => 8, 22 => 7, 25 => 30} // issue this step
     *  [30, 1, 1]   {} { 1 => 6, 18 => 8, 22 => 7, 25 => 30, 30 => 1}
     *  [27, 30, 0]  {} { 25 => 21, 30 => 1}  result: 22
     */

    /**
     *  debug2:              0                              1
     *  Till [30, 29, 1]     {}                           { 26 => 5, 14 => 7, 22 => 4, 30 => 47 }
     * 
     *       [25, 18, 0]     {25 => 7}                    { 26 => 5, 30 => 47 }
     *       [3, 24, 0]      {25 => 7, 3 => 24}           { 26 => 5, 30 => 47 }
     *       [3, 5, 0]       {25 => 7, 3 => 29}           { 26 => 5, 30 => 47 }
     *       [6, 30, 0]      {25 => 7, 3 => 29, 6 => 30}  { 26 => 5, 30 => 47 }
     *       [9, 25, 1]      {6 => 30, 3 => 29}           { 9 => 18, 26 => 5, 30 => 47}  result: 129
     */
};

main()


// let max = sell.keys().next().value;
// if (max >= price) {
//     buy.delete(min);
// } else {
//     sell.set(price, amount);
// }

// let min = sell.keys().next().value;
// if (min <= price) {
//     sell.delete(min);
// } else {
//     buy.set(price, amount);
// }

// if (amount > v) {
//     buy.delete(k);
//     sell.set(price, amount - v);
// } else if (amount < v) {
//     buy.set(k, v - amount);
// } else {
//     buy.delete(k);
// }

// if (v == 0) {
//     buy.delete(k);
//     continue;
// } else {
//     buy.set(k, v - 1);
//     amount--;
//     if (amount == 0) break;
// }

// let remove = 0;
// if (v == 1) {
//     buy.delete(k);
// } else {
//     buy.set(k, v - 1);
// }
// remove++;

//////////////////////////////// PQ ////////////////////////////
// const { MinPriorityQueue, MaxPriorityQueue } = require("@datastructures-js/priority-queue");
// const getNumberOfBacklogOrders = (orders) => {
//     let bck = [];
//     let pqsell = new MinPriorityQueue({ priority: x => x[0] });
//     let pqbuy = new MaxPriorityQueue({ priority: x => x[0] });
//     for (const e of orders) {
//         let price = e[0];
//         let amount = e[1];
//         let type = e[2];
//         if (type == 0) {
//            if (pq.size() == 0) {

//            }
//         } else {

//         }
//     }
// };