// 03/13/21 afternoon

let cur;
const generateGrayCode = (n) => { // fast
    let res = [];
    cur = 0;
    dfs(res, n, 0);
    return res;
};

const dfs = (res, n) => {
    if (n == 0) {
        res.push(cur);
        return;
    }
    dfs(res, n - 1);
    cur ^= 1 << n - 1;
    dfs(res, n - 1);
};

///////////////////////////////////////////////////////////////
const generateGrayCode = (n) => {
    if (n <= 0) return;
    let a = ['0', '1'];
    let i, j;
    for (i = 2; i < 1 << n; i <<= 1) {
        for (j = i - 1; j >= 0; j--) a.push(a[j]);
        for (j = 0; j < i; j++) a[j] = "0" + a[j];
        for (j = i; j < 2 * i; j++) a[j] = "1" + a[j];
    }
    return a.map(x => x = parseInt(x, 2));
};