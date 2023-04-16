// 12.5 night
// reference: https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/discuss/961350/C%2B%2B-O(N)-time-iterative

// Accepted --- 1396ms
const mod = BigInt(1e9 + 7);
const concatenatedBinary = (n) => {
    let res = 0n;
    for (let i = 1n, shift = 0n; i <= n; i++) {
        let singleBit = (i & (i - 1n)) == 0n;
        if (singleBit) shift++;
        res <<= shift;
        res += i;
        res %= mod;
    }
    return Number(res);
};

// Accepted --- 672ms
const MOD = 1e9 + 7;
const concatenatedBinary_modify = (n) => {
    let res = 0;
    for (let i = 1, shift = 0; i <= n; i++) {
        let singleBit = (i & (i - 1)) == 0;
        if (singleBit) shift++;
        res *= (2 ** shift); // works here, don't know why res <<= shift Number overflow
        res += i;
        res %= MOD;
    }
    return res;
};

const main = () => {
    let n = 1;
    let n2 = 3;
    let n3 = 12;
    let debug1 = 42;
    let debug2 = 418;
    console.log(concatenatedBinary(n));
    console.log(concatenatedBinary(n2));
    console.log(concatenatedBinary(n3));
    console.log(concatenatedBinary(debug1)); // 727837408
    console.log(concatenatedBinary(debug2));
};

main();