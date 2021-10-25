// 08/28/21 night


const pr = console.log;

// Accepted
const mod = 1e9 + 7;
const numberOfUniqueGoodSubsequences = (binary) => {
    let idx0 = binary.indexOf('0'), idx1 = binary.indexOf('1');
    if (idx1 == -1) return 1;
    let s = binary.slice(idx1 + 1);
    let miss0 = miss1 = 1;
    for (const c of s) {
        if (c == '0') {
            miss1 += miss0;
            miss1 %= mod;
        } else {
            miss0 += miss1;
            miss0 %= mod;
        }
    }
    let res = miss0 + miss1 + mod + (idx0 != -1 ? 0 : -1);
    res %= mod;
    return res;
};

const main = () => {
    let binary = "001"
    let binary2 = "11";
    let binary3 = "101";
    let debug1 = "111001101100000001001110110101110001100";
    let debug2 = "0100000101101001010011111000000000111111001100000011100110111010011111001111000110111000110110010101010010110111000000000100110111100100100001000101001001110110011011111000101001000001101101010111111000000111101010001010011010111111001011110110010011110100110101000001010110100001110011101000111100000011110011111010101110110111110110110111010011001101101111100001011010010100000100011111010011100110110011010111000000111110010010001010100101101000011100100010000100111110100011111101101001111011100011";
    pr(numberOfUniqueGoodSubsequences(binary))
    pr(numberOfUniqueGoodSubsequences(binary2))
    pr(numberOfUniqueGoodSubsequences(binary3))
    pr(numberOfUniqueGoodSubsequences(debug1))
    pr(numberOfUniqueGoodSubsequences(debug2)) // 207469448
};

main()