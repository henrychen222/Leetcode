// 1.11 noon

// Accepted --- 1672ms
let sum, mask, n;
const minimumTimeRequired = (jobs, k) => {
    n = jobs.length;
    mask = 1 << n;
    sum = Array(mask).fill(0);
    for (let i = 1; i < mask; i++) {
        sum[i] = sum[i & i - 1] + jobs[numberOfTrailingZeros(i)];
    }
    // for (let s = 0; s < mask; s++) { // Accepted --- 1740ms
    //     for (let i = 0; i < n; i++) {
    //         if ((s >> i) & 1) {
    //             sum[s] += jobs[i];
    //         }
    //     }
    // }
    // console.log(sum);
    let low = 0;
    let high = 1e9;
    while (high - low > 1) {
        let m = high + low >> 1;
        if (ok(m, k)) {
            high = m;
        } else {
            low = m;
        }
    }
    return high;
};

const ok = (m, k) => {
    let dp = Array(mask).fill(1e9 - 1);
    dp[0] = 0;
    for (let i = 1; i < mask; i++) {
        for (let j = i; j > 0; j = j - 1 & i) {
            if (sum[j] <= m) {
                dp[i] = Math.min(dp[i], dp[i ^ j] + 1);
            }
        }
    }
    return dp[mask - 1] <= k;
};

const numberOfTrailingZeros = (i) => {
    let y;
    if (i == 0) return 32;
    let n = 31;
    y = i << 16; if (y != 0) { n = n - 16; i = y; }
    y = i << 8; if (y != 0) { n = n - 8; i = y; }
    y = i << 4; if (y != 0) { n = n - 4; i = y; }
    y = i << 2; if (y != 0) { n = n - 2; i = y; }
    return n - ((i << 1) >>> 31);
};

const main = () => {
    let jobs = [3, 2, 3], k = 3;
    let jobs2 = [1, 2, 4, 7, 8], k2 = 2;
    console.log(minimumTimeRequired(jobs, k));
    console.log(minimumTimeRequired(jobs2, k2));
};

main()