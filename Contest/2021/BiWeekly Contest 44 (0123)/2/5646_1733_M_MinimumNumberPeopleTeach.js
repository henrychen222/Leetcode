/**
 * 1.23 morning
 * https://leetcode.com/contest/biweekly-contest-44/problems/minimum-number-of-people-to-teach/
 */

// WA
const minimumTeachings = (n, languages, friendships) => {
    let res = 0;
    for (let l = 1; l <= n; l++) {
        let teach = 0;
        let cl = [...languages];
        for (const fr of friendships) {
            let u = fr[0];
            let v = fr[1];
            let lanU = cl[u - 1];
            let lanV = cl[v - 1];
            let mix = lanU.concat(lanV);
            if (getFrequency(mix, l) >= 2) continue;
            teach++;
            cl[u - 1].push(l);
            cl[v - 1].push(l);
        }
        // console.log(teach);
        res = Math.max(res, teach);
    }
    return res;
};

// const minimumTeachings = (n, languages, friendships) => {
//     let data = [];
//     for (const fr of friendships) {
//         let u = fr[0];
//         let v = fr[1];
//         let lanU = languages[u - 1];
//         let lanV = languages[v - 1];
//         let mix = lanU.concat(lanV);
//         data.push(mix);
//     }
//     console.log(data);
//     let res = Number.MAX_SAFE_INTEGER;
//     for (let l = 1; l <= n; l++) {
//         let teach = 0;
//         let copy = [...data];
//         for (let d of copy) {
//             if (getFrequency(d, l) >= 2) continue;
//             teach++;
//             d.push(l);
//         }
//         // console.log(copy);
//         res = Math.min(res, teach);
//     }
//     return res;
// };

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let n = 2, languages = [[1], [2], [1, 2]], friendships = [[1, 2], [1, 3], [2, 3]];
    let n2 = 3, languages2 = [[2], [1, 3], [1, 2], [3]], friendships2 = [[1, 4], [1, 2], [3, 4], [2, 3]];
    console.log(minimumTeachings(n, languages, friendships));
    console.log(minimumTeachings(n2, languages2, friendships2));
};

main()

// const minimumTeachings = (n, languages, friendships) => {
//     let m = languages.length;
//     let res = Number.MAX_SAFE_INTEGER;
//     for (const fr of friendships) {
//         let u = fr[0];
//         let v = fr[1];
//         let lanU = languages[u - 1];
//         let lanV = languages[v - 1];
//         let mix = lanU.concat(lanV);
//         let unique = [...new Set(mix)];
//         let teach = 0;
//         for (let l = 1; l <= n; l++) {
//             if (unique.length == lanU.length + lanV.length) continue;
//             teach++;
//         }
//         res = Math.min(res, teach);
//     }
//     return res;
// };