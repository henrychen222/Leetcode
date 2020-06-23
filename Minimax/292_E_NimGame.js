/**
 * 6.22 night
 * https://leetcode.com/problems/nim-game/
 */

// Accepted --- 5404ms 36.4MB 5.75%
const canWinNim = (n) => {
    for (let i = 0; i <= n; i++) {
        if (n - 4 * i >= 1 && n - 4 * i <= 3) {
            return true;
        }
    }
    return false;
};

const main = () => {
    let n = 4;
    let n2 = 5;
    let n3 = 6;
    let n4 = 7;
    let n5 = 8;
    console.log(canWinNim(n));
    console.log(canWinNim(n2));
    console.log(canWinNim(n3));
    console.log(canWinNim(n4));
    console.log(canWinNim(n5));
};

main()