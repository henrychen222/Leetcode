// 07/31/21 night
const pr = console.log;

// Accepted --- 212ms
const numberOfWeeks = (a) => {
    a.sort((x, y) => y - x);
    let rsum = a.reduce((x, y) => x + y) - a[0];
    a[0] = Math.min(a[0], rsum + 1);
    return a.reduce((x, y) => x + y);
};

// Accepted --- 415ms
const numberOfWeeks2 = (a) => {
    a.sort((x, y) => y - x);
    let sum = a.reduce((x, y) => x + y);
    let rsum = sum - a[0];
    return rsum + Math.min(a[0], rsum + 1);
};

const main = () => {
    let milestones = [1, 2, 3];
    let milestones2 = [5, 2, 1];
    let debug1 = [9, 3, 6, 8, 2, 1];
    let debug2 = [5, 9, 4, 4, 8, 9, 9, 8, 7, 3];
    let debug3 = [5, 7, 5, 7, 9, 7];
    let debug4 = [1000000000, 1000000000, 1000000000];
    pr(numberOfWeeks(milestones))
    pr(numberOfWeeks(milestones2))
    pr(numberOfWeeks(debug1)) // 29
    pr(numberOfWeeks(debug2)) // 66
    pr(numberOfWeeks(debug3)) // 40
    pr(numberOfWeeks(debug4)) // 3000000000
};

main()