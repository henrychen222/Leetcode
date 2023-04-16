/**
 * 1.2 evening
 * https://leetcode.com/problems/count-good-meals/
 */

const mod = 1e9 + 7;

// Accepted --- 136ms
const countPairs = (deliciousness) => {
    let map = getRecord2(deliciousness);
    let res = 0;
    for (const [k, v] of map) {
        for (let i = 1; i <= (1 << 21); i *= 2) {
            let remain = i - k;
            // console.log(remain, k);
            if (remain < k) continue;
            if (map.has(remain)) {
                if (remain != k) {
                    res += map.get(remain) * map.get(k);
                } else {
                    res += v * (v - 1) / 2;
                }
            }
        }
    }
    return res % mod;
};

// Accepted --- 160ms
const countPairs_modify = (deliciousness) => {
    let map = getRecord2(deliciousness);
    let res = 0;
    for (const [k, v] of map) {
        for (let i = 1; i <= (1 << 21); i *= 2) {
            let remain = i - k;
            if (remain < k) continue;
            if (map.has(remain)) {
                if (remain != k) {
                    res += map.get(remain) * map.get(k) % mod;
                } else {
                    res += v * (v - 1) / 2 % mod;
                }
            }
        }
    }
    return res;
};

// Accepted --- 232ms
const countPairs1 = (deliciousness) => {
    let map = getRecord2(deliciousness);
    // console.log(map);
    let res = 0;
    for (const [k, v] of map) {
        for (let i = 1; i <= (1 << 21); i *= 2) {
            let remain = i - k;
            if (remain < k) continue;
            if (map.has(remain)) {
                if (remain != k) {
                    res += map.get(remain) * map.get(k) % mod;
                    if (res >= mod) res -= mod;
                } else {
                    res += v * (v - 1) / 2 % mod;
                    if (res >= mod) res -= mod;
                }
            }
        }
    }
    return res;
};

const getRecord2 = (arr) => {
    let map = new Map();
    for (const i of arr) {
        map.set(i, (map.get(i) + 1) || 1);
    }
    return map;
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

// no need to use BigInt
console.log(2 ** 20 + 2 ** 20, Number.MAX_SAFE_INTEGER, 2 ** 20 + 2 ** 20 < Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER < Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER < Number.MAX_VALUE);