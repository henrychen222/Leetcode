/**
 * 6.14 night
 * https://leetcode.com/problems/distribute-candies-to-people/
 */

/**
 * submit here: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/551/week-3-august-15th-august-21st/3427/
 * 92ms 6.60%
 */

// Accepted --- 100ms 5.41%
const distributeCandies = (candies, num_people) => {
    let n = num_people;
    let res = [];
    let sum = 0;
    let i = 0; // arr index
    let v = 1; // each step candy assigned
    let len = 0;
    while (sum < candies) {
        // console.log(res);
        len = res.length;
        if (len < n) {
            if ((sum + v) <= candies) {
                res.push(v);
                sum += v;
            } else {
                res.push(candies - sum);
                sum += candies - sum;
            }
        } else if (len == n) {
            // console.log(i, sum);
            let idx = i % n;
            v = i + 1;
            // console.log(v)
            if ((sum + v) <= candies) {
                res[idx] += v;
                sum += v;
            } else {
                res[idx] += (candies - sum);
                sum += (candies - sum);
            }
        }
        ++i;
        v++;
    }
    let l = res.length;
    if (l < n) { // candies are not enough for assigning n people
        for (let i = 1; i <= n - l; i++) {
            res.push(0);
        }
    }
    return res;
};

const main = () => {
    let candies = 7,
        num_people = 4;
    let candies2 = 10,
        num_people2 = 3;
    let candies_debug1 = 60,
        num_debug1 = 4;
    let candies_debug2 = 600;
    let num_debug2 = 40;
    console.log(distributeCandies(candies, num_people));
    console.log(distributeCandies(candies2, num_people2));
    /**
     * [1, 2, 3, 4] [1+5, 2, 3, 4] [6, 2 + 6, 3, 4] [6, 8, 3 + 7, 4] [6, 8, 10, 4 + 8]  
     * [6 + 9, 8, 10, 12]  [15, 8 + 10, 10, 12]  [15, 18, 15, 12]
     */
    console.log(distributeCandies(candies_debug1, num_debug1)); // [15,18,15,12]
    console.log(distributeCandies(candies_debug2, num_debug2)); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,5,0,0,0,0,0]
};

main()


////////////////////// 8.20 night ///////////////////////////
// const distributeCandies = (candies, num_people) => {
//     let n = num_people;
//     let res = [];
//     let sum = 0;
//     let i = 1;
//     let round = 0;
//     let len = 0;
//     while (sum < candies) {
//         console.log(res);
//         len = res.length;
//         if (len < n) {
//             if ((sum + i) <= candies) {
//                 res.push(i);
//                 sum += i;
//             } else {
//                 res.push(candies - sum);
//                 sum += candies - sum;
//             }
//         } else if (len == n) {
//             if ((i / n) > 1) round++;
//             console.log(i, sum);
//             i = res[len - 1] + 1; // issue
//             if ((sum + i) <= candies) {
//                 console.log("111111", i - round * n - 1)
//                 res[i - round * n - 1] += i;
//                 sum += i;
//             } else {
//                 res[i - round * n - 1] += (candies - sum);
//                 sum += (candies - sum);
//             }
//         }
//         ++i;
//     }
//     return res;
// };


////////////////////// 6.14 night ///////////////////////////
// // don't know
// const distributeCandies = (candies, num_people) => {
//     let res = [];
//     let sum = 0;
//     for (let i = 1; i <=num_people; i++) {
//         sum += i;
//         if (candies - sum < i) {
//             res.push(candies - sum);
//         } else {
//             res.push(i);
//         }
//     }
//     console.log(sum)
//     return res;
// };