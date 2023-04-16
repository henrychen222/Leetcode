/*
 * 04/03/23 night
 * https://leetcode.com/problems/poor-pigs/
 */

const pr = console.log;

// Accepted --- 63ms 11.11%
// reference: https://www.geeksforgeeks.org/minimum-number-of-pigs-required-to-find-the-poisonous-bucket/
const poorPigs = (n, m, p) => Math.ceil(Math.log10(n) / Math.log10((p / m) + 1));

const main = () => {
    let n = 4, m = 15, p = 15;
    let n2 = 4, m2 = 15, p2 = 30;
    let n3 = 1000, m3 = 15, p3 = 60;
    let n_debug1 = 125, m_debug1 = 1, p_debug1 = 4;
    pr(poorPigs(n, m, p))
    pr(poorPigs(n2, m2, p2))
    pr(poorPigs(n3, m3, p3)) // 5
    pr(poorPigs(n_debug1, m_debug1, p_debug1)) // 3
};

main()