/**
 * 5.14 evening night
 * https://leetcode.com/problems/reduce-array-size-to-the-half/
 */

/**
 * https://leetcode.jp/leetcode-1338-reduce-array-size-to-the-half-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF%E5%88%86%E6%9E%90/
 * Accepted --- 308ms 71.8 MB 12.66%
 */
const minSetSize_leetcode_jp = (arr) => {
    let count = [];
    fillArr(count, 100001);
    for (const i of arr) {
        count[i]++;
    }
    count.sort((a, b) => a - b);
    let deleteCount = 0;
    for (let i = 100000; i >= 0; i--) {
        deleteCount += count[i];
        if (deleteCount >= arr.length / 2) {
            return 100001 - i;
        }
    }
    return 0;
};

const fillArr = (arr, n) => {
    for (let i = 0; i < n; i++) {
        arr.push("");
    }
};

/**
 * https://www.acwing.com/solution/LeetCode/content/8110/
 * Correct, Time Limit
 */
const minSetSize_acwing = (arr) => {
    let data = [];
    let res = [];
    for (const i of removeDuplicate(arr)) {
        data.push({
            key: i,
            value: occurrence2(arr, i)
        });
    }
    // console.log(data);
    data.map(x => {
        res.push(x.value);
    });
    // console.log(res);
    res.sort((a, b) => a - b);
    // console.log(res);
    let tot = 0;
    for (let i = res.length - 1; i >= 0; i--) {
        tot += res[i];
        if (2 * tot >= arr.length) {
            return res.length - i;
        }
    }
    return res.length;
};

// wrong- self write
const minSetSize = (arr) => {
    let count = 0;
    let resultSet = [];
    let n = arr.length;
    let arrCopy = arr;
    arrCopy.sort((a, b) => b - a);
    // arrCopy.sort((a, b) => occurrence(b) - occurrence(a));
    let elements = removeDuplicate(arrCopy);
    if (elements.length == 1) {
        return 1;
    }
    for (const element of elements) {
        // console.log(arrCopy);
        arrCopy.splice(0, occurrence(arr, element)); // delete the most occurrence num
        if (arrCopy.length <= n / 2) {
            break;
        }
        count++;
        resultSet.push(element);
    }
    // console.log(resultSet);
    return count;
};

const occurrence = (arr, num) => {
    let count = 0;
    arr.reduce((acc, currentValue) => {
        if (num == currentValue) {
            count++;
        }
    });
    return count;
};

const occurrence2 = (arr, num) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (num == arr[i]) {
            count++;
        }
    }
    return count;
};

const removeDuplicate = (arr) => {
    return [...new Set(arr)];
};

const main = () => {
    let arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7];
    let arr2 = [7, 7, 7, 7, 7, 7];
    let arr3 = [1, 9];
    let arr4 = [1000, 1000, 3, 7];
    let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let debug1 = [9, 77, 63, 22, 92, 9, 14, 54, 8, 38, 18, 19, 38, 68, 58, 19];
    // console.log(minSetSize(arr)); 
    // console.log(minSetSize(arr2)); 
    // console.log(minSetSize(arr3)); 
    // console.log(minSetSize(arr4)); 
    // console.log(minSetSize(arr5)); 
    // console.log(minSetSize(debug1)); // 7, should be 5

    /******************************** */
    console.log("");
    console.log(minSetSize_acwing(arr)); // 2
    console.log(minSetSize_acwing(arr2)); // 1
    console.log(minSetSize_acwing(arr3)); // 1
    console.log(minSetSize_acwing(arr4)); // 1
    console.log(minSetSize_acwing(arr5)); // 5
    console.log(minSetSize_acwing(debug1)); // 5

    console.log("");
    console.log(minSetSize_leetcode_jp(arr));
    console.log(minSetSize_leetcode_jp(arr2));
    console.log(minSetSize_leetcode_jp(arr3));
    console.log(minSetSize_leetcode_jp(arr4));
    console.log(minSetSize_leetcode_jp(arr5));
    console.log(minSetSize_leetcode_jp(debug1));
};

main()