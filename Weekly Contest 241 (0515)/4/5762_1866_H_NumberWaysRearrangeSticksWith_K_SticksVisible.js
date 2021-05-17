/**
 * 05/15/21 evening
 * https://leetcode.com/contest/weekly-contest-241/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/
 */

const pr = console.log;


let perm, usedChars, K;
const permute = (nums) => {
    perm = 0;
    usedChars = [];
    return helper(nums);
};

const helper = (input) => {
    let ch;
    for (let i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
            let tmp = usedChars.slice();
            // pr(tmp);
            if (ok(tmp)) perm++;
        }
        helper(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return perm;
};

const ok = (a) => {
    let cnt = 1;
    let pre = a[0];
    for (const e of a) {
        if (e > pre) {
            cnt++;
            pre = e;
        }
    }
    return cnt == K;
};

// TLE
const rearrangeSticks = (n, k) => {
    K = k;
    let a = [];
    for (let i = 1; i <= n; i++) a.push(i)
    return permute(a);
};

const main = () => {
    let n = 3, k = 2;
    let n2 = 5, k2 = 5;
    let n3 = 20, k3 = 11;
    pr(rearrangeSticks(n, k));
    pr(rearrangeSticks(n2, k2));
    pr(rearrangeSticks(n3, k3));
};

main()