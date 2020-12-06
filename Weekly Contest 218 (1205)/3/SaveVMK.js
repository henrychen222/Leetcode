// 12.5 night

// Accepted --- 1260ms
const mod = BigInt(1e9 + 7);
const concatenatedBinary = (n) => {
    let res = 0n;
    let shift = 1n;
    for (let i = 1n; i <= n; i++) {
        if (i == (1n << shift)) shift++;
        res <<= shift;
        res += i;
        res %= mod;
    }
    return Number(res);
};

// Accepted --- 664ms
const MOD = 1e9 + 7;
const concatenatedBinary_modify = (n) => {
    let res = 0;
    let shift = 1;
    for (let i = 1; i <= n; i++) {
        if (i == (1 << shift)) shift++;
        res *= (2 ** shift);
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