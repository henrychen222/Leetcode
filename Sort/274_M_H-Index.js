/**
 * 7.7 morning
 * https://leetcode.com/problems/h-index/
 */

// const hIndex = (citations) => {
//     if (citations.length == 0) return 0;
//     if (citations.length == 1) return citations[0];
//     citations.sort((a, b) => b - a);
//     console.log(citations);
//     let tmp = 0;
//     for (let i = 0; i < citations.length; i++) {
//         if (citations[i] < i + 1) {
//             tmp = i;
//             break;
//         }
//     }
//     return citations[tmp - 1];
// };

const hIndex = (citations) => {
    if (citations.length == 0) return 0;
    if (citations.length == 1 && citations[0] == 0) return citations[0];
    citations.sort((a, b) => b - a);
    console.log(citations);
    for (let i = 0; i < citations.length; i++) {
        let NPaper = citations.slice(0, i).length;
        let rest = citations.slice(i, citations.length).length;
        if ((i + 1) >= NPaper && rest <= (i + 1)) {
            return i + 1;
        }
    }
};

const main = () => {
    let citations = [3, 0, 6, 1, 5];
    let citations2 = [3, 0, 6, 1, 5, 4];
    let debug1 = [];
    let debug2 = [0];
    let debug3 = [1];
    let debug4 = [100];
    let debug5 = [0,0];
    console.log(hIndex(citations)); // 3
    console.log(hIndex(citations2));
    console.log(hIndex(debug1)); // 0
    console.log(hIndex(debug2)); // 0
    console.log(hIndex(debug3)); // 1
    console.log(hIndex(debug4)); // 1
    console.log(hIndex(debug5)); // 0
};

main()