/**
 * 12.3 afternoon
 * https://leetcode.com/problems/shopping-offers/
 */

// Accepted --- 76ms 100%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/7261663.html
 * https://leetcode.com/problems/shopping-offers/discuss/105194/simple-java-recursive-solution
 * https://leetcode.com/problems/shopping-offers/discuss/105200/c-solution
 */
const shoppingOffers = (price, special, needs) => {
    let n = needs.length;
    let res = innerProduct(price, needs, 0, n - 1, 0, 0);
    // console.log(res);
    for (const offer of special) {
        let isValid = true;
        for (let i = 0; i < n; i++) {
            let remain = needs[i] - offer[i];
            if (remain < 0) isValid = false; // if needs < coupon (special offer), coupon is unable to use
            needs[i] = remain;
        }
        if (isValid) { // if offer still valid, add offer price and recurse remaining needs
            res = Math.min(res, shoppingOffers(price, special, needs) + offer[offer.length - 1]);
        }
        for (let i = 0; i < n; i++) { // reset the needs
            let remain = needs[i] + offer[i];
            needs[i] = remain;
        }
    }
    return res;
};

// Accepted --- 84ms 50%
const shoppingOffers1_Origin = (price, special, needs) => {
    let n = needs.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        res += price[i] * needs[i];
    }
    for (const offer of special) {
        let isValid = true;
        for (let i = 0; i < n; i++) {
            let remain = needs[i] - offer[i];
            if (remain < 0) isValid = false;
            needs[i] = remain;
        }
        if (isValid) {
            res = Math.min(res, shoppingOffers(price, special, needs) + offer[offer.length - 1]);
        }
        for (let i = 0; i < n; i++) {
            let remain = needs[i] + offer[i];
            needs[i] = remain;
        }
    }
    return res;
};

// reference: https://www.tutorialspoint.com/cpp_standard_library/cpp_inner_product.htm
const innerProduct = (arr1, arr2, first1, last1, first2, init) => {
    let res = 0;
    for (let i = first1, j = first2; i <= last1; i++, j++) {
        res += arr1[i] * arr2[j];
    }
    return res + init;
};

const main = () => {
    let price = [2, 5],
        special = [
            [3, 0, 5],
            [1, 2, 10]
        ],
        needs = [3, 2];
    let price2 = [2, 3, 4],
        special2 = [
            [1, 1, 0, 4],
            [2, 2, 1, 9]
        ],
        needs2 = [1, 2, 1];
    console.log(shoppingOffers(price, special, needs));
    console.log(shoppingOffers(price2, special2, needs2));
};

main()