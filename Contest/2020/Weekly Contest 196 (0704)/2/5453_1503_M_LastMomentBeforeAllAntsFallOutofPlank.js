/**
 * 7.4 evening
 * https://leetcode.com/contest/weekly-contest-196/problems/last-moment-before-all-ants-fall-out-of-a-plank/
 */

// Accepted --- 84ms 39.2MB 100.00%
// https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/discuss/720130/C%2B%2BJava%3A-two-way-street
// https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/discuss/720189/JavaC%2B%2BPython-Ants-Keep-Walking-O(N)
const getLastMoment_solution = (n, left, right) => {
    let res = 0;
    for (const l of left) {
        res = Math.max(res, l);
    }
    for (const r of right) {
        res = Math.max(res, n - r);
    }
    return res;
};

const getLastMoment = (n, left, right) => {
    let data = [];
    for (const l of left) {
        data.push([l, 'l']);
    }
    for (const r of right) {
        data.push([r, 'r']);
    }
    console.log("data", data);
    for (let i = 0; i < data.length; i++) {
        if (data[i][1] == 'r') data[i][0]++;
        if (data[i][1] == 'l') data[i][0]--;
        if (data[i][0] == 0 || data[i][0] == data.length) data.splice(i, 1);
    }

    let stack = [...data].sort((a, b) => a[0] - b[0]);
    console.log("stack", stack);
    for (let j = 1; j < stack.length; j++) {
        if (stack[j - 1][0] == stack[j][0]) {
            let temp = stack[j - 1][1];
            stack[j - 1][1] = stack[j][1];
            stack[j][1] = temp;
        }
    }
    console.log("stack", stack);
    for (let i = 0; i < stack.length; i++) {
        if (stack[i][1] == 'r') stack[i][0]++;
        if (stack[i][1] == 'l') stack[i][0]--;
    }
    console.log("stack", stack);
    let currentData = stack;
    console.log("currentData", currentData);
};

const main = () => {
    let n = 4, left = [4, 3], right = [0, 1];
    let n2 = 7, left2 = [], right2 = [0, 1, 2, 3, 4, 5, 6, 7];
    let n3 = 7, left3 = [0, 1, 2, 3, 4, 5, 6, 7], right3 = [];
    let n4 = 9, left4 = [5], right4 = [4];
    let n5 = 6, left5 = [6], right5 = [0];
    // console.log(getLastMoment(n, left, right));
    // console.log(getLastMoment(n2, left2, right2));
    // console.log(getLastMoment(n3, left3, right3));
    // console.log(getLastMoment(n4, left4, right4));
    // console.log(getLastMoment(n5, left5, right5));


    //////////////////////////////////////////////
    console.log(getLastMoment_solution(n, left, right));
    console.log(getLastMoment_solution(n2, left2, right2));
    console.log(getLastMoment_solution(n3, left3, right3));
    console.log(getLastMoment_solution(n4, left4, right4));
    console.log(getLastMoment_solution(n5, left5, right5));
};

main()