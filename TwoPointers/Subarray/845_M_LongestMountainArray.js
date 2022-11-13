/*
 * 11/02/22 night
 * https://leetcode.com/problems/longest-mountain-in-array/
 */

const pr = console.log;

const cutMaxConsecutiveWithIndex_de = (a) => {
    let d = [], ia = [], l = 0, n = a.length;
    for (let i = 0; i + 1 < n; i++) {
        if (a[i + 1] >= a[i]) {
            d.push(a.slice(l, i + 1));
            ia.push([l, i]);
            l = i + 1;
        }
    }
    d.push(a.slice(l));
    ia.push([l, n - 1]);
    return [d, ia];
};

const cutMaxConsecutiveWithIndex_in = (a) => {
    let d = [], ia = [], l = 0, n = a.length;
    for (let i = 0; i + 1 < n; i++) {
        if (a[i + 1] <= a[i]) {
            d.push(a.slice(l, i + 1));
            ia.push([l, i]);
            l = i + 1;
        }
    }
    d.push(a.slice(l));
    ia.push([l, n - 1]);
    return [d, ia];
};

// Accepted
const longestMountain = (a) => {
    let [inc, inc_ia] = cutMaxConsecutiveWithIndex_in(a), [dec, dec_ia] = cutMaxConsecutiveWithIndex_de(a)
    // pr("inc", inc)
    // pr("inc_ia", inc_ia)
    // pr("dec", dec)
    // pr("dec_ia", dec_ia)
    let res = 0;
    for (const [l, r] of inc_ia) {
        let incLen = cal(l, r);
        // pr("\n", [l, r])
        if (l == r) continue;
        for (const [L, R] of dec_ia) {
            if (L == R) continue;
            if (a[r + 1] < a[r] && r + 1 >= L && r + 1 <= R) {
                // pr([L, R])
                let decLen = cal(r + 1, R), len = incLen + decLen;
                // pr('len', incLen, decLen)
                res = Math.max(res, len);
                break;
            }

        }
    }
    return res;
};

const cal = (l, r) => r - l + 1;

const main = () => {
    let a = [2, 1, 4, 7, 3, 2, 5];
    let a2 = [2, 2, 2]
    let a_debug1 = [3, 2]
    let a_debug2 = [0, 2, 2];
    let a_debug3 = [0, 2, 0, 2, 1, 2, 3, 4, 4, 1];
    pr(longestMountain(a))
    pr(longestMountain(a2))
    pr(longestMountain(a_debug1)) // 0
    pr(longestMountain(a_debug2)) // 0
    pr(longestMountain(a_debug3)) // 3
};

main()