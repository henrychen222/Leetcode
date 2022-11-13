// 08/13/22 night


const pr = console.log;

// Accepted
const countSpecialNumbers = (N) => countNumberWithoutRepeatedDigit(N);

let res, n;
const countNumberWithoutRepeatedDigit = (N) => {
    n = N;
    res = 0;
    dfs(0, 1023);
    return res - 1;
};

const checkIthBit = (x, i) => x & (1 << i);

const dfs = (cur, rem) => {
    if (cur > n) return;
    res++;
    for (let i = cur == 0 ? 1 : 0; i < 10; i++) {
        if (checkIthBit(rem, i)) {
            // pr('cur', cur, 'rem', rem)
            dfs(cur * 10 + i, rem ^ (1 << i))
        }
    }
};

const main = () => {
    let n = 20;
    let n2 = 5;
    let n3 = 135;
    let large = 2e5;
    let large2 = 2e6;
    let large3 = 2e9;
    let debug1 = 5853623;
    pr(countSpecialNumbers(n))
    pr(countSpecialNumbers(n2))
    pr(countSpecialNumbers(n3))
    pr(countSpecialNumbers(large)) // 47610
    pr(countSpecialNumbers(large2)) // 229050
    pr(countSpecialNumbers(large3)) // 5974650
    pr(countSpecialNumbers(debug1)) // 461730
};

main()