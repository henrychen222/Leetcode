/**
 * 9.10 afternoon
 * https://leetcode.com/problems/powx-n/
 */

const myPow = (x, n)=> {
    return x ** n;
};

const main = () => {
    let x = 2.00000, n = 10;
    let x2 = 2.10000, n2 = 3;
    let x3 = 2.00000, n3 = -2;
    console.log(myPow(x, n));
    console.log(myPow(x2, n2));
    console.log(myPow(x3, n3));
}

main();