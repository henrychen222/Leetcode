/**
 * 06/03/22 night
 * https://leetcode.com/problems/minimum-genetic-mutation/
 */

const pr = console.log;

// Accepted --- 85ms 37.50%
const minMutation = (s, t, bank) => minDisMap(s, t, bank)

let d = ['A', 'C', 'G', 'T'];
const minDisMap = (s, t, bank) => {
    let dis = new Map(), q = [s], se = new Set(bank);
    dis.set(s, 0);
    while (q.length) {
        let cur = q.shift(), n = cur.length, curD = dis.get(cur);
        // pr("cur", cur, curD);
        // if (se.has(cur)) return dis.get(cur);
        for (let i = 0; i < n; i++) {
            for (const c of d) {
                if (c == cur[i]) continue;
                let next = cur.slice(0, i) + c + cur.slice(i + 1);
                if (!se.has(next)) continue;
                if (!dis.has(next) || dis.get(next) > curD + 1) {
                    dis.set(next, curD + 1);
                    q.push(next);
                }
            }
        }
    }
    // pr(dis);
    return dis.has(t) ? dis.get(t) : -1;
};

const main = () => {
    let s = "AACCGGTT",
        t = "AACCGGTA",
        bank = ["AACCGGTA"];
    let s2 = "AACCGGTT",
        t2 = "AAACGGTA",
        bank2 = ["AACCGGTA", "AACCGCTA", "AAACGGTA"];
    let s3 = "AAAAACCC",
        t3 = "AACCCCCC",
        bank3 = ["AAAACCCC", "AAACCCCC", "AACCCCCC"];
    pr(minMutation(s, t, bank))
    pr(minMutation(s2, t2, bank2))
    pr(minMutation(s3, t3, bank3))
};

main()