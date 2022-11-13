/**
 * 06/04/22 evening
 * https://leetcode.com/contest/weekly-contest-296/problems/min-max-game/
 */

const pr = console.log;

// Accepted
const minMaxGame = (a) => {
    while (a.length > 1) {
        let b = [];
        for (let i = 0; i < a.length / 2; i++) b.push(i % 2 == 0 ? Math.min(a[2 * i], a[2 * i + 1]) : Math.max(a[2 * i], a[2 * i + 1]));
        a = b;
    }
    return a[0];
};

const main = () => {
    let nums = [1, 3, 5, 2, 4, 8, 2, 2];
    let nums2 = [3];
    pr(minMaxGame(nums))
    pr(minMaxGame(nums2))
};

main()