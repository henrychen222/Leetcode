/**
 * 9.24 evening
 * https://leetcode.com/problems/broken-calculator/
 */

// Time limit
const brokenCalc = (X, Y) => {
    if (X < Y) {
        let cnt = 0;
        while (X < Y) {
            let one = X * 2;
            let two = X - 1;
            if (Y % 2 == 0) {
                X = check(one, Y) < check(two, Y) ? one : two;
                // console.log(X);
                cnt++;
            } else {
                X = check(one, Y + 1) < check(two, Y + 1) ? one : two;
                cnt++;
            }
        }
        return Y % 2 == 0 ? cnt : cnt + 1;

    } else if (X > Y) {
        return X - Y;
    } else {
        return 0;
    }
};

const check = (X, Y) => {
    let tmp = X;
    let cnt = 0;
    while (tmp < Y) {
        tmp *= 2;
        cnt++;
    }
    if (tmp == Y) return cnt;
    let rCnt = tmp - Y + cnt;
    let tmp2 = X;
    let cnt2 = 0;
    while (true) {
        tmp2--;
        cnt2++;
        let re = (Y / tmp2) % 2;
        if (re == 0) {
            // console.log(tmp2);
            cnt2 += Y / tmp2 / 2;
            break;
        }
    }
    // console.log(rCnt, cnt2);
    return Math.min(rCnt, cnt2);
};

const main = () => {
    let X = 2,
        Y = 3;
    let X2 = 5,
        Y2 = 8;
    let X3 = 3,
        Y3 = 10;
    let X4 = 1024,
        Y4 = 1;
    let X5 = 4,
        Y5 = 6;
    let X_debug1 = 1,
        Y_debug2 = 1000000000;
    console.log(brokenCalc(X, Y)); // 2
    console.log(brokenCalc(X2, Y2)); // 2
    console.log(brokenCalc(X3, Y3)); // 3
    console.log(brokenCalc(X4, Y4)); // 1023
    console.log(brokenCalc(X5, Y5)); // 2
    console.log(brokenCalc(X_debug1, Y_debug2)); // 2
};

main()