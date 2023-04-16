/*
 * 12/17/22 evening
 * https://leetcode.com/contest/weekly-contest-324/problems/smallest-value-after-replacing-with-sum-of-prime-factors/
 */

const pr = console.log;

const sm = (a) => a.reduce(((x, y) => x + y), 0);

const smallestValue = (n) => {
    if (n == 2 || n == 4) return n;
    f = prime_factorization(n), sum = sm(f);
    n = sum;
    while (true) {
        let isPrime = true;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return n;
        } else {
            f = prime_factorization(n), sum = sm(f);
            // pr(n, f)
            n = sum;
        }
    }
};

const prime_factorization = (n) => { // 质因式分解
    let res = [];
    while (n % 2 === 0) {
        res.push(2);
        n /= 2;
    }
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            res.push(i);
            n /= i;
        }
    }
    if (n > 2) {
        res.push(n);
    }
    return res;
};

////////////////////////////////////////////////////////////////////////
// Accepted chatGPT
function smallestValue2(n) {
    if (n == 2 || n == 4) return n;
    // Step 1: Find the prime factorization of n
    let factors = [];
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    if (n > 2) {
        factors.push(n);
    }

    // Step 2: Replace n with the sum of its prime factors
    n = factors.reduce((a, b) => a + b, 0);

    // Step 3: Repeat the process until n is a prime number
    while (true) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return n;
        } else {
            factors = [];
            while (n % 2 === 0) {
                factors.push(2);
                n /= 2;
            }
            for (let i = 3; i <= Math.sqrt(n); i += 2) {
                while (n % i === 0) {
                    factors.push(i);
                    n /= i;
                }
            }
            if (n > 2) {
                factors.push(n);
            }
            n = factors.reduce((a, b) => a + b, 0);
        }
    }
}
//////////////////////////////////////////////////////////////////

// WA
const smallestValue1 = (n) => {
    if (n == 2 || n == 4) return n;
    let se = new Set();
    for (let i = 1; 1 << i <= n; i++) se.add(1 << i);
    while (1) {
        let f = findAllPrimeFactors(n), next = Number.MAX_SAFE_INTEGER;
        pr(f);
        for (const x of f) {
            let cnt = n / x, sum = cnt + x, cnt2 = Math.log2(n) / Math.log2(x), sum2 = cnt2 * x;
            pr(cnt, sum, cnt2, sum2)
            let cur = cnt2 == parseInt(cnt) ? sum2 : sum;

            next = Math.min(next, cur);
        }
        pr("next", next)
        if (next < n) {
            n = next;
        } else {
            break;
        }
    }
    return n;
};

const findAllPrimeFactors = (n) => {
    let res = new Set(), c = 2;
    while (n > 1) {
        if (n % c == 0) {
            res.add(c);
            n /= c;
        } else {
            c++;
        }
    }
    return res;
};

const main = () => {
    let n = 15;
    let n2 = 3;
    let debug1 = 16;
    let debug2 = 24;
    let debug3 = 2;
    let debug4 = 4;
    let debug5 = 10;
    pr(smallestValue(n))
    pr(smallestValue(n2))
    pr(smallestValue(debug1)) // 5
    pr(smallestValue(debug2)) // 5
    pr(smallestValue(debug3)) // 2
    pr(smallestValue(debug4)) // 4
    pr(smallestValue(debug5)) // 7
};

main()

// pr(findAllPrimeFactors(10), findAllPrimeFactors(16), findAllPrimeFactors(15))

// pr(prime_factorization(10), prime_factorization(16), prime_factorization(15), prime_factorization(4))