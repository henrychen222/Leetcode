/**
 * 6.13 afternoon
 * https://leetcode.com/problems/power-of-three/
 */

// Accepted --- 320ms 46.1MB 16.01%
const isPowerOfThree = (n) => {
    let max = Math.floor(Math.log10(n) / Math.log10(3));
    for (let i = 0; i <= max; i++) {
        if (3 ** i == n) {
            return true;
        }
    }
    return false;
};

const main = () => {
    let n = 27;
    let n2 = 0;
    let n3 = 9;
    let n4 = 45;
    console.log(isPowerOfThree(n));
    console.log(isPowerOfThree(n2));
    console.log(isPowerOfThree(n3));
    console.log(isPowerOfThree(n4));
};

main()