/**
 * 11.7 night
 * reference:
 * https://leetcode.com/problems/sell-diminishing-valued-colored-balls/discuss/927509/Java-O(NlogN)-or-Detailed-Explanation-or-Runtime-Beats-100
 * 
 * (Number multiply issue)
 * https://stackoverflow.com/questions/3428136/javascript-integer-math-incorrect-results
 * https://stackoverflow.com/questions/61323821/alternative-to-math-max-and-math-min-for-bigint-type-in-javascript
 */
const mod = BigInt(1e9 + 7);
// const bigIntMax = (...args) => args.reduce((m, e) => e > m ? e : m);
const bigIntMin = (...args) => args.reduce((m, e) => e < m ? e : m);
const maxProfit = (inventory, orders) => {
    orders = BigInt(orders);
    let n = BigInt(inventory.length);
    inventory.sort((a, b) => a - b);
    let res = BigInt(0);
    for (let i = n - 1n; i >= 0n; i--) {
        let diff = BigInt(inventory[i]) - (i > 0n ? BigInt(inventory[i - 1n]) : 0n);
        let use = BigInt(bigIntMin(orders, (n - i) * diff));
        let r = BigInt(inventory[i]);
        let l = BigInt(r - use / (n - i));
        // console.log(res, diff, use, r, l);
        res += (r * (r + 1n) / 2n - l * (l + 1n) / 2n) * (n - i); // issue was here previously (r * (r + 1)) Number multiply is wrong
        // console.log(res);
        res += l * (use % (n - i));
        // console.log(res);
        res %= mod;
        orders -= use;
        // console.log(res, orders)
    }
    return Number(res);
};

const main = () => {
    let inventory = [2, 5], orders = 4;
    let inventory2 = [3, 5], orders2 = 6;
    let inventory3 = [2, 8, 4, 10, 6], orders3 = 20;
    let inventory4 = [1000000000], orders4 = 1000000000;
    let inventory_debug1 = [76], order_debug1 = 22;
    let inventory_debug2 = [773160767], order_debug2 = 252264991;
    console.log(maxProfit(inventory, orders)); // 14
    console.log(maxProfit(inventory2, orders2)); // 19
    console.log(maxProfit(inventory3, orders3)); // 110
    console.log(maxProfit(inventory4, orders4)); // 21
    console.log(maxProfit(inventory_debug1, order_debug1)); // 1441
    console.log(maxProfit(inventory_debug2, order_debug2)); // 70267492

    console.log("\n---------------- Test --------------")
    console.log(773160767 * 773160768)
    console.log(773160767n * 773160768n)  // 597777572401189056
    console.log(3 / 2)
    console.log(3n / 2n)
};

main()