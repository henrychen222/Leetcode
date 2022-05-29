/**
 * 03/12/22 evening
 * https://leetcode.com/contest/weekly-contest-284/problems/count-artifacts-that-can-be-extracted/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };

// Accepted
const mi = Math.min, mx = Math.max;
const digArtifacts = (n, artifacts, dig) => {
    let vis = initialize2DArray(n, n), res = 0;
    for (const [x, y] of dig) vis[x][y] = 1;
    // pr(vis);
    for (const [x1, y1, x2, y2] of artifacts) {
        let xmin = mi(x1, x2), xmax = mx(x1, x2), ymin = mi(y1, y2), ymax = mx(y1, y2);
        let ok = true;
        for (let x = xmin; x <= xmax; x++) {
            for (let y = ymin; y <= ymax; y++) {
                if (vis[x][y] == 0) ok = false;
            }
        }
        if (ok) res++;
    }
    return res;
};

const main = () => {
    let n = 2, artifacts = [[0, 0, 0, 0], [0, 1, 1, 1]], dig = [[0, 0], [0, 1]];
    let n2 = 2, artifacts2 = [[0, 0, 0, 0], [0, 1, 1, 1]], dig2 = [[0, 0], [0, 1], [1, 1]];
    pr(digArtifacts(n, artifacts, dig))
    pr(digArtifacts(n2, artifacts2, dig2))
};

main()