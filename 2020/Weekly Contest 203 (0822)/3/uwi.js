// 8.23 evening
// Accepted --- 168ms 100.00%
// read   https://en.wikipedia.org/wiki/Disjoint-set_data_structure   https://www.geeksforgeeks.org/union-find/
const findLatestStep = (arr, m) => {
    let n = arr.length;
    let ds = new DJSet(n);
    // console.log(ds.upper);
    // console.log(ds.root(0)); // issue
    let done = new Array(n).fill(false);
    let f = new Array(n + 1).fill(0);
    let res = -1;
    for (let i = 0; i < n; i++) {
        let cur = arr[i] - 1;
        done[cur] = true;
        if (cur - 1 >= 0 && done[cur - 1] == true) {
            f[-ds.upper[ds.root(cur - 1)]]--;
            ds.union(cur - 1, cur);
        }
        if (cur + 1 < n && done[cur + 1]) {
            f[-ds.upper[ds.root(cur + 1)]]--;
            ds.union(cur, cur + 1);
        }
        let r = ds.root(cur);
        f[-ds.upper[r]]++;
        if (f[m] > 0) {
            res = i + 1;
        }
    }
    return res;
};

function DJSet(n) {
    this.upper = new Array(n).fill(-1);
}

DJSet.prototype.root = function (x) { // cannot use arrow function, otherwise this.upper is undefined???
    // console.log(this.upper);
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

const main = () => {
    let arr = [3, 5, 1, 2, 4], m = 1;
    let arr2 = [3, 1, 5, 4, 2], m2 = 2;
    let arr3 = [1], m3 = 1;
    let arr4 = [2, 1], m4 = 2;
    console.log(findLatestStep(arr, m));
    console.log(findLatestStep(arr2, m2));
    console.log(findLatestStep(arr3, m3));
    console.log(findLatestStep(arr4, m4));
};

main()