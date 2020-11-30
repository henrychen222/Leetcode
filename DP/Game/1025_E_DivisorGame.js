/**
 * 6.15 evening  8.28 night complete
 * https://leetcode.com/problems/divisor-game/
 */

// Accepted --- 68ms 89.87%
const divisorGame = (N) => {
    let cnt = 0;
    while (true) {
        if (N == 1) break;
        for (let x = 1; x < N; x++) {
            if (N % x == 0) {
                N = N - x;
                cnt++;
                break;
            }
        }
    }
    if (cnt % 2 == 1) return true;
    return false;
};


// Accepted --- 76ms 59.80%
/**
 * reference: 
 * https://leetcode.com/problems/divisor-game/discuss/813347/One-Iine-code-99.99-fast-and-99.99-less-memory-use
 * https://leetcode.com/problems/divisor-game/discuss/814405/100-faster-i-got-lmao
 */
const divisorGame2 = (N) => {
    return N % 2 == 0;
};

// Accepted --- 84ms 36.60%
const divisorGame2_modify = (N) => {
    if (N % 2 == 0) return true;
    return false;
};

const main = () => {
    let N = 2;
    let N2 = 3;
    let debug1 = 5;
    console.log(divisorGame(N));
    console.log(divisorGame(N2)); // Alice 1 Bob 1 Alice lose  Alice
    console.log(divisorGame(debug1)); // false
};

main()


// need to fix
// const divisorGame = (N) => {
//     let flag = 'A';
//     for (let x = 1; x < N; x++) {
//         if (N % x == 0 && N - x >= 0) {
//             N = N - x;
//             flag = 'B';
//             divisorGame(N);
//         }
//     }
//     console.log(N)
//     console.log(flag);
// };