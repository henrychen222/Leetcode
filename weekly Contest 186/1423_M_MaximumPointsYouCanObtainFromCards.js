/**
 * 4.25 evening and night
 * https://leetcode.com/contest/weekly-contest-186/problems/maximum-points-you-can-obtain-from-cards/
 */
const createArrayWithLength = (n) => {
    let arr = [];
    let i;
    for (i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
};

// Accepted --- 100ms 45.2MB
const maxScore_uwi = (cardPoints, k) => {
    let n = cardPoints.length;
    let cum = createArrayWithLength(n + 1);
    for (let i = 0; i < n; i++) {
        cum[i + 1] = cum[i] + cardPoints[i];
    }
    let ans = 0;
    for (let i = 0; i <= k; i++) {
        ans = Math.max(ans, cum[i] + cum[n] - cum[n - k + i]);
    }
    return ans;
};

// Accepted --- 76ms 45.4MB
const maxScore_nhho = (cardPoints, k) => {
    let n = cardPoints.length;
    let v = createArrayWithLength(n + 1);
    for (let i = 0; i < n; i++) {
        v[i + 1] = v[i] + cardPoints[i];
    }
    let ans = 0;
    for (let i = 0; i <= k; i++) {
        ans = Math.max(ans, v[k - i] + v[v.length - 1] - v[n - i]);
    }
    return ans;
};

// Accepted --- 560ms 87.8MB
const maxScore_newman1 = (cardPoints, k) => {
    let a = createArrayWithLength(200010);
    let s = createArrayWithLength(200010);
    let n = cardPoints.length;
    let i, p = 0;
    let res = 0;
    for (i = n - 1; i >= 0; --i) {
        a[++p] = cardPoints[i];
    }
    for (i = n - 1; i >= 0; --i) {
        a[++p] = cardPoints[i];
    }
    s[0] = 0;
    for (i = 1; i <= n + n; ++i) {
        s[i] = s[i - 1] + a[i];
    }
    for (i = n; i <= n + k; ++i) {
        if (s[i] - s[i - k] > res) {
            res = s[i] - s[i - k];
        }
    }
    return res;
};

// Accepted --- 64ms 42.8MB (best)
const maxScore_kmjp = (cardPoints, k) => {
    let ma = 0;
    let i, j;
    let cur = 0;
    for (i = 0; i < k; i++) {
        cur += cardPoints[i];
        ma = cur;
    }
    for (i = 0, j = k - 1; i < k; i++, j--) {
        cur -= cardPoints[j];
        cur += cardPoints[cardPoints.length - 1 - i];
        ma = Math.max(ma, cur);
    }
    return ma;
};


// Wrong
const maxScore = (cardPoints, k) => {
    let result = [];
    let resultfromEnd = [];
    let score = 0;
    let scoreFromEnd = 0;
    for (let i = 0; i < k; i++) {
        result.push(cardPoints[i]);
    }

    for (let i = 0; i < k; i++) {
        resultfromEnd.push(cardPoints[cardPoints.length - i - 1]);
    }

    for (const i of result) {
        score += i;
    }

    for (const i of resultfromEnd) {
        scoreFromEnd += i;
    }

    // console.log(result);
    // console.log(resultfromEnd);

    // console.log(score);
    // console.log(scoreFromEnd);

    return Math.max(score, scoreFromEnd)
};

const main = () => {
    let cardPoints = [1, 2, 3, 4, 5, 6, 1],
        k = 3;
    let cardPoints2 = [2, 2, 2],
        k2 = 2
    let cardPoints3 = [9, 7, 7, 9, 7, 7, 9],
        k3 = 7;
    let cardPoints4 = [1, 1000, 1],
        k4 = 1
    let cardPoints5 = [1, 79, 80, 1, 1, 1, 200, 1],
        k5 = 3

    console.log(maxScore(cardPoints, k)); // 12
    console.log("");
    console.log(maxScore(cardPoints2, k2)); // 4
    console.log("");
    console.log(maxScore(cardPoints3, k3)); // 55
    console.log("");
    console.log(maxScore(cardPoints4, k4)); // 1
    console.log("");
    console.log(maxScore(cardPoints5, k5)); // 202

    let debug1_cardPoints = [100, 40, 17, 9, 73, 75]
    let debug1_k = 3;
    console.log("");
    console.log(maxScore(debug1_cardPoints, debug1_k)); // wrong

    /*******************************************/
    console.log("\n\n----------------");
    console.log(maxScore_uwi(cardPoints, k));
    console.log(maxScore_uwi(cardPoints2, k2));
    console.log(maxScore_uwi(cardPoints3, k3));
    console.log(maxScore_uwi(cardPoints4, k4));
    console.log(maxScore_uwi(cardPoints5, k5));
    console.log(maxScore_uwi(debug1_cardPoints, debug1_k));

    console.log("\n\n----------------");
    console.log(maxScore_nhho(cardPoints, k));
    console.log(maxScore_nhho(cardPoints2, k2));
    console.log(maxScore_nhho(cardPoints3, k3));
    console.log(maxScore_nhho(cardPoints4, k4));
    console.log(maxScore_nhho(cardPoints5, k5));
    console.log(maxScore_nhho(debug1_cardPoints, debug1_k));

    console.log("\n\n----------------");
    console.log(maxScore_newman1(cardPoints, k));
    console.log(maxScore_newman1(cardPoints2, k2));
    console.log(maxScore_newman1(cardPoints3, k3));
    console.log(maxScore_newman1(cardPoints4, k4));
    console.log(maxScore_newman1(cardPoints5, k5));
    console.log(maxScore_newman1(debug1_cardPoints, debug1_k));

    console.log("\n\n----------------");
    console.log(maxScore_kmjp(cardPoints, k));
    console.log(maxScore_kmjp(cardPoints2, k2));
    console.log(maxScore_kmjp(cardPoints3, k3));
    console.log(maxScore_kmjp(cardPoints4, k4));
    console.log(maxScore_kmjp(cardPoints5, k5));
    console.log(maxScore_kmjp(debug1_cardPoints, debug1_k));
};

main()