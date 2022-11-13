// 03/06/21 night

const pr = console.log;

// Accepted --- 304ms
const L = 2 ** 10;
const MAX = Number.MAX_SAFE_INTEGER;
const mi = Math.min;
const minChanges = (a, k) => {
    let n = a.length;
    let dp = Array(L).fill(MAX);
    dp[0] = 0;
    for (let i = 0; i < k; i++) {
        let tmp = Array(L).fill(0);
        let tot = 0;
        for (let j = i; j < n; j += k) {
            pr(a[j]);
            tmp[a[j]]++;
            tot++;
        }
        pr("tot", tot);
        // pr(" " + tmp);
        let ndp = Array(L).fill(0);
        let min = MAX;
        for (let j = 0; j < L; j++) {
            min = mi(min, dp[j]);
        }
        min += tot;
        pr("min", min);
        ndp = ndp.map(x => x = min);
        // pr(ndp + " ");
        for (let j = 0; j < L; j++) {
            if (tmp[j] != 0) {
                for (let m = 0; m < L; m++) {
                    ndp[m ^ j] = mi(ndp[m ^ j], dp[m] + tot - tmp[j]);
                    // pr(ndp[m ^ j]);
                }
            }
        }
        dp = ndp;
    }
    return dp[0];
};

const main = () => {
    let nums = [1, 2, 0, 3, 0], k = 1;
    let nums2 = [3, 4, 5, 2, 1, 7, 3, 4, 7], k2 = 3;
    let nums3 = [1, 2, 4, 1, 2, 5, 1, 2, 6], k3 = 3;
    // pr(minChanges(nums, k));
    pr(minChanges(nums2, k2));
    // pr(minChanges(nums3, k3));
};

main()