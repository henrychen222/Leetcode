/**
 * 07/03/21 evening night
 * https://leetcode.com/contest/weekly-contest-248/problems/longest-common-subpath/
 */

const pr = console.log;


const mod = 180143985094819841n;
const ll = BigInt;
const multi = (x, y, mod) => {
    return ll(x) * ll(y) % mod;
};

const longestCommonSubpath = (n, paths) => {
    let base = ll(n + 37);
    let [low, high] = [0, 1e5];
    for (const p of paths) high = Math.min(high, p.length);
    while (low < high) {
        let mid = low + high + 1 >> 1;
        // pr(mid)
        let se = new Set();
        let first = true;
        for (const path of paths) {
            let nset = new Set();
            let [h, p] = [0n, 1n]
            // pr('mid', mid)
            for (let i = 0; i < mid; i++) {
                // pr(multi(h, base, mod), ll(path[i] || 0n))
                h = (multi(h, base, mod) + ll(path[i])) % mod;
                if (i) p = multi(p, base, mod);
            }
            // pr('first h', h);
            if (first || se.has(h)) nset.add(h);
            for (let i = mid; i < path.length; i++) {
                h = (multi((h + mod - multi(path[i - mid], p, mod)) % mod, base, mod) + ll(path[i])) % mod;
                if (first || se.has(h)) nset.add(h);
            }
            // pr('second h', h);
            first = false;
            se = nset;
            if (se.size == 0) break;
        }
        se.size == 0 ? high = mid - 1 : low = mid;
    }
    return low;
};



const main = () => {
    let n = 5, paths = [[0, 1, 2, 3, 4], [2, 3, 4], [4, 0, 1, 2, 3]];
    let n2 = 3, paths2 = [[0], [1], [2]];
    let n3 = 5, paths3 = [[0, 1, 2, 3, 4], [4, 3, 2, 1, 0]];
    let n_debug1 = 10, path_debug1 = [[2, 1, 4, 0, 3], [2, 1, 4, 0, 3]];
    pr(longestCommonSubpath(n, paths))
    pr(longestCommonSubpath(n2, paths2))
    pr(longestCommonSubpath(n3, paths3))
    pr(longestCommonSubpath(n_debug1, path_debug1)) // 5
};

main()

// pr(1n << 61n - 1n, 180143985094819841)