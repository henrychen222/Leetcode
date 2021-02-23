/**
 * 02/20/21 evening
 * https://leetcode.com/contest/weekly-contest-229/problems/merge-strings-alternately/
 */

const pr = console.log;

// WA sum is not correct
let m, res, mul;
const mx = Math.max;
const maximumScore = (nums, multipliers) => {
   m = multipliers.length;
   mul = multipliers;
   res = [];
   dfs(nums, 0, 0);
   // pr(res);
   return mx.apply(Math, res);
};

const dfs = (a, sum, idx) => {
   // pr("next", a, sum, idx, );
   let n = a.length;
   if (n == 1) {
      // pr("11111", sum)
      res.push(sum + [...a].pop());
      return;
   }
   let removeSS = [...a];
   let ss = removeSS.shift();
   let removeSL = [...a];
   let sl = removeSL.pop();
   // pr("detail", removeSS, ss, removeSL, sl);
   dfs(removeSS, sum + ss * mul[idx], idx + 1);
   dfs(removeSL, sum + sl * mul[idx], idx + 1);
};

// const maximumScore1 = (a, mul) => {
//    let m = mul.length;
//    let res = 0;
//    for (let i = 0; i < m; i++) {
//       if (a.length == 1) {
//          res += a[0] * mul[i];
//          break;
//       }
//       let ss = a[0] * mul[i];
//       let sl = a[a.length - 1] * mul[i];
//       if (ss > sl) {
//          res += ss;
//          pr("start", ss);
//          a.shift();
//       } else if (ss < sl) {
//          res += sl;
//          pr("end", sl);
//          a.pop();
//       }
//       pr(res, a)
//    }
//    return res;
// };

const main = () => {
   let nums = [1, 2, 3], multipliers = [3, 2, 1];
   let nums2 = [-5, -3, -3, -2, 7, 1], multipliers2 = [-10, -5, 3, 4, 6];
   pr(maximumScore(nums, multipliers));
   pr(maximumScore(nums2, multipliers2));
};

main()