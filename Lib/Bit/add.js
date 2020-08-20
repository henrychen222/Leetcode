// 8.19 morning
const add = (a, b) => {
    while (b != 0) {
        let carry = (a & b);
        a ^= b;
        b = carry << 1;
    }
    return a;
};

// lc 67
const addBinary = (a, b) => {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let res = "";
    while (i >= 0 || j >= 0) {
        let m = i < 0 ? 0 : a[i] | 0;
        let n = j < 0 ? 0 : b[j] | 0;
        carry += m + n;
        res = carry % 2 + res;
        carry = carry / 2 | 0;
        i--;
        j--;
    }
    if (carry !== 0) {
        res = carry + res;
    }
    return res;
};

const main = () => {
    console.log(add(4, 5)); // 9

    let a = "11",
        b = "1";
    let a2 = "1010",
        b2 = "1011";
    console.log(addBinary(a, b));
    console.log(addBinary(a2, b2));
};

main()