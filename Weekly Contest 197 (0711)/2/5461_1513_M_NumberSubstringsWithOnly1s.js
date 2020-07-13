/**
 * 7.11 evening
 * https://leetcode.com/contest/weekly-contest-197/problems/number-of-substrings-with-only-1s/
 */


// const numSub_xx = (s) => {
//     let cnt = 0;
//     let i = 0;
//     let n = s.length;
//     while (i < n) {
//         let j = i + 1;
//         for (; j < n && s[j] == s[i]; j++) {
//             if (s[i] == '1') {
//                 let x = j - i;
//                 cnt += x * (x + 1) / 2 % 1000000007;
//                 cnt %= 1000000007;
//             }
//         }
//         i = j;
//     }
//     return cnt % 1000000007;
// };

// Accepted --- 76ms 37.7MB 100.00%
const numSub_liouzhou_101 = (s) => {
    let n = s.length;
    let res = 0;
    for (let i = 0; i < n; ++i) {
        if (s[i] == '1') {
            if (i > 0 && s[i - 1] == '1') continue;
            let j = i;
            while (j < n && s[j] == '1') j++;
            let x = j - i;
            res += x * (x + 1) / 2;
        }
    }
    return res % 1000000007;
};


// Accpted --- 152ms 38MB 100.00%
const numSub_natsugiri = (s) => {
    let cnt = 0;
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '1') {
            cnt++;
            ans += cnt;
        } else {
            cnt = 0;
        }
    }
    return ans % 1000000007;
};

// Time limit 54/56 test cases
const numSub = (s) => {
    let cnt = 0;
    // let data = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '1') {
            for (let j = i + 1; j <= s.length; j++) {
                // data.push(s.slice(i, j + 1));
                cnt++;
                if (s[j] == '0') {
                    break;
                }
            }
        }
    }
    // console.log(data);
    return cnt % 1000000007;
};

// Time limit 40/56 test cases
const numSub1 = (s) => {
    let cnt = 0;
    let data = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '1') {
            for (let j = i + 1; j <= s.length; j++) {
                let sub = s.slice(i, j);
                data.push(sub);
            }
        }
    }
    for (const i of data) {
        if ([...new Set(i)] == '1') {
            cnt++;
        }
    }
    return cnt % 1000000007;
};

const isOnly1s = (arr) => {
    for (const i of arr) {
        if (i == '0') {
            return false;
        }
    }
    return true;
};

const main = () => {
    let s = "0110111";
    let s2 = "101";
    let s3 = "111111";
    let s4 = "000";
    let debug1 = "001010001111111011100101111111010001111111111100110100111011010101011111011101010110000110110011111010111100111010111001111011111000110110011001011010000000111111101001011100110111111100000111110011011001011111110011100000111001110011111100101010111001001111111010010111011001111111010111111111010011001111111001011111001011110100000110100100101100010010001001011010101100110100000001101101100110010011111001110111011011111001100011100111111011111001110011011001110111101001101110111101011011001100011010001100101101111011010000101110110110010100011111101010101101101001111001001111011110001110001011101101111011111111111010101001110111001111010101011100010101110001101100111000110000111011101111111111110111011100000010101001111011110010010111101011001101001110010101010111100111010011111100101111001100111000001010111111110110001011110001011001111";
    console.log(numSub(s));
    console.log(numSub(s2));
    console.log(numSub(s3));
    console.log(numSub(s4));
    console.log(numSub(debug1));

    console.log("")
    console.log(numSub(s));
    console.log(numSub(s2));
    console.log(numSub(s3));
    console.log(numSub(s4));
    console.log(numSub(debug1));

    console.log("")
    console.log(numSub_liouzhou_101(s));
    console.log(numSub_liouzhou_101(s2));
    console.log(numSub_liouzhou_101(s3));
    console.log(numSub_liouzhou_101(s4));
    console.log(numSub_liouzhou_101(debug1));
};

main()