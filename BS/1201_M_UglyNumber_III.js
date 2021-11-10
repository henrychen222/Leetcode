/**
 * 11/06/21 night start   11/09/21 evening complete
 * https://leetcode.com/problems/ugly-number-iii/
 */

/**
 * referencen:
 * https://leetcode.com/problems/ugly-number-iii/discuss/387539/cpp-Binary-Search-with-picture-and-Binary-Search-Template
 * https://zxi.mytechroad.com/blog/algorithms/binary-search/leetcode-1201-ugly-number-iii/
 * https://www.cnblogs.com/grandyang/p/15171215.html
 */

const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
const lcm = (a, b) => (a / gcd(a, b)) * b;
const ll = BigInt;

// Accepted --- 76ms 16.67%
const nthUglyNumber = (n, a, b, c) => {
    let low = 0n, high = ll(2e9);
    let ab = lcm(a, b), bc = lcm(b, c), ac = lcm(a, c), abc = lcm(a, bc);
    a = ll(a), b = ll(b), c = ll(c), ab = ll(ab), bc = ll(bc), ac = ll(ac), abc = ll(abc);
    // pr(ab, bc, ac, abc);
    while (low < high) {
        let mid = low + high >> 1n;
        let cnt = mid / a + mid / b + mid / c - mid / ab - mid / bc - mid / ac + mid / abc;
        // pr(mid, cnt);
        cnt < n ? low = mid + 1n : high = mid;
    }
    // pr(low, high);
    return low;
};

// TLE
const nthUglyNumber1 = (n, a, b, c) => {
    let min = Math.min(a, b, c),
        x = min;
    while (1) {
        if (x % a == 0 || x % b == 0 || x % c == 0) n--;
        if (n == 0) break;
        x++;
    }
    return x;
};

const pr = console.log;
const main = () => {
    let n = 3,
        a = 2,
        b = 3,
        c = 5;
    let n2 = 4,
        a2 = 2,
        b2 = 3,
        c2 = 4;
    let n3 = 5,
        a3 = 2,
        b3 = 11,
        c3 = 13;
    let n4 = 1000000000,
        a4 = 2,
        b4 = 217983653,
        c4 = 336916467;
    let n_debug1 = 10000000,
        a_debug1 = 2,
        b_debug1 = 8094463,
        c_debug1 = 8136455;
    pr(nthUglyNumber(n, a, b, c))
    pr(nthUglyNumber(n2, a2, b2, c2))
    pr(nthUglyNumber(n3, a3, b3, c3))
    pr(nthUglyNumber(n4, a4, b4, c4))
    pr(nthUglyNumber(n_debug1, a_debug1, b_debug1, c_debug1)) // 19999996
};

main()