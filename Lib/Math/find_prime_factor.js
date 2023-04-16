// https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/
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


const findAllFactors = (n) => {
    let res = [];
    for (let i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            if (i == n / i) {
                res.push(i);
            } else {
                res.push(i);
                res.push(n / i);
            }
        }
    }
    return res;
};