/**
 * 07/20/21 night
 * https://leetcode.com/problems/shuffle-an-array/
 */

const arrayShuffle = (a) => {
    for (let i = a.length - 1; ~i; i--) {
        const j = parseInt(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

// Accepted --- 268ms 34.55%
function Solution(a) {
    let origin = [...a];
    return {
        reset,
        shuffle
    }

    function reset() {
        return origin;
    }

    function shuffle() {
        return arrayShuffle(a);
    }
}

// Accepted --- 252ms 42.05%
function Solution1(a) {
    let origin = [...a];
    let n = a.length;
    return {
        reset,
        shuffle
    }

    function reset() {
        return origin;
    }

    function shuffle() {
        // pr("\n")
        let res = [];
        while (res.length < n) {
            res.push(getRandom());
        }
        a = res;
        return res;
    }

    function getRandom() {
        let idx = Math.random() * a.length >> 0;
        // pr("idx", idx)
        let tmp = a[idx];
        a.splice(idx, 1);
        return tmp;
    }
}

const pr = console.log;
const main = () => {
    let solution = new Solution([1, 2, 3]);
    pr(solution.shuffle());
    pr(solution.reset()); // [1, 2, 3]
    pr(solution.shuffle());
};

main()