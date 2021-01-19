// 10.24 night
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

    count() {
        let cnt = 0;
        for (const u of this.upper) {
            if (u < 0) cnt++;
        }
        return cnt;
    }
}


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
            if (this.upper[y] < this.upper[x]) {
                let d = x;
                x = y;
                y = d;
            }
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