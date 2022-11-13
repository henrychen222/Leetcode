// 01/01/22 night

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const mx = Math.max;

// Accepted --- 1100ms
const maximumInvitations = (a) => {
    let n = a.length, res = 0, visit = new Set(), g = initializeGraph(n), deg = Array(n).fill(0), dp = Array(n).fill(1);
    for (let i = 0; i < n; i++) g[a[i]].push(i);
    for (let i = 0; i < n; i++) { // case 2: has cycle, result is the length of the cycle
        if (!visit.has(i)) {
            let t = [];
            let j = i;
            while (!visit.has(j)) {
                visit.add(j);
                t.push(j);
                j = a[j];
            }
            for (let k = 0; k < t.length; k++) {
                if (t[k] == j) res = mx(res, t.length - k);
            }
        }
    }
    // case 1: no cycle
    let q = [];
    for (let i = 0; i < n; i++) deg[a[i]]++;
    for (let i = 0; i < n; i++) {
        if (deg[i] == 0) q.push(i);
    }
    while (q.length) {
        let cur = q.shift();
        dp[a[cur]] = mx(dp[a[cur]], dp[cur] + 1);
        if (--deg[a[cur]] == 0) q.push(a[cur]);
    }
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (a[a[i]] == i && a[i] > i) {
            sum += dp[i] + dp[a[i]];
        }
    }
    return mx(sum, res);
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