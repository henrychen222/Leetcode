/**
 * 09/18/21 evening
 * https://leetcode.com/contest/weekly-contest-259/problems/detect-squares/
 */

const pr = console.log;

// Accepted --- fuck no time  12 minutes more  12:12 AC
const mx = Math.max;
const mi = Math.min;
function DetectSquares() {
    let m = new Map();
    let lx = ly = Number.MIN_SAFE_INTEGER;
    let sx = sy = Number.MAX_SAFE_INTEGER;
    return { add, count }
    function add(p) {
        let ke = p[0] + " " + p[1];
        m.set(ke, m.get(ke) + 1 || 1);
        lx = mx(lx, p[0]);
        ly = mx(ly, p[1]);
        sx = mi(sx, p[0]);
        sy = mi(sy, p[1]);
        // pr(m);
    }

    function count(p) {
        if (m.size == 0) return 0;
        let [x, y] = p;
        let res = 0;
        for (let t = 1; x - t >= sx && y - t >= sy; t++) { // downLeft
            let left = (x - t) + " " + y;
            let down = x + " " + (y - t);
            let dia = (x - t) + " " + (y - t);
            // pr(left, down, dia)
            if (m.has(left) && m.has(down) && m.has(dia)) {
                res += m.get(left) * m.get(down) * m.get(dia);
            }
        }
        for (let t = 1; x + t <= lx && y + t <= ly; t++) { // topRight
            let right = (x + t) + " " + y;
            let up = x + " " + (y + t);
            let dia = (x + t) + " " + (y + t);
            if (m.has(right) && m.has(up) && m.has(dia)) {
                res += m.get(right) * m.get(up) * m.get(dia);
            }
        }
        for (let t = 1; x + t <= lx && y - t >= sy; t++) { // downRight
            let right = (x + t) + " " + y;
            let down = x + " " + (y - t);
            let dia = (x + t) + " " + (y - t);
            if (m.has(right) && m.has(down) && m.has(dia)) {
                res += m.get(right) * m.get(down) * m.get(dia);
            }
        }
        for (let t = 1; x - t >= sx && y + t <= ly; t++) { // topLeft
            let left = (x - t) + " " + y;
            let up = x + " " + (y + t);
            let dia = (x - t) + " " + (y + t);
            if (m.has(left) && m.has(up) && m.has(dia)) {
                res += m.get(left) * m.get(up) * m.get(dia);
            }
        }
        return res;
    }
}

const main = () => {
    let detectSquares = new DetectSquares();
    detectSquares.add([3, 10]);
    detectSquares.add([11, 2]);
    detectSquares.add([3, 2]);
    pr(detectSquares.count([11, 10]));  // 1
    pr(detectSquares.count([14, 8]));  // 0
    detectSquares.add([11, 2]);
    pr(detectSquares.count([11, 10])); // 2
}

main()