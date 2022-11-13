// 06/13/21 night
// Accepted --- 308ms
const maximumRemovals = (s, p, removable) => {
    let rn = removable.length + 1;
    let [low, high] = [0, rn];
    while (low + 1 < high) {
        let mid = low + high >> 1;
        ok(s, p, removable, mid) ? low = mid : high = mid;
    }
    return low;
};

const ok = (s, t, removeable, mid) => {
    let n = s.length;
    let rem = Array(n).fill(false);
    for (let i = 0; i < mid; i++) rem[removeable[i]] = true;
    let j = 0; // start checking isSubsequence
    for (let i = 0; i < n; i++) {
        if (rem[i]) continue;
        if (s[i] == t[j]) {
            if (++j == t.length) return true;
        }
    }
    return false;
};


const pr = console.log;
const main = () => {
    let s = "abcacb", p = "ab", removable = [3, 1, 0]
    let s2 = "abcbddddd", p2 = "abcd", removable2 = [3, 2, 1, 4, 5, 6];
    let s3 = "abcab", p3 = "abc", removable3 = [0, 1, 2, 3, 4];
    let s_debug1 = "qobftgcueho", p_debug1 = "obue", removable_debug1 = [5, 3, 0, 6, 4, 9, 10, 7, 2, 8];
    pr(maximumRemovals(s, p, removable))
    pr(maximumRemovals(s2, p2, removable2))
    pr(maximumRemovals(s3, p3, removable3))
    pr(maximumRemovals(s_debug1, p_debug1, removable_debug1)) // 7
};

main()