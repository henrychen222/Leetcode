/*
 * 08/12/23 evening
 * https://leetcode.com/contest/weekly-contest-358/problems/apply-operations-to-maximize-score/
 */

const pr = console.log;

const multi_mod = (x, y, mod) => Number(ll(x) * ll(y) % ll(mod));
// const multi_mod = (x, y, mod) => x * y % mod;

const ll = BigInt;
const powmod = (a, b, mod) => { let r = 1; while (b > 0) { if (b & 1) r = multi_mod(r, a, mod); b >>= 1; a = multi_mod(a, a, mod); } return r; };

// Accepted
// reference: uwi
const mod = 1e9 + 7;
const maximumScore = (a, k) => {
    let max = Math.max(...a), cnt = [], d = [], lpf = LeastPrimeFactors(max + 1);
    // pr(lpf)
    a.map(x => {
        let f = prime_factorization_LPF(x, lpf);
        // pr(x, f)
        cnt.push(f.length);
    });
    // pr(cnt)
    // 算左右扩展区间 可用单调栈
    // let L = prevWall(cnt), R = nextWall(cnt), res = 1;
    let [L, R] = MonotonicStack_PrevNextWall(cnt), res = 1;
    // pr(L, R)
    a.map((x, i) => d.push([cnt[i], i, (i - L[i]) * (R[i] - i), x])); // 左右端点的扩展长度(i - L[i]) * (R[i] - i), 则是包含该元素的子数组数目
    d.sort((x, y) => y[3] - x[3]);
    for (const [, , t, x] of d) {
        let use = Math.min(t, k);
        k -= use;
        let pow = powmod(x, use, mod);
        res = multi_mod(res, pow, mod);
    }
    return res;
};

const LeastPrimeFactors = (n) => {
    let lpf = Array(n + 1).fill(0);
    for (let i = 2; i <= n; i++) {
        if (lpf[i] == 0) {
            lpf[i] = i;
            for (let j = i * i; j <= n; j += i) {
                if (lpf[j] == 0) lpf[j] = i;
            }
        }
    }
    return lpf;
};

const prime_factorization_LPF = (x, lpf) => {
    let f = [];
    while (lpf[x] > 0) {
        f.length == 0 || lpf[x] != f[f.length - 1][0] ? f.push([lpf[x], 1]) : f[f.length - 1][1]++;
        x /= lpf[x];
    }
    return f;
};

const prevWall = (a) => { // left farthest index to reach
    let n = a.length, L = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        L[i] = i - 1;
        while (L[i] >= 0 && a[L[i]] < a[i]) L[i] = L[L[i]];
    }
    return L;
};

const nextWall = (a) => { // right farthest index to reach
    let n = a.length, R = Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        R[i] = i + 1;
        while (R[i] < n && a[R[i]] <= a[i]) R[i] = R[R[i]];
    }
    return R;
};

// reference: https://leetcode.cn/circle/discuss/ol6BYC/
const MonotonicStack_PrevNextWall = (a) => { // left/right farthest index to reach
    let n = a.length, L = Array(n).fill(-1), R = Array(n).fill(n), st = [];
    for (let i = 0; i < n; i++) {
        while (st.length && a[st[st.length - 1]] < a[i]) R[st.pop()] = i;
        if (st.length) L[i] = st[st.length - 1];
        st.push(i);
    }
    return [L, R];
};

const main = () => {
    let a = [8, 3, 9, 3, 8], k = 2
    let a2 = [19, 12, 14, 6, 10, 18], k2 = 3;
    let a_debug1 = [2, 1, 14, 5, 18, 1, 8, 5], k_debug1 = 34;
    let a_debug2 = [5, 12, 11, 15, 10, 18], k_debug2 = 18;
    let a_debug3 = [1, 1, 15, 1, 9, 1, 1], k_debug3 = 23;
    pr(maximumScore(a, k))
    pr(maximumScore(a2, k2))
    pr(maximumScore(a_debug1, k_debug1)) // 799392504
    pr(maximumScore(a_debug2, k_debug2)) // 557423913
    pr(maximumScore(a_debug3, k_debug3)) // 929527145
}

main()

// let x = 75468729, y = 466737221;
// pr(x * y, ll(x) * ll(y), (ll(x)*ll(y)) > Number.MAX_SAFE_INTEGER)




// https://www.geeksforgeeks.org/the-stock-span-problem/
const stockPlan2 = (a) => {
    let n = a.length, s = Array(n);
    s[0] = 1;
    for (let i = 1; i < n; i++) {
        let cnt = 1;
        while (i - cnt >= 0 && a[i] >= a[i - cnt]) {
            cnt += s[i - cnt];
        }
        s[i] = cnt;
    }
    return s;
};

let price = [10, 4, 5, 90, 120, 80];
pr(prevWall(price), nextWall(price))
pr(stockPlan2(price))