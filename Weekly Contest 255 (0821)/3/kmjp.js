// 08/21/21 night

const pr = console.log;

// Accepted
const L = 4910;
const minimizeTheDifference = (g, target) => {
    let n = g.length, m = g[0].length, dp = Array(L).fill(0);
    dp[0] = 1;
    for (const row of g) {
        let ndp = Array(L).fill(0);
        for (const x of row) {
            for (let i = 0; i < L; i++) {
                // pr(i + x);
                if (dp[i]) ndp[i + x] = 1;
            }
        }
        dp = ndp;
    }
    // pr(dp)
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < L; i++) {
        if (dp[i]) min = Math.min(min, Math.abs(target - i));
    }
    return min;
};

const main = () => {
    let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], target = 13
    let mat2 = [[1], [2], [3]], target2 = 100;
    let mat3 = [[1, 2, 9, 8, 7]], target3 = 6;
    let mat_debug1 = [[3,5],[5,10]], target_debug1 = 47;
    pr(minimizeTheDifference(mat, target))
    pr(minimizeTheDifference(mat2, target2))
    pr(minimizeTheDifference(mat3, target3))
    pr(minimizeTheDifference(mat_debug1, target_debug1)) // 32
};

main()