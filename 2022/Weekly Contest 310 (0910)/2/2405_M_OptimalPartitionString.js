/*
* 09/10/22 evening
* https://leetcode.com/contest/weekly-contest-310/problems/optimal-partition-of-string/
*/

const pr = console.log;

// Accepted
const partitionString = (s) => {
    let se = new Set(), d = [], cur = '';
    for (const c of s) {
        // pr(c, d, cur)
        if (se.has(c)) {
            d.push(cur);
            cur = '';
            se.clear();
        }
        cur += c;
        se.add(c);
    }
    // pr(d, cur);
    return d.length + (cur.length ? 1 : 0);
};

const main = () => {
    let s = "abacaba";
    let s2 = "ssssss";
    pr(partitionString(s))
    pr(partitionString(s2))
};

main()