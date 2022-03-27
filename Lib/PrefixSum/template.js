/*
number of subarray (meet a condition)

Example Problems:

(equal K)
https://leetcode.com/problems/subarray-sum-equals-k/
https://leetcode.com/problems/binary-subarrays-with-sum/

(divisible by k)
https://leetcode.com/problems/subarray-sums-divisible-by-k/

(odd)
https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/
*/

const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);
const subarraySumEqualKCnt = (a, k) => {
    let m = new Map([[0, 1]]), sum = 0, res = 0;
    for (const x of a) {
        sum += x;
        let lsum = sum - k;
        if (m.has(lsum)) res += m.get(lsum);
        addOneOrManyMap(m, sum);
    }
    return res;
};