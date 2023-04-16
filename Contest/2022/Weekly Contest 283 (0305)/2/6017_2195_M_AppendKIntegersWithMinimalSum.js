
/**
 * 03/05/22 evening
 * https://leetcode.com/contest/weekly-contest-283/problems/append-k-integers-with-minimal-sum/
 */

const pr = console.log;

const sumOfRange = (l, r) => (l + r) * (r - l + 1n) / 2n;

// why runs different from in LC
// AC java
const ll = BigInt;
const minimalKSum = (a, k) => {
    let u = [...new Set(a)];
    u.sort((x, y) => x - y);
    // pr(u);
    let res = 0n, l = 0, tot = 0;
    for (const r of u) {
        let cnt = r - l - 1;
        if (cnt > 0) {
            let sum, start, end;
            if (tot + cnt >= k) {
                let need = k - tot;
                start = l + 1;
                end = l + need;
                sum = sumOfRange(ll(start), ll(end));
                res += sum;
                tot += cnt;
                // pr("stop", l, r, "cnt", cnt, "start", start, "end", end, "sum", sum);
                break;
            } else {
                start = l + 1;
                end = r - 1;
                sum = sumOfRange(ll(start), ll(end));
                res += sum;
                tot += cnt;
                // pr("continue", l, r, "cnt", cnt, "start", start, "end", end, "sum", sum);
            }
        }
        l = r;
    }
    pr(tot, k, res, l);
    if (tot < k) {
        let need = ll(k - tot);
        res += sumOfRange(ll(l) + 1n, ll(l) + need);
    }
    return res;
};

const main = () => {
    let a = [1, 4, 25, 10, 25], k = 2;
    let a2 = [5, 6], k2 = 6;
    let a_debug1 = [1000000000], k_debug1 = 1000000000
    // pr(minimalKSum(a, k))
    // pr(minimalKSum(a2, k2))
    // pr(minimalKSum(a2, 3)) // 1 + 2 + 3
    pr(minimalKSum(a_debug1, k_debug1)) // 500000000500000001
};

main()
