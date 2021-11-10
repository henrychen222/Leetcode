/**
 * 11/06/21 night
 * https://leetcode.com/problems/all-oone-data-structure/
 */

const stmvalue_in = (m) => new Map([...m].sort((x, y) => x[1] - y[1]));
const stmvalue_de = (m) => new Map([...m].sort((x, y) => y[1] - x[1]));

// Accepted --- 204ms 100%
function AllOne() {
    let m = new Map();
    let preOp = "start";
    return { inc, dec, getMaxKey, getMinKey };
    function inc(k) {
        m.set(k, m.get(k) + 1 || 1);
        preOp = 'inc';
    }
    function dec(k) {
        let occ = m.get(k);
        occ == 1 ? m.delete(k) : m.set(k, occ - 1);
        preOp = 'dec';
    }
    function getMaxKey() {
        if (preOp != 'max') m = stmvalue_de(m);
        preOp = 'max';
        return m.keys().next().value || '';
    }
    function getMinKey() {
        if (preOp != 'min') m = stmvalue_in(m);
        preOp = 'min';
        return m.keys().next().value || '';;
    }
}