// 03/26/22 night

const pr = console.log;

// Accepted
// reference kmjp
const maxValueOfCoins = (piles, k) => {
    let dp = Array(k + 1).fill(0);
    for (const p of piles) {
        for (let i = k; ~i; i--) {
            let sum = 0;
            for (let j = 0; i + j + 1 <= k && j < p.length; j++) {
                sum += p[j];
                dp[i + j + 1] = Math.max(dp[i + j + 1], sum + dp[i]);
            }
        }
    }
    return dp[k];
};

const main = () => {
    let piles = [[1, 100, 3], [7, 8, 9]], k = 2;
    let piles2 = [[100], [100], [100], [100], [100], [100], [1, 1, 1, 1, 1, 1, 700]], k2 = 7;
    pr(maxValueOfCoins(piles, k))
    pr(maxValueOfCoins(piles2, k2))
};

main()