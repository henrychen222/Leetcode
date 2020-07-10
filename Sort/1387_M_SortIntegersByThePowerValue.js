/**
 * 7.9 afternoon
 * https://leetcode.com/problems/sort-integers-by-the-power-value/
 */

// Accepted --- 544ms 38.3MB 5.47%
const getKth = (lo, hi, k) => {
    let interval = [];
    for (let i = lo; i <= hi; i++) {
        interval.push(i);
    }
    interval.sort((a, b) => {
        if (step(a) == step(b)) {
            return a - b;
        }
        return step(a) - step(b);
    });
    return interval[k - 1];
};

const step = (x) => {
    let cnt = 0;
    while (x != 1) {
        if (x % 2 == 0) {
            x = x / 2;
            // x = x >> 1;   // a litter fast 540ms
            cnt++;
        } else {
            x = 3 * x + 1;
            cnt++;
        }
    }
    return cnt;
};

const main = () => {
    let lo = 12,
        hi = 15,
        k = 2;
    let lo2 = 1,
        hi2 = 1,
        k2 = 1;
    let lo3 = 7,
        hi3 = 11,
        k3 = 4;
    let lo4 = 10,
        hi4 = 20,
        k4 = 5;
    let lo5 = 1,
        hi5 = 1000,
        k5 = 777;
    console.log(getKth(lo, hi, k));
    console.log(getKth(lo2, hi2, k2));
    console.log(getKth(lo3, hi3, k3));
    console.log(getKth(lo4, hi4, k4));
    console.log(getKth(lo5, hi5, k5));
};

main()