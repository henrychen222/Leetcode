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