/**
 * 06/27/21 night
 * https://leetcode.com/problems/candy/
 */

const sm = (a) => a.reduce(((x, y) => x + y), 0);
const mx = Math.max;

// Accepted --- 80ms 92.55%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/4575026.html
 * https://leetcode.com/problems/candy/discuss/42769/a-simple-solution
 */
const candy = (a) => {
    let n = a.length;
    let f = Array(n).fill(1);
    for (let i = 0; i < n - 1; i++) {
        if (a[i + 1] > a[i]) f[i + 1] = f[i] + 1;
    }
    for (let i = n - 1; ~i; i--) {
        if (a[i - 1] > a[i]) f[i - 1] = mx(f[i - 1], f[i] + 1);
    }
    // pr(f);
    return sm(f);
};

// WA very close
const candy1 = (a) => {
    let n = a.length;
    let f = Array(n).fill(1);
    if (a[0] > a[1]) f[0]++;
    for (let i = 1; i < n; i++) {
        if (a[i] > a[i - 1] && a[i] > a[i + 1]) {
            pr("11", i, a[i], f)
            f[i] = mx(f[i - 1] + 1, f[i + 1] + 1);
        } else if (a[i] > a[i - 1] && a[i] <= a[i + 1]) {
            pr("22", i, a[i], f)
            f[i] = mx(f[i - 1] + 1, f[i + 1]);
        } else if (a[i] > a[i + 1]) {
            pr("33", i, a[i], f)
            if (a[i] < a[i - 1]) {
                // pr("small")
                f[i] = f[i + 1] + 1;
            } else if (a[i] == a[i - 1]) {
                // pr("equal")
                f[i] = f[i - 1];
            }
        }
    }
    if (a[n - 1] > a[n - 2]) f[n - 1] = f[n - 2] + 1;
    pr(f);
    return sm(f);
};

const pr = console.log;
const main = () => {
    let ratings = [1, 0, 2];
    let ratings2 = [1, 2, 2];
    let debug1 = [1, 3, 2, 2, 1];
    let debug2 = [1, 2, 87, 87, 87, 2, 1];
    let debug3 = [29, 51, 87, 87, 72, 12];
    pr(candy(ratings));
    pr(candy(ratings2));
    pr(candy(debug1)); // 7
    pr(candy(debug2)); // 13      [1, 2, 3, 1, 3, 2, 1]
    pr(candy(debug3)); // 12      [1, 2, 3, 3, 2, 1]
};

main()