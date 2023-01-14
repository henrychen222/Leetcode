/*
 * 01/04/22 afternoon
 * https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/
 */

const pr = console.log;

// Accepted --- 122ms 31.58%
// reference: https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/1580357/c-python-clean-simple-solution-w-detailed-explanation-binary-search-with-proof/
let m, n, k;
const findKthNumber = (M, N, K) => {
    m = M, n = N, k = K;
    return BinarySearch(1, m * n);
};

const BinarySearch = (low, high) => {
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (possible(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
};

const possible = (x) => {
    let cnt = 0;
    for (let i = 1; i <= m; i++) cnt += Math.min(x / i >> 0, n);
    return cnt < k;
};

// MLE
const findKthNumber1 = (m, n, k) => {
    let a = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) a.push((i + 1) * (j + 1));
    }
    a.sort((x, y) => x - y);
    return a[k - 1];
};

const main = () => {
    let m = 3, n = 3, k = 5;
    let m2 = 2, n2 = 3, k2 = 6;
    let m_debug1 = 9895, n_debug1 = 28405, k_debug1 = 100787757;
    pr(findKthNumber(m, n, k))
    pr(findKthNumber(m2, n2, k2))
    pr(findKthNumber(m_debug1, n_debug1, k_debug1))

};

main()