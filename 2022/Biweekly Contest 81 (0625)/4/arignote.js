// 06/25/22 noon
const pr = console.log;

const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
const mod = 1e9 + 7;
const initialize3DArray = (n, m, p) => { let r = []; for (let i = 0; i < n; i++) { let d = []; for (let j = 0; j < m; j++) { let t = Array(p).fill(0); d.push(t); } r.push(d); } return r; };

const distinctSequences = (n) => {
    let m = new Map();
    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 6; j++) {
            if (i == 1 && j == 1) continue;
            if (gcd(i, j) == 1) {
                if (!m.has(i)) m.set(i, []);
                m.get(i).push(j);
            }
        }
    }
    pr(m);
    let dp = initialize3DArray(n + 1, 8, 8);
    for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= 7; j++) {
            for (let k = 1; k <= 7; k++) {
                // pr(k, m.get(k))
                for (const l of m.get(k)) {
                    if (l != j) {
                        // pr(l, j, dp[i][j][k])
                        if (i > 0) {
                            dp[i][j][k] += dp[i - 1][k][l];
                            dp[i][j][k] %= mod;
                        } else {
                            dp[i][j][k] = 1;
                        }
                    }
                }
            }
        }
    }
    // pr(dp);
    return dp[n][7][7];
};

const main = () => {
    let n = 4;
    let n2 = 2;
    let debug1 = 15;
    pr(distinctSequences(n))
    pr(distinctSequences(n2))
    pr(distinctSequences(debug1))
};

main()