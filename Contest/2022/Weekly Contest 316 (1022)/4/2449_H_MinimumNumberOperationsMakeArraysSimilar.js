/*
 * 10/22/22 night
 * https://leetcode.com/contest/weekly-contest-316/problems/minimum-number-of-operations-to-make-arrays-similar/
 */

const pr = console.log;

const sm = (a) => a.reduce(((x, y) => x + y), 0);

// Accepted
// reference: Tlatoani
const makeSimilar = (a, b) => {
    let n = a.length, max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) max = Math.max(max, a[i], b[i]);
    let f = Array(max + 1).fill(0);
    for (let i = 0; i < n; i++) {
        f[a[i]]++;
        f[b[i]]--;
    }
    // pr(f);
    for (let x = 2; x <= max; x++) f[x] += f[x - 2];
    // pr(f);
    return sm(f.map(x => Math.abs(x))) / 2;
};

const main = () => {
    let a = [8, 12, 6], b = [2, 14, 10];
    let a2 = [1, 2, 5], b2 = [4, 1, 3];
    let a3 = [1, 1, 1, 1, 1], b3 = [1, 1, 1, 1, 1]
    pr(makeSimilar(a, b))
    pr(makeSimilar(a2, b2))
    pr(makeSimilar(a3, b3))
};

main()
