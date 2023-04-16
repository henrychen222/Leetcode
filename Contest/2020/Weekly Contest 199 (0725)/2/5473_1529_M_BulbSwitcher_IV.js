/**
 * 7.25 evening
 * https://leetcode.com/contest/weekly-contest-199/problems/bulb-switcher-iv/
 * https://leetcode.com/problems/bulb-switcher-iv/discuss/758340/javascript-normal-string-and-xor-solutions
 */

// Accepted --- 88ms 41.1MB 85.34%
const minFlips_uwi = (target) => {
    let arr = target.split("");
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i - 1] != arr[i]) res++;
        if (i == 0 && arr[i] == '1') res++;
    }
    return res;
};

// Accepted --- 80ms 38.9MB 98.28%
const minFlips_uwi_refine = (target) => {
    let res = 0;
    for (let i = 0; i < target.length; i++) {
        if (i > 0 && target[i - 1] != target[i]) res++;
        if (i == 0 && target[i] == '1') res++;
    }
    return res;
};

// Accepted --- 84ms 38.2MB 93.97%
const minFlips_natsugiri = (target) => {
    let res = 0;
    for (let i = 0; i < target.length; i++) {
        if (res % 2 != target[i] - '0') res++;
    }
    return res;
};

/////////////////////////////// XOR Solution ///////////////////////////////////////
// Accepted --- 84ms 39.2MB 93.97%
const minFlips_awice = (target) => {
    let cur, res = 0;
    for (const c of target) {
        if (Number(c) ^ cur) {
            res++;
            cur ^= 1;
        }
    }
    return res;
};

// Accepted --- 92ms 39.1MB 82.76%
const minFlips_kmjp = (target) => {
    let cur = 0;
    let res = 0;
    for (const c of target) {
        if (c % 2 != cur) {
            cur ^= 1;
            res++;
        }
    }
    return res;
};

// Accepted --- 92ms 39.5MB 82.76%
const minFlips_huahua = (target) => {
    let cur = 0;
    let res = 0;
    for (const c of target) {
        if (c - '0' != cur) {
            cur ^= 1;
            res++;
        }
    }
    return res;
};


////////////////////////////////////////////////////////////////////////////////////
const main = () => {
    let target = "10111";
    let target2 = "101";
    let target3 = "00000";
    let target4 = "001011101";
    console.log(minFlips_uwi(target));
    console.log(minFlips_uwi(target2));
    console.log(minFlips_uwi(target3));
    console.log(minFlips_uwi(target4));

    console.log("");
    console.log(minFlips_uwi_refine(target));
    console.log(minFlips_uwi_refine(target2));
    console.log(minFlips_uwi_refine(target3));
    console.log(minFlips_uwi_refine(target4));

    console.log("");
    console.log(minFlips_natsugiri(target));
    console.log(minFlips_natsugiri(target2));
    console.log(minFlips_natsugiri(target3));
    console.log(minFlips_natsugiri(target4));

    console.log("");
    console.log(minFlips_awice(target));
    console.log(minFlips_awice(target2));
    console.log(minFlips_awice(target3));
    console.log(minFlips_awice(target4));

    console.log("");
    console.log(minFlips_kmjp(target));
    console.log(minFlips_kmjp(target2));
    console.log(minFlips_kmjp(target3));
    console.log(minFlips_kmjp(target4));

    console.log("");
    console.log(minFlips_huahua(target));
    console.log(minFlips_huahua(target2));
    console.log(minFlips_huahua(target3));
    console.log(minFlips_huahua(target4));
};

main()