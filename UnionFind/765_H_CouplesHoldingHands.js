/**
 * 07/22/21 morning
 * https://leetcode.com/problems/couples-holding-hands/
 */

// Accepted --- 76ms 60.00%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/8716597.html
 * https://leetcode.com/problems/couples-holding-hands/discuss/113362/JavaC++-O(N)-solution-using-cyclic-swapping
 */
const minSwapsCouples = (a) => {
    let n = a.length, res = 0;
    for (let i = 0; i < n; i += 2) {
        let expected_couple = a[i] ^ 1;
        if (a[i + 1] == expected_couple) continue;
        for (let j = i + 1; j < n; j++) {
            if (a[j] == expected_couple) {
                a[j] = a[i + 1];
                a[i + 1] = expected_couple;
                res++;
            }
        }
    }
    // pr(a);
    return res;
};

function DJSet(n) {
    let parent = Array(n).fill(-1);
    return { find, union, count, getParent }
    function find(x) {
        return parent[x] < 0 ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x != y) {
            if (parent[x] < parent[y])[x, y] = [y, x];
            parent[x] += parent[y];
            parent[y] = x;
        }
        return x == y;
    }
    function count() { // total connected groups (value < 0)
        return parent.filter(v => v < 0).length;
    }
    function getParent() {
        return parent;
    }
}

// Accepted --- 76ms 60.00%
/**
 * reference:
 * https://leetcode.com/contest/weekly-contest-67/ranking uwi
 * https://www.cnblogs.com/grandyang/p/8716597.html
 * https://leetcode.com/problems/couples-holding-hands/discuss/117520/Java-union-find-easy-to-understand-5-ms
 */
const minSwapsCouples1 = (a) => {
    let n = a.length;
    let totalGroup = n / 2;
    let ds = new DJSet(totalGroup);
    for (let i = 0; i < n; i += 2) {
        ds.union(a[i] >> 1, a[i + 1] >> 1);
        // pr(ds.getParent())
    }
    return totalGroup - ds.count();
};

const pr = console.log;
const main = () => {
    let row = [0, 2, 1, 3];
    let row2 = [3, 2, 0, 1];
    pr(minSwapsCouples(row))
    pr(minSwapsCouples(row2))
};

main()


// pr(2 ^ 1);
// pr(3 ^ 1);

// pr(4 ^ 1);
// pr(5 ^ 1);