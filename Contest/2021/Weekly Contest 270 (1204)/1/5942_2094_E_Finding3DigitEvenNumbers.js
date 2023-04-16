/**
 * 12/04/21 evening
 * https://leetcode.com/contest/weekly-contest-270/problems/finding-3-digit-even-numbers/
 */

const pr = console.log;

// Accepted
const findEvenNumbers = (a) => {
    let n = a.length, res = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
               let x = a[i] + '', y = a[j] + '', z = a[k] + '';
               let one = x + y + z, two = x + z + y, three = y + x + z;
               let four = y + z + x, five = z + x + y, six = z + y + x;
               if (ok(one)) res.add(one);
               if (ok(two)) res.add(two);
               if (ok(three)) res.add(three);
               if (ok(four)) res.add(four);
               if (ok(five)) res.add(five);
               if (ok(six)) res.add(six);
            }
        }
    }
    return [...res].map(Number).sort((x, y) => x - y);
};

const ok = (s) => {
  if (s[0] == '0') return false;
  let x = s - '0';
  return x % 2 == 0;
};

const main = () => {
    let digits = [2, 1, 3, 0];
    let digits2 = [2, 2, 8, 8, 2];
    let digits3 = [3, 7, 5];
    let digits4 = [0, 2, 0, 0]
    let digits5 = [0, 0, 0]
    pr(findEvenNumbers(digits))
    pr(findEvenNumbers(digits2))
    pr(findEvenNumbers(digits3))
    pr(findEvenNumbers(digits4))
    pr(findEvenNumbers(digits5))
};

main()