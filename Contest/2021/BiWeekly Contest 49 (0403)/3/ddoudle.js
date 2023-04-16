// 04/03/21 morning

const pr = console.log;

const MOD = 1e9 + 7;

// Accepted --- 332ms
// Acccepted --- 168ms submit again
const countNicePairs = (a) => {
    let m = new Map();
    let res = 0;
    for (const e of a) {
        let target = e - rev(e);
        let cnt = m.get(target) || 0;
        res += cnt;
        m.set(target, cnt + 1);
        // pr(res, m);
    }
    return res % MOD;
};

// Accepted --- 268ms
const countNicePairs2 = (a) => {
    let m = new Map();
    let res = 0;
    for (const e of a) {
        let target = e - rev(e);
        let cnt = m.get(target) + 1 || 1;
        m.set(target, cnt);
        res += cnt - 1;
    }
    return res % MOD;
};

const rev = (num) => {
    let s = num + '';
    let res = '';
    let n = s.length;
    for (let i = n - 1; ~i; i--)  res += s[i];
    return Number(res);
};

const main = () => {
    let nums = [42, 11, 1, 97];
    let nums2 = [13, 10, 35, 24, 76];
    pr(countNicePairs(nums));
    pr(countNicePairs(nums2));
};

main()