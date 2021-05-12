/**
 * 11.8 afternoon
 * https://www.topcoder.com/community/competitive-programming/tutorials/binary-indexed-trees/
 */
class Fenwick {
    constructor(n) {
        this.n = n;
        this.tree = new Array(n).fill(0);
    }

    query(i) {
        let sum = 0;
        while (i > 0) {
            sum += this.tree[i];
            i -= (i & -i);
        }
        return sum;
    }

    update(i, v) {
        while (i < this.n) {
            this.tree[i] += v;
            i += (i & -i);
        }
    }
}



//////////////////////////////////////////////////////////////////////////
// 05/10/21 night
// https://leetcode.com/problems/reverse-pairs/
function Fenwick2(n) {
    let tree = Array(n).fill(0);
    return {query,update,getTree}
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