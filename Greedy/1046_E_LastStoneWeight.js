/**
 * 5.1 night
 * https://leetcode.com/problems/last-stone-weight/
 */

/**
 * http://gaozhipeng.me/posts/1046-Last-Stone-Weight/
 * Accepted --- 56ms 34.9 MB 77.26%
 */
const lastStoneWeight2 = (stones) => {
    while (stones.length != 1) {
        stones.sort((a, b) => a - b);
        stones[stones.length - 2] = stones[stones.length - 1] - stones[stones.length - 2];
        stones = stones.slice(0, stones.length - 1);
    }
    // console.log(stones);
    return stones[0];
};

// wrong
const lastStoneWeight = (stones) => {
    return operate(stones);
};

const operate = (stones) => {
    // two pointer
    let j = stones.length - 1;
    for (let i = 0; i < stones.length; i++) {
        if (stones[i] !== stones[j]) {
            stones.splice(i, 1, Math.abs(stones[i] - stones[j])); //delete stones[i] and replace with diff
            stones.splice(j, 1); // delete stone[j]
        }
        if (stones[i] === stones[j]) {
            stones.splice(i, 1);
            stones.splice(j, 1);
        }
        j--;
    }

    if ((stones.length % 2 == 1) && (stones.length !== 1)) {
        operate(stones);
    }
    if ((stones.length % 2 == 0) && (stones.length !== 2)) {
        operate(stones);
    }

    if (stones.length == 2) {
        if (stone[0] == stone[1]) {
            return 0;
        } else {
            return Math.abs(stone[0] - stone[1]);
        }
    }
    return stones[0]; // length = 1
}

const main = () => {
    let stones = [2, 7, 4, 1, 8, 1];
    // console.log(lastStoneWeight(stones))

    let debug1 = [2, 2];
    // console.log(lastStoneWeight(debug1))

    /*************************** */
    console.log("")
    console.log(lastStoneWeight2(stones));
    console.log(lastStoneWeight2(debug1));
};

main()