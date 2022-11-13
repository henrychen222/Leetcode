// 06/25/22 noon

const pr = console.log;

const bit = 27;
const checkIthBit = (x, i) => x & (1 << i);

// Accepted --- 204ms
const maximumXOR = (a) => {
    let res = 0;
    for (let i = 0; i < bit; i++) {
        let hasOne = 0;
        for (const x of a) {
            if (checkIthBit(x, i)) hasOne++;
        }
        if (hasOne) res += 1 << i;
    }
    return res;
};
 
// Accepted --- 543ms
const fillLeading = (len, s) => '0'.repeat(len - s.length) + s;
const maximumXOR1 = (a) => {
    let len = 0, res = 0;
    a = a.map(x => {
        let s = x.toString(2);
        len = Math.max(len, s.length);
        return s;
    }).map(s => fillLeading(len, s));
    // pr(a)
    for (let i = len - 1, bit = 0; ~i; i--, bit++) {
        let hasOne = false;
        for (const s of a) {
            if (s[i] == '1') hasOne = true;
        }
        // pr(i, hasOne)
        if (hasOne) res += 1 << bit;
    }
    return res;
};

const main = () => {
    let a = [3, 2, 4, 6];
    let a2 = [1, 2, 3, 9, 2];
    pr(maximumXOR(a))
    pr(maximumXOR(a2))
};

main()