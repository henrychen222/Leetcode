/**
 * 04/06/21 afternoon
 * https://leetcode.com/problems/map-sum-pairs/
 */

const pr = console.log;

// Accepted --- 80ms 67.80%
function MapSum() {
    let m = new Map();
    return {
        insert,
        sum
    }

    function insert(key, val) {
        m.set(key, val);
    }

    function sum(prefix) {
        let res = 0;
        for (const [k, v] of m) {
            if (k.startsWith(prefix)) res += v;
        }
        return res;
    }
}

const main = () => {
    let mapSum = new MapSum();
    mapSum.insert("apple", 3);
    pr(mapSum.sum("ap")); // 3
    mapSum.insert("app", 2);
    pr(mapSum.sum("ap")); // 5
};

main()