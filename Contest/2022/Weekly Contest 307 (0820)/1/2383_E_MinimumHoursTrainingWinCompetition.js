/**
 * 08/20/22 evening
 * https://leetcode.com/contest/weekly-contest-307/problems/minimum-hours-of-training-to-win-a-competition/
 */

const pr = console.log;

const sm = (a) => a.reduce(((x, y) => x + y), 0);

// Accepted  10:31-11:05(34min) 11:31-11:55 24min  total 58min fuck
const minNumberOfHours = (initialEnergy, initialExperience, energy, experience) => {
    let res = calEnergy(initialEnergy, energy), res2 = calExperience(initialExperience, experience);
    // let res = sm(energy) + 1 - initialEnergy, res2 = calExperience(initialExperience, experience);
    return res + res2;
};

/*
1   cur = 5   train = 0  
4   cur = 4   need cur = 5  train = 1
3   cur = 1
2
*/
const calEnergy = (start, a) => {
    let cur = start, res = 0;
    for (const x of a) {
        // pr("energy", x, 'cur', cur, 'res', res)
        if (cur > x) {
            cur -= x;
        } else {
            let train = x + 1 - cur;
            cur = 1;
            res += train;
            // pr("train", train)
        }
    }
    // pr("res", res)
    return res;
};

const calExperience = (start, a) => {
    let cur = start, res = 0;
    for (const x of a) {
        // pr("experience", x, 'cur', cur, 'res', res)
        if (cur > x) {
            cur += x;
        } else {
            let train = x + 1 - cur;
            cur = x + 1 + x;
            res += train;
        }
    }
    // pr("res2", res)
    return res;
};

// const minNumberOfHours2 = (initialEnergy, initialExperience, a, b) => {
//     let cur = initialEnergy, cur2 = initialExperience, res = 0, n = a.length;
//     for (let i = 0; i < n; i++) {
//         pr("energy", a[i], 'cur', cur, "experience", b[i], 'cur2', cur2)
//         if (cur > a[i]) {
//             cur -= a[i];
//             if (cur2 > b[i]) {
//                 pr("1111")
//                 cur2 += b[i];
//             } else {
//                 pr("222")
//                 let train2 = b[i] + 1 - cur2;
//                 cur2 = b[i] + 1 + b[i];
//                 res += train2;
//             }
//         } else {
//             let train = a[i] + 1 - cur;
//             cur = a[i] + 1;
//             res += train;
//             if (cur2 > b[i]) {
//                 pr("333")
//                 cur2 += b[i];
//             } else {
//                 pr("444")
//                 let train2 = b[i] + 1 - cur2;
//                 cur2 = b[i] + 1 + b[i];
//                 res += train2;
//             }
//         }
//         pr("after", cur, cur2)
//     }
//     return res;
// };

const main = () => {
    let initialEnergy = 5, initialExperience = 3, energy = [1, 4, 3, 2], experience = [2, 6, 3, 1];
    let initialEnergy2 = 2, initialExperience2 = 4, energy2 = [1], experience2 = [3];
    let initialEnergy_debug1 = 1, initialExperience_debug1 = 1, energy_debug1 = [1, 1, 1, 1], experience_debug1 = [1, 1, 1, 50];
    pr(minNumberOfHours(initialEnergy, initialExperience, energy, experience))
    pr(minNumberOfHours(initialEnergy2, initialExperience2, energy2, experience2))
    pr(minNumberOfHours(initialEnergy_debug1, initialExperience_debug1, energy_debug1, experience_debug1)) // 51
};

main()