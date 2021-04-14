/**
 * 04/13/21 noon
 * https://leetcode.com/problems/design-skiplist/
 */

// Accepted --- 168ms 100%
function Skiplist() {
    let m = new Map();
    return {
        search,
        add,
        erase
    }

    function search(target) {
        return m.has(target);
    }

    function add(num) {
        m.set(num, m.get(num) + 1 || 1);
    }

    function erase(num) {
        if (!m.has(num)) return false;
        let v = m.get(num);
        if (v == 1) {
            m.delete(num);
        } else {
            m.set(num, v - 1);
        }
        return true;
    }
}

const pr = console.log;
const main = () => {
    let skiplist = new Skiplist();
    skiplist.add(1);
    skiplist.add(2);
    skiplist.add(3);
    pr(skiplist.search(0)); // false
    skiplist.add(4);
    pr(skiplist.search(1)); // true
    pr(skiplist.erase(0)); // false
    pr(skiplist.erase(1)); // true
    pr(skiplist.search(1)); // false
};

main()