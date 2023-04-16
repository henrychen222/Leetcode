/*
 * 01/14/22 evening
 * https://leetcode.com/contest/weekly-contest-328/problems/count-the-number-of-good-subaays/
 */

const pr = console.log;

const totSub = (n) => n * (n + 1) / 2;
const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);
const removeOneOrManyMap = (m, x, cnt = 1) => { let occ = m.get(x); occ > cnt ? m.set(x, occ - cnt) : m.delete(x); };

const countGood = (a, k) => {
    let res = subArraysAtLeastKPairsSame(a, k), tot = totSub(a.length), rest = tot - res;
    pr("res", res, "tot", tot, "rest", rest, "test", test(a, k))
    return res;
};

const subArraysAtLeastKPairsSame = (a, k) => {
    let n = a.length, res = 0, same = 0, m = new Map(), l = 0;
    for (let i = 0; i < n; i++) {
        same += m.get(a[i]) || 0;
        addOneOrManyMap(m, a[i]);
        while (same >= k) {
            res += n - i;
            removeOneOrManyMap(m, a[l]);
            same -= m.get(a[l]) || 0;
            l++;
        }
    }
    return res;
};

const subArraysAtLeastKPairsSame2 = (a, k) => {
    let n = a.length, res = 0, same = 0, m = new Map(), l = 0;
    for (let i = 0; i < n; i++) {
        same += m.get(a[i]) || 0;
        addOneOrManyMap(m, a[i]);
        while (same >= k) {
            removeOneOrManyMap(m, a[l]);
            same -= m.get(a[l]) || 0;
            l++;
        }
        // pr(l, i, "same", same, a.slice(l, i + 1), m);
        res += l;
    }
    return res;
};

//////////////////////////////////////////////////////////////////////////////////
// map represent distinct, how to represent same ???
const subArraysAtLeastKPairsSame1 = (a, k) => {
    let n = a.length, res = 0, r = n - 1, m = new Map();
    for (const x of a) addOneOrManyMap(m, x);
    for (let i = 0; i < n; i++) {
        removeOneOrManyMap(m, a[i]); // current subarray [i, n-1]
        while (m.size < k && r >= i) {
            addOneOrManyMap(m, a[r]);
            r--;
        }
        pr(r, i, r - i, a.slice(i, r + 1), m);
        res += r - i + 1;
    }
    return res;
};

const subArraysAtMostKPairsDistinct = (a, k) => {
    let n = a.length, res = 0, l = 0, m = new Map();
    for (let i = 0; i < n; i++) {
        addOneOrManyMap(m, a[i]); // current subarray [0, i]
        while (m.size > k) { // current cnt > k, need --   distinct element = m.size
            removeOneOrManyMap(m, a[l]);
            l++;
        }
        res += i - l + 1;
    }
    return res;
};

const test = (a, k) => {
    let n = a.length, res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sub = a.slice(i, j + 1), cnt = cal(sub, k);
            // pr(sub, cnt);  
            // if (cnt <= k) { //  at most k
            if (cnt >= k) { // at least
                res++;
            }
        }
    }
    return res;
}

const cal = (a, k) => {
    let n = a.length, cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[i] == a[j]) cnt++; // same;
            // if (a[i] != a[j]) cnt++; // distinct
        }
    }
    return cnt;
};

const main = () => {
    let a = [1, 1, 1, 1, 1], k = 10;
    let a2 = [3, 1, 4, 3, 2, 2, 4], k2 = 2;
    let a3 = [2, 1, 2, 1, 6], k3 = 2;
    pr(countGood(a, k));
    pr(countGood(a2, k2));
    pr(countGood(a3, k3));
};

main()