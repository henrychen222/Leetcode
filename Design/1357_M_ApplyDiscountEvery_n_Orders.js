/**
 * 04/09/21 night
 * https://leetcode.com/problems/apply-discount-every-n-orders/
 */

const pr = console.log;

// Accepted --- 176ms 32.00%
function Cashier(N, dis, products, prices) {
    dis /= 100;
    let cnt = 0;
    let m = new Map();
    let ppn = products.length;
    for (let i = 0; i < ppn; i++) m.set(products[i], prices[i]);
    return {
        getBill
    }

    function getBill(product, amount) {
        cnt++;
        let n = product.length;
        let res = 0;
        for (let i = 0; i < n; i++) {
            let add = m.get(product[i]) * amount[i];
            res += add;
        }
        if (cnt != 0 && cnt % N == 0) res *= (1 - dis);
        // if (cnt % N == 0) res *= (1 - dis);  // Accepted --- 176ms 32.00%
        return res;
    }
}

const main = () => {
    let cashier = new Cashier(3, 50, [1, 2, 3, 4, 5, 6, 7], [100, 200, 300, 400, 300, 200, 100]);
    pr(cashier.getBill([1, 2], [1, 2])); // 500.0
    pr(cashier.getBill([3, 7], [10, 10])); // 4000.0
    pr(cashier.getBill([1, 2, 3, 4, 5, 6, 7], [1, 1, 1, 1, 1, 1, 1])); // 800.0
    pr(cashier.getBill([4], [10])); // 4000.0
    pr(cashier.getBill([7, 3], [10, 10])); // 4000.0
    pr(cashier.getBill([7, 5, 3, 1, 6, 4, 2], [10, 10, 10, 9, 9, 9, 7])); // 7350.0
    pr(cashier.getBill([2, 3, 5], [5, 3, 2])); // 2500.0
};

main()