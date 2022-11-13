/**
 * 1.2 evening
 * https://leetcode.com/contest/weekly-contest-222/problems/count-good-meals/
 */

// TLE 63/69
const mod = 1e9 + 7;
const countPairs = (deliciousness) => {
    let n = deliciousness.length;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (deliciousness[i] % 2 == 1) {
            for (let j = i + 1; j < n; j++) {
                if (deliciousness[i] == 1 && deliciousness[j] == 0) cnt++;
                if (deliciousness[j] % 2 == 0) continue;
                let sum = deliciousness[i] + deliciousness[j];
                if (isPowerTwo2(sum)) {
                    cnt++;
                }
            }
        } else {
            for (let j = i + 1; j < n; j++) {
                if (deliciousness[i] == 0 && deliciousness[j] == 1) cnt++;
                if (deliciousness[j] % 2 == 1) continue;
                let sum = deliciousness[i] + deliciousness[j];
                if (isPowerTwo2(sum)) {
                    cnt++;
                }
            }
        }
    }
    return cnt % mod;
};

const isPowerTwo2 = (x) => {
    return (x != 0) && ((x & (x - 1)) == 0);
};

// TLE 55/69
const MOD = BigInt(1e9 + 7);
const countPairs3 = (deliciousness) => {
    deliciousness = deliciousness.map(x => BigInt(x));
    let n = deliciousness.length;
    let cnt = 0n;
    for (let i = 0n; i < n; i++) {
        if (deliciousness[i] % 2n == 1n) {
            for (let j = i + 1n; j < n; j++) {
                if (deliciousness[i] == 1n && deliciousness[j] == 0n) cnt++;
                if (deliciousness[j] % 2n == 0n) continue;
                let sum = deliciousness[i] + deliciousness[j];
                if (isPowerTwo(sum)) {
                    cnt++;
                }
            }
        } else {
            for (let j = i + 1n; j < n; j++) {
                if (deliciousness[i] == 0n && deliciousness[j] == 1n) cnt++;
                if (deliciousness[j] % 2n == 1n) continue;
                let sum = deliciousness[i] + deliciousness[j];
                if (isPowerTwo(sum)) {
                    cnt++;
                }
            }
        }
    }
    return Number(cnt % MOD);
};

// TLE 56/69
const countPairs2 = (deliciousness) => {
    deliciousness = deliciousness.map(x => BigInt(x));
    let n = deliciousness.length;
    let cnt = 0n;
    for (let i = 0n; i < n; i++) {
        for (let j = i + 1n; j < n; j++) {
            let sum = deliciousness[i] + deliciousness[j];
            if (isPowerTwo(sum)) {
                // console.log(deliciousness[i], deliciousness[j]);
                cnt++;
            }
        }
    }
    return Number(cnt % MOD);
};

// TLE 55/69
const countPairs1 = (deliciousness) => {
    deliciousness = deliciousness.map(x => BigInt(x));
    // console.log(deliciousness);
    let n = deliciousness.length;
    let cnt = 0n;
    for (let i = 0n; i < n; i++) {
        if (deliciousness[i] == 1n) {
            for (let j = i + 1n; j < n; j++) {
                if (deliciousness[j] == 0n) {
                    cnt++;
                }
            }
        }
        if (deliciousness[i] == 0n) {
            for (let j = i + 1n; j < n; j++) {
                if (deliciousness[j] == 1n) {
                    cnt++;
                }
            }
        }
        if (deliciousness[i] % 2n == 1n) {
            for (let j = i + 1n; j < n; j++) {
                if (deliciousness[j] % 2n == 1n) {
                    let sum = deliciousness[i] + deliciousness[j];
                    if (isPowerTwo(sum)) {
                        // console.log(deliciousness[i], deliciousness[j]);
                        cnt++;
                    }
                }
            }
        } else {
            for (let j = i + 1n; j < n; j++) {
                if (deliciousness[j] % 2n == 0n) {
                    let sum = deliciousness[i] + deliciousness[j];
                    if (isPowerTwo(sum)) {
                        // console.log(deliciousness[i], deliciousness[j]);
                        cnt++;
                    }
                }
            }
        }
    }
    return Number(cnt % MOD);
};

const isPowerTwo = (x) => {
    return (x != 0n) && ((x & (x - 1n)) == 0n);
};

const main = () => {
    let deliciousness = [1, 3, 5, 7, 9];
    let deliciousness2 = [1, 1, 1, 3, 3, 3, 7];
    let deliciousness_debug1 = [2160, 1936, 3, 29, 27, 5, 2503, 1593, 2, 0, 16, 0, 3860, 28908, 6, 2, 15, 49, 6246, 1946, 23, 105, 7996, 196, 0, 2, 55, 457, 5, 3, 924, 7268, 16, 48, 4, 0, 12, 116, 2628, 1468];
    let deliciousness_debug2 = [149, 107, 1, 63, 0, 1, 6867, 1325, 5611, 2581, 39, 89, 46, 18, 12, 20, 22, 234];
    console.log(countPairs(deliciousness));
    console.log(countPairs(deliciousness2));
    console.log(countPairs(deliciousness_debug1)); // 53
    console.log(countPairs(deliciousness_debug2)); // 12
};

main()

// console.log(isPowerTwo(1n))

// console.log(0n % 2n)
// console.log(1n % 2n)