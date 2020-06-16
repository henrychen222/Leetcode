/**
 * 6.15 night
 * https://leetcode.com/problems/di-string-match/
 */

// don't know
const diStringMatch = (S) => {
    let N = S.length;
    let A = [];

    let ICnt = 0;
    let DCnt = 0;
    for (const c of S) {
        if (c == 'I') {
            ICnt++;
        } else {
            DCnt++;
        }
    }
    console.log(ICnt, DCnt);

    for (let i = 1; i < N; i++) {
        if (S[i] == 'I') {
            A.push(i);
            A.push(i + ICnt);
        } else {
            A.push(i);
            A.unshift(i - DCnt);
        }
    }
    return A;
};

const main = () => {
    let S = "IDID";
    let S2 = "III";
    let S3 = "DDI";
    console.log(diStringMatch(S));
    console.log(diStringMatch(S2));
    console.log(diStringMatch(S3));
};

main()