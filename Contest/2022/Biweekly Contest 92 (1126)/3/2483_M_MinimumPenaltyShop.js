/*
 * 11/26/22 morning
 * https://leetcode.com/contest/biweekly-contest-92/problems/minimum-penalty-for-a-shop/
 */

const pr = console.log;

function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] > x ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) { // >= lower_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

// Accepted
const bestClosingTime = (s) => {
    let n = s.length, a = [], b = [], d = [], bi = new Bisect();
    for (let i = 0; i < n; i++) s[i] == 'Y' ? a.push(i) : b.push(i);
    // pr(a)
    // pr(b);
    for (let j = 0; j <= n; j++) {
        let leftN = bi.bisect_right(b, j - 1);
        let rightY = a.length - bi.bisect_left(a, j);
        let cnt = leftN + rightY;
        // pr(leftN, rightY, cnt)
        d.push([cnt, j]);
    }
    // pr(d);
    d.sort((x, y) => {
        if (x[0] != y[0]) return x[0] - y[0];
        return x[1] - y[1];
    })
    return d[0][1]
};

// const bestClosingTime = (s) => {
//     let n = s.length, a = Array(n).fill(0), b = Array(n).fill(0), d = [];
//     if (s[0] == 'N') a[0] = 1;
//     for (let i = 1; i < n; i++) { // left N
//         a[i] = a[i - 1] + (s[i] == 'N' ? 1 : 0);
//     }
//     if (s[n - 1] == 'Y') b[n - 1] = 1;
//     for (let i = n - 2; i >= 0; i--) { // right Y
//         b[i] = b[i + 1] + (s[i] == 'Y' ? 1 : 0);
//     }
//     pr(a)
//     pr(b);
//     for (let j = 0; j <= n; j++) {
//         let leftN = b[j - 1] || 0, rightY = a[j + 1] || 0, cnt = leftN + rightY;
//         d.push(cnt);
//     }
//     pr(d);
// };

const main = () => {
    let s = "YYNY";
    let s2 = "NNNNN";
    let s3 = "YYYY";
    pr(bestClosingTime(s))
    pr(bestClosingTime(s2))
    pr(bestClosingTime(s3))
};

main()

/*
        left N     right Y     cnt 
|YYNY   0            3          3
Y|YNY   0            2          2
YY|NY   0            1          1
YYN|Y   1            1          2
YYNY|   1            0          1
*/