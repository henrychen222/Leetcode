/**
 * 06/26/21 morning
 * https://leetcode.com/contest/biweekly-contest-55/problems/maximum-alternating-subsequence-sum/
 */

const pr = console.log;

// TLE
const mx = Math.max;
const maxAlternatingSum = (a) => {
    let res = 0;
    let n = a.length;
    let N = 2 ** n;
    for (let i = 0; i < N; i++) {
        let data = [];
        let sum = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                if (data.length & 1) {
                    sum -= a[j];
                } else {
                    sum += a[j];
                }
                data.push(a[j]);
            }
        }
        res = mx(res, sum);
    }
    return res;
};

// don't know
const maxAlternatingSum1 = (a) => {
    let st = [];
    let res = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (const x of a) {
        if (st.length == 0) {
            st.push(x);
        } else if (st.length == 1) {
            res = mx(res, st[0]);
            sum += st[0];
        } else {
            let l = st[st.length - 1];
            if (st.length & 1) { // minus
            }
        }
    }
};

const main = () => {
    let nums = [4, 2, 5, 3];
    let nums2 = [5, 6, 7, 8];
    let nums3 = [6, 2, 1, 2, 4, 5];
    let debug1 = [374,126,84,237,195,139,328,353,286,113,351,167,394,398,29,118,17,162,206,138,34,109,291,368,162,109,336,256,203,330,235,74,136,72,127,382,288,276,135,383,300,220,299,205,186,113,71,261,253,47,387,25,57,79,322,82,349,217,306,33,198,196,306,240,271,129,284,6,349,370,59,350,275,385,137,394,329,175,58,151,223,81,233,2,370,369,135,257,391,92,260,55,321,153,328,260,312,102,79,192];
    pr(maxAlternatingSum(nums))
    pr(maxAlternatingSum(nums2))
    pr(maxAlternatingSum(nums3))
    pr(maxAlternatingSum(debug1))
};

main()