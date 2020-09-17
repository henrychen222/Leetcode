/**
 * 9.16 evening
 * https://leetcode.com/problems/remove-k-digits/
 */

// const removeKdigits = (num, k) => {
//     let n = num.length;
//     if (num[k] == '0') {
//         return num.slice(k + 1);
//     } else {
//         let arr = num.split("");
//         let data = [];
//         for (let i = 0; i < n; i++) {
//            data.push([Number(arr[i]), i]);
//         }
//         console.log(data);
//         data.sort((a, b) => b[0] - a[0]);
//         for (let i = 1; i <= k; i++) {
//             data.shift();            
//         }
//         console.log(data);
//         data.sort((a, b) => a[1] - b[1]);
//         console.log(data);
//     }
// };

const removeKdigits = (num, k) => {
    let n = num.length;
    if (num[k] == '0') {
        return num.slice(k + 1);
    } else {
        let idxUsed = new Set();
        for (let i = 0; i < n - k; i++) {
            let min = Number.MAX_VALUE;
            for (let j = 0; j < n; j++) {
                if (j < k - 1) {

                }

            }
        }

    }
};

const main = () => {
    let num = "1432219",
        k = 3;
    let num2 = "10200",
        k2 = 1;
    let num3 = "10",
        k3 = 2;
    console.log(removeKdigits(num, k));
    // console.log(removeKdigits(num2, k2));
    // console.log(removeKdigits(num3, k3));
};

main()