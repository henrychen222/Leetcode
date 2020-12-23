// 12.21 evening
// https://leetcode.com/contest/weekly-contest-220/problems/jump-game-vi/
const highestOneBit = (i) => {
    i |= (i >> 1);
    i |= (i >> 2);
    i |= (i >> 4);
    i |= (i >> 8);
    i |= (i >> 16);
    return i - (i >>> 1);
};

class SegmentTreeRMQ {
    constructor(n) {
        this.N = n;
        this.M = highestOneBit(Math.max(this.N - 1, 1)) << 2;
        this.H = this.M >>> 1;
        this.st = Array(this.M).fill(0).map((x, i) => {
            if (i >= 0 && i <= this.M) x = Number.MAX_VALUE;
        });
    }

    update(pos, x) {
        this.st[this.H + pos] = x;
        for (let i = (this.H + pos) >>> 1; i >= 1; i >>>= 1) this.propagate(i);
    }

    propagate(i) {
        this.st[i] = Math.min(this.st[2 * i], this.st[2 * i + 1]);
    }

    minx(low, high) {
        let min = Number.MAX_VALUE;
        if (low >= high) return min;
        while (low != 0) {
            let f = low & -low;
            if (low + f > high) break;
            let v = this.st[parseInt((this.H + low) / f)];
            if (v < min) min = v;
            low += f;
        }
        while (low < high) {
            let f = high & -high;
            let v = this.st[parseInt((this.H + high) / f) - 1];
            if (v < min) min = v;
            high -= f;
        }
        return min;
    }
};