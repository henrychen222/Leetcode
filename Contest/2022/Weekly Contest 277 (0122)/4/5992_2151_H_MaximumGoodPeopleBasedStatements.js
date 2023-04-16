/**
 * 01/22/22 evening
 * https://leetcode.com/contest/weekly-contest-277/problems/maximum-good-people-based-on-statements/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };

/*
   2 good -> 1 bad -> 1 tell truth  -> 0 is good -> 1 is good (conflict)
                   -> 1 lie         -> 0 is not good (bad) ->  0 tell truth -> 1 is good (conflict)
                                                           ->  0 lie  -> 1 is bad   (result: only person 2 is good)
   2 bad  -> 2 tell truth -> 1 is bad -> same before
          -> 2 lie  -> 1 is good -> 0 is good  -> (result: person 0 1 is good)
 */

function node(good, bad) {
    this.good = good;
    this.bad = bad;
}

const maximumGood = (statements) => {
    let n = statements.length, g = initializeGraph(n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i != j) {
                let d = new node(null, null);
                if (statements[i][j] == 0) d.bad = j;
                if (statements[i][j] == 1) d.good = j;
                if (d.good != null || d.bad != null) g[i].push(d);
            }
        }
    }
    pr("g", g)
    let res = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (g[i].length > 0) {
            let q = [i], assumeGood = new Set([i]), assumeBad = new Set();
            let visit = new Set();
            while (q.length) {
                let cur = q.shift();
                pr("cur", cur, "g[cur]", g[cur]);
                for (const child of g[cur]) {
                    if (visit.has(child)) continue;
                    if (child.good) {
                        assumeGood.add(child.good);
                        q.push(child.good);
                        visit.add(child.good);
                    }
                    if (child.bad) { // two conditions  don't know
                        assumeBad.add(child.bad);
                    }
                }
            }
            // pr(assumeGood, assumeBad);
            res = Math.max(res, assumeGood.size);
        }
    }
    return res;
};

const main = () => {
    let statements = [[2, 1, 2], [1, 2, 2], [2, 0, 2]];
    let statements2 = [[2, 0], [0, 2]];
    let debug1 = [[2,2],[1,2]];
    pr(maximumGood(statements))
    pr(maximumGood(statements2))
    pr(maximumGood(debug1)) // 2
};

main()