function DJSet(n) {
    let parent = [];
    for (let i = 0; i < n; i++) parent[i] = i;
    let rank = Array(n).fill(0);
    return { find, union, equiv, getParent }
    function find(x) {
        return x == parent[x] ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        let rx = find(x), ry = find(y);
        if (rank[rx] < rank[ry]) {
            parent[rx] = ry;
        } else if (rank[rx] > rank[ry]) {
            parent[ry] = rx;
        } else {
            parent[ry] = rx;
            rank[rx]++;
        }
        return rx == ry;
    }
    function equiv(x, y) {
        return find(x) == find(y);
    }
    function getParent() {
        return parent;
    }
}

const N = 1e5;
const gcdSort = (nums) => {
    let sa = [...nums];
    sa.sort((x, y) => x - y);
    let n = nums.length;
    let a = Array(N + 1).fill(0);
    let visit = Array(N + 1).fill(0);
    for (const x of nums) a[x] = 1;
    let ds = new DJSet(N);
    for (let i = 2; i <= N; i++) {
        if (visit[i] == 0) {
            for (let j = i; j <= N; j += i) {
                visit[j] = 1;
                if (a[j] > 0) ds.union(i, j);
            }
        }
    }
    // pr(ds.getParent())
    for (let i = 0; i < n; i++) {
        if (!ds.equiv(nums[i], sa[i])) return false;
    }
    return true;
};

const pr = console.log;
const main = () => {
    let nums = [7, 21, 3];
    let nums2 = [5, 2, 6, 2];
    let nums3 = [10, 5, 9, 3, 15];
    pr(gcdSort(nums))
    pr(gcdSort(nums2))
    pr(gcdSort(nums3))
};

main()