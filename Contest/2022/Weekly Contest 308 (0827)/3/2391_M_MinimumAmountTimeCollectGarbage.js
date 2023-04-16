/*
* 08/27/22 evening
* https://leetcode.com/contest/weekly-contest-308/problems/minimum-amount-of-time-to-collect-garbage/
*/

const pr = console.log;

// fuck 12:03 AC
const garbageCollection = (a, b) => {
    let g = collect(a, b, 'G'), m = collect(a, b, 'M'), p = collect(a, b, 'P')
    // pr(g, m, p);
    return g + m + p;
};

const collect = (a, b, type) => {
    // pr("\n", type)
    let pick = 0, n = a.length, travel = 0, end = -1;
    for (let i = n - 1; i >= 0; i--) {
        if (new Set(a[i]).has(type)) {
            end = i;
            break;
        }
    }
    if (end != -1) {
        for (let i = 1; i <= end; i++) travel += b[i - 1];
    }
    if (new Set(a[0]).has(type)) {
        let cnt = 0;
        for (const c of a[0]) {
            if (c == type) cnt++;
        }
        pick += cnt;
    }
    // pr("first", pick);
    for (let i = 1; i < n; i++) {
        let s = a[i];
        if (new Set(s).has(type)) {
            let cnt = 0;
            for (const c of s) {
                if (c == type) cnt++;
            }
            pick += cnt;
            // pr("next", a[i], "travel", b[i-1], "cnt", cnt, "pick" , pick);
        }
    }
    // pr("pick", pick, "travel", travel)
    return pick + travel;
};

const main = () => {
    let a = ["G", "P", "GP", "GG"], b = [2, 4, 3];
    let a2 = ["MMM", "PGM", "GP"], b2 = [3, 10];
    pr(garbageCollection(a, b))
    pr(garbageCollection(a2, b2))
};

main()