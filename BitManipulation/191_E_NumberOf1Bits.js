/**
 * 6.17 morning
 * https://leetcode.com/problems/number-of-1-bits/
 */

// Accepted --- 80ms 36.6 MB 42.94%   lc n - a positive integer
const hammingWeight = (n) => {
    let cnt = 0;
    for (const i of n.toString(2)) {
        if (i == '1') cnt++;
    }
    return cnt;
};

const main = () => {
    // should use decimal number here.
    let n = parseInt("00000000000000000000000000001011", 2);
    let n2 = parseInt("00000000000000000000000010000000", 2);
    let n3 = parseInt("11111111111111111111111111111101", 2);
    console.log(hammingWeight(n));
    console.log(hammingWeight(n2));
    console.log(hammingWeight(n3));
};

main()