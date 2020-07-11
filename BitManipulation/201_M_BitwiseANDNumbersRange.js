/**
 * 7.11 afternoon
 * https://leetcode.com/problems/bitwise-and-of-numbers-range/
 */

// Time Limit 8256 / 8266
const rangeBitwiseAnd = (m, n) => {
    let res = m;
    for (let i = m + 1; i <= n; i++) {
        res &= i;
    }
    return res;
};


const main = () => {
    let m = 5,
        n = 7;
    let m2 = 0,
        n2 = 1;
    let m_debug1 = 0,
        n_debug1 = 2147483647;
    console.log(rangeBitwiseAnd(m, n));
    console.log(rangeBitwiseAnd(m2, n2));
    console.log(rangeBitwiseAnd(m_debug1, n_debug1));
};



main()