// 1.11 noon

// Accepted --- 488ms
const minimumTimeRequired = (jobs, k) => {
    let n = jobs.length;
    let mask = 1 << n;
    let sum = Array(mask).fill(0);
    for (let s = 0; s < mask; s++) {
        for (let i = 0; i < n; i++) {
            if ((s >> i) & 1) {
                sum[s] += jobs[i];
            }
        }
    }
    // console.log(sum);
    let dp = initialize2DArrayNew(mask, k + 1);
    for (let s = 1; s < mask; s++) {
        dp[s][0] = 1e9;
        for (let i = 1; i <= k; i++) {
            dp[s][i] = 1e9;
            for (let j = s; j > 0; j = j - 1 & s) {
                dp[s][i] = Math.min(dp[s][i], Math.max(sum[j], dp[s ^ j][i - 1]))
            }
        }
    }
    return dp[mask - 1][k];
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let jobs = [3, 2, 3], k = 3;
    let jobs2 = [1, 2, 4, 7, 8], k2 = 2;
    console.log(minimumTimeRequired(jobs, k));
    console.log(minimumTimeRequired(jobs2, k2));
};

main()