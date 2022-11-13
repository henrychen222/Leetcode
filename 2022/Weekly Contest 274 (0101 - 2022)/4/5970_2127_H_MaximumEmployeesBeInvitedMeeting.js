/**
 * 01/01/22 evening
 * https://leetcode.com/contest/weekly-contest-274/problems/maximum-employees-to-be-invited-to-a-meeting/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };

// don't know
const maximumInvitations = (a) => {
    let n = a.length, g = initializeGraph(n);
    for (let i = 0; i < n; i++) g[a[i]].push(i);
    pr(g);
    let d = [...g], used = new Map();
    d.sort((x, y) => y.length - x.length);
    pr(d);
    for (let child of d) {
        pr(child)
        child.sort((x, y) => g[y].length - g[x].length);
        pr(child)
        for(const e of child) {
           if (used.has(e)) continue;
           let se = used.get(e);
           // if (se.size >= 2) continue;
        }
    }
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