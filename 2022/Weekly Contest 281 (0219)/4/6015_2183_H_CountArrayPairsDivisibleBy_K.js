/**
 * 02/19/22 evening
 * https://leetcode.com/contest/weekly-contest-281/problems/count-array-pairs-divisible-by-k/
 */

const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);

// Accepted  reference: rfpermen
const coutPairs = (a, k) => {
    let n = a.length, f = Array(1e5 + 1).fill(0), gcdData = [], res = 0;
    for (const x of a) {
        let g = gcd(x, k);
        // pr(g, res, gcdData)
        for (const y of gcdData) {
            if (g * y % k == 0) res += f[y];
        }
        if (f[g] == 0) gcdData.push(g);
        f[g]++;
    }
    return res;
};

///////////////////////////////////////////////////////////////// 
// TLE
const coutPairs1 = (a, k) => {
    let n = a.length, res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[i] * a[j] % k == 0) res++;
        }
    }
    return res;
};

const coutPairs2 = (a, k) => {
    let n = a.length, f = Array(k * k).fill(0), cnt = 0;
    for (let i = 0; i < n; i++) f[a[i] % k]++;
    cnt += f[0] * (f[0] - 1) / 2;
    for (let i = 1; i < k; i++) cnt += f[i] * f[0];
    for (let x = k; x <= (k - 1) * k; x += k) {
        for (let i = 2; i <= x; i++) {
            if (x % i == 0 && i != x) {
                // pr("tr", f[i], f[parseInt(x / i)])
                cnt += f[i] * f[parseInt(x / i)];
            } else if (i == x && x % i == 0) {
                cnt += f[0] * (f[0] - 1) / 2;
            }
        }
        // pr(cnt);
    }
    return cnt;
};

const pr = console.log;
const main = () => {
    let a = [1, 2, 3, 4, 5], k = 2;
    let a2 = [1, 2, 3, 4], k2 = 5;
    pr(coutPairs(a, k))
    pr(coutPairs(a2, k2))
};

main()