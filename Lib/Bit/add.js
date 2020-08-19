// 8.19 morning
const add = (a, b) => {
    while (b != 0) {
        let carry = (a & b);
        a ^= b;
        b = carry << 1;
    }
    return a;
};

const main = () => {
    console.log(add(4, 5)); // 9
};

main()