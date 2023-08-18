

/*
Created 07/15/23 night

reference:
https://segmentfault.com/a/1190000040600758
https://segmentfault.com/a/1190000040600758
https://labuladong.gitee.io/algo/di-yi-zhan-da78c/shou-ba-sh-48c1d/xiao-er-me-c304e/

Example problem:
https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/
https://leetcode.com/problems/corporate-flight-bookings/
*/
function DiffArray(n) {
    let d = Array(n).fill(0);
    return { addRange, recover }
    function addRange(l, r, v) {
        d[l] += v;
        if (r + 1 < n) d[r + 1] -= v;
    }
    function recover() {
        let res = Array(n).fill(0);
        res[0] = d[0];
        for (let i = 1; i < n; i++) res[i] = res[i - 1] + d[i];
        return res;
    }
}