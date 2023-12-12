/*
 * 08/18/23 night
 * https://leetcode.com/problems/maximum-segment-sum-after-removals/
 */

const pr = console.log;

function DJSet(n) {
    let p = Array(n).fill(-1), s = Array(n).fill(0); // sz: group prefix sum
    return { find, union, update, sum, par }
    function find(x) {
        return p[x] < 0 ? x : p[x] = find(p[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x == y) return false;
        if (p[x] < p[y]) [x, y] = [y, x];
        p[x] += p[y];
        p[y] = x;
        s[x] += s[y];
        return true;
    }
    function update(idx, v) {
        s[idx] = v;
        // s[idx] += v;
    }
    function sum() {
        return s;
    }
    function par() {
        return p;
    }
}

const maximumSegmentSum = (a, b) => {
    let n = a.length, res = [0], ds = new DJSet(n), used = new Set(), max = 0;
    for (let i = n - 1; i >= 1; i--) {
        used.add(b[i]);
        ds.update(b[i], a[b[i]]);
        if (used.has(b[i] - 1)) ds.union(b[i], b[i] - 1);
        if (used.has(b[i] + 1)) ds.union(b[i], b[i] + 1);
        pr(ds.par(), ds.sum())
        max = Math.max(max, ds.sum()[ds.find([b[i]])]);
        res.push(max);
    }
    // pr(res);
    return res.reverse();
};

// WA
// const maximumSegmentSum1 = (a, b) => {
//     let n = a.length, res = [], ds = new DJSet(n), used = new Set(), pre = preSum(a);
//     for (let i = n - 1; i >= 0; i--) {
//         if (used.has(b[i] - 1)) ds.union(b[i], b[i] - 1);
//         if (used.has(b[i] + 1)) ds.union(b[i], b[i] + 1);
//         used.add(b[i]);
//         let groups = ds.grp(), max = 0;
//         pr(b[i], groups, used, res)
//         for (let j = 0; j < n; j++) {
//             let group = groups[j];
//             if (group.length) {
//                 let [l, r] = [group[0], group[group.length - 1]], sum = subArraySum(pre, l, r);
//                 pr(l, r, a.slice(l, r+1))
//                 // sum+=a[i];
//                 max = Math.max(max, sum);
//             }
//         }
//         pr("max", max)
//         res.push(max);
//     }
//     pr(res);
//     return res.reverse();
// };

const main = () => {
    let a = [1, 2, 5, 6, 1], b = [0, 3, 2, 4, 1];
    let a2 = [3, 2, 11, 1], b2 = [3, 2, 1, 0]
    pr(maximumSegmentSum(a, b))
    pr(maximumSegmentSum(a2, b2))
};

main()

/*
[1]
[1] [4]
[1, 2] [4]
[1, 2, 3, 4]
*/