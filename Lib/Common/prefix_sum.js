const preSum = (a, n) => {
    let pre = [a[0]];
    for (let i = 1; i < n; i++) {
        pre[i] = pre[i - 1] + a[i];
    }
    pre.unshift(0);
    return pre;
};

const preSum = (a, n) => {
    let pre = Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        pre[i] = pre[i - 1] + a[i - 1];
    }
    return pre;
};