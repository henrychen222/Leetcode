/**
 * 03/19/22 morning
 * https://leetcode.com/contest/biweekly-contest-74/problems/minimum-white-tiles-after-covering-with-carpets/
 */

const pr = console.log;

const MAX = Number.MAX_SAFE_INTEGER;
const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(MAX); d.push(t); } return d; };

// Accepted
/*
  referncen: sserxhs
  https://leetcode-cn.com/circle/discuss/bdMSIh/

  dp[i][j]: min white(1's) till index i used j carpets
*/
const minimumWhiteTiles2 = (s, numCarpets, carpetLen) => {
    let n = s.length, dp = initialize2DArray(n + 1, numCarpets + 1);
    for (j = 0; j <= numCarpets; j++) dp[0][j] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= numCarpets; j++) {
            dp[i][j] = dp[i - 1][j] + (s[i - 1] - '0'); // ith floor doesn't have carpet
            // pr("11", dp[i][j])
            if (j > 0) {
                dp[i][j] = Math.min(dp[i][j], dp[Math.max(0, i - carpetLen)][j - 1]); // dp[i - carpetLen][j - 1] -> dp[i][j] used one carpet
            }
            // pr("22", dp[i][j])
        }
    }
    // pr(dp)
    return dp[n][numCarpets];
};

/////////////////////////////////////////////////////////////////////////////////
const cutMaxConsecutive = (a_or_s) => {
    let d = [], start = 0, n = a_or_s.length;
    for (let i = 0; i + 1 < n; i++) {
        if (a_or_s[i + 1] != a_or_s[i]) {
            d.push([a_or_s.slice(start, i + 1), start]); start = i + 1;
        }
    }
    d.push([a_or_s.slice(start), start]);
    return d;
};

/*
   10110101
   10000101
   10000001
*/ 
// WA 
// first submission 2694/2698
// final submit 2696/2698 (fuck should try two more)
const minimumWhiteTiles = (s, numCarpets, carpetLen) => {
    let n = s.length;
    while (numCarpets) { // each time replace cover longest white
        if (allBlack(s)) return 0;
        let d = cutMaxConsecutive(s).filter(x => x[0][0][0] == '1');
        // pr("d", s, d);
        d.sort((x, y) => y[0].length - x[0].length);
        pr(d[0][0].length, d[1][0].length, d[2][0].length)
        let start = d[0][1], endNext = start + carpetLen <= n ? start + carpetLen : n;
        let replacedBlack = '0'.repeat(carpetLen);
        pr("sorted d", s, d, start, endNext);
        s = s.slice(0, start) + replacedBlack + s.slice(endNext);
        numCarpets--;
        // pr("updated", s, numCarpets);
    }
    pr(s)
    return white(s);
};

const white = (s) => {
    let cnt = 0;
    for (const c of s) {
        if (c == '1') cnt++;
    }
    return cnt;
};
const allBlack = (s) => {
    for (const c of s) {
        if (c == '1') return false;
    }
    return true;
};

const main = () => {
    let floor = "10110101", numCarpets = 2, carpetLen = 2;
    let floor2 = "11111", numCarpets2 = 2, carpetLen2 = 3;
    let floor_debug1 = "0001100111110001111111110111010110100111000111111001011011010000011011101100001011111111111111111011110101111011010101001011111111111111111011110101000101010010101111111011011111111101100111111101101111000011101101001110011011100010100111111111111111101011001111101110101110111001111111111110110111111101011110111000111011011010111011111111111111111011111011011111111110001110001100111001101101011111111111111111101011011111101101100111111111111111"
    numCarpet_debug1 = 8,
        carpetLen_debug1 = 16;
    let floor_debug2 = "11101111101011111011011111111101111101111011111000110111010000011110111000011110110000011110110101111111011100001011111111010011110110011111110111001001111111111001111111111111111111111111011010100011011111011111011110001010110100100010001010110111110111111111111111111111111101111010101100111111110101111111111101110010111111001111111111100011011111111111111111111111111011100111010111111111010110110100111100111011011001101011100010111111110000110111111001111101111111111111111111111111100011111001101011101111111111111010011011001101110110101011111111001101110110101111101111111111001010010111111111011111101111111111111111111111111111010011100101011101011111100101110110011101110111111110110000101010111100100111010110110110101101111101111011100110111111011111110011010111100011001100111111011100011"
    numCarpet_debug2 = 7,
        carpetLen_debug2 = 24;
    let floor_debug3 = "111111111101001101111110001011111111111111111111011111111111111111111101101011111111111111101100010010111111100111110010110111110111111111100011111011111011111111111110100110101011111111110101001111101111110111111111111101"
    numCarpet_debug3 = 43
    carpetLen_debug3 = 5;
    let floor_debug4 = "11010110"
    numCarpet_debug4 = 12
    carpetLen_debug4 = 4;
    // pr(minimumWhiteTiles(floor, numCarpets, carpetLen));
    // pr(minimumWhiteTiles(floor2, numCarpets2, carpetLen2));
    pr(minimumWhiteTiles(floor_debug1, numCarpet_debug1, carpetLen_debug1)); // 199
    // pr(minimumWhiteTiles(floor_debug2, numCarpet_debug2, carpetLen_debug2)); // 423
    // pr(minimumWhiteTiles(floor_debug3, numCarpet_debug3, carpetLen_debug3)); // 0
    // pr(minimumWhiteTiles(floor_debug4, numCarpet_debug4, carpetLen_debug4)); // 0
};

main()