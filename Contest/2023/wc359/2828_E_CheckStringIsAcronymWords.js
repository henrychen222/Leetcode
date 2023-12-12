/*
 * 08/19/23 evening
 * https://leetcode.com/contest/weekly-contest-359/problems/check-if-a-string-is-an-acronym-of-words/
 */

const pr = console.log;

// Accepted
const isAcronym = (a, t) => {
   let res = "";
   for(const s of a) res += s[0];
   // pr(res)
   return res == t;
};

const main = () => {
    let a = ["alice", "bob", "charlie"], s = "abc";
    let a2 = ["an", "apple"], s2 = "a";
    let a3 = ["never", "gonna", "give", "up", "on", "you"], s3 = "ngguoy"
    pr(isAcronym(a, s))
    pr(isAcronym(a2, s2))
    pr(isAcronym(a3, s3))
};

main()