/**
 * 6.14 evening  8.19 night complete
 * https://leetcode.com/problems/happy-number/
 */

// Accepted --- 108ms 104ms
const isHappy5 = (n) => {
    let cnt = 0;
    while (true) {
        let s = n.toString();
        let sum = 0;
        for (const c of s) {
            sum += Number(c) ** 2;
        }
        if (sum == 1) return true;
        n = sum;
        cnt++;
        if (cnt > 5) break; // minimum is 5, 4 will wrong
    }
    return false;
};

// Accepted --- 88ms 37.6MB 62.01%
const isHappy4 = (n) => {
    let cnt = 0;
    while (true) {
        let s = n.toString();
        let sum = 0;
        for (const c of s) {
            sum += Number(c) ** 2;
        }
        if (sum == 1) return true;
        n = sum;
        cnt++;
        if (cnt > 10) break;
    }
    return false;
};

// Accepted --- 100ms 37.5MB 35.70%
const isHappy3 = (n) => {
    let cnt = 0;
    while (true) {
        let s = n.toString();
        let sum = 0;
        for (const c of s) {
            sum += Number(c) ** 2;
        }
        if (sum == 1) return true;
        n = sum;
        cnt++;
        if (cnt > 100) break;
    }
    return false;
};

// Accepted --- 144ms 38.6MB 12.04%
const isHappy2 = (n) => {
    let cnt = 0;
    while (true) {
        let s = n.toString();
        let sum = 0;
        for (const c of s) {
            sum += Number(c) ** 2;
        }
        if (sum == 1) return true;
        n = sum;
        cnt++;
        if (cnt > 1000) break;
    }
    return false;
};

// Accepted --- 240ms 38.7MB 5.19%
const isHappy1 = (n) => {
    let cnt = 0;
    while (true) {
        let s = n.toString();
        let sum = 0;
        for (const c of s) {
            sum += Number(c) ** 2;
        }
        // console.log(sum);
        if (sum == 1) return true;
        n = sum;
        cnt++;
        if (cnt > 10000) break;
    }
    return false;
};

const main = () => {
    let n = 19;
    console.log(isHappy(n));
};

main()


// // need to fix
// const isHappy = (n) => {
//     let nArr = n.toString().split("");
//     console.log(nArr);
//     let sum = 0;
//     for (let i = 0; i < nArr.length; i++) {
//         sum += Number(nArr[i]) ** 2;
//     }
//     console.log(sum)
//     console.log(sum == 1)
//     if (sum == 1) {
//         // console.log("11111")
//         return true;
//     }
//     return isHappy(sum);
// };