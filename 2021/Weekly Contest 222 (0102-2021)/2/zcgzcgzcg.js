/**
 * 1.2 evening
 * https://leetcode.com/problems/count-good-meals/
 */

// Accepted --- 188ms
const mod = 1e9 + 7;
const countPairs = (deliciousness) => {
    let n = deliciousness.length;
    let map = getRecord2(deliciousness);
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= (1 << 21); j *= 2) {
            if (j < deliciousness[i]) continue;
            let remain = j - deliciousness[i];
            if (map.has(remain)) {
                if (remain != deliciousness[i]) {
                    res += map.get(remain);
                } else {
                    res += map.get(remain) - 1;
                }
            }
        }
    }
    res /= 2;
    return res % mod;
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

console.log(9999900000 / 2, 9999900000 >> 1); // not the same
console.log(1 << 21, 2 ** 21);