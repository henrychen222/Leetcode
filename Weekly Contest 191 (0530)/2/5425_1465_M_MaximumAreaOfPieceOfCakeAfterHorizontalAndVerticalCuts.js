/**
 * https://leetcode.com/contest/weekly-contest-191/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
 * 5.30 night 
 */

// Accepted --- 160ms 44.4MB 100.00%
const maxArea_uwi = (h, w, horizontalCuts, verticalCuts) => {
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);
    let hmax = Math.max(horizontalCuts[0], h - horizontalCuts[horizontalCuts.length - 1]);
    for (let i = 0; i < horizontalCuts.length - 1; i++) {
        hmax = Math.max(hmax, horizontalCuts[i + 1] - horizontalCuts[i]);
    }
    let vmax = Math.max(verticalCuts[0], w - verticalCuts[verticalCuts.length - 1]);
    for (let i = 0; i < verticalCuts.length - 1; i++) {
        vmax = Math.max(vmax, verticalCuts[i + 1] - verticalCuts[i]);
    }
    return hmax * vmax % 1000000007;
};

// fixed: 208ms 44.2MB 100.00%
// 11:30PM submit 52/53 test cases passed   if pass, should Q2 end in 1:00:00
const maxArea = (h, w, horizontalCuts, verticalCuts) => {
    let x = Number.MIN_VALUE;
    let y = Number.MIN_VALUE;
    horizontalCuts.sort((a, b) => b - a);
    verticalCuts.sort((a, b) => b - a);
    for (let i = 1; i < horizontalCuts.length; i++) {
        x = Math.max(horizontalCuts[i - 1] - horizontalCuts[i], x);
    }
    x = Math.max(h - horizontalCuts[0], x);
    x = Math.max(horizontalCuts[horizontalCuts.length - 1] - 0, x);

    for (let i = 1; i < verticalCuts.length; i++) {
        y = Math.max(verticalCuts[i - 1] - verticalCuts[i], y);
    }
    y = Math.max(w - verticalCuts[0], y);
    y = Math.max(verticalCuts[verticalCuts.length - 1] - 0, y);

    // return x * y;
    return x * y % 1000000007;   // fixed
};

const main = () => {
    let h = 5, w = 4, horizontalCuts = [1, 2, 4], verticalCuts = [1, 3];
    let h2 = 5, w2 = 4, horizontalCuts2 = [3, 1], verticalCuts2 = [1];
    let h3 = 5, w3 = 4, horizontalCuts3 = [3], verticalCuts3 = [3];

    console.log(maxArea(h, w, horizontalCuts, verticalCuts));
    console.log(maxArea(h2, w2, horizontalCuts2, verticalCuts2));
    console.log(maxArea(h3, w3, horizontalCuts3, verticalCuts3));

    console.log("")
    console.log(maxArea_uwi(h, w, horizontalCuts, verticalCuts));
    console.log(maxArea_uwi(h2, w2, horizontalCuts2, verticalCuts2));
    console.log(maxArea_uwi(h3, w3, horizontalCuts3, verticalCuts3));
};

main()