/**
 * 10.3 evening  10.4 afternoon
 * https://leetcode.com/contest/weekly-contest-209/problems/minimum-one-bit-operations-to-make-integers-zero/
 * https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/
 */

// Accepted --- 84ms 100.00%
const minimumOneBitOperations = (n) => {
    let dec = 0;
    let bits = Math.floor(Math.log2(n));
    // console.log(Math.log2(n), bits);
    for (let i = bits; i >= 0; i--) {
        dec = dec | ((((dec >> (i + 1)) ^ (n >> i)) & 1) << i);
        // console.log(dec);
    }
    return dec;
};

const main = () => {
    let n = 0;
    let n2 = 3;
    let n3 = 6;
    let n4 = 9;
    let n5 = 333;
    console.log(minimumOneBitOperations(n));
    console.log(minimumOneBitOperations(n2));
    console.log(minimumOneBitOperations(n3));
    console.log(minimumOneBitOperations(n4));
    console.log(minimumOneBitOperations(n5));
};

main()