// 06/13/22 night
// reference: https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/discuss/1009785/C%2B%2B-DP-with-explanation

const pr = console.log;

const distributeCookies = (cookies, k) => partition_k_subsequence_minimize_max_sum(cookies, k);

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };
const checkIthBit = (x, i) => x & (1 << i);

const partition_k_subsequence_minimize_max_sum = (a, k) => {
    let n = a.length, sum = Array(1 << n).fill(0), dp = initialize2DArray(k + 1, 1 << n);
    for (let mask = 0; mask < 1 << n; mask++) {
        for (let i = 0; i < n; i++) {
            if (checkIthBit(mask, i)) sum[mask] += a[i];
        }
    }
    for (let mask = 1; mask < 1 << n; mask++) {
        dp[0][mask] = Number.MAX_SAFE_INTEGER;
        for (let i = 1; i <= k; i++) {
            dp[i][mask] = Number.MAX_SAFE_INTEGER;
            for (let submask = mask; submask > 0; submask = (submask - 1) & mask) {
                dp[i][mask] = Math.min(dp[i][mask], Math.max(sum[submask], dp[i - 1][mask - submask]));
            }
        }
    }
    return dp[k][(1 << n) - 1];
};

const main = () => {
    let cookies = [8, 15, 10, 20, 8], k = 2;
    let cookies2 = [6, 1, 3, 2, 2, 4, 1, 2], k2 = 3;
    let cookie_debug1 = [76265, 7826, 16834, 63341, 68901, 58882, 50651, 75609], k_debug1 = 8;
    pr(distributeCookies(cookies, k))
    pr(distributeCookies(cookies2, k2))
    pr(distributeCookies(cookie_debug1, k_debug1)) // 76265
};

main()