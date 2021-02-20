/**
 * 02/19/21 night created
 * https://atcoder.jp/contests/abc190/submissions/20270717
 */

const union = (x, y) => {
    x = find(x);
    y = find(y);
    if (x != y) {
        if (upper[y] < upper[x]) [x, y] = [y, x];
        upper[x] += upper[y];
        upper[y] = x;
    }
    return x == y;
};

const find = (x) => {
    if (upper[x] < 0) {
        return x;
    } else {
        upper[x] = find(upper[x]);
        return upper[x];
    }
};

const equiv = (x, y) => {
    return find(x) == find(y);
};