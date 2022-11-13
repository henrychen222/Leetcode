/*
 * 10/22/22 evening
 * https://leetcode.com/contest/weekly-contest-316/problems/number-of-subarrays-with-gcd-equal-to-k/
 */

const pr = console.log;

const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
const gcdArray = (a) => { let res = 0; for (const x of a) { res = gcd(res, x); if (res == 1) return 1; } return res };

// Accepted
const subarrayGCD = (a, k) => {
    let n = a.length, res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sub = a.slice(i, j + 1);
            let g = gcdArray(sub);
            if (g == k) res++;
        }
    }
    return res;
};

const main = () => {
    let a = [9, 3, 1, 2, 6, 3], k = 3;
    let a2 = [4], k2 = 7
    pr(subarrayGCD(a, k))
    pr(subarrayGCD(a2, k2))
};

main()
