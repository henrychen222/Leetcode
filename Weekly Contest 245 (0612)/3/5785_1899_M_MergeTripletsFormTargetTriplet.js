/**
 * 06/12/21 evening
 * https://leetcode.com/contest/weekly-contest-245/problems/redistribute-characters-to-make-all-strings-equal/
 */

const pr = console.log;

const aeq = (a, b) => JSON.stringify(a) == JSON.stringify(b);
const aeq2 = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

const mergeTriplets1 = (triplets, target) => {
    for (const e of triplets) {
        if (aeq(e, target)) return true;
    }
};

// reference: https://leetcode.com/problems/merge-triplets-to-form-target-triplet/discuss/1268473/Greedy
// Accepted --- 308ms
const mx = Math.max;
const mergeTriplets = (triplets, t) => {
    let res = [0, 0, 0]
    for (const [x, y, z] of triplets) {
        if (x <= t[0] && y <= t[1] && z <= t[2]) {
            [res[0], res[1], res[2]] = [mx(res[0], x), mx(res[1], y), mx(res[2], z)];
        }
    }
    // pr(res);
    // return aeq(res, t);
    return aeq2(res, t); // Accepted --- 188ms
};

const main = () => {
    let triplets = [[2, 5, 3], [1, 8, 4], [1, 7, 5]], target = [2, 7, 5];
    let triplets2 = [[1, 3, 4], [2, 5, 8]], target2 = [2, 5, 8];
    let triplets3 = [[2, 5, 3], [2, 3, 4], [1, 2, 5], [5, 2, 3]], target3 = [5, 5, 5];
    let triplets4 = [[3, 4, 5], [4, 5, 6]], target4 = [3, 2, 5];
    pr(mergeTriplets(triplets, target))
    pr(mergeTriplets(triplets2, target2))
    pr(mergeTriplets(triplets3, target3))
    pr(mergeTriplets(triplets4, target4))
};

main()