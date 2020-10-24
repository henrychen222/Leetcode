/**
 * 10.21 evening
 * https://leetcode.com/problems/word-search/
 */

// Accepted --- 92ms 94.67%
/**
 * reference:
 * https://leetcode.com/problems/word-search/discuss/148300/C%2B%2B-clean-code-beats-99.7
 * https://leetcode.com/problems/word-search/discuss/27811/My-Java-solution
 */
const exist = (board, word) => {
    let m = board.length;
    let n = board[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == word[0]) {
                if (dfs(board, i, j, word, 0)) {
                    return true;
                }
            }
        }
    }
    return false;
};

const dfs = (board, row, col, word, idx) => {
    let m = board.length;
    let n = board[0].length;
    if (idx == word.length) return true;
    if (row < 0 || col < 0 || row > m - 1 || col > n - 1) return false;
    if (board[row][col] != word[idx]) return false;
    board[row][col] = '*';
    let res = dfs(board, row + 1, col, word, idx + 1) ||
        dfs(board, row - 1, col, word, idx + 1) ||
        dfs(board, row, col + 1, word, idx + 1) ||
        dfs(board, row, col - 1, word, idx + 1);
    board[row][col] = word[idx];
    return res;
};

// const exist = (board, word) => {
//     let m = board.length;
//     let n = board[0].length;
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (board[i][j] == word[0]) {
//                 console.log(i, j)
//                 if (dfs(board, i, j, word, 0)) {
//                     return true;
//                 }
//             }
//         }
//     }
//     return false;
// };

// // issue
// const dfs = (board, row, col, word, s) => {
//     let m = board.length;
//     let n = board[0].length;
//     let idx = s.length;
//     if (s == word) return true;
//     if (row + 1 < m && board[row + 1][col] == word[idx]) {
//         s += word[idx];
//         dfs(board, row + 1, col, word, s);
//     } 
//     if (row - 1 >= 0 && board[row - 1][col] == word[idx]) {
//         s += word[idx];
//         dfs(board, row - 1, col, word, s);
//     } 
//     if (col + 1 < n && board[row][col + 1] == word[idx]) {
//         s += word[idx];
//         dfs(board, row, col + 1, word, s);
//     } 
//     if (col - 1 >= 0 && board[row][col - 1] == word[idx]) {
//         s += word[idx];
//         dfs(board, row, col - 1, word, s);
//     } 
// };

const main = () => {
    let board = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"]
        ],
        word = "ABCCED";
    let board2 = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"]
        ],
        word2 = "SEE";
    let board3 = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"]
        ],
        word3 = "ABCB";
    console.log(exist(board, word));
    console.log(exist(board2, word2));
    console.log(exist(board3, word3));
};

main()