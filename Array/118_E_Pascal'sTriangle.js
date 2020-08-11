/**
 * 8.10 evening
 * https://leetcode.com/problems/pascals-triangle/
 */

// Accepted --- 72ms 36.7MB 61.43%
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

// Accepted --- 72ms 36.3MB 61.43%
const generate2 = (numRows) => {
    if (numRows == 0) {
        return [];
    } else if (numRows == 1) {
        return [
            [1]
        ];
    } else if (numRows == 2) {
        return [
            [1],
            [1, 1]
        ];
    } else {
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
    }
};

const main = () => {
    let numRows = 5;
    let numRows2 = 6;
    let debug1 = 0;
    let debug2 = 1;
    let debug3 = 2;
    console.log(generate(numRows));
    console.log(generate(numRows2));
    console.log(generate(debug1));
    console.log(generate(debug2));
    console.log(generate(debug3));

    console.log("");
    console.log(generate2(numRows));
    console.log(generate2(numRows2));
    console.log(generate2(debug1));
    console.log(generate2(debug2));
    console.log(generate2(debug3));
};

main()