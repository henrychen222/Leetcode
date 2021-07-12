/**
 * 07/11/21 evening
 * https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/
 */

const pr = console.log;

// reference: https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/discuss/574923/JavaC%2B%2BPython-DP-O(1)-Space
const mod = 1e9 + 7;
const numOfWays = (n) => {
    let p121 = p123 = 6; // first row conditions
    for (let i = 1; i < n; i++) {
        let next_121 = (p121 * 3 + p123 * 2) % mod;
        let next_123 = (p121 * 2 + p123 * 2) % mod;
        [p121, p123] = [next_121, next_123];
        // pr(p121, p123)
    }
    return (p121 + p123) % mod;
};

const main = () => {
    let n = 1;
    let n2 = 2;
    let n3 = 3;
    let n4 = 7;
    let n5 = 5000;
    pr(numOfWays(n));
    pr(numOfWays(n2));
    pr(numOfWays(n3));
    pr(numOfWays(n4));
    pr(numOfWays(n5));
};

main()