/**
 * 6.12 night
 * https://leetcode.com/problems/arranging-coins/
 */

// Accepted --- 108ms 38.5MB 26.48%
const arrangeCoins = (n) => {
    let sum = 0;
    let i = 1;
    while (sum <= n) {
        sum += i;
        i++;
    }
    return i - 2;
};

const main = () => {
    let n = 5;
    let n2 = 6;
    let n3 = 8;
    let n4 = 10;
    console.log(arrangeCoins(n));
    console.log(arrangeCoins(n2));
    console.log(arrangeCoins(n3));
    console.log(arrangeCoins(n4));
};

main()