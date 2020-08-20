/**
 * 8.19 night
 * https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/
 */

// Accepted --- 96ms 36.6MB 21.25%
const tictactoe = (moves) => {
    let A = [];
    let B = [];
    for (let i = 0; i < moves.length; i++) {
        if (i % 2 == 0) {
            A.push(moves[i]);
        } else {
            B.push(moves[i]);
        }
    }
    // console.log(A);
    // console.log(B);
    if (check(A)) {
        return 'A';
    } else if (check(B)) {
        return 'B';
    } else if (!check(A) && !check(B) && moves.length == 9) {
        return 'Draw';
    } else {
        return 'Pending';
    }
};

const check = (player) => {
    let n = player.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (isWin(player[i], player[j], player[k])) {
                    return true;
                }
            }
        }
    }
    return false;
};

const isWin = (a, b, c) => {
    let k1 = (a[1] - b[1]) / (a[0] - b[0]);
    let k2 = (b[1] - c[1]) / (b[0] - c[0]);
    if ((a[0] == b[0] && b[0] == c[0]) || (a[1] == b[1] && b[1] == c[1]) || (k1 == k2)) return true;
    return false;
};

const main = () => {
    let moves = [
        [0, 0],
        [2, 0],
        [1, 1],
        [2, 1],
        [2, 2]
    ];
    let moves2 = [
        [0, 0],
        [1, 1],
        [0, 1],
        [0, 2],
        [1, 0],
        [2, 0]
    ];
    let moves3 = [
        [0, 0],
        [1, 1],
        [2, 0],
        [1, 0],
        [1, 2],
        [2, 1],
        [0, 1],
        [0, 2],
        [2, 2]
    ];
    let moves4 = [
        [0, 0],
        [1, 1]
    ];
    console.log(tictactoe(moves));
    console.log(tictactoe(moves2));
    console.log(tictactoe(moves3));
    console.log(tictactoe(moves4));
};

main()