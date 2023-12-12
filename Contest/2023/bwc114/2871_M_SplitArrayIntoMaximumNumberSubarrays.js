/*
 * 09/30/23 evening
 * https://leetcode.com/contest/biweekly-contest-114/problems/split-array-into-maximum-number-of-subarrays/
 */

const pr = console.log;

// Accepted
// reference: uwi
const MAX = Number.MAX_SAFE_INTEGER;
const maxSubarrays = (a) => {
    let min = MAX, cur = MAX, res = 0;
    a.map(x => min &= x);
    if (min != 0) return 1;
    a.map(x => {
        cur &= x;
        if (cur == 0) {
            cur = MAX;
            res++;
        }
    });
    return res;
};

//////////////////////////////////////////////////////////
const N = 20;
const checkIthBit = (x, i) => x & (1 << i);
const maxSubarrays1 = (a) => {
    let res = 0;
    for (let i = 0; i < N; i++) {
        let allOne = 1;
        for (const x of a) {
            if (!checkIthBit(x, i)) {
                allOne = 0;
                break;
            }
        }
        // pr(i, allOne)
        if (allOne) res += 1 << i;
    }
    return res;
};


const maxSubarrays2 = (a) => {
    let max = Math.max(...a); N = max.toString(2).length;
    a = a.map(x => {
        let s = x.toString(2);
        if (s.length < N) s = "0".repeat(N - s.length) + s;
        return s;
    });
    let n = a.length, m = N, d = Array(m).fill(0), res = 0;
    pr(a)
    for (let j = 0; j < m; j++) {
        let allOne = true, zero = 0, one = 0;
        for (let i = 0; i < n; i++) {
            if (a[i][j] == 0) {
                allOne = false;
                zero++;
            } else {
                one++;
            }
        }
        pr(zero - one)
        res = Math.max(res, Math.max(0, zero - one + 1));
        if (allOne) d[j] = 1;
    }
    // for (let i = 0; i < m; i++) {
    //     if (d[i]) res += 1 << (m - i - 1);
    // }
    pr(d);
    return res;
};

const main = () => {
    let a = [1, 0, 2, 0, 1, 2];
    let a2 = [5, 7, 1, 3];
    let debug1 = [1, 0, 2, 1];
    pr(maxSubarrays(a))
    pr(maxSubarrays(a2))
    pr(maxSubarrays(debug1)) // 2
};

main()



/*
01
00
10
00
01
10


101
111
001
011

*/


// pr(1 << 20 > 1e6)