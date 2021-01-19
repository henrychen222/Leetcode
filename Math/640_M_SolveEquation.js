/**
 * 1.18 evening
 * https://leetcode.com/problems/solve-the-equation/
 */

// Accepted --- 72ms 90.91%
const solveEquation = (equation) => {
    let idx = equation.indexOf('=');
    let left = equation.slice(0, idx);
    let right = equation.slice(idx + 1);
    let al = check(left);
    let ar = check(right);
    let leftX = al[0];
    let leftNum = al[1];
    let rightX = ar[0];
    let rightNum = ar[1];
    // console.log("left", leftX, leftNum);
    // console.log('right', rightX, rightNum);
    let finalX = leftX - rightX;
    let finalNum = rightNum - leftNum;
    if (finalX == 0) {
        if (finalNum == 0) {
            return 'Infinite solutions';
        } else {
            return 'No solution';
        }
    }
    return `x=${finalNum / finalX}`;
};

const check = (s) => {
    let x = num = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] == 'x') { // calculate x
            for (let l = i; ~l; l--) {
                if (s[l] == '+' || s[l] == '-' || l == 0) {
                    let tmp = s.slice(l, i);
                    // console.log(tmp);
                    if (tmp.length == 0 || tmp == '+') { // x  +x
                        x++;
                    } else if (tmp == '-') { // -x
                        x--;
                    } else { // +20x  -20x
                        x += Number(tmp);
                    }
                    break;
                }
            }
        } else if (!Number.isNaN(Number(s[i]))) { // check if s[i] is digit 0-9
            if (s[i + 1] == '+' || s[i + 1] == '-' || i == n - 1) { // make sure i is the final digit of num 
                let next = n - 1;
                for (let r = i; r < n; r++) {
                    if (s[r] == '+' || s[r] == '-' || s[r] == 'x') {
                        next = r;
                        break;
                    }
                }
                if (s[next] != 'x' || next == n - 1) { // make sure it is num, not x
                    // console.log(s[i]);
                    for (let l = i; ~l; l--) {
                        if (s[l] == '+' || s[l] == '-' || l == 0) { // calculate num
                            let tmp = s.slice(l, i + 1);
                            num += Number(tmp);
                            break;
                        }
                    }
                }
            }
        }
    }
    return [x, num];
}

const main = () => {
    let equation = "x+5-3+x=6+x-2";
    let equation2 = "x=x";
    let equation3 = "2x=x";
    let equation4 = "2x+3x-6x=x+2";
    let equation5 = "x=x+2";
    let debug1 = "-x=-1";
    let equation6 = '-20x=-1';
    let equation7 = '-x=-12';
    let debug2 = "1+1=x";
    console.log(solveEquation(equation));
    console.log(solveEquation(equation2));
    console.log(solveEquation(equation3));
    console.log(solveEquation(equation4));
    console.log(solveEquation(equation5));
    console.log(solveEquation(debug1)); // x = 1;
    console.log(solveEquation(equation6)); // x = 0.05
    console.log(solveEquation(equation7)); // x = 12;
    console.log(solveEquation(debug2)); // x = 2;
};

main()

// console.log(Number('x'), Number('+'));
// console.log(Number(-20), Number(+20));