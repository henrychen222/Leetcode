/**
 * 03/24/22 night
 * https://leetcode.com/problems/contiguous-array/
 */

const pr = console.log;

// Accepted --- 122ms 83.93%
const findMaxLength = (a) => {
    let n = a.length, m = new Map([[0, -1]]), sum = 0, res = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] == 0) a[i] = -1;
    }
    // pr(a)
    let k = 0;
    for (let i = 0; i < n; i++) { // find subarray sum == 0
        sum += a[i];
        let lsum = sum - k; // suarray sum = sum - lrsum 
        if (m.has(lsum)) {
            let preI = m.get(lsum);
            // pr("lsum", lsum, i, preI, i - preI)
            res = Math.max(res, i - preI);
        } 
        if (!m.has(sum)) m.set(sum, i); // keep min index, only map doesn't have sum set it
    }
    return res;
};

// WA
const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);

const findMaxLength1 = (a) => {
    let n = a.length, m = new Map([[0, -1]]), one = 0, res = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] == 1) one++;
        let preI = i - (2 * one) + 1; // len = i - preI + 1;
        if (m.has(preI)) {
            let len = i - preI + 1;
            res = Math.max(res, len);
        }
        addOneOrManyMap(m, i);
    }
    return res;
};

const main = () => {
    let a = [0, 1];
    let a2 = [0, 1, 0];
    let debug1 = [0, 1, 0, 1];
    let debug2 = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1];
    let debug3 = [0,1,1,0,1,1,1,0];
    pr(findMaxLength(a))
    pr(findMaxLength(a2))
    pr(findMaxLength(debug1)) // 4
    pr(findMaxLength(debug2)) // 94
    pr(findMaxLength(debug3)) // 4
};

main()