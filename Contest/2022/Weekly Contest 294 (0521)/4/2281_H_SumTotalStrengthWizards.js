/**
 * 05/21/22 evening
 * https://leetcode.com/contest/weekly-contest-294/problems/sum-of-total-strength-of-wizards/
 */

const pr = console.log;

function DJSet(n) {
    let parent = [], min = [], max = [];
    for (let i = 0; i <= n; i++) {
        parent.push(i);
        min.push(i);
        max.push(i);
    }
    return { find, union, L, R }
    function find(x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x == y) return false;
        if (parent[x] < parent[y]) [x, y] = [y, x];
        parent[x] += parent[y];
        parent[x] = y;
        min[y] = Math.min(min[x], min[y]);
        max[y] = Math.max(max[x], max[y]);
        return true;
    }
    function L() {
        return min;
    }
    function R() {
        return max;
    }
}

// Accepted
// reference: ZeRoLJ42
const ll = BigInt, mod = 1e9 + 7, bmod = ll(mod);
const totalStrength = (a) => {
    let n = a.length, ds = new DJSet(n), id = Array(n).fill(0), sum = Array(n + 2).fill(0), vis = Array(n + 2).fill(false), res = 0n;
    for (let i = 0; i < n; i++) id[i] = i;
    id.sort((x, y) => a[y] - a[x]);
    // pr(id)
    for (let i = 2; i <= n + 1; i++) sum[i] = (sum[i - 1] + a[i - 2]) % mod;
    for (let i = 2; i <= n + 1; i++) sum[i] = (sum[i - 1] + sum[i]) % mod;
    // pr(sum)
    for (let p of id) {
        p++;
        if (vis[p - 1]) ds.union(p, p - 1);
        if (vis[p + 1]) ds.union(p, p + 1);
        vis[p] = true;
        let pa = ds.find(p), l = ds.L()[pa], r = ds.R()[pa];
        let lcnt = ll((p - l + 1)) * ll((sum[r + 1] - sum[p]));
        let rcnt = ll((r - p + 1)) * ll((sum[p] - sum[l - 1]));
        lcnt %= bmod;
        rcnt %= bmod;
        res = (res + ll(a[p - 1]) * (lcnt - rcnt)) % bmod;
        res %= bmod;
        // pr("p", p, pa, l, r, "lcnt", lcnt, "rcnt", rcnt, res);
    }
    res = (res + bmod) % bmod;
    return res;
};

const main = () => {
    let strength = [1, 3, 1, 2];
    let strength2 = [5, 4, 6];
    let debug1 = [970,927,534,853,482,1988,1461,488,281,233,1090,678,1471,1807,1548,1793,538,1548,1928,1089,322,229,1527,984,1755,152,1705,1969,586,558,746,1294,1508,131,1669,243,1790,159,1895,433,1822,283,287,960,106,1233,1804,941,1842,972,884,607,304,972,1016,1995,53,1276,1985,1589,1202,507,656,152,1520,1699,516,1042,1108,187,1883,517,1043,1560,509,279,1305,241,229,892,1776,1653,216,12,1718,1253,1164,1891,68,558,582,1022,895,260,1819,710,131,1795,1318,1320,1690,548,287,1006,881,681,1229,1601,1573,858,1462,986,1116,806,917,1793,1685,530,315,468,1153,1105,864,468,1686,586,1649,1649,1266,1269,1601,1107,271,1883,1992,162,1929,787,1548,196,727,113,1602,1995,877,535,1609,1609,536,19,1485,946,465,1435,1202,1046,435,1204,1852,89,1484,1834,836,651,651,1089,1520,910,134,1657,1679,1396,1378,1841,968,718,1,1269,912,1321,1050,737,162,520,1770,546,428,1793,1397,541,1979,982,1072,1157,1936,1763,460,1443,1611,311,866,1013,1627,1480,1156,204,1060,993,1614,1502,1464,1237,1480,1175,1531,1046,849,537,182,1979,675,863,1874,1956,953,1348,1015,548,1450,1610,521,570,1539,494,341,1708,1871,302,80,704,1686,1129,1268,1289,231,793,190,1462,341,1201,1557,1527,156,693,94,918,407,969,737,1016,953,1560,228,1625,1871,1318,1188,430,1706,892,768,89,312,1965,1401,117,1573,1979,570,1623,480,929,1514,1881,696,1453,1388,1092,410,1286,392,988,1842,863,658,159,375,1871,1921,635,1616,588,1016,1977,428,1213,324,879,399,529,604,1995,1684,1830,1916,503,802,670];
    pr(totalStrength(strength))
    pr(totalStrength(strength2))
    pr(totalStrength(debug1)) // 891399717
};

main()