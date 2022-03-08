// 01/01/22 evening

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const mx = Math.max;

// Accepted --- 885ms
let g;
const maximumInvitations = (a) => {
    let n = a.length, res = 0, visit = new Set();
    g = initializeGraph(n);
    for (let i = 0; i < n; i++) g[a[i]].push(i);
    // pr(g);
    for (let i = 0; i < n; i++) { // case 1: no cycle
        res += i < a[i] || a[a[i]] != i ? 0 : dfs(i, a[i]) + dfs(a[i], i);
    }
    // pr("res1", res);
    for (let i = 0; i < n; i++) { // case 2: has cycle, result is the length of the cycle
        let j = i;
        if (!visit.has(i)) {
            let m = new Map();
            // pr(m);
            for (let k = 0; !visit.has(j); k++) {
                visit.add(j);
                m.set(j, k);
                j = a[j];
            }
            let tmp = m.size - m.get(j) || 0;
            // pr(res, tmp, j, m.get(j) || m.size);
            res = mx(res, tmp);
        }
    }
    return res;
};

const dfs = (i, j) => {
    let max = 0;
    for (const child of g[i]) {
        max = mx(max, child == j ? 0 : dfs(child, j));
    }
    return 1 + max;
};

const main = () => {
    let favorite = [2, 2, 1, 2];
    let favorite2 = [1, 2, 0];
    let favorite3 = [3, 0, 1, 4, 1];
    pr(maximumInvitations(favorite))
    pr(maximumInvitations(favorite2))
    pr(maximumInvitations(favorite3))
};

main()