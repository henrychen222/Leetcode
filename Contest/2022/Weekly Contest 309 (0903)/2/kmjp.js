
// 09/03/22 night

const pr = console.log;

const ll = BigInt, mod = ll(1e9 + 7), N = 1005;

let fact, ifact, inv;
const comb_init = () => {
    fact = Array(N).fill(0);
    ifact = Array(N).fill(0);
    inv = Array(N).fill(0);
    fact[0] = ifact[0] = inv[1] = 1n;
    for (let i = 2; i < N; i++) inv[i] = (mod - mod / ll(i)) * inv[mod % ll(i)] % mod;
    for (let i = 1; i < N; i++) {
        fact[i] = fact[i - 1] * ll(i) % mod;
        ifact[i] = ifact[i - 1] * inv[i] % mod;
    }
};

const comb = (n, k) => {
    if (n < k || k < 0) return 0;
    return fact[n] * ifact[k] % mod * ifact[n - k] % mod;
};

// Accepted
const numberOfWays = (startPos, endPos, k) => {
    comb_init();
    let res = 0n;
    for (let i = 0; i <= k; i++) {
        let moveRight = i, moveLeft = k - i;
        if (startPos + moveRight - moveLeft == endPos) res += comb(k, i);
    }
    return res;
};

const main = () => {
    let startPos = 1, endPos = 2, k = 3;
    let startPos2 = 2, endPos2 = 5, k2 = 10;
    let startPos_debug1 = 1, endPos_debug1 = 1000, k_debug1 = 999;
    let startPos_debug2 = 272, endPos_debug2 = 270, k_debug2 = 6;
    let startPos_debug3 = 671, endPos_debug3 = 669, k_debug3 = 4;
    pr(numberOfWays(startPos, endPos, k))
    pr(numberOfWays(startPos2, endPos2, k2))
    pr(numberOfWays(startPos_debug1, endPos_debug1, k_debug1)) // 1
    pr(numberOfWays(startPos_debug2, endPos_debug2, k_debug2)) // 15
    pr(numberOfWays(startPos_debug3, endPos_debug3, k_debug3)) // 4
};

main()