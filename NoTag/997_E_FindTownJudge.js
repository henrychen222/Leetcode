/**
 * 8.20 night
 * https://leetcode.com/problems/find-the-town-judge/
 */

// Accepted --- 204ms 44.9MB 12.03%
const findJudge_refine = (N, trust) => {
    if (N == 1 && trust.length == 0) return 1;
    let left = [];
    let right = [];
    for (const t of trust) {
        left.push(t[0]);
        right.push(t[1]);
    }
    let element = [...new Set(right)];
    let TJ = [];
    for (const e of element) {
        if (getFrequency(right, e) == N - 1) {
            TJ.push(e);
        }
    }
    let res = TJ.filter(tj => left.indexOf(tj) == -1);
    if (res.length == 0) return -1;
    return res[0];
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};


// Accepted --- 3844ms 76.9MB 5.19%
const findJudge2 = (N, trust) => {
    if (N == 1 && trust.length == 0) return 1;
    let tmp = trust.filter(x => getTownJudgeFreq(trust, x[1]) == N - 1);
    let TJ = [...new Set(tmp.map(x => x[1]))];
    let res = TJ.filter(tj => trust.find(x => x[0] == tj) == undefined);
    if (res.length == 0) return -1;
    return res[0];
};

// Accepted --- 3484ms 53.3MB 5.19%
const findJudge = (N, trust) => {
    if (N == 1 && trust.length == 0) return 1;
    let left = trust.map(x => x[0]);
    let tmp = trust.filter(x => getTownJudgeFreq(trust, x[1]) == N - 1);
    // console.log(tmp);
    let TJ = [...new Set(tmp.map(x => x[1]))];
    // console.log(TJ, trust);
    let res = TJ.filter(tj => left.indexOf(tj) == -1);
    if (res.length == 0) return -1;
    return res[0];
};

const getTownJudgeFreq = (arr, item) => {
    return arr.filter(x => x[1] === item).length;
};

const main = () => {
    let N = 2,
        trust = [
            [1, 2]
        ];
    let N2 = 3,
        trust2 = [
            [1, 3],
            [2, 3]
        ];
    let N3 = 3,
        trust3 = [
            [1, 3],
            [2, 3],
            [3, 1]
        ];
    let N4 = 3,
        trust4 = [
            [1, 2],
            [2, 3]
        ];
    let N5 = 4,
        trust5 = [
            [1, 3],
            [1, 4],
            [2, 3],
            [2, 4],
            [4, 3]
        ];
    let N_debug1 = 1,
        trust_debug1 = [];
    console.log(findJudge(N, trust));
    console.log(findJudge(N2, trust2));
    console.log(findJudge(N3, trust3));
    console.log(findJudge(N4, trust4));
    console.log(findJudge(N5, trust5));
    console.log(findJudge(N_debug1, trust_debug1)); // 1

    console.log("");
    console.log(findJudge2(N, trust));
    console.log(findJudge2(N2, trust2));
    console.log(findJudge2(N3, trust3));
    console.log(findJudge2(N4, trust4));
    console.log(findJudge2(N5, trust5));
    console.log(findJudge2(N_debug1, trust_debug1));

    console.log("");
    console.log(findJudge_refine(N, trust));
    console.log(findJudge_refine(N2, trust2));
    console.log(findJudge_refine(N3, trust3));
    console.log(findJudge_refine(N4, trust4));
    console.log(findJudge_refine(N5, trust5));
    console.log(findJudge_refine(N_debug1, trust_debug1));
};

main()