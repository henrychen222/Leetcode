/**
 * 05/01/22 night
 * https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/
 * 
 * similar problem:
 * https://leetcode.com/contest/total-appeal-of-a-string/
 */

const pr = console.log;

const ord = (c) => c.charCodeAt();

// Accepted --- 127ms 68.25%
// reference: https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/discuss/224001/C%2B%2B-Solution-8ms-by-%22Contribution%22
const uniqueLetterString = (s) => {
    let n = s.length, lastL = Array(26).fill(-1), lastR = Array(26).fill(n), res = 0;
    let cntL = Array(n).fill(0), cntR = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        cntL[i] = i - lastL[ord(s[i]) - 65];
        lastL[ord(s[i]) - 65] = i;
    }
    for (let i = n - 1; ~i; i--) {
        cntR[i] = lastR[ord(s[i]) - 65] - i;
        lastR[ord(s[i]) - 65] = i;
    }
    // pr(cntL, cntL.length);
    // pr(cntR, cntR.length);
    for (let i = 0; i < n; i++) res += cntL[i] * cntR[i];
    return res;
};

const main = () => {
    let s = "ABC";
    let s2 = "ABA";
    let s3 = "LEETCODE";
    let debug1 = "IECIYJSQHMDHQPCOTCQTVYEQMEYGGVPBUPKVHAAGBQKAQQVMWTMZZSEGTYWTBCNOWPWIBFDGVPHJYBMXFGSEQHNYAOHCPRJGARZA";
    pr(uniqueLetterString(s))
    pr(uniqueLetterString(s2))
    pr(uniqueLetterString(s3))
    pr(uniqueLetterString(debug1)) // 33362
};

main()