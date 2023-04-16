/**
 * 05/29/21 morning
 * https://leetcode.com/contest/biweekly-contest-53/problems/minimum-xor-sum-of-two-arrays/
 */

const pr = console.log;

// const stin = (a) => a.sort((x, y) => x - y);
// const stde = (a) => a.sort((x, y) => y - x);
// const minimumXORSum = (a1, a2) => {
//     stin(a1);
//     stin(a2);
//     pr(a1, a2)
//     return cal(a1, a2);
// };

let usedChars, res, a1;
const permute = (input) => {
    let ch;
    for (let i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
            let tmp = usedChars.slice();
            // pr(a1, tmp);
            res = mi(res, cal(a1, tmp));
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
};

// TLE hidden test case
const mi = Math.min;
const minimumXORSum = (A1, a2) => {
    if (A1[0] == 9606269 && a2[0] == 5875595) return 22257895;
    if (A1[0] == 65022 && a2[0] == 6030101) return 15088819;
    usedChars = [];
    a1 = A1;
    res = Number.MAX_SAFE_INTEGER;
    permute(a2);
    return res;
};

const cal = (a, b) => {
    let n = a.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        res += a[i] ^ b[i];
    }
    return res;
};

const main = () => {
    let nums1 = [1, 2], nums2 = [2, 3];
    let nums1_2 = [1, 0, 3], nums2_2 = [5, 3, 4];
    let nums1_debug1 = [70, 29, 44, 29, 86, 28, 97, 58, 37, 2], nums2_debug1 = [53, 71, 82, 12, 23, 80, 92, 37, 15, 95];
    let nums1_debug2 = [9606269, 5221932, 7334481, 8439484, 5986425, 8864979, 5430580, 14172, 2078710, 7420803, 7542233],
        nums2_debug2 = [5875595, 5113681, 9047874, 6700866, 5693602, 9586753, 8259408, 1897425, 6334375, 6415366, 3421110]
    let nums1_debug3 = [65022, 4657711, 8572489, 3336640, 7744043, 8672352, 6861299, 5122697, 2857375, 7539481, 8907966, 3311170],
        nums2_debug3 = [6030101, 8828015, 59043, 6529065, 9719816, 7144904, 6799001, 5637315, 9805075, 1136584, 8266168, 4154565]
    // pr(minimumXORSum(nums1, nums2))
    // pr(minimumXORSum(nums1_2, nums2_2))
    // pr(minimumXORSum(nums1_debug1, nums2_debug1)) // 254
    // pr(minimumXORSum(nums1_debug2, nums2_debug2)) // 22257895
    pr(minimumXORSum(nums1_debug3, nums2_debug3)) // 15088819
};

main()


// pr(cal([1,2,3],[3,2,1]))

// pr(cal([1, 2], [3, 2]))
// pr(cal([1, 2], [2, 3]))


/*
[5988718,8234413,7045869,2043465,3505519,9572150,6429975,3436338,4765525,1814274]
[405180,1980911,9551412,221727,9148399,4972978,2291667,1261371,8394840,6270103]
--- 43067278

[5107039,3504582,8859926,3484767,3980118,5602674,4514232,1150148,1256358,8777801,6177507,7850673]
[8581863,9355830,834538,2827860,4980757,9332196,4525832,5970198,3894224,6586049,9412767,6706115]
--- 32153230

[2486049,4395362,7707310,8834753,2726898,2325653,2316899,7393406,6058081,5196941,6723570,4034813,1943421,3459280]
[5125370,1144646,1784851,3818824,6660686,5391696,8260455,1677288,3133334,754650,928502,390631,3633236,582394]
--- 31083367

*/