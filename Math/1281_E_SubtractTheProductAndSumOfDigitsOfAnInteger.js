/**
 * 6.15 night
 * https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 */

// Accepted --- 68ms 33.6MB 38.23%
const subtractProductAndSum = (n) => {
    let nStr = n.toString();
    let product = 1;
    let sum = 0;
    for (const i of nStr) {
        product *= Number(i);
        sum += Number(i);
    }
    return product - sum;
};

const main = () => {
    let n = 234;
    let n2 = 4421;
    let n_debug1 = 114;
    console.log(subtractProductAndSum(n));
    console.log(subtractProductAndSum(n2));
    console.log(subtractProductAndSum(n_debug1)); // -2
};

main()