// 12.5 night

// Accepted --- 2400ms
const mod = 1e9 + 7;
const concatenatedBinary = (n) => {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        let bin = i.toString(2);
        let shift = bin.length;
        res *= (2 ** shift);
        // res <<= shift;  wrong
        res += i;
        res %= mod;
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