// 03/11/23 night

// https://www.geeksforgeeks.org/powers-2-required-sum/
const powerOf2Sum = (x) => {
    let v = [], res = [];
    while (x > 0) {
        v.push(x % 2);
        x >>= 1;
    }
    for (let i = 0; i < v.length; i++) {
        if (v[i] == 1) res.push(i);
    }
    return res;
};

// binary search, min factorization (smallest total cnt), max factorization is all 1's (2 ^ 0)
const SumOfPower2Factorization = (x) => {
    let i = 0, bit = 2 ** i, v = [], res = new Set(), cur = x;
    while (bit <= x) {
        v.push(bit);
        i++;
        bit = 2 ** i;
    }
    while (cur != 0) {
        let idx = v.findIndex((element) => element > cur);
        if (idx === -1) {
            idx = v.length - 1;
        } else {
            idx--;
        }
        res.add(idx);
        cur -= v[idx];
    }
    return res;
};