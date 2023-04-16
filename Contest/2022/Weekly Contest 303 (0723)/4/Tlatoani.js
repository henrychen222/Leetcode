// 07/23/22 night

const pr = console.log;

const bitCount = (n) => { n = n - ((n >> 1) & 0x55555555); n = (n & 0x33333333) + ((n >> 2) & 0x33333333); return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24; };

// Accepted
const countExcellentPairs = (a, k) => {
    let u = [...new Set(a)], f = Array(30).fill(0), res = 0;
    for (const x of u) {
        let cnt = bitCount(x);
        f[cnt]++;
    }
    // pr(f);
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            if (i + j >= k) res += f[i] * f[j];
        }
    }
    return res;
};

const main = () => {
    let a = [1, 2, 3, 1], k = 3;
    let a2 = [5, 1, 1], k2 = 10;
    pr(countExcellentPairs(a, k))
    pr(countExcellentPairs(a2, k2))
};

main()