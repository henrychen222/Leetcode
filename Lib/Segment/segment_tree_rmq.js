/*
05/28/22 afternoon
example problem:
https://leetcode.com/problems/booking-concert-tickets-in-groups/
https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/
https://leetcode.com/problems/jump-game-vi/

use this version, from uwi, exactly same way of highestOneBit to get h and len
*/
function SegmentTreeRMQ(n) {
    let h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(Number.MAX_SAFE_INTEGER);
    h = 2 ** h;
    return { update, minx, indexOf, tree }
    function update(pos, v) {
        a[h + pos] = v;
        for (let i = parent(h + pos); i >= 1; i = parent(i)) propagate(i);
    }
    function propagate(i) {
        a[i] = Math.min(a[left(i)], a[right(i)]);
    }
    function minx(l, r) {
        let min = Number.MAX_SAFE_INTEGER;
        if (l >= r) return min;
        l += h;
        r += h;
        for (; l < r; l = parent(l), r = parent(r)) {
            if (l & 1) min = Math.min(min, a[l++]);
            if (r & 1) min = Math.min(min, a[--r]);
        }
        return min;
    }
    function indexOf(l, v) {
        if (l >= h) return -1;
        let cur = h + l;
        while (1) {
            if (a[cur] <= v) {
                if (cur >= h) return cur - h;
                cur = left(cur);
            } else {
                cur++;
                if ((cur & cur - 1) == 0) return -1;
                if (cur % 2 == 0) cur = parent(cur);
            }
        }
    }
    function parent(i) {
        return i >> 1;
    }
    function left(i) {
        return 2 * i;
    }
    function right(i) {
        return 2 * i + 1;
    }
    function tree() {
        return a;
    }
}


function SegmentTreeRMQ(A) { // array constructor
    let n = A.length, h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(Number.MAX_SAFE_INTEGER);
    h = 2 ** h;
    initializeFromArray();
    return { update, minx, indexOf, tree }
    function initializeFromArray() {
        for (let i = 0; i < n; i++) a[h + i] = A[i];
        for (let i = h - 1; i >= 1; i--) propagate(i);
    }
    function update(pos, v) {
        a[h + pos] = v;
        for (let i = parent(h + pos); i >= 1; i = parent(i)) propagate(i);
    }
    function propagate(i) {
        a[i] = Math.min(a[left(i)], a[right(i)]);
    }
    function minx(l, r) {
        let min = Number.MAX_SAFE_INTEGER;
        if (l >= r) return min;
        l += h;
        r += h;
        for (; l < r; l = parent(l), r = parent(r)) {
            if (l & 1) min = Math.min(min, a[l++]);
            if (r & 1) min = Math.min(min, a[--r]);
        }
        return min;
    }
    function indexOf(l, v) {
        if (l >= h) return -1;
        let cur = h + l;
        while (1) {
            if (a[cur] <= v) {
                if (cur >= h) return cur - h;
                cur = left(cur);
            } else {
                cur++;
                if ((cur & cur - 1) == 0) return -1;
                if (cur % 2 == 0) cur = parent(cur);
            }
        }
    }
    function parent(i) {
        return i >> 1;
    }
    function left(i) {
        return 2 * i;
    }
    function right(i) {
        return 2 * i + 1;
    }
    function tree() {
        return a;
    }
}











/////////////////////////////////// Old version ////////////////////////////////////////////////////
// 05/08/21 night
// https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/
function SegmentTreeRMQ(n) {
    let N = n;
    let M = highestOneBit(Math.max(N - 1, 1)) << 2; // tree MAX size
    let H = M >>> 1; // height
    let st = Array(M).fill(Number.MAX_SAFE_INTEGER); // tree array
    return { update, minx, getTree, size, height }
    function highestOneBit(i) {
        i |= (i >> 1);
        i |= (i >> 2);
        i |= (i >> 4);
        i |= (i >> 8);
        i |= (i >> 16);
        return i - (i >>> 1);
    }
    function height() {
        return H;
    }
    function size() {
        return M;
    }
    function getTree() {
        return st;
    }
    function update(pos, x) {
        st[H + pos] = x;
        for (let i = (H + pos) >>> 1; i >= 1; i >>>= 1) propagate(i);
    }
    function propagate(i) {
        st[i] = Math.min(st[2 * i], st[2 * i + 1]);
    }
    function minx(l, r) {
        let min = Number.MAX_SAFE_INTEGER;
        if (l >= r) return min;
        l += H; r += H;
        for (; l < r; l >>>= 1, r >>>= 1) {
            if (l & 1) min = Math.min(min, st[l++]);
            if (r & 1) min = Math.min(min, st[--r]);
        }
        return min;
    }
}


// 12/21/20 evening
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
        this.st = Array(this.M).fill(0).map((x, i) => { // bug, st will show all undefined
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