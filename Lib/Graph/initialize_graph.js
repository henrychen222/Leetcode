/**
 * 02/19/21 night created
 * https://atcoder.jp/contests/abc190/submissions/20270717
 */

const initializeGraph = (n) => {
    // let G = Array(n).fill([]); // wrong, have issue
    let G = [];
    for (let i = 0; i < n; i++) {
        G.push([]);
    }
    return G;
};