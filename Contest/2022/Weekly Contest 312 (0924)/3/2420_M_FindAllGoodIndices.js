/*
* 09/24/22 evening
* https://leetcode.com/contest/weekly-contest-312/problems/find-all-good-indices/
*/

const pr = console.log;

const cutMaxConsecutiveWithIndex_de = (a) => {
    let d = [], ia = [], l = 0, n = a.length;
    for (let i = 0; i + 1 < n; i++) {
        if (a[i + 1] > a[i]) {
            d.push(a.slice(l, i + 1));
            ia.push([l, i]);
            l = i + 1;
        }
    }
    d.push(a.slice(l));
    ia.push([l, n - 1]);
    return [d, ia];
};

const cutMaxConsecutiveWithIndex_in = (a) => {
    let d = [], ia = [], l = 0, n = a.length;
    for (let i = 0; i + 1 < n; i++) {
        if (a[i + 1] < a[i]) {
            d.push(a.slice(l, i + 1));
            ia.push([l, i]);
            l = i + 1;
        }
    }
    d.push(a.slice(l));
    ia.push([l, n - 1]);
    return [d, ia];
};

// Accepted
const goodIndices = (a, k) => {
    let [inc, inc_ia] = cutMaxConsecutiveWithIndex_in(a), [dec, dec_ia] = cutMaxConsecutiveWithIndex_de(a)
    // pr("inc", inc, inc_ia)
    // pr("dec", dec, dec_ia)
    let n = a.length, res = [];
    for (let i = 0; i < n; i++) {
        if (i >= k && i < n - k) {
            let bl = i - k, br = i - 1, al = i + 1, ar = i + k;
            // let b = a.slice(bl, br + 1), c = a.slice(al, ar + 1);
            // pr('\nindex', i);
            // pr("before", b, "after", c)
            // pr("beforeRange", [bl, br], "afterRange", [al, ar])
            let beforeOK = false, afterOK = false;
            if (valid(bl, br, n) && cover(bl, br, dec_ia)) {
                // pr("before ok")
                beforeOK = true;
            }
            if (valid(al, ar, n) && cover(al, ar, inc_ia)) {
                // pr("after ok")
                afterOK = true;
            }
            if (beforeOK && afterOK) res.push(i);
        }
    }
    return res;
};

const cover = (l, r, a) => {
    for (const [start, end] of a) {
        if (l >= start && r <= end) {
            // pr([l, r], [start, end])
            return true;
        }
    }
    return false;
};

const valid = (l, r, n) => l >= 0 && r < n;

const main = () => {
    let a = [2, 1, 1, 1, 3, 4, 1], k = 2;
    let a2 = [2, 1, 1, 2], k2 = 2;
    pr(goodIndices(a, k))
    pr(goodIndices(a2, k2))
};

main()
