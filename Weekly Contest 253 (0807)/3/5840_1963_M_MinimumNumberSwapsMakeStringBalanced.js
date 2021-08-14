/**
 * 08/07/21 evening
 * https://leetcode.com/contest/weekly-contest-253/problems/minimum-number-of-swaps-to-make-the-string-balanced/
 */

const pr = console.log;

// WA
// reference: https://www.geeksforgeeks.org/minimum-swaps-bracket-balancing/
const minSwaps1 = (s) => {
    let pos = [];
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] == '[') pos.push(i);
    }
    let cnt = p = sum = 0;
    let a = s.split("");
    for (let i = 0; i < n; ++i) {
        if (a[i] == '[') {
            cnt++;
            p++;
        } else if (a[i] == ']') {
            cnt--;
        }
        if (cnt < 0) {
            sum += pos[p] - i;
            [a[i], a[pos[p]]] = [a[pos[p]], a[i]];
            p++;
            cnt = 1;
        }
    }
    pr(a.join(""))
    return sum;
};

// Accepted
// https://www.techiedelight.com/minimum-number-inversions-expression-balanced/
const minSwaps = (s) => {
    let n = s.length;
    let inversions = open = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] == '[') {
            open++;
        } else {
            if (open) {
                open--;
            } else {
                inversions++;
                open = 1;
            }
        }
    }
    return (inversions + (open >> 1)) >> 1;
};

const main = () => {
    let s = "][][";
    let s2 = "]]][[[";
    let s3 = "[]";

    let test1 = "[]][][";
    let test2 = "[[][]]"
    pr(minSwaps(s))
    pr(minSwaps(s2))
    pr(minSwaps(s3))

    // pr(minSwaps(test1)) // 2
    // pr(minSwaps(test2)) // 0
};

main()