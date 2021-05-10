// 05/08/21 night

const pr = console.log;

function DJSet(a, n) {
    let parent = Array(n).fill(0);
    let sum = Array(n).fill(0n);
    for (let i = 0; i < n; i++) parent[i] = i, sum[i] = BigInt(a[i]);
    return { find, union, sm }
    function find(x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x == y) return;
        parent[x] = y;
        sum[y] += sum[x];
    }
    function sm() {
        return sum;
    }
}

// Accepted --- 644ms
const BMOD = BigInt(1e9 + 7);
const maxSumMinProduct = (a) => {
    let n = a.length;
    let ds = new DJSet(a, n);
    let pos = Array(n).fill(0);
    let visit = Array(n).fill(0);
    for (let i = 0; i < n; i++) pos[i] = i;
    pos.sort((x, y) => a[y] - a[x]);
    let res = 0n;
    for (const p of pos) {
        visit[p] = 1;
        if (p - 1 >= 0 && visit[p - 1]) ds.union(p, p - 1);
        if (p + 1 < n && visit[p + 1]) ds.union(p, p + 1);
        let tmp = BigInt(a[p]) * ds.sm()[ds.find(p)]; // min-product
        // pr(tmp);
        if (tmp > res) res = tmp;
    }
    return Number(res % BMOD);
};

const main = () => {
    let nums = [1, 2, 3, 2];
    let nums2 = [2, 3, 3, 1, 2];
    let nums3 = [3, 1, 5, 6, 4, 2];
    pr(maxSumMinProduct(nums));
    pr(maxSumMinProduct(nums2));
    pr(maxSumMinProduct(nums3));
};

main()