/**
 * 07/31/21 evening
 * https://leetcode.com/contest/weekly-contest-252/problems/minimum-garden-perimeter-to-collect-enough-apples/
 */

const pr = console.log;

// Accepted ---
// reference: https://leetcode.com/contest/weekly-contest-252/ranking/ Heltion + uwi
const ll = BigInt;
const minimumPerimeter = (neededApples) => {
  let low = 1, high = 10 ** 6;
  while (low < high) {
    let m = low + high >> 1;
    let tot = m * (1 + m) * (2 * m + 1) * 2;
    // pr(tot)
    tot < neededApples ? low = m + 1 : high = m;
  }
  return low * 8;
};

const main = () => {
  let neededApples = 1;
  let neededApples2 = 1000000000;
  pr(minimumPerimeter(neededApples))
  pr(minimumPerimeter(neededApples2))
};

main()
