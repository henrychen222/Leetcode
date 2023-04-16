/**
 * 08/22/21 night
 * https://leetcode.com/problems/rectangle-area-ii/
 */

// Accepted --- 68ms 100%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/11371256.html
 * https://leetcode.com/problems/rectangle-area-ii/discuss/138028/Clean-Recursive-Solution-Java
 */
const ll = BigInt;
const mod = ll(1e9 + 7);
const rectangleArea = (rectangles) => {
    let res = 0n;
    let recL = [];
    for (const rectangle of rectangles) dfs(recL, rectangle, 0);
    for (const rec of recL) res = (res + ll(rec[2] - rec[0]) * ll(rec[3] - rec[1])) % mod;
    return res;
};

const dfs = (recL, cur, start) => { // recL: rectangle list, cur: current rectangle
    if (start >= recL.length) return recL.push(cur);
    let rec = recL[start];
    // pr(rec, recL)
    if (cur[2] <= rec[0] || cur[3] < rec[1] || cur[0] >= rec[2] || cur[1] >= rec[3]) return dfs(recL, cur, start + 1);
    if (cur[0] < rec[0]) dfs(recL, [cur[0], cur[1], rec[0], cur[3]], start + 1);
    if (cur[2] > rec[2]) dfs(recL, [rec[2], cur[1], cur[2], cur[3]], start + 1);
    if (cur[1] < rec[1]) dfs(recL, [Math.max(rec[0], cur[0]), cur[1], Math.min(rec[2], cur[2]), rec[1]], start + 1);
    if (cur[3] > rec[3]) dfs(recL, [Math.max(rec[0], cur[0]), rec[3], Math.min(rec[2], cur[2]), cur[3]], start + 1);
};

const pr = console.log;
const main = () => {
    let rectangles = [
        [0, 0, 2, 2],
        [1, 0, 2, 3],
        [1, 0, 3, 1]
    ];
    let rectangles2 = [
        [0, 0, 1000000000, 1000000000]
    ];
    let debug1 = [
        [224386961, 128668997, 546647847, 318900555],
        [852286866, 238086790, 992627088, 949888275],
        [160239672, 137108804, 398130330, 944807066],
        [431047948, 462092719, 870611028, 856851714],
        [736895365, 511285772, 906155231, 721626624],
        [289309389, 607009433, 558359552, 883664714],
        [780746435, 397872372, 931219192, 863727103],
        [573523994, 124874359, 889018012, 471879750],
        [619886375, 149607927, 727026507, 446976526],
        [51739879, 716225241, 115331335, 785850603],
        [171077223, 267051983, 548436248, 349498903],
        [314437215, 169054168, 950814572, 481179241],
        [64126215, 646689712, 595562376, 829164135],
        [926011655, 481539702, 982179297, 832455610],
        [40370235, 231510218, 770233582, 851797196],
        [292546319, 45032676, 413358795, 783606009],
        [424366277, 369838051, 453541063, 777456024],
        [211837048, 142665527, 217366958, 952362711],
        [228416869, 402115549, 672143142, 644930626],
        [755018294, 194555696, 846854520, 939022548],
        [192890972, 586071668, 992336688, 759060552],
        [127869582, 392855032, 338983665, 954245205],
        [665603955, 208757599, 767586006, 276627875],
        [260384651, 10960359, 736299693, 761411808],
        [46440611, 559601039, 911666265, 904518674],
        [54013763, 90331595, 332153447, 106222561],
        [73093292, 378586103, 423488105, 826750366],
        [327100855, 516514806, 676134763, 653520887],
        [930781786, 407609872, 960671631, 510621750],
        [35479655, 449171431, 931212840, 617916927]
    ];
    pr(rectangleArea(rectangles))
    pr(rectangleArea(rectangles2))
    pr(rectangleArea(debug1)) // 862275791
};

main()