/**
 * 10.4 afternoon
 * https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/
 */

// Accepted --- 84ms 100.00%
const minimumOneBitOperations_natsugiri = (n) => {
    let res = 0;
    while (n) {
        res ^= n;
        n >>= 1;
        // console.log(n, res);
    }
    return res;
};

// Accepted --- 92ms 100.00%
const minimumOneBitOperations_wifi = (n) => {
    let res = 0;
    while (n) {
        res ^= n;
        n /= 2;
        // console.log(n, res);
    }
    return res;
};

const main = () => {
    let n = 0;
    let n2 = 3;
    let n3 = 6;
    let n4 = 9;
    let n5 = 333;
    console.log(minimumOneBitOperations_wifi(n));
    console.log(minimumOneBitOperations_wifi(n2));
    console.log(minimumOneBitOperations_wifi(n3));
    console.log(minimumOneBitOperations_wifi(n4));
    console.log(minimumOneBitOperations_wifi(n5));

    console.log("");
    console.log(minimumOneBitOperations_natsugiri(n));
    console.log(minimumOneBitOperations_natsugiri(n2));
    console.log(minimumOneBitOperations_natsugiri(n3));
    console.log(minimumOneBitOperations_natsugiri(n4));
    console.log(minimumOneBitOperations_natsugiri(n5));
};

main()