/**
 * 5.24 night  5.27 night debug
 * https://leetcode.com/problems/largest-values-from-labels/
 */

/**
 * http://www.noteanddata.com/leetcode-1090-Largest-Values-From-Labels-java-solution-note.html
 * Accepted --- 108ms 49.5MB 48.57%
 * 
 * 假设只取一个， 那么一定是取value最大的.
 * 如果接着再取, 就有两种情况: 
 * (1) label到use_limit, 取下面一个最大的value 
 * (2)label没到use_limit, 取当前值.
 * 
 * 整个过程贪心, 按values从大到小排序， 然后遍历的时候检查是否符合约束条件
 */
const largestValsFromLabels_noteanddata = (values, labels, num_wanted, use_limit) => {
    let list = [];
    for (let i = 0; i < values.length; ++i) {
        let arr = [];
        arr.push(values[i]);
        arr.push(labels[i]);
        list.push(arr);
    }
    // console.log(list);
    list.sort((a, b) => b[0] - a[0]);
    // console.log(list);

    let map = new Map();
    let sum = 0;
    for (let i = 0; i < list.length && num_wanted > 0; ++i) {
        let value = list[i][0];
        let label = list[i][1];
        // console.log("value: ", value);
        // console.log("label: ", label);
        let labelCount = getOrDefault(map, label, 0);
        // console.log(labelCount);
        if (labelCount < use_limit) {
            sum += value;
            num_wanted--;
            map.set(label, labelCount + 1);
        }
    }
    return sum;
};

// https://stackoverflow.com/questions/43737014/how-does-java-util-maps-getordefault-work
const getOrDefault = (map, k, v) => {
    if (!map.has(k)) {
        return v; // key does not exist, return default value
    }
    return map.get(k); //key exist, return value
};

const main = () => {
    let values = [5, 4, 3, 2, 1],
        labels = [1, 1, 2, 2, 3],
        num_wanted = 3,
        use_limit = 1;
    let values2 = [5, 4, 3, 2, 1],
        labels2 = [1, 3, 3, 3, 2],
        num_wanted2 = 3,
        use_limit2 = 2;
    let values3 = [9, 8, 8, 7, 6],
        labels3 = [0, 0, 0, 1, 1],
        num_wanted3 = 3,
        use_limit3 = 1;
    let values4 = [9, 8, 8, 7, 6],
        labels4 = [0, 0, 0, 1, 1],
        num_wanted4 = 3,
        use_limit4 = 2;

    console.log(largestValsFromLabels_noteanddata(values, labels, num_wanted, use_limit));
    console.log(largestValsFromLabels_noteanddata(values2, labels2, num_wanted2, use_limit2));
    console.log(largestValsFromLabels_noteanddata(values3, labels3, num_wanted3, use_limit3));
    console.log(largestValsFromLabels_noteanddata(values4, labels4, num_wanted4, use_limit4));

};

main()