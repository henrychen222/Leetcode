/*
 * 03/10/23 night
 * https://leetcode.com/contest/weekly-contest-335/problems/split-the-array-to-make-coprime-products/
 */

const pr = console.log;

const ll = BigInt;
const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);

// Accepted
// reference: uwi
// https://codeforces.com/problemset/submission/1007/40294366
const findValidSplit = (a) => {
    let N = Math.max(...a), n = a.length, first = Array(N + 1).fill(-1), last = Array(N + 1).fill(0);
    let lpf = enumLowestPrimeFactors(N), imos = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        let f = factorFast(a[i], lpf);
        // pr(a[i], f);
        for (const e of f) {
            if (first[e[0]] == -1) {
                first[e[0]] = i;
            }
            last[e[0]] = i;
        }
    }
    for (let i = 1; i <= N; i++) {
        if (first[i] != -1 && first[i] != last[i]) {
            imos[first[i]]++;
            imos[last[i]]--;
        }
    }
    for (let i = 0; i < n; i++) imos[i + 1] += imos[i];
    // pr(imos)
    for (let i = 0; i < n - 1; i++) {
        if (imos[i] == 0) return i;
    }
    return -1;
};

// const enumLowestPrimeFactors = (n) => {
//     let tot = 0, lpf = Array(n).fill(0), u = n + 32, lu = Math.log(u);
//     let d = u / lu, dt = d / lu, len = parseInt(d + dt * 1.5), primes = Array(len).fill(0);
//     for (let i = 2; i <= n; i++)lpf[i] = i;
//     for (let p = 2; p <= n; p++) {
//         if (lpf[p] == p) primes[tot++] = p;
//         for (let i = 0, tmp; i < tot && primes[i] <= lpf[p] && (tmp = primes[i] * p) <= n; i++) lpf[tmp] = primes[i];
//     }
//     return lpf;
// };

// reference: https://www.geeksforgeeks.org/least-prime-factor-of-numbers-till-n/
function enumLowestPrimeFactors(n) {
    let lpf = Array(n + 1).fill(0);
    for (let i = 2; i <= n; i++) {
        if (lpf[i] == 0) {
            lpf[i] = i;
            for (let j = i * i; j <= n; j += i) {
                if (lpf[j] == 0) lpf[j] = i;
            }
        }
    }
    return lpf;
}

const factorFast = (n, lpf) => {
    let f = Array(9), q = 0;
    while (lpf[n] > 0) {
        let p = lpf[n];
        if (q == 0 || p != f[q - 1][0]) {
            f[q++] = [p, 1];
        } else {
            f[q - 1][1]++;
        }
        n /= p;
    }
    return f.slice(0, q); // f[0] ^ f[1] = n
};

// TLE
const findValidSplit1 = (a) => {
    let p = 1n, n = a.length, lp = 1n;
    for (const x of a) p *= ll(x);
    for (let i = 0; i < n - 1; i++) {
        lp *= ll(a[i]);
        let rp = p / lp;
        // pr(lp, rp)
        if (gcd(lp, rp) == 1) return i;
    }
    return -1;
};

const main = () => {
    let a = [4, 7, 8, 15, 3, 5];
    let a2 = [4, 7, 15, 8, 3, 5];
    let debug1 = [770449, 773153, 329951, 45751, 761603, 770597, 327331, 481379, 311453, 645023, 593707, 952811, 490019, 687233, 546677, 387853, 536891, 792479, 401939, 188519, 236449, 9349, 695641, 917849, 537991, 775987, 783743, 770449, 556697, 157363, 189421, 137573, 845371, 536563, 39367, 663301, 913873, 178127, 439613, 685301, 764369, 161323, 269761, 415801, 75289, 15161, 674371, 909731, 636809, 35053, 304723, 462727, 761407, 989341, 820399, 390851, 45751, 137743, 137867, 309293, 204749, 858317, 536563, 673411, 732229, 696481, 89899, 920203, 7043, 540301, 308141, 983819, 984563, 409261, 269761, 778333, 297991, 775987];
    pr(findValidSplit(a));
    pr(findValidSplit(a2));
    pr(findValidSplit(debug1)); // -1
};

main()