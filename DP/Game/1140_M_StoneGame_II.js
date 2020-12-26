/**
 * 12.25 night
 * https://leetcode.com/problems/stone-game-ii/
 */

// Accepted --- 96ms 64.38%
// reference: https://zxi.mytechroad.com/blog/recursion/leetcode-1140-stone-game-ii/
let n, memo;
const MIN = Number.MIN_SAFE_INTEGER;
// const MIN = -Infinity; // Accepted --- 108ms 47.94%
const stoneGameII = (piles) => {
    n = piles.length;
    memo = new Map();
    let Tsum = piles.reduce((a, b) => a + b);
    let res = Tsum + dfs(0, 1, piles);
    return res >> 1;
};

const dfs = (sum, M, piles) => { // Maximum diff starting from piles[s] given M.
    if (sum >= n) return 0;
    let k = (sum << 8) | M;
    if (memo.has(k)) return memo.get(k);
    let best = MIN;
    let cur = 0;
    for (let i = 1; i <= 2 * M; i++) {
        if (sum + i > n) break;
        cur += piles[sum + i - 1];
        best = Math.max(best, cur - dfs(sum + i, Math.max(i, M), piles));
    }
    memo.set(k, best);
    // console.log(sum, best);
    return best;
};

// Accepted --- 84ms 87.67%
// reference: https://leetcode.com/problems/stone-game-ii/discuss/345354/Java-DP-with-memorization-easy-to-understand(with-explanation)
let N, mem, sum;
let MAX = Number.MAX_SAFE_INTEGER;
const stoneGameII_2 = (piles) => {
    N = piles.length;
    if (N == 0) return 0;
    mem = initialize2DArrayNew(N, N);
    sum = Array(N).fill(0);
    sum[N - 1] = piles[N - 1];
    for (let i = N - 2; ~i; i--) {
        sum[i] = sum[i + 1] + piles[i];
    }
    return helper(0, 1, piles);
};

const helper = (idx, M, piles) => {
    if (idx == N) return 0;
    if (2 * M >= N - idx) return sum[idx];
    if (mem[idx][M] != 0) return mem[idx][M];
    let min = MAX;
    for (let i = 1; i <= 2 * M; i++) {
        min = Math.min(min, helper(idx + i, Math.max(i, M), piles))
    }
    let best = sum[idx] - min;
    mem[idx][M] = best;
    return best;
    // return mem[idx][M] = best;  // Accepted --- 92ms 69.86%
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
    let piles = [2, 7, 9, 4, 4];
    let piles2 = [1, 2, 3, 4, 5, 100];
    console.log(stoneGameII(piles));
    console.log(stoneGameII(piles2));
};

main()