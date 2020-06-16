/**
 * 6.15 evening
 * https://leetcode.com/problems/divisor-game/
 */

// need to fix
const divisorGame = (N) => {
    let flag = 'A';
    for (let x = 1; x < N; x++) {
        if (N % x == 0 && N - x >= 0) {
            N = N - x;
            flag = 'B';
            divisorGame(N);
        }
    }
    console.log(N)
    console.log(flag);
};

const main = () => {
    let N = 2;
    let N2 = 3;
    // console.log(divisorGame(N));
    console.log(divisorGame(N2)); // Alice 1 Bob 1 Alice lose  Alice
};

main()