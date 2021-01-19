const highestOneBit = (i) => {
    i |= (i >> 1);
    i |= (i >> 2);
    i |= (i >> 4);
    i |= (i >> 8);
    i |= (i >> 16);
    return i - (i >>> 1);
};

// Integer
const numberOfTrailingZeros = (i) => {
    let y;
    if (i == 0) return 32;
    let n = 31;
    y = i << 16; if (y != 0) { n = n - 16; i = y; }
    y = i << 8; if (y != 0) { n = n - 8; i = y; }
    y = i << 4; if (y != 0) { n = n - 4; i = y; }
    y = i << 2; if (y != 0) { n = n - 2; i = y; }
    return n - ((i << 1) >>> 31);
};

