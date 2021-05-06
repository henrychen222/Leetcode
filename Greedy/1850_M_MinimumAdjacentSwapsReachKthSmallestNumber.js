/**
 * 05/04/21 evening
 * https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/
 */

// Accepted --- 148ms 95.65% cuiaoxiang https://leetcode.com/contest/weekly-contest-239/ranking/3/
const getMinSwaps = (s, k) => {
    let a = s.split("");
    let np = [...a];
    while (k--) nextPermutation(np);
    // pr(a.join(""), np.join(""))
    let n = a.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] == np[i]) continue;
        let j;
        for (j = i + 1; j < n && a[j] != np[i]; j++); // find j: should index in a
        // pr(i, a[i], j, a[j]);
        for (let k = j; k > i; k--) { // swap ajacent each in range [i, j]
            [a[k], a[k - 1]] = [a[k - 1], a[k]];
            res++;
        }
    }
    return res;
};

// Accepted --- 160ms 86.96%  uwi  https://leetcode.com/contest/weekly-contest-239/ranking/2/
// Accepted --- 168ms 82.61% 
const getMinSwaps3 = (s, k) => {
    let a = s.split("");
    let np = [...a];
    while (k--) nextPermutation(np);
    pr(a, np)
    return minAdjacentSwap(a, np);
};

const minAdjacentSwap = (a, b) => {
    let n = a.length;
    let res = 0;
    let finish = Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            if (!finish[j] && a[j] == b[i]) {
                finish[j] = true;
                res += cnt;
                break;
            }
            if (!finish[j]) cnt++;
        }
    }
    return res;
};

const nextPermutation = (a) => {
    let n = a.length;
    let i, j;
    for (i = n - 2; i >= 0 && a[i] >= a[i + 1]; i--);
    // if (i == -1) return false;
    if (i < -1) return false;
    for (j = i + 1; j < n && a[i] < a[j]; j++);
    [a[i], a[j - 1]] = [a[j - 1], a[i]];
    for (let p = i + 1, q = n - 1; p < q; p++, q--)[a[p], a[q]] = [a[q], a[p]];
    return true;
};

// Accepted --- 412ms 21.74% uwi
const getMinSwaps2 = (s, k) => {
    let a = s.split("");
    let np = [...a];
    while (k--) np = next_permutation(np);
    let n = a.length;
    let res = 0;
    let finish = Array(n).fill(false);
    // pr(a);
    // pr(np)
    for (let i = 0; i < n; i++) {
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            if (!finish[j] && a[j] == np[i]) {
                finish[j] = true;
                res += cnt;
                break;
            }
            if (!finish[j]) cnt++;
        }
        // pr(res, cnt);
    }
    return res;
};

//////////////////////////////////////////////////////////////////////////////
// don't know
const aueq = (a, b) => JSON.stringify(a) != JSON.stringify(b);
const swap = (a, i, j) => [a[i], a[j]] = [a[j], a[i]];
const abs = Math.abs;
const getMinSwaps1 = (s, k) => {
    let a = s.split("");
    let np = [...a];
    while (k--) np = next_permutation(np);
    pr(s, np.join(""));
    let n = a.length;
    let res = 0;
    pr("begin", a.join(""), np.join(""))
    while (aueq(a, np)) {
        for (let i = n - 1; ~i; i--) {
            if (a[i] != np[i]) {
                let shouldIdx = np.lastIndexOf(a[i]);
                pr("find", a[i], a[shouldIdx])
                swap(a, i, shouldIdx);
                res += abs(i - shouldIdx);
                break;
            }
        }
        pr(a.join(""), np.join(""));
    }
    return res;
};

const next_permutation = (A) => {
    let n = A.length;
    let idx = -1;
    for (let i = n - 1; i > 0; i--) {
        if (A[i - 1] < A[i]) {
            idx = i - 1;
            break;
        }
    }
    if (idx == -1) return A.reverse();
    let secondIdx = idx + 1;
    for (let i = idx + 1; i < n - 1; i++) {
        if (A[i] > A[i + 1] && A[i + 1] > A[idx]) secondIdx = i + 1;
    }
    [A[idx], A[secondIdx]] = [A[secondIdx], A[idx]];
    return A.slice(0, idx + 1).concat(A.slice(idx + 1).sort((a, b) => a - b));
};

const pr = console.log;
const main = () => {
    let num = "5489355142",
        k = 4;
    let num2 = "11112",
        k2 = 4;
    let num3 = "00123",
        k3 = 1;
    let num_debug1 = "99499", k_debug1 = 1;
    pr(getMinSwaps(num, k));
    pr(getMinSwaps(num2, k2));
    pr(getMinSwaps(num3, k3));
    pr(getMinSwaps(num_debug1, k_debug1)); // 1
};

main()