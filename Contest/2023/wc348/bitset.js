class BitSet {
    constructor(n) {
        this._bits = new Uint32Array((n >> 5) + 1);
        this._n = n;
    }
    from(arrayLike) {
        let bitSet = new BitSet(arrayLike.length);
        for (let i = 0; i < arrayLike.length; i++) {
            if (Number(arrayLike[i]) === 1) {
                bitSet.add(i);
            }
        }
        return bitSet;
    }
    _trailingZeros32(uint32) {
        if (uint32 === 0)
            return 32;
        return 31 - Math.clz32(uint32 & -uint32);
    }
    _onesCount32(uint32) {
        uint32 -= (uint32 >>> 1) & 0x55555555;
        uint32 = (uint32 & 0x33333333) + ((uint32 >>> 2) & 0x33333333);
        return (((uint32 + (uint32 >>> 4)) & 0x0f0f0f0f) * 0x01010101) >>> 24;
    }
    _bitLength32(uint32) {
        return 32 - Math.clz32(uint32);
    }
    add(i) {
        this._bits[i >> 5] |= 1 << (i & 31);
    }
    addRange(start, end) {
        let maskL = ~0 << (start & 31), maskR = ~0 << (end & 31), i = start >> 5;
        if (i === end >> 5) {
            this._bits[i] |= maskL ^ maskR;
            return;
        }
        this._bits[i] |= maskL;
        for (i++; i < end >> 5; i++) {
            this._bits[i] = ~0;
        }
        this._bits[i] |= ~maskR;
    }
    has(i) {
        return !!(this._bits[i >> 5] & (1 << (i & 31)));
    }
    discard(i) {
        this._bits[i >> 5] &= ~(1 << (i & 31));
    }
    discardRange(start, end) {
        let maskL = ~0 << (start & 31), maskR = ~0 << (end & 31), i = start >> 5;
        if (i === end >> 5) {
            this._bits[i] &= ~maskL | maskR;
            return;
        }
        this._bits[i] &= ~maskL;
        for (i++; i < end >> 5; i++) {
            this._bits[i] = 0;
        }
        this._bits[i] &= maskR;
    }
    flip(i) {
        this._bits[i >> 5] ^= 1 << (i & 31);
    }
    flipRange(start, end) {
        let maskL = ~0 << (start & 31), maskR = ~0 << (end & 31), i = start >> 5;
        if (i === end >> 5) {
            this._bits[i] ^= maskL ^ maskR;
            return;
        }
        this._bits[i] ^= maskL;
        for (i++; i < end >> 5; i++) {
            this._bits[i] = ~this._bits[i];
        }
        this._bits[i] ^= ~maskR;
    }
    clear() {
        this._bits.fill(0);
    }
    allOne(start, end) {
        let i = start >> 5;
        if (i === end >> 5) {
            let mask_1 = (~0 << (start & 31)) ^ (~0 << (end & 31));
            return (this._bits[i] & mask_1) === mask_1;
        }
        let mask = ~0 << (start & 31);
        if ((this._bits[i] & mask) !== mask) {
            return false;
        }
        for (i++; i < end >> 5; i++) {
            if (~this._bits[i]) {
                return false;
            }
        }
        mask = ~0 << (end & 31);
        return !~(this._bits[end >> 5] | mask);
    }
    allZero(start, end) {
        let i = start >> 5;
        if (i === end >> 5) {
            let mask_2 = (~0 << (start & 31)) ^ (~0 << (end & 31));
            return !(this._bits[i] & mask_2);
        }
        if (this._bits[i] >> (start & 31)) {
            return false;
        }
        for (i++; i < end >> 5; i++) {
            if (this._bits[i]) {
                return false;
            }
        }
        let mask = ~0 << (end & 31);
        return !(this._bits[end >> 5] & ~mask);
    }
    indexOfZero(position) {
        if (position === void 0) { position = 0; }
        if (position === 0) {
            return this._indexOfZero();
        }
        let i = position >> 5;
        if (i < this._bits.length) {
            let v = this._bits[i];
            if (position & 31) {
                v |= ~(~0 << (position & 31));
            }
            if (~v) {
                let res = (i << 5) | BitSet._trailingZeros32(~v);
                return res < this._n ? res : -1;
            }
            for (i++; i < this._bits.length; i++) {
                if (~this._bits[i]) {
                    let res = (i << 5) | BitSet._trailingZeros32(~this._bits[i]);
                    return res < this._n ? res : -1;
                }
            }
        }
        return -1;
    }
    indexOfOne(position) {
        if (position === void 0) { position = 0; }
        if (!position) {
            return this._indexOfOne();
        }
        for (let i = position >> 5; i < this._bits.length;) {
            let v = this._bits[i] & (~0 << (position & 31));
            if (v) {
                return (i << 5) | BitSet._trailingZeros32(v);
            }
            for (i++; i < this._bits.length; i++) {
                if (this._bits[i]) {
                    return (i << 5) | BitSet._trailingZeros32(this._bits[i]);
                }
            }
        }
        return -1;
    }
    onesCount(start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = this._n; }
        if (start < 0) {
            start = 0;
        }
        if (end > this._n) {
            end = this._n;
        }
        if (!start && end === this._n) {
            return this._onesCount();
        }
        let pos1 = start >> 5;
        let pos2 = end >> 5;
        if (pos1 === pos2) {
            return BitSet._onesCount32(this._bits[pos1] & (~0 << (start & 31)) & ((1 << (end & 31)) - 1));
        }
        let count = 0;
        if ((start & 31) > 0) {
            count += BitSet._onesCount32(this._bits[pos1] & (~0 << (start & 31)));
            pos1++;
        }
        for (let i = pos1; i < pos2; i++) {
            count += BitSet._onesCount32(this._bits[i]);
        }
        if ((end & 31) > 0) {
            count += BitSet._onesCount32(this._bits[pos2] & ((1 << (end & 31)) - 1));
        }
        return count;
    }
    equals(other) {
        if (this._bits.length !== other._bits.length) {
            return false;
        }
        for (let i = 0; i < this._bits.length; i++) {
            if (this._bits[i] !== other._bits[i]) {
                return false;
            }
        }
        return true;
    }
    isSubset(other) {
        if (this._bits.length > other._bits.length) {
            return false;
        }
        for (let i = 0; i < this._bits.length; i++) {
            if ((this._bits[i] & other._bits[i]) >>> 0 !== this._bits[i]) {
                return false;
            }
        }
        return true;
    }
    isSuperset(other) {
        if (this._bits.length < other._bits.length) {
            return false;
        }
        for (let i = 0; i < other._bits.length; i++) {
            if ((this._bits[i] & other._bits[i]) >>> 0 !== other._bits[i]) {
                return false;
            }
        }
        return true;
    }
    ior(other) {
        for (let i = 0; i < this._bits.length; i++) {
            this._bits[i] |= other._bits[i];
        }
    }
    or(other) {
        let res = new BitSet(this._bits.length);
        for (let i = 0; i < this._bits.length; i++) {
            res._bits[i] = this._bits[i] | other._bits[i];
        }
        return res;
    }
    iand(other) {
        for (let i = 0; i < this._bits.length; i++) {
            this._bits[i] &= other._bits[i];
        }
    }
    and(other) {
        let res = new BitSet(this._bits.length);
        for (let i = 0; i < this._bits.length; i++) {
            res._bits[i] = this._bits[i] & other._bits[i];
        }
        return res;
    }
    copy() {
        let res = new BitSet(this._n);
        res._bits.set(this._bits);
        return res;
    }
    bitLength() {
        return this._lastIndexOfOne() + 1;
    }
    toString() {
        let sb = [];
        for (let i = 0; i < this._bits.length; i++) {
            let bits = this._bits[i].toString(2).padStart(32, '0').split('').reverse().join('');
            if (i === this._bits.length - 1) {
                bits = bits.slice(0, this._n & 31);
            }
            sb.push(bits);
        }
        return sb.join('');
    }
    _indexOfZero() {
        for (let i = 0; i < this._bits.length; i++) {
            let x = this._bits[i];
            if (~x) {
                return (i << 5) | BitSet._trailingZeros32(~x);
            }
        }
        return -1;
    }
    _indexOfOne() {
        for (let i = 0; i < this._bits.length; i++) {
            let x = this._bits[i];
            if (x) {
                return (i << 5) | BitSet._trailingZeros32(x);
            }
        }
        return -1;
    }
    _lastIndexOfOne() {
        for (let i = this._bits.length - 1; i >= 0; i--) {
            let x = this._bits[i];
            if (x) {
                return (i << 5) | (BitSet._bitLength32(x) - 1);
            }
        }
        return -1;
    }
    _onesCount() {
        let count = 0;
        for (let i = 0; i < this._bits.length; i++) {
            count += BitSet._onesCount32(this._bits[i]);
        }
        return count;
    }
}

////////////////////////////////////////////////////////////////////////////

function matrixSumQueries(n, queries) {
    let visited = new BitSet(n * n), res = 0
    for (let i = queries.length - 1; ~i; i--) {
        const [type, index, val] = queries[i]
        if (type === 0) {
            for (let j = 0; j < n; j++) {
                const pos = index * n + j
                if (!visited.has(pos)) {
                    visited.add(pos)
                    res += val
                }
            }
        } else {
            for (let j = 0; j < n; j++) {
                const pos = j * n + index
                if (!visited.has(pos)) {
                    visited.add(pos)
                    res += val
                }
            }
        }
    }
    return res
}

const pr = console.log;

const main = () => {
    let n = 3, queries = [[0, 0, 1], [1, 2, 2], [0, 2, 3], [1, 0, 4]];
    let n2 = 3, queries2 = [[0, 0, 4], [0, 1, 2], [1, 0, 1], [0, 2, 3], [1, 2, 1]]
    let n_debug1 = 8, queries_debug1 = [[0, 6, 30094], [0, 7, 99382], [1, 2, 18599], [1, 3, 49292], [1, 0, 81549], [1, 1, 38280], [0, 0, 19405], [0, 4, 30065], [1, 4, 60826], [1, 5, 9241], [0, 5, 33729], [0, 1, 41456], [0, 2, 62692], [0, 3, 30807], [1, 7, 70613], [1, 6, 9506], [0, 5, 39344], [1, 0, 44658], [1, 1, 56485], [1, 2, 48112], [0, 6, 43384]];
    let n_test = 8, q_test = [[0, 6, 1], [0, 7, 2], [1, 2, 3], [1, 3, 4], [1, 0, 5], [1, 1, 6], [0, 0, 7], [0, 4, 8], [1, 4, 9], [1, 5, 10], [0, 5, 11], [0, 1, 12], [0, 2, 13], [0, 3, 1], [1, 7, 1], [1, 6, 1], [0, 5, 1], [1, 0, 1], [1, 1, 1], [1, 2, 1], [0, 6, 1]];
    pr(matrixSumQueries(n, queries))
    pr(matrixSumQueries(n2, queries2))
    pr(matrixSumQueries(n_debug1, queries_debug1)) // 2783119
    pr(matrixSumQueries(n_test, q_test)) // 200
};

main()