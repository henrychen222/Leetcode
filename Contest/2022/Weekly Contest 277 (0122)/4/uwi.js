// 01/22/22 night

const pr = console.log;

const bitCount = (n) => { n = n - ((n >> 1) & 0x55555555); n = (n & 0x33333333) + ((n >> 2) & 0x33333333); return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24; };

// Accepted https://leetcode.com/contest/weekly-contest-277/ranking/9/
const maximumGood1 = (g) => {
    let n = g.length, res = Number.MIN_SAFE_INTEGER;
    outer:
    for (let i = 0; i < 1 << n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (g[j][k] == 2) continue;
                if (i & (1 << j)) {
                    if (i & (1 << k)) {
                        if (g[j][k] == 0) continue outer;
                    } else {
                        if (g[j][k] == 1) continue outer;
                    }
                }
            }
        }
        res = Math.max(res, bitCount(i));
    }
    return res;
};

// Accepted --- 715ms
// Accepted --- 185ms
const maximumGood = (g) => {
    let n = g.length, res = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < 1 << n; i++) {
        let ok = true, cnt = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                cnt++;
                for (let k = 0; k < n; k++) {
                    if (g[j][k] == 2) continue;
                    if (i & (1 << k)) {
                        if (g[j][k] == 0) ok = false;
                    } else {
                        if (g[j][k] == 1) ok = false;
                    }
                    if (!ok) break;
                }
            }
            if (!ok) break;
        }
        if (ok) res = Math.max(res, cnt);
    }
    return res;
};

const main = () => {
    let statements = [[2, 1, 2], [1, 2, 2], [2, 0, 2]];
    let statements2 = [[2, 0], [0, 2]];
    let debug1 = [[2, 2], [1, 2]];
    pr(maximumGood(statements))
    pr(maximumGood(statements2))
    pr(maximumGood(debug1)) // 2
};

main()