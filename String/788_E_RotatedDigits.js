/**
 * 6.2 night
 * https://leetcode.com/submissions/detail/348331437/
 */

// Accepted --- 88ms 40.1MB 17.97%
const rotatedDigits = (N) => {
    let count = 0;
    for (let i = 1; i <= N; i++) {
        let itemOrigin = i.toString();
        // console.log('itemOrigin: ', itemOrigin);
        let item = itemOrigin;
        for (let j = 0; j < item.length; j++) {
            if (item[j] == '2') {
                item = item.slice(0, j) + '5' + item.slice(j + 1, item.length);
            } else if (item[j] == '5') {
                item = item.slice(0, j) + '2' + item.slice(j + 1, item.length);
            } else if (item[j] == '6') {
                item = item.slice(0, j) + '9' + item.slice(j + 1, item.length);
            } else if (item[j] == '9') {
                item = item.slice(0, j) + '6' + item.slice(j + 1, item.length);
            } else if (item[j] == '0' || item[j] == '1' || item[j] == '8') {
                // do nothings
            } else {
                item = "invalid";
            }
        }
        // console.log('item after rotate: ', item);
        if (item != 'invalid' && item != itemOrigin) {
            count++;
        }
    }
    return count;
};

const main = () => {
    let N = 10;
    console.log(rotatedDigits(N));

    let debug1 = 857;
    console.log(rotatedDigits(debug1));
};

main()