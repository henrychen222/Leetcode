/**
 * 6.13 afternoon
 * https://leetcode.com/problems/power-of-two/
 */

// Accepted --- 100ms 36.8MB 37.52%
const isPowerOfTwo = (n) => {
    let max = Math.floor(Math.log2(n));
    for (let i = 0; i <= max; i++) {
        if (2 ** i == n) {
            return true;
        }
    }
    return false;
};

const main = () => {
    let n = 1;
    let n2 = 16;
    let n3 = 218;
    let debug1 = 67108863;
    console.log(isPowerOfTwo(n));
    console.log(isPowerOfTwo(n2));
    console.log(isPowerOfTwo(n3));
    console.log(isPowerOfTwo(debug1));
};

main()