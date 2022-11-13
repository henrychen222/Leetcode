/**
 * 11.7 evening
 * https://leetcode.com/contest/weekly-contest-214/problems/sell-diminishing-valued-colored-balls/
 */

// wrong
const maxProfit = (inventory, orders) => {
    let mod = BigInt(1e9 + 7);
    let res = BigInt(0);
    let n = inventory.length;
    if (n == 1) {
        if (inventory[0] <= orders) {
            let tmp = BigInt((inventory[0] * (inventory[0] + 1)) / 2);
            return Number(tmp % mod);
        } else {
            let tmp = BigInt((inventory[0] + orders) * (inventory[0] - orders + 1) / 2);
            return Number(tmp % mod);
        }
    }
    while (true) {
        if (orders == 0) break;
        inventory.sort((a, b) => b - a);
        res += BigInt(inventory[0]);
        inventory[0]--;
        orders--;
    }
    return Number(res % mod);
};

const main = () => {
    let inventory = [2, 5], orders = 4
    let inventory2 = [3, 5], orders2 = 6;
    let inventory3 = [2, 8, 4, 10, 6], orders3 = 20;
    let inventory4 = [1000000000], orders4 = 1000000000;
    let inventory_debug1 = [76], order_debug1 = 22;
    console.log(maxProfit(inventory, orders));
    console.log(maxProfit(inventory2, orders2));
    console.log(maxProfit(inventory3, orders3));
    console.log(maxProfit(inventory4, orders4));
    console.log(maxProfit(inventory_debug1, order_debug1)); // 1441
};

main()