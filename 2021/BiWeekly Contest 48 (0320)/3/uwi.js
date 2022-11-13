// 03/20/21 afternoon

const pr = console.log;

// Accepted --- 176ms
const getMaximumConsecutive = (c) => {
    c.sort((x, y) => x - y);
    pr(c);
    let res = 0;
    for (const e of c) {
        if (e <= res + 1) res += e;
        pr(e, res);
    }
    return res + 1;
};

const main = () => {
    let coins = [1, 3];
    let coins2 = [1, 1, 1, 4];
    let coins3 = [1, 4, 10, 3, 1]
    pr(getMaximumConsecutive(coins));
    pr(getMaximumConsecutive(coins2));
    pr(getMaximumConsecutive(coins3));
};

main()