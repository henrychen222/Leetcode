/**
 * 05/10/21 night
 * https://leetcode.com/problems/reverse-pairs/
 * 
 * reference:
 * https://leetcode.com/contest/leetcode-weekly-contest-19/ranking
 * https://leetcode.com/problems/reverse-pairs/discuss/283504/C%2B%2B-O(nlgn)-solution-using-Fenwick-Tree(Binary-Indexed-Tree)-with-discretization
 * https://leetcode.com/problems/reverse-pairs/discuss/737182/BIT-without-using-long-long (try)
 * https://leetcode.com/problems/reverse-pairs/discuss/908516/C-Fenwick-Tree (try)
 */

function Fenwick2(n) { // query and update different
    let tree = Array(n).fill(0);
    return {
        query,
        update,
        getTree
    }

    function getTree() {
        return tree;
    }

    function query(i) {
        let sum = 0;
        while (i < n) {
            sum += tree[i];
            i += (i & -i);
        }
        return sum;
    }

    function update(i, v) {
        while (i > 0) {
            tree[i] += v;
            i -= (i & -i);
        }
    }
}

const findIndex = (a, item) => {
    // pr("find", a, item);
    let low = 0;
    let high = a.length - 1;
    let mid;
    while (low <= high) {
        mid = low + ((high - low) >> 1);
        if (a[mid] < item) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low + 1;
};

// Accepted --- 256ms 23.40%
// reference: https://leetcode.com/problems/reverse-pairs/discuss/97268/General-principles-behind-problems-similar-to-%22Reverse-Pairs%22
const reversePairs3 = (a) => {
    let res = 0;
    let n = a.length;
    let ft = new Fenwick2(n + 1);
    let origin = [...a];
    a.sort((x, y) => x - y);
    // pr(a);
    // pr(origin);
    for (const e of origin) {
        let idx = findIndex(a, 2 * e + 1);
        // pr(2 * e + 1, idx, ft.query(idx), ft.getTree())
        res += ft.query(idx);
        let idx2 = findIndex(a, e);
        ft.update(idx2, 1);
        // pr("idx2", idx);
    }
    return res;
};

// TLE 36/136
const reversePairs2 = (nums) => {
    let m = counter_value_indexA_in(nums);
    let res = 0;
    m = stmkey_de(m);
    // pr(m);
    let a = Array.from(m.keys());
    let n = a.length;
    for (let i = 0; i < n; i++) {
        let idxI = m.get(a[i]);
        let memo = new Map();
        for (let j = n - 1; ~j; j--) {
            if (a[i] <= 2 * a[j]) break;
            let tmp = a[i] + ' ' + a[j];
            if (memo.has(tmp)) {
                res += memo.get(tmp);
                continue;
            }
            let idxJ = m.get(a[j]);
            let cnt = findPair(idxI, idxJ);
            res += cnt;
            memo.set(tmp, cnt);
            // pr(res, memo);
        }
    }
    return res;
};

const stmkey_de = (m) => new Map([...m].sort((x, y) => y[0] - x[0]));
const counter_value_indexA_in = (a_or_s) => {
    let m = new Map();
    let n = a_or_s.length;
    for (let i = 0; i < n; i++) {
        if (!m.has(a_or_s[i])) m.set(a_or_s[i], []);
        m.get(a_or_s[i]).push(i);
    }
    return m;
};

const findPair = (a, b) => {
    let an = a.length;
    let bn = b.length;
    let cnt = 0;
    for (let i = 0; i < an; i++) {
        for (let j = bn - 1; ~j; j--) {
            if (a[i] < b[j]) {
                cnt++;
            } else {
                break;
            }
        }
    }
    return cnt;
};


// TLE 34/136
const reversePairs1 = (a) => {
    let n = a.length;
    let i, j;
    let res = 0;
    // for (i = 0; i < n; i = j) {
    //     for (j = i + 1; j < n && a[i] > 2 * a[j]; j++, res++);
    //     pr(i, j);
    //     // res+= cnt;
    // }
    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            if (a[i] > 2 * a[j]) res++;
        }
    }
    return res;
};

const pr = console.log;
const main = () => {
    let nums = [1, 3, 2, 3, 1];
    let nums2 = [2, 4, 3, 5, 1];
    let debug1 = [5, 4, 3, 2, 1];
    let debug2 = [1, 3, 2, 5, 6, 8];
    pr(reversePairs(nums));
    pr(reversePairs(nums2));
    pr(reversePairs(debug1));
    pr(reversePairs(debug2)); // 0
};

main()


// https://www.geeksforgeeks.org/lower_bound-in-cpp/
// let arr = [10, 20, 30, 40, 50];
// console.log(binarySearch(arr, 30));
// console.log(binarySearch(arr, 35));
// console.log(binarySearch(arr, 55));