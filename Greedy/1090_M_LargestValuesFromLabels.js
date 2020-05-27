/**
 * 5.24 night
 * https://leetcode.com/problems/largest-values-from-labels/
 */
const largestValsFromLabels = (values, labels, num_wanted, use_limit) => {
    let list = [];
    for (let i = 0; i < values.length; ++i) {
        let arr = [];
        arr.push(values[i]);
        arr.push(labels[i]);
        list.push(arr);
    }
    list.sort((a, b) => b[0] - a[0]);
    console.log(list)

    let map = new Map();
    let sum = 0;
    for (let i = 0; i < list.length && num_wanted > 0; ++i) {
        let item = [];
        item.push(list[i]);
        let value = item[0];
        let label = item[1];
        let labelCount = map.get(label);
        if (labelCount < use_limit) {
            sum += value;
            num_wanted--;
            map.set(label, labelCount + 1);
        }
    }
    return sum;
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

    console.log(largestValsFromLabels(values, labels, num_wanted, use_limit));
    console.log(largestValsFromLabels(values2, labels2, num_wanted2, use_limit2));
    console.log(largestValsFromLabels(values3, labels3, num_wanted3, use_limit3));
    console.log(largestValsFromLabels(values4, labels4, num_wanted4, use_limit4));

};

main()