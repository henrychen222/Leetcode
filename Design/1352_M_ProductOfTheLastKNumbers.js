/**
 * 9.5 afternoon
 * https://leetcode.com/problems/product-of-the-last-k-numbers/
 */

// Accepted --- 1240ms 40.82%
function ProductOfNumbers() {
    this.product = [];
};

ProductOfNumbers.prototype.add = function (num) {
    this.product.push(num);
};

ProductOfNumbers.prototype.getProduct = function (k) {
    let p = 1;
    let n = this.product.length;
    let cnt = 0;
    for (let i = n - 1;; i--) {
        p *= this.product[i];
        cnt++;
        if (cnt == k) break;
    }
    return p;
};

const main = () => {
    let productOfNumbers = new ProductOfNumbers();
    productOfNumbers.add(3); // [3]
    productOfNumbers.add(0); // [3,0]
    productOfNumbers.add(2); // [3,0,2]
    productOfNumbers.add(5); // [3,0,2,5]
    productOfNumbers.add(4); // [3,0,2,5,4]
    console.log(productOfNumbers.getProduct(2)); // 20
    console.log(productOfNumbers.getProduct(3)); // 40
    console.log(productOfNumbers.getProduct(4)); // 0 
    console.log(productOfNumbers.add(8)); // [3,0,2,5,4,8]
    console.log(productOfNumbers.getProduct(2)); // 32
};

main()