// 05/08/21 night
// https://leetcode.com/problems/maximum-subarray-min-product  prefix sum
function DJSet(a, n) {
    let parent = Array(n).fill(0);
    let sum = Array(n).fill(0n);
    for (let i = 0; i < n; i++) parent[i] = i, sum[i] = BigInt(a[i]);
    return { find, union, sm }
    function find(x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x == y) return;
        parent[x] = y;
        sum[y] += sum[x];
    }
    function sm() {
        return sum;
    }
}


//////////////////////////////////////////////////////////////////////////////////
// 10/24/20 night
// https://leetcode.com/problems/path-with-minimum-effort/
class DJSet {
    constructor(n) {
        this.upper = new Array(n).fill(-1);
    }

    find(x) {
        return this.upper[x] < 0 ? x : (this.upper[x] = this.find(this.upper[x]));
    }

    equiv(x, y) {
        return this.find(x) == this.find(y);
    }

    union(x, y) {
        x = this.find(x);
        y = this.find(y);
        if (x != y) {
            if (this.upper[x] < this.upper[y]) [x, y] = [y, x];
            this.upper[x] += this.upper[y];
            this.upper[y] = x;
        }
        return x == y;
    }

    count() {
        let cnt = 0;
        for (const u of this.upper) {
            if (u < 0) cnt++;
        }
        return cnt;
    }
}


/////////////////////////////////////////////////////////////////////////////////////
// 1.17 evening
/////////////////////////// with cycle ///////////////////////////////
class DJSet {
    constructor(n) {
        this.upper = Array(n).fill(-1);
        this.cycle = Array(n).fill(false);
    }

    find(x) {
        return this.upper[x] < 0 ? x : (this.upper[x] = this.find(this.upper[x]));
    }

    equiv(x, y) {
        return this.find(x) == this.find(y);
    }

    union(x, y) {
        x = this.find(x);
        y = this.find(y);
        if (x != y) {
            if (this.upper[y] < this.upper[x]) [x, y] = [y, x];
            this.upper[x] += this.upper[y];
            this.upper[y] = x;
            this.cycle[x] |= this.cycle[y];
        } else {
            this.cycle[x] = true;
        }
        return x == y;
    }

    count() {
        let cnt = 0;
        for (const u of this.upper) {
            if (u < 0) cnt++;
        }
        return cnt;
    }
}