/**
 * 8.11 evening
 * https://leetcode.com/problems/pascals-triangle-ii/
 */

// Accepted --- 76ms 36.8MB 48.29%
const getRow = (rowIndex) => {
    let data = generate(rowIndex + 1);
    return data[data.length - 1];
};

const generate = (numRows) => {
    switch (numRows) {
        case 0:
            return [];
        case 1:
            return [
                [1]
            ];
        case 2:
            return [
                [1],
                [1, 1]
            ];
    }
    let data = [
        [1],
        [1, 1]
    ];
    while (true) {
        let end = data[data.length - 1];
        let tmp = [1];
        for (let i = 1; i < end.length; i++) {
            tmp.push(end[i - 1] + end[i]);
        }
        tmp.push(1);
        data.push(tmp);
        if (data.length == numRows) break;
    }
    return data;
};

const main = () => {
    let rowIndex = 3;
    console.log(getRow(rowIndex));
    console.log(getRow(0));
    console.log(getRow(1));
    console.log(getRow(2));
};

main()