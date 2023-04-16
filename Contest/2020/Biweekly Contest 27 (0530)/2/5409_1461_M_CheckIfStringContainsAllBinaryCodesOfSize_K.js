/**
 * https://leetcode.com/contest/biweekly-contest-27/problems/check-if-a-string-contains-all-binary-codes-of-size-k/
 * 5.30 morning
 */

// Accepted 232ms 54.5MB 50.00%
const hasAllCodes_awice = (s, k) => {
    let n = s.length;
    let seen = new Set();
    for (let i = 0; i < n - k + 1; i++) {
        // example 1  i < 7  (0,2): 00 (1,3):01   (2,4):11   (3,5):10   (4,6):01   (5, 7):11   (6,8):10
        seen.add(s.slice(i, i + k));
    }
    return seen.size === Math.pow(2, k);
    // return seen.size === 2 ** k;   // 236ms 54.5 MB 50.00%
};

// Accepted --- 204ms 48.7 MB 100.00%
const hasAllCodes_y0105w49 = (s, k) => {
    let ss = new Set();
    for (let i = 0; i + k <= s.length; i++) {
        let x = 0;
        for (let j = i; j < i + k; j++) {
            x <<= 1;
            x += (s[j] - '0');
        }
        ss.add(x);
    }
    return ss.size == (1 << k);
}

// Accepted --- 152 msms 48.7MB 100.00%
const hasAllCodes_ahyangyi = (s, k) => {
    let v = [];
    let tmp = 0;
    for (let i = 0; i < s.length; ++i) {
        tmp = (tmp * 2 + (s[i] == '1')) & ((1 << k) - 1);
        if (i >= k - 1) {
            v[tmp] = true;
        }
    }
    for (let i = 0; i < (1 << k); ++i) {
        if (!v[i]) return false;
    }
    return true;
}

// Accepted --- 84ms 42.3MB 100.00%
const hasAllCodes_skywalkert = (s, k) => {
    let n = s.length;
    let all = 1 << k;
    if (n - k + 1 < all) return false;
    let vis = [];
    fillArr(vis, all);
    for (let i = 0, msk = 0; i < n; ++i) {
        msk = (msk << 1 | (s[i] == '1')) & (all - 1);
        if (i >= k - 1) {
            vis[msk] = 1;
        }
    }
    for (const x of vis) {
        if (!x) return false;
    }
    return true;
};

const fillArr = (arr, n) => {
    for (let i = 0; i < n; i++) { // fixed here: should be <  not <=
        arr.push(0);
    }
};

const main = () => {
    let s = "00110110", k = 2;
    let s2 = "00110", k2 = 2;
    let s3 = "0110", k3 = 1;
    let s4 = "0110", k4 = 2;
    let s5 = "0000000001011100", k5 = 4

    let s_debug1 = "011101100101110101101000011111101011111101110100111100010000010110010010011100110001110010101101011010010001101111000111110000001010100101111001111010110001111011001110100010001111000111010001111100101011100001001011101100010101010110001011110101001101001001111101000100011101110100100100101101110000000110001011100100111111001000100100010011001000101101100010010010001111010111010011110111110001010100000110000111010110001100100110111000111010111000010100100100101011001111010110010101110101000011011101000110001001100111100011000100110010101100001111000100101001111001100001010100100100110100101100111000110010110101010110010110001111010110101111011011100111001010101001011000101101110100001110011110001011000011100011111001110011111101110001110010000111010011110001011010100101110010110110100011111011110010100011111000000001011100110000010101110110111";
    let k_debug1 = 7;

    console.log(hasAllCodes_awice(s, k));
    console.log(hasAllCodes_awice(s2, k2));
    console.log(hasAllCodes_awice(s3, k3));
    console.log(hasAllCodes_awice(s4, k4));
    console.log(hasAllCodes_awice(s5, k5));

    console.log("");
    console.log(hasAllCodes_y0105w49(s, k));
    console.log(hasAllCodes_y0105w49(s2, k2));
    console.log(hasAllCodes_y0105w49(s3, k3));
    console.log(hasAllCodes_y0105w49(s4, k4));
    console.log(hasAllCodes_y0105w49(s5, k5));
    console.log(hasAllCodes_y0105w49(s_debug1, k_debug1));

    console.log("");
    console.log(hasAllCodes_ahyangyi(s, k));
    console.log(hasAllCodes_ahyangyi(s2, k2));
    console.log(hasAllCodes_ahyangyi(s3, k3));
    console.log(hasAllCodes_ahyangyi(s4, k4));
    console.log(hasAllCodes_ahyangyi(s5, k5));
    console.log(hasAllCodes_ahyangyi(s_debug1, k_debug1));

    console.log("");
    console.log(hasAllCodes_skywalkert(s, k));
    console.log(hasAllCodes_skywalkert(s2, k2));
    console.log(hasAllCodes_skywalkert(s3, k3));
    console.log(hasAllCodes_skywalkert(s4, k4));
    console.log(hasAllCodes_skywalkert(s5, k5));
    console.log(hasAllCodes_skywalkert(s_debug1, k_debug1));  // debug
};

main()