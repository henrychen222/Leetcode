// 01/15/21 evening

const pr = console.log;

// Accepted --- 260ms
// reference: pku_erutan
const maxRunTime = (n, a) => {
    a.sort((x, y) => y - x);
    let sum = a.reduce((x, y) => x + y);
    for (const x of a) {
        if (sum >= n * x) {
            return parseInt(sum / n);
        } else {
            n--;
            sum -= x;
        }
    }
};

// Accepted --- 136ms
// reference: uwi
const maxRunTime1 = (n, a) => {
    let low = 0, high = 1e14;
    while (low <= high) {
        let mid = parseInt((low + high) / 2), sum = 0;
        for (const x of a) sum += Math.min(x, mid);
        if (sum >= n * mid) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high;
};

const main = () => {
    let n = 2, batteries = [3, 3, 3];
    let n2 = 2, batteries2 = [1, 1, 1, 1];
    pr(maxRunTime(n, batteries))
    pr(maxRunTime(n2, batteries2));
}

main()