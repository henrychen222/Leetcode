/**
 * 04/30/22 evening
 * https://leetcode.com/contest/weekly-contest-291/problems/total-appeal-of-a-string/
 */

const pr = console.log;

const ord = (c) => c.charCodeAt();
const subCnt = (l, i, r) => ((i - l) * (r - i));

///////////////////////////////// 05/01/22 night ///////////////////////////////////////////////////
// Accepted --- 112ms
const appealSum = (s) => {
    let n = s.length, lastL = Array(26).fill(-1), res = 0;
    for (let i = 0; i < n; i++) {
        res += subCnt(lastL[ord(s[i]) - 97], i, n);
        lastL[ord(s[i]) - 97] = i;
    }
    return res;
};

// Accepted --- 102ms
const appealSum4 = (s) => {
    let n = s.length, lastL = Array(26).fill(-1), res = 0;
    for (let i = 0; i < n; i++) {
        res += (n - i) * (i - lastL[ord(s[i]) - 97]);
        lastL[ord(s[i]) - 97] = i;
    }
    return res;
};

// Accepted --- 87ms
const appealSum3 = (s) => {
    let n = s.length, last = Array(26).fill(0), res = 0;
    for (let i = 0; i < n; i++) {
        res += (n - i) * ((i + 1) - last[ord(s[i]) - 97]);
        last[ord(s[i]) - 97] = i + 1;
    }
    return res;
};

////////////////////////////////////////////////////////////////////////////////////

// reference: kmjp
// Accepted
const appealSum2 = (s) => {
    // pr(test(s));
    // let se = new Set();
    // for (const c of s) se.add(c);
    // let max = se.size;

    let last = Array(26).fill(0), res = 0;
    for (let i = 0; i < s.length; i++) {
        last[ord(s[i]) - 97] = i + 1;
        for (let j = 0; j < 26; j++) res += last[j];
    }
    return res;
};

// TLE
const test = (s) => {
    let n = s.length, res = 0;
    let memo = new Map();
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sub = s.slice(i, j + 1);
            let v;
            if (memo.has(sub)) {
                v = memo.get(sub);
            } else {
                v = new Set(sub).size;
                memo.set(sub, v);
            }
            // pr(sub, 'v', v)
            res += v;
        }
    }
    return res;
};

const main = () => {
    let s = "abbca";
    let s2 = "code";
    let debug1 = "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrpppppppkkkkkkkkkkkkkkhdddddddduuuuuuuuuuuuuuuuuuuuuuuuuujjjjjjjwwwwwwwwwwwwwwwwwwwwwwwwwwwwwggggggggggggggggggnnnnnnmmmmmmmmmmmmmwwwwwwwwwwwwwwwwwwwwwwwwvvvvvvvvvvvvvvvvvvviiiiiiiiiiiiiiiiiiiiiiiiiiitttttttttttiiiiiiiisssssssssssssssssssssssssshhhhhhhhhhhhhhhhhhhhhhhhhjjjjjjjjjjjxxxxxxzzzzzzzzzzzzzzzzeeeeeeeeeeeeeeeeellllllllllllllllllllccccccccccccccccccccccccggggggggggggggggggccccccccccccccctttttttmmmmkkkkkkkkkkkkkkkkkkkkkkkkkksssssssssbbbbbbbbbbqqqqqqqqqqqmmmmmmmmmmmmmmmmllllllllllllooooooooooossssssyyyyyysssssssssssssssssnnnnnnnnnnnnnnnnn";
    pr(appealSum(s))
    pr(appealSum(s2))
    pr(appealSum(debug1))
};

main()