/**
 * 11/13/21 evening    11/14/21 evening fix issue of memory out
 * https://leetcode.com/contest/weekly-contest-267/problems/decode-the-slanted-ciphertext/
 */

const initialize2DArrayNew = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(0); data.push(tmp); } return data; };
const diagonal_traverse_topLeft_to_bottomRight = (g) => { // think in middle diagonal
    let n = g.length;
    let m = g[0].length;
    let top = [];
    for (let j = 0; j < m; j++) { // first row as starting point
        let tmp = [];
        let share = 0; // shared increase control
        while (share < n && j + share < m) { // read Diagonally
            tmp.push(g[share][j + share]); // row++ col++
            share++;
        }
        if (tmp.length > 0) top.push(tmp);
    }
    return top;
};

// Accepted --- 180ms
const decodeCiphertext = (s, n) => {
    let sn = s.length;
    if (n == 1) return s; // without this line Memory out 37/39
    let m = sn / n;  
    let g = initialize2DArrayNew(n, m);
    // pr(n, m, g);
    let idx = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            g[i][j] = s[idx];
            idx++;
        }
    }
    // pr(g);
    let res = "";
    let d = diagonal_traverse_topLeft_to_bottomRight(g);
    let start = 0; end = d.length - 1;
    for (let i = d.length - 1; i >= start; i--) {
        if (hasChar(d[i])) {
            end = i;
            break;
        }
    }
    // pr(d, d.length);
    // pr("start", start, d[start], 'end', end, d[end]);
    for (let i = start; i <= end; i++) {
        if (i == end && start != end) {
            let curEnd = d[i].length - 1;
            for (let j = curEnd; j >= 0; j--) {
                let c = d[i][j];
                if (c != ' ') {
                    curEnd = j;
                    break;
                }
            }
            for (let j = 0; j <= curEnd; j++)  res += d[i][j];
        } else {
            for (const c of d[i]) res += c;
        }
    }
    // pr(res, res.length)
    return res;
};

const hasChar = (a) => {
    for (const c of a) {
        if (c != ' ') return true;
    }
    return false;
};

const pr = console.log;
const main = () => {
    let encodedText = "ch   ie   pr", rows = 3;
    let encodedText2 = "iveo    eed   l te   olc", rows2 = 4;
    let encodedText3 = "coding", rows3 = 1;
    let encodedText4 = " b  ac", rows4 = 2;
    let encodedText_debug1 = "iveo    eed   l t    olc", rows_debug1 = 4;
    let encodedText_debug2 = "whurqonhhaymkrxebpdagccsjvoontnejzqkmqdedwkbjsas t kga kjjchpxkkuraiyvmsx gvvfbkfx yrpydxajzmmelyxy b", rows_debug2 = 1;
    let encodedText_debug3 = "   a", rows_debug3 = 2;
    let encodedText_debug4 = "lxyu zmnhf           iujouwmxum           imoq jeuxr           zohpkggffc           ezupzmbpj            eawtq pe y           bgwdjsmfpt           yp dycnnqf           khkxrjyzri           sfnmiayukz           zzpbxvzrdf            vmtivrjq", rows_debug4 = 12;
    pr(decodeCiphertext(encodedText, rows)) // len: 6
    pr(decodeCiphertext(encodedText2, rows2)) // len: 15
    pr(decodeCiphertext(encodedText3, rows3)) // len: 6
    pr(decodeCiphertext(encodedText4, rows4)) // // len: 4
    pr(decodeCiphertext(encodedText_debug1, rows_debug1)) // len: 14
    pr(decodeCiphertext(encodedText_debug2, rows_debug2)) // len: 101
    pr(decodeCiphertext(encodedText_debug3, rows_debug3)) // len: 2
    pr(decodeCiphertext(encodedText_debug4, rows_debug4)) // len: 119
};

main()