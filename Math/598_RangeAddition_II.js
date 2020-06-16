/**
 * 6.14 night
 * https://leetcode.com/problems/range-addition-ii/
 */

// Allocation failed --- javascript heap out of memory  when m = 40000 n = 40000
const maxCount = (m, n, ops) => {
    let M = initializationWithZeros([m, n]);
    console.log(M);
    for (let op = 0; op < ops.length; op++) {
        let a = ops[op][0];
        let b = ops[op][1];
        // console.log(a);
        // console.log(b);
        for (let i = 0; i < a; i++) {
            for (let j = 0; j < b; j++) {
                M[i][j]++;
            }
        }
    }
    console.log(M);
    let map = countFreq2DArray(M);
    let sortedMap = new Map([...map].sort((a, b) => b[0] - a[0]));
    console.log(sortedMap);
    return sortedMap.entries().next().value[1];
};

const countFreq2DArray = (arr) => {
    let map = new Map();
    let element = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            let target = arr[i][j];
            if (!element.includes(target)) {
                element.push(target);
                map.set(target, 1);
            } else {
                let v = map.get(target);
                v++;
                map.set(target, v);
            }
        }
    }
    return map;
};

const initializationWithZeros = (dimensions) => {
    let arr = [];
    for (var i = 0; i < dimensions[0]; ++i) {
        arr.push(dimensions.length == 1 ? 0 : initializationWithZeros(dimensions.slice(1)));
    }
    return arr;
}


const main = () => {
    let m = 3,
        n = 3
    operations = [
        [2, 2],
        [3, 3]
    ]
    console.log(maxCount(m, n, operations));
};

main()