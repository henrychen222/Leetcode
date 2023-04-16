/**
 * 8.8 night
 * https://leetcode.com/contest/weekly-contest-201/problems/find-kth-bit-in-nth-binary-string/
 */

// Accepted
const findKthBit = (n, k) => {
    let tmp = ["0"];
    for (let i = 1; i <= n; i++) {
        tmp[i] = tmp[i - 1] + "1" + reverse(invert(tmp[i - 1]));
    }
    // console.log(tmp);
    return tmp[n - 1][k - 1];
};

const invert = (x) => {
    let res = '';
    for (let c of x) {
        res += (c ^= 1);
    }
    return res;
};

const reverse = (x) => {
    return x.split("").reverse().join("");
};

const main = () => {
    let n = 3, k = 1;
    let n2 = 4, k2 = 11;
    let n3 = 1, k3 = 1;
    let n4 = 2, k4 = 3;
    console.log(findKthBit(n, k));
    console.log(findKthBit(n2, k2));
    console.log(findKthBit(n3, k3));
    console.log(findKthBit(n4, k4));

    // console.log(invert('011100110110001'));
};

main()