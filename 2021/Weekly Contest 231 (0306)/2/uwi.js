// 03/06/21 night
const pr = console.log;

// Accepted --- 112ms
const minElements1 = (num, limit, goal) => {
    let add = Math.abs(goal - num.reduce((x, y) => x + y));
    return (add + limit - 1) / limit >> 0;
};

// Accepted --- 112ms
const minElements = (num, limit, goal) => {
    let add = Math.abs(goal - num.reduce((x, y) => x + y));
    return parseInt((add + limit - 1) / limit);
};

const main = () => {
    let nums = [1, -1, 1], limit = 3, goal = -4;
    let nums2 = [1, -10, 9, 1], limit2 = 100, goal2 = 0;
    pr(minElements(nums, limit, goal));
    pr(minElements(nums2, limit2, goal2));
};

main()