/**
 * 12/18/21 evening
 * https://leetcode.com/contest/weekly-contest-272/problems/adding-spaces-to-a-string/
 */

const pr = console.log;

const cutMaxDecreasing = (a_or_s) => { let d = [], start = 0, n = a_or_s.length; for (let i = 0; i + 1 < n; i++) { if (a_or_s[i + 1] != a_or_s[i] - 1) { d.push(a_or_s.slice(start, i + 1)); start = i + 1; } } d.push(a_or_s.slice(start)); return d; };
const totsubArray = (n) => { return n * (n + 1) / 2; };

// Accepted
const getDescentPeriods = (prices) => {
  let a = cutMaxDecreasing(prices), res = 0;
  for (const e of a) res += totsubArray(e.length);
  return res;
};

const main = () => {
  let prices = [3, 2, 1, 4];
  let prices2 = [8, 6, 7, 7];
  let prices3 = [1];
  pr(getDescentPeriods(prices))
  pr(getDescentPeriods(prices2))
  pr(getDescentPeriods(prices3))
};

main()