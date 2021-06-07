/**
 * 06/03/21 night start 
 * 06/05/21 evening
 * https://leetcode.com/problems/clumsy-factorial/
 */

// Accepted --- 104ms 24.14%
const f = ['*', '/', '+', '-'];
const clumsy = (n) => {
    let d = [];
    for (let i = n - 1, r = 0; i > 0; i--, r++) {
        let m = f[r % 4];
        if (m == f[0]) {
            d.push(f[0] + i);
        } else if (m == f[1]) {
            d.push(f[1] + i);
        } else if (m == f[2]) {
            d.push(f[2] + i);
        } else if (m == f[3]) {
            d.push(f[3] + i);
        }
    }
    let res = n;
    let dn = d.length;
    // pr(d, dn);
    let i;
    for (i = 0; i < dn;) {
        let c = d[i][0];
        let x = d[i].slice(1) - '0';
        // pr(c, x, "idx", i, d[i])
        if (c == '+') {
            res += x;
            i++;
        } else if (c == '*') {
            res *= x;
            i++;
        } else if (c == '/') {
            res = res / x >> 0;
            i++;
        } else {
            let end = dn - 1;
            let tmp = -x;
            for (let j = i; j < dn; j++) {
                let cc = d[j][0];
                let xx = d[j].slice(1) - '0';
                // pr("internal", xx);
                if (cc == '+') {
                    end = j;
                    tmp += xx;
                    break;
                } else if (cc == '*') {
                    tmp *= xx;
                } else if (cc == '/') {
                    tmp = tmp / xx >> 0;
                }
            }
            // pr("three", tmp, "end", end)
            res += tmp;
            i = end + 1;
        }
        // pr("res", res)
    }
    return res;
};

const pr = console.log;
const main = () => {
    let n = 4;
    let n2 = 10;
    let debug1 = 11;
    let debug2 = 15;
    pr(clumsy(n))
    pr(clumsy(n2))
    pr(clumsy(debug1)) // 10
    pr(clumsy(debug2)) // 14
};

main()

// pr(11 + 7 - (7) + 3 - 2);
// pr ((15 * 14 / 13 >> 0) + 12 - (11 * 10 / 9 >> 0) + 8 - (7 * 6 / 5 >> 0) + 4 - (3 * 2 / 1))