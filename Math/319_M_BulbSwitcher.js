/**
 * 03/01/21 evening
 * https://leetcode.com/problems/bulb-switcher/
 */

const pr = console.log;

// Accepted --- 68ms 100%
const bulbSwitch = (n) => parseInt(Math.sqrt(n));

// Accepted --- 76ms 71.67%
// reference: https://leetcode.com/problems/bulb-switcher/discuss/77104/Math-solution..
const bulbSwitch2 = (n) => Math.sqrt(n) >> 0;

// memory out 33/35
const bulbSwitch1 = (n) => {
    if (n == 0) return 0;
    let a = Array(n).fill(1);
    for (let i = 0; i < n; i++) {
        if (i & 1) a[i] ^= 1;
    }
    // pr(a);
    for (let round = 3; round <= n; round++) {
        for (let i = round - 1; i < n; i += round) {
            a[i] ^= 1;
        }
    }
    // pr(a);
    return a.filter(x => x == 1).length;
};

const main = () => {
    let n = 3;
    let n2 = 0;
    let n3 = 1;
    let n4 = 50;
    let n_debug1 = 99999999;
    pr(bulbSwitch(n)); // 1
    pr(bulbSwitch(n2)); // 0
    pr(bulbSwitch(n3)); // 1
    pr(bulbSwitch(n4)); // 3
    pr(bulbSwitch(n_debug1));
};

main()