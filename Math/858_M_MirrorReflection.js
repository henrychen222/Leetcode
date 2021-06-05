/**
 * 06/03/21 night
 * https://leetcode.com/problems/mirror-reflection/
 */

// Accepted --- 72ms 100%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/10646040.html
 * https://leetcode.com/problems/mirror-reflection/discuss/141765/Java-short-solution-with-a-sample-drawing
 */
const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
const mirrorReflection = (p, q) => {
    if (p & 1) {
        if (q & 1) {
            return 1;
        } else {
            return 0;
        }
    } else {
        if (q & 1) {
            return 2;
        } else {
            let g = gcd(p, q);
            p /= g;
            q /= g;
            // pr(p, q)
            return mirrorReflection(p, q);
        }
    }
};

// WA
const mirrorReflection1 = (p, q) => {
    if (q == 0) return 0;
    if (p % (2 * q) == 0) return 2;
    if (p % (3 * q) == 0 || p == q) return 1;
    return 0;
};

const pr = console.log;
const main = () => {
    let p = 2,
        q = 1;
    let p_debug1 = 3,
        q_debug1 = 2;
    let p_debug2 = 3,
        q_debug2 = 3;
    let p_debug3 = 4,
        q_debug3 = 3;
    let p_debug4 = 4;
    q_debug4 = 2;
    pr(mirrorReflection(p, q));
    pr(mirrorReflection(p_debug1, q_debug1)); // 0
    pr(mirrorReflection(p_debug2, q_debug2)); // 1
    pr(mirrorReflection(p_debug3, q_debug3)); // 2
    pr(mirrorReflection(p_debug4, q_debug4)); // 2
};

main()