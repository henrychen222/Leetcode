// 1.11 morning
// read: https://www.geeksforgeeks.org/union-find/
class DJSet {
    constructor(n) {
        this.upper = new Array(n).fill(-1);
    }

    find(x) {
        return this.upper[x] < 0 ? x : (this.upper[x] = this.find(this.upper[x]));
    }

    equiv(x, y) {
        return this.find(x) == this.find(y);
    }

    union(x, y) {
        x = this.find(x);
        y = this.find(y);
        if (x != y) {
            if (this.upper[x] < this.upper[y]) {
                let tmp = x;
                x = y;
                y = tmp;
            }
            this.upper[x] += this.upper[y];
            this.upper[y] = x;
        }
        return x == y;
    }

    count() {
        let cnt = 0;
        for (const u of this.upper) {
            if (u < 0) cnt++;
        }
        return cnt;
    }
}

// Accepted --- 316ms
const minimumHammingDistance = (source, target, allowedSwaps) => {
    let n = source.length;
    let ds = new DJSet(n);
    // console.log(ds)
    for (const as of allowedSwaps) {
        ds.union(as[0], as[1]);
    }
    // console.log(ds)
    let graphS = Array(n).fill(null);
    let graphT = Array(n).fill(null);
    for (let i = 0; i < n; i++) {
        let e = ds.find(i);
        if (graphS[e] == null) {
            graphS[e] = [];
            graphT[e] = [];
        }
        graphS[e].push(source[i]);
        graphT[e].push(target[i]);
    }
    // console.log(graphS);
    // console.log(graphT);
    let same = 0;
    for (let i = 0; i < n; i++) {
        if (graphS[i] != null) {
            let s = graphS[i];
            let t = graphT[i];
            s.sort((a, b) => a - b);
            t.sort((a, b) => a - b);
            // console.log(s);
            // console.log(t);
            let sLen = s.length;
            let tLen = t.length;
            let q = 0;
            for (let p = 0; p < sLen; p++) {
                while (q < tLen && t[q] < s[p]) {
                    q++;
                }
                if (q < tLen && t[q] == s[p]) {
                    q++;
                    same++;
                }
            }
            /* Accepted --- 344ms
            let p = q = 0;
            while (p < sLen) {
                while (q < tLen && t[q] < s[p]) {
                    q++;
                }
                if (q < tLen && t[q] == s[p]) {
                    q++;
                    same++;
                }
                p++;
            }
            */
        }
    }
    return n - same;
};

const main = () => {
    let source = [1, 2, 3, 4], target = [2, 1, 4, 5], allowedSwaps = [[0, 1], [2, 3]];
    let source2 = [1, 2, 3, 4], target2 = [1, 3, 2, 4], allowedSwaps2 = [];
    let source3 = [5, 1, 2, 4, 3], target3 = [1, 5, 4, 2, 3], allowedSwaps3 = [[0, 4], [4, 2], [1, 3], [1, 4]];
    console.log(minimumHammingDistance(source, target, allowedSwaps));
    // console.log(minimumHammingDistance(source2, target2, allowedSwaps2));
    // console.log(minimumHammingDistance(source3, target3, allowedSwaps3));
};

main()