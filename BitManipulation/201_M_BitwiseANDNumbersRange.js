/**
 * 7.11 afternoon  05/22/21 afternoon fixed
 * https://leetcode.com/problems/bitwise-and-of-numbers-range/
 */

// Accepted --- 208ms --- 56.41%
const lg2 = Math.log2;
const rangeBitwiseAnd = (m, n) => {
    // if (m == n) return m;
    let end = lg2(n) >> 0;
    // pr(end);
    // let cnt = 0;
    for (let i = end; ~i; i--) {
        // if (cnt >= 2) return 0;
        // if (2 ** i >= m) cnt++;
        if (2 ** i > m) return 0;
        // if (1 << i > m) return 0; // Accepted --- 220ms 38.46%
    }
    return cal(m, n);
};

const cal = (m, n) => {
    let res = m;
    for (let i = m + 1; i <= n; i++) {
        res &= i;
    }
    return res;
};

// Time Limit 8256 / 8266
const rangeBitwiseAnd1 = (m, n) => {
    let res = m;
    for (let i = m + 1; i <= n; i++) {
        res &= i;
    }
    return res;
};

const pr = console.log;
const main = () => {
    let m = 5,
        n = 7;
    let m2 = 0,
        n2 = 1;
    let m_debug1 = 1,
        n_debug1 = 2147483647;
    let m_debug2 = 127,
        n_debug2 = 127;
    let m_debug3 = 1,
        n_debug3 = 1;
    let m_debug4 = 2,
        n_debug4 = 2;
    let m_debug5 = 2,
        n_debug5 = 3;
    let m_debug6 = 4,
        n_debug6 = 4;
    let m_debug7 = 600000000,
        n_debug7 = 2147483645
    pr(rangeBitwiseAnd(m, n));
    pr(rangeBitwiseAnd(m2, n2));
    pr(rangeBitwiseAnd(m_debug1, n_debug1));
    pr(rangeBitwiseAnd(m_debug2, n_debug2));
    pr(rangeBitwiseAnd(m_debug3, n_debug3)); // 1
    pr(rangeBitwiseAnd(m_debug4, n_debug4)); // 2
    pr(rangeBitwiseAnd(m_debug5, n_debug5)); // 2
    pr(rangeBitwiseAnd(m_debug6, n_debug6)); // 4
    pr(rangeBitwiseAnd(m_debug7, n_debug7)); // 4
};



main()

// pr(cal(4, 8));
// pr(cal(7, 8));