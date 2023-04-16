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