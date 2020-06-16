/**
 * 6.14 night
 * https://leetcode.com/problems/binary-gap/
 */

// Accepted --- 76ms 33.9MB 32.61%
const binaryGap = (N) => {
    let oneidx = [];
    let Nbin = decimalToBinary(N);
    for (let i = 0; i < Nbin.length; i++) {
        if (Nbin[i] == '1') {
            oneidx.push(i);
        }
    }
    let max = 0;
    for (let i = 1; i < oneidx.length; i++) {
        max = Math.max(max, Math.abs(oneidx[i - 1] - oneidx[i]));
    }
    return max;
};

// understand question wrong at the first time: find the max length of two consecutive 1's
const binaryGap1 = (N) => {
    let res = [];
    let Nbin = decimalToBinary(N);
    console.log(Nbin)
    for (let i = 0; i < Nbin.length; i++) {
        if (Nbin[i] == '1') {
            for (let j = i + 1; j < Nbin.length; j++) {
                let target = Nbin.slice(i, j);
                if (Nbin[j] != '1' && Nbin[j - 1] == '1' && [...new Set(target)].length == 1 && !res.includes(target)) {
                    res.push(target);
                }
            }
        }
    }
    res.sort((a, b) => b.length - a.length);
    console.log(res);
    return res[0].length;
};

const decimalToBinary = (num) => {
    return (num).toString(2);
};

const main = () => {
    let N = 22;
    let N2 = 5;
    let N3 = 6;
    let N4 = 8;
    console.log(binaryGap(N));
    console.log(binaryGap(N2));
    console.log(binaryGap(N3));
    console.log(binaryGap(N4));
};

main()