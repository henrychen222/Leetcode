// 1.13 evening

// Accepted --- 80ms
const constructDistancedSequence = (n) => {
    let a = Array(2 * n - 1).fill(0);
    return dfs(0, a, (1 << n + 1) - 2);
};

const dfs = (pos, a, rem) => {
    // console.log(a);
    if (pos == a.length) return a;
    if (a[pos] > 0) return dfs(pos + 1, a, rem);
    for (let i = 20; i >= 1; i--) {
        if (rem << ~i < 0) {
            if (i > 1 && pos + i < a.length && a[pos + i] == 0) {
                a[pos] = a[pos + i] = i;
                let res = dfs(pos + 1, a, rem ^ 1 << i);
                if (res != null) return res;
                a[pos] = a[pos + i] = 0;
            } else if (i == 1) {
                a[pos] = 1;
                let res = dfs(pos + 1, a, rem ^ 1 << 1);
                if (res != null) return res;
                a[pos] = 0;
            }
        }
    }
    return null;
};

const main = () => {
    let n = 3;
    let n2 = 5;
    console.log(constructDistancedSequence(n));
    console.log(constructDistancedSequence(n2));
};

main()
