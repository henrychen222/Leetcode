/**
 * 8.23 night
 * reference: Weekly Contest 203 uwi Q3
 * https://www.geeksforgeeks.org/union-find/
 * https://en.wikipedia.org/wiki/Disjoint-set_data_structure
 */
function DJSet(n) {
    this.upper = new Array(n).fill(-1);
}

DJSet.prototype.root = function (x) {
    return this.upper[x] < 0 ? x : (this.upper[x] = this.root(this.upper[x]));
}

DJSet.prototype.equiv = function (x, y) {
    return this.root(x) == this.root(y);
}

DJSet.prototype.union = function (x, y) {
    x = this.root(x);
    y = this.root(y);
    if (x != y) {
        if (this.upper[x] < this.upper[y]) {
            let tmp = x;
            x = y;
            y = tmp;
        }
        this.upper[x] += this.upper[y];
        this.upper[y] = x;
    }
    return x == y;
}

DJSet.prototype.count = function () {
    let cnt = 0;
    for (const u of this.upper) {
        if (u < 0) cnt++;
    }
    return cnt;
}