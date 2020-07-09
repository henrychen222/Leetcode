/**
 * 7.8 evening
 * https://leetcode.com/problems/rank-teams-by-votes/
 */

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

// need to fix
const rankTeams = (votes) => {
    let rank = [];
    for (const team of votes[0]) {
        let pos = [];
        for (const v of votes) {
            pos.push(v.indexOf(team) + 1);
        }
        pos.sort((a, b) => a - b);
        let element = [...new Set(pos)];
        // let map = new Map();
        let record = [];
        for (const e of element) {
            record.push(getFrequency(pos, e));
            // map.set(e, getFrequency(pos, e));
        }
        rank.push([team, record]);
    }
    console.log(rank);
    rank.sort((a, b) => {
        for (let i = 0; i < a.length; i++) {
            return b[1][i] - a[1][i];
        }
    });
    console.log(rank);
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let votes = ["ABC", "ACB", "ABC", "ACB", "ACB"];
    let votes2 = ["WXYZ", "XYZW"];
    let votes3 = ["ZMNAGUEDSJYLBOPHRQICWFXTVK"];
    let votes4 = ["BCA", "CAB", "CBA", "ABC", "ACB", "BAC"];
    let votes5 = ["M", "M", "M", "M"];
    let debug1 = ["FVSHJIEMNGYPTQOURLWCZKAX", "AITFQORCEHPVJMXGKSLNZWUY", "OTERVXFZUMHNIYSCQAWGPKJL", "VMSERIJYLZNWCPQTOKFUHAXG", "VNHOZWKQCEFYPSGLAMXJIUTR", "ANPHQIJMXCWOSKTYGULFVERZ", "RFYUXJEWCKQOMGATHZVILNSP", "SCPYUMQJTVEXKRNLIOWGHAFZ", "VIKTSJCEYQGLOMPZWAHFXURN", "SVJICLXKHQZTFWNPYRGMEUAO", "JRCTHYKIGSXPOZLUQAVNEWFM", "NGMSWJITREHFZVQCUKXYAPOL", "WUXJOQKGNSYLHEZAFIPMRCVT", "PKYQIOLXFCRGHZNAMJVUTWES", "FERSGNMJVZXWAYLIKCPUQHTO", "HPLRIUQMTSGYJVAXWNOCZEKF", "JUVWPTEGCOFYSKXNRMHQALIZ", "MWPIAZCNSLEYRTHFKQXUOVGJ", "EZXLUNFVCMORSIWKTYHJAQPG", "HRQNLTKJFIEGMCSXAZPYOVUW", "LOHXVYGWRIJMCPSQENUAKTZF", "XKUTWPRGHOAQFLVYMJSNEIZC", "WTCRQMVKPHOSLGAXZUEFYNJI"];
    // console.log(rankTeams(votes));
    // console.log(rankTeams(votes2));
    // console.log(rankTeams(votes3));
    // console.log(rankTeams(votes4));
    // console.log(rankTeams(votes5));
    console.log(rankTeams(debug1)); // "VWFHSJARNPEMOXLTUKICZGYQ"
};

main()