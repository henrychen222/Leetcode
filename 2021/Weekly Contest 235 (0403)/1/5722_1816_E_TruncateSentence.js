/**
 * 04/03/21 evening
 * https://leetcode.com/contest/weekly-contest-235/problems/truncate-sentence/
 */


const pr = console.log;
const mi = Math.min;
const mx = Math.max;

// Accepted
const truncateSentence = (s, k) => s.split(" ").slice(0, k).join(" ");

const main = () => {
    let s = "Hello how are you Contestant", k = 4;
    let s2 = "What is the solution to this problem", k2 = 4;
    let s3 = "chopper is not a tanuki", k3 = 5;
    pr(truncateSentence(s, k))
    pr(truncateSentence(s2, k2))
    pr(truncateSentence(s3, k3))
};

main()