// 08/14/21 night

const pr = console.log;


const powmod = (a, b, mod) => { let r = 1n; while (b > 0n) { if (b % 2n == 1) r = r * a % mod; b >>= 1n; a = a * a % mod; } return r; };

// Accepted --- 64ms
const ll = BigInt;
const mod = ll(1e9 + 7);
const minNonZeroProduct = (p) => {
    p = ll(p);
    return (powmod((1n << p) - 2n, (1n << p - 1n) - 1n, mod) * ((1n << p) - 1n)) % mod;
};

const main = () => {
    let p = 1;
    let p2 = 2;
    let p3 = 3;
    pr(minNonZeroProduct(p))
    pr(minNonZeroProduct(p2))
    pr(minNonZeroProduct(p3))
};

main()


// pr(1 << 60, 1n << 60n, 2 ** 60)