/**
 * 8.28 evening
 * https://leetcode.com/problems/available-captures-for-rook/
 */

// Accepted --- 68ms 81.56%
const numRookCaptures = (board) => {
    let rook = getRook(board);
    let row = rook[0];
    let col = rook[1];
    let cnt = 0;
    for (let i = row; i < 8; i++) { // down
        if (board[i][col] == 'B') {
            break;
        } else {
            if (board[i][col] == 'p') {
                cnt++;
                break;
            }
        }
    }
    for (let i = row; i >= 0; i--) { // top
        if (board[i][col] == 'B') {
            break;
        } else {
            if (board[i][col] == 'p') {
                cnt++;
                break;
            }
        }
    }
    for (let j = col; j < 8; j++) { // right
        if (board[row][j] == 'B') {
            break;
        } else {
            if (board[row][j] == 'p') {
                cnt++;
                break;
            }
        }
    }
    for (let j = col; j >= 0; j--) { // left
        if (board[row][j] == 'B') {
            break;
        } else {
            if (board[row][j] == 'p') {
                cnt++;
                break;
            }
        }
    }
    return cnt;
};

const getRook = (board) => {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] == 'R') {
                row = i;
                col = j;
                return [row, col];
            }
        }
    }
};

const main = () => {
    let board = [
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", "p", ".", ".", ".", "."],
        [".", ".", ".", "R", ".", ".", ".", "p"],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", "p", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."]
    ];
    let board2 = [
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", "p", "p", "p", "p", "p", ".", "."],
        [".", "p", "p", "B", "p", "p", ".", "."],
        [".", "p", "B", "R", "B", "p", ".", "."],
        [".", "p", "p", "B", "p", "p", ".", "."],
        [".", "p", "p", "p", "p", "p", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."]
    ];
    let board3 = [
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", "p", ".", ".", ".", "."],
        [".", ".", ".", "p", ".", ".", ".", "."],
        ["p", "p", ".", "R", ".", "p", "B", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", "B", ".", ".", ".", "."],
        [".", ".", ".", "p", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."]
    ];
    console.log(numRookCaptures(board));
    console.log(numRookCaptures(board2));
    console.log(numRookCaptures(board3));
};

main()