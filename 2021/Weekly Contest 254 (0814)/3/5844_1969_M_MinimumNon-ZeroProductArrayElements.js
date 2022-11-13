/**
 * 08/14/21 evening
 * https://leetcode.com/contest/weekly-contest-254/problems/minimum-non-zero-product-of-the-array-elements/
 */

const pr = console.log;

// don't know
const minNonZeroProduct = (p) => {
    let a = [];
    for (let x = 1; x <= 2 ** p - 1; x++) a.push(x);
    pr(a);
    // pr(a.map(x => parseInt(x.toString(2))));
};

const main = () => {
    let p = 1;
    let p2 = 2;
    let p3 = 3;
    // pr(minNonZeroProduct(p))
    // pr(minNonZeroProduct(p2))
    pr(minNonZeroProduct(p3))
};

main()


// pr(parseInt('1101', 2), parseInt('0011', 2));
// pr(parseInt('1111', 2), parseInt('0001', 2));


let c2 = [001, 110, '011', 100, 001, 110, 111]
let c3 = [001, 110, 001, 110, 001, 110, 111];
pr(c2.map(x => parseInt(x + '', 2)));
pr(c3.map(x => parseInt(x + '', 2)));
