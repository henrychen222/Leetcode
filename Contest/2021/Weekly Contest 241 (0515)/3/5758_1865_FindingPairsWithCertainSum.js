/**
 * 05/15/21 evening
 * https://leetcode.com/contest/weekly-contest-241/problems/sum-of-all-subset-xor-totals/
 */

const pr = console.log;

const counter = (a_or_s) => { let map = new Map(); for (const i of a_or_s) map.set(i, map.get(i) + 1 || 1); return map; };

// Accepted
function FindSumPairs(a1, a2) {
    // let m1 = counter_value_indexA_in(nums1);
    // let m2 = counter_value_indexA_in(nums2);
    let m1 = counter(a1);
    let m2 = counter(a2);
    pr(m1, m2);
    return { add, count }
    function add(index, val) {
        let pre = a2[index];
        let cur = pre + val;
        a2[index] = cur;
        let occ = m2.get(pre);
        if (occ == 1) {
            m2.delete(pre);
        } else if (occ > 1) {
            m2.set(pre, occ - 1);
        }
        m2.set(cur, m2.get(cur) + 1 || 1);
    }

    function count(tot) {
        pr()
        let u1 = Array.from(m1.keys());
        let res = 0;
        pr("u1", u1);
        pr(m1, m2);
        for (const x of u1) {
            let y = tot - x;
            if (m2.has(y)) {
                let occ1 = m1.get(x);
                let occ2 = m2.get(y);;
                pr("x", x, "occ1", occ1, "y", y, "occ2", occ2);
                res += occ1 * occ2;
                pr("res", res)
            }
        }
        return res;
    }
}

const main = () => {
    let findSumPairs = new FindSumPairs([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]);
    pr(findSumPairs.count(7));  // 8
    findSumPairs.add(3, 2);
    pr(findSumPairs.count(8)); // 2

    // fuck print the wrong stuff, almost missed the question(all other print correct, though was code issue at first)
    // fortunately run in lc and works

    // findSumPairs.count(4);  // 1
    // pr(findSumPairs.add(0, 1));
    pr(findSumPairs.count(4));  // 1
    findSumPairs.add(0, 1);

    findSumPairs.add(1, 1);
    pr(findSumPairs.count(7));  // 11
};

main()