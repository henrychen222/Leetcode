/**
 * 04/06/21 afternoon
 * https://leetcode.com/problems/random-pick-with-weight/
 */

const pr = console.log;

/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/9784690.html
 * https://leetcode.com/problems/random-pick-with-weight/discuss/154772/C%2B%2B-concise-binary-search-solution
 */
// Accepted --- 180ms 90.92%
function Solution(w) {
    let n = w.length;
    let sum = w;
    for (let i = 1; i < n; i++) {
        sum[i] = sum[i - 1] + w[i];
    }
    // pr(sum);
    return {
        pickIndex
    }

    function pickIndex() {
        let x = Math.random() * sum[n - 1];
        let low = 0;
        let high = n - 1;
        while (low < high) {
            let mid = low + high >> 1;
            sum[mid] <= x ? low = mid + 1 : high = mid;
        }
        return high;
    }
}


// WA 23/57
// function Solution(w) {
//     let n = w.length;
//     let sum = w.reduce((x, y) => x - y);
//     let idx = 0;
//     let cnt = Array(n).fill(0);
//     return {
//         pickIndex
//     }

//     function pickIndex() {
//        if (cnt[idx] >= w[idx] / sum) {
//            cnt[idx] = 0;
//            idx + 1 < n ? idx++: idx = 0;
//            cnt[idx]++;
//            return idx;
//        }
//        cnt[idx]++;
//        return idx;
//     }
// }

// WA 40/57
// function Solution(w) {
//     let n = w.length;
//     let sum = w.reduce((x, y) => x - y);
//     let m = new Map();
//     resetMap();
//     return {
//         pickIndex
//     }

//     function pickIndex() {
//        // console.log(m);
//        let firstk = m.keys().next().value;
//        let firstv = m.get(firstk);
//        if (firstv == 0) {
//            m.delete(firstk);
//            if (m.size == 0) resetMap();
//            let nextk = m.keys().next().value;
//            m.set(nextk, m.get(nextk) - 1);
//            return nextk;
//        }
//        m.set(firstk, firstv - 1);
//        return firstk;
//     }

//     function resetMap () {
//         for (let i = 0; i < n; i++) m.set(i, w[i] / sum >> 0);
//     }
// }

// WA
// function Solution(w) {
//     let n = w.length;
//     let cnt = Array(n).fill(0);
//     return {
//         pickIndex
//     }

//     function pickIndex() {
//        let a = [...w];
//        let i = 0;
//        if (cnt[i] == w[i]) i++;
//        cnt[i]++;
//        return i;
//     }
// }

const main = () => {
    let solution = new Solution([1, 3]);
    pr(solution.pickIndex()); // 1
    pr(solution.pickIndex()); // 1
    pr(solution.pickIndex()); // 1
    pr(solution.pickIndex()); // 0
    pr(solution.pickIndex()); // 1
};

main()