/**
 * 7.8 evening   04/05/21 moring rewrite + evening 10 minutes fix
 * https://leetcode.com/problems/rank-teams-by-votes/
 */

// Accepted --- 100ms 56.82%
const rankTeams = (a) => {
    let m = new Map();
    let an = a.length;
    let n = a[0].length;
    for (let i = 0; i < n; i++) m.set(a[0][i], [i + 1]);
    let res = Array.from(m.keys());
    for (let i = 1; i < an; i++) {
        let s = a[i];
        for (let j = 0; j < n; j++) m.get(s[j]).push(j + 1);
    }
    // console.log(m);
    let cmap = new Map();
    for (const [k, v] of m) {
        // let cnt = Array(an).fill(0);  // here wrong, should be string length, not array length
        let cnt = Array(n).fill(0);
        for (const e of v) cnt[e - 1]++;
        cmap.set(k, cnt);
    }
    // console.log(cmap);
    // console.log(res);
    res.sort((x, y) => {
        let ax = cmap.get(x);
        let ay = cmap.get(y);
        for (let i = 0; i < n; i++) {
            if (ax[i] != ay[i]) return ay[i] - ax[i];
        }
        return x.localeCompare(y);
    });
    return res.join("");
};

const main = () => {
    let votes = ["ABC", "ACB", "ABC", "ACB", "ACB"];
    let votes2 = ["WXYZ", "XYZW"];
    let votes3 = ["ZMNAGUEDSJYLBOPHRQICWFXTVK"];
    let votes4 = ["BCA", "CAB", "CBA", "ABC", "ACB", "BAC"];
    let votes5 = ["M", "M", "M", "M"];
    let debug1 = ["FVSHJIEMNGYPTQOURLWCZKAX", "AITFQORCEHPVJMXGKSLNZWUY", "OTERVXFZUMHNIYSCQAWGPKJL", "VMSERIJYLZNWCPQTOKFUHAXG", "VNHOZWKQCEFYPSGLAMXJIUTR", "ANPHQIJMXCWOSKTYGULFVERZ", "RFYUXJEWCKQOMGATHZVILNSP", "SCPYUMQJTVEXKRNLIOWGHAFZ", "VIKTSJCEYQGLOMPZWAHFXURN", "SVJICLXKHQZTFWNPYRGMEUAO", "JRCTHYKIGSXPOZLUQAVNEWFM", "NGMSWJITREHFZVQCUKXYAPOL", "WUXJOQKGNSYLHEZAFIPMRCVT", "PKYQIOLXFCRGHZNAMJVUTWES", "FERSGNMJVZXWAYLIKCPUQHTO", "HPLRIUQMTSGYJVAXWNOCZEKF", "JUVWPTEGCOFYSKXNRMHQALIZ", "MWPIAZCNSLEYRTHFKQXUOVGJ", "EZXLUNFVCMORSIWKTYHJAQPG", "HRQNLTKJFIEGMCSXAZPYOVUW", "LOHXVYGWRIJMCPSQENUAKTZF", "XKUTWPRGHOAQFLVYMJSNEIZC", "WTCRQMVKPHOSLGAXZUEFYNJI"];
    console.log(rankTeams(votes)); // "ACB"
    console.log(rankTeams(votes2)); // "XWYZ"
    console.log(rankTeams(votes3)); // "ZMNAGUEDSJYLBOPHRQICWFXTVK"
    console.log(rankTeams(votes4)); // "ABC"
    console.log(rankTeams(votes5)); // "M"
    console.log(rankTeams(debug1)); // "VWFHSJARNPEMOXLTUKICZGYQ"
};

main()

/////////////////////////////// 7.8 evening //////////////////////////
// // need to fix
// const rankTeams = (votes) => {
//     let rank = [];
//     for (const team of votes[0]) {
//         let pos = [];
//         for (const v of votes) {
//             pos.push(v.indexOf(team) + 1);
//         }
//         pos.sort((a, b) => a - b);
//         let element = [...new Set(pos)];
//         // let map = new Map();
//         let record = [];
//         for (const e of element) {
//             record.push(getFrequency(pos, e));
//             // map.set(e, getFrequency(pos, e));
//         }
//         rank.push([team, record]);
//     }
//     console.log(rank);
//     rank.sort((a, b) => {
//         for (let i = 0; i < a.length; i++) {
//             return b[1][i] - a[1][i];
//         }
//     });
//     console.log(rank);
// };

// const getFrequency = (arr, item) => {
//     return arr.filter(x => x === item).length;
// };

// const rankTeams = (votes) => {
//     let rank = [];
//     for (const team of votes[0]) {
//         let sum = 0;
//         for (const v of votes) {
//             sum += (v.indexOf(team) + 1);  // sum is not correct
//         }
//         rank.push([team, sum]);
//     }
//     rank.sort((a, b) => {
//         if (a[1] == b[1]) return a[0].charCodeAt() - b[0].charCodeAt();
//         return a[1] - b[1];
//     });
//     console.log(rank);
//     let res = "";
//     for (const r of rank) {
//         res += r[0];
//     }
//     return res;
// };