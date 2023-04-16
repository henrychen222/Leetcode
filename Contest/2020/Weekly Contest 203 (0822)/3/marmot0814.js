// 8.23 evening

// Accepted --- 260ms 100.00%  
const findLatestStep = (arr, m) => {
    let n = arr.length;
    let pa = new Array(n).fill(-1);
    let ans = new Array(n).fill(0);
    let st = new Set();
    let ret = -1;
    for (let i = 0; i < n; i++) {
        let v = arr[i] - 1;
        ans[v] = 1;
        // console.log(ans, st)
        if (v - 1 >= 0 && ans[v - 1] == 1) {
            let x = find(v - 1, pa);
            if (st.has(x)) st.delete(x);
            let y = find(v, pa);
            // console.log(x, y);
            union(x, y, pa);
        }
        if (v + 1 < n && ans[v + 1] == 1) {
            let x = find(v + 1, pa);
            if (st.has(x)) st.delete(x);
            let y = find(v, pa);
            union(x, y, pa);
        }
        let x = find(v, pa);
        if (-pa[x] == m) st.add(x);
        if (st.size) ret = i + 1;
    }
    return ret;
};

const find = (x, pa) => {
    return pa[x] < 0 ? x : pa[x] = find(pa[x], pa);
};

const union = (x, y, pa) => {
    if (x != y) {
        if (pa[x] > pa[y]) {
            [[x, y]] = [[y, x]];
        }
        pa[x] += pa[y];
        pa[y] = x;
    }
};

const main = () => {
    let arr = [3, 5, 1, 2, 4], m = 1;
    let arr2 = [3, 1, 5, 4, 2], m2 = 2;
    let arr3 = [1], m3 = 1;
    let arr4 = [2, 1], m4 = 2;
    console.log(findLatestStep(arr, m));
    console.log(findLatestStep(arr2, m2));
    console.log(findLatestStep(arr3, m3));
    console.log(findLatestStep(arr4, m4));
};

main()